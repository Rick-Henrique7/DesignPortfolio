import * as opentype from 'opentype.js'

export interface HandwritingPath {
  pathData: string
  length: number
}

interface PathCommand {
  type: string
  x?: number
  y?: number
  x1?: number
  y1?: number
  x2?: number
  y2?: number
}

/**
 * Converts opentype.js Path commands to SVG path data string
 */
function commandsToPathData(commands: PathCommand[]): string {
  return commands
    .map((cmd) => {
      switch (cmd.type) {
        case 'M':
          return `M ${cmd.x} ${cmd.y}`
        case 'L':
          return `L ${cmd.x} ${cmd.y}`
        case 'C':
          return `C ${cmd.x1} ${cmd.y1} ${cmd.x2} ${cmd.y2} ${cmd.x} ${cmd.y}`
        case 'Q':
          return `Q ${cmd.x1} ${cmd.y1} ${cmd.x} ${cmd.y}`
        case 'Z':
          return ''
        default:
          return ''
      }
    })
    .filter(Boolean)
    .join(' ')
}

/**
 * Estimates the length of an SVG path by sampling points along it.
 * This is more accurate than getTotalLength() for complex paths.
 */
function estimatePathLength(commands: PathCommand[]): number {
  let totalLength = 0
  let currentX = 0
  let currentY = 0
  let firstX = 0
  let firstY = 0
  let isFirst = true

  for (const cmd of commands) {
    if (cmd.type === 'M') {
      if (!isFirst) {
        // Add distance from last point to this move
        const dx = cmd.x! - currentX
        const dy = cmd.y! - currentY
        totalLength += Math.sqrt(dx * dx + dy * dy)
      } else {
        firstX = cmd.x!
        firstY = cmd.y!
        isFirst = false
      }
      currentX = cmd.x!
      currentY = cmd.y!
    } else if (cmd.type === 'L') {
      const dx = cmd.x! - currentX
      const dy = cmd.y! - currentY
      totalLength += Math.sqrt(dx * dx + dy * dy)
      currentX = cmd.x!
      currentY = cmd.y!
    } else if (cmd.type === 'C') {
      // Approximate cubic bezier length using 10 segments
      const steps = 10
      for (let i = 1; i <= steps; i++) {
        const t = i / steps
        const mt = 1 - t
        const x =
          mt * mt * mt * currentX +
          3 * mt * mt * t * cmd.x1! +
          3 * mt * t * t * cmd.x2! +
          t * t * t * cmd.x!
        const y =
          mt * mt * mt * currentY +
          3 * mt * mt * t * cmd.y1! +
          3 * mt * t * t * cmd.y2! +
          t * t * t * cmd.y!
        if (i > 0) {
          const dx = x - currentX
          const dy = y - currentY
          totalLength += Math.sqrt(dx * dx + dy * dy)
        }
        currentX = x
        currentY = y
      }
    } else if (cmd.type === 'Q') {
      // Approximate quadratic bezier length using 10 segments
      const steps = 10
      for (let i = 1; i <= steps; i++) {
        const t = i / steps
        const mt = 1 - t
        const x =
          mt * mt * currentX + 2 * mt * t * cmd.x1! + t * t * cmd.x!
        const y =
          mt * mt * currentY + 2 * mt * t * cmd.y1! + t * t * cmd.y!
        if (i > 0) {
          const dx = x - currentX
          const dy = y - currentY
          totalLength += Math.sqrt(dx * dx + dy * dy)
        }
        currentX = x
        currentY = y
      }
    }
  }

  return totalLength
}

/**
 * Extracts individual sub-paths from a glyph's path commands.
 * Each sub-path starts with a moveTo command and continues until
 * the next moveTo or the end. closePath commands are removed to
 * create open strokes suitable for handwriting animation.
 */
function extractSubPaths(commands: PathCommand[]): PathCommand[][] {
  const subPaths: PathCommand[][] = []
  let currentSubPath: PathCommand[] = []

  for (const cmd of commands) {
    if (cmd.type === 'M') {
      if (currentSubPath.length > 0) {
        subPaths.push(currentSubPath)
      }
      currentSubPath = [cmd]
    } else if (cmd.type === 'Z') {
      // Skip closePath to keep strokes open
      continue
    } else {
      currentSubPath.push(cmd)
    }
  }

  if (currentSubPath.length > 0) {
    subPaths.push(currentSubPath)
  }

  return subPaths
}

/**
 * Converts text to an array of SVG path data strings suitable for
 * handwriting animation. Each path represents a continuous stroke
 * that can be animated using stroke-dasharray/stroke-dashoffset.
 *
 * @param text - The text to convert
 * @param font - The loaded opentype.js font
 * @param fontSize - The font size in units
 * @returns Array of path objects with SVG data and estimated length
 */
export function textToHandwritingPaths(
  text: string,
  font: opentype.Font,
  fontSize: number = 100
): HandwritingPath[] {
  const scale = fontSize / font.unitsPerEm
  const paths: HandwritingPath[] = []

  let cursorX = 0

  for (let i = 0; i < text.length; i++) {
    const char = text[i]
    const glyph = font.charToGlyph(char)

    if (!glyph) continue

    // Get the path for this glyph.
    // opentype.js returns y-up coordinates, but SVG uses y-down.
    // Flip Y axis: font Y-up → SVG Y-down.
    const glyphPath = glyph.getPath(0, 0, fontSize)

    // Use fontSize directly for cursor advancement (same unit as path coordinates)
    const advanceWidth = ((glyph.advanceWidth ?? 800) / font.unitsPerEm) * fontSize

    // opentype.js getPath already outputs coordinates in SVG-compatible format
    // where y increases downward, suitable for direct SVG rendering
    const rawCommands: PathCommand[] = glyphPath.commands.map((cmd: any) => ({
      type: cmd.type,
      x: cmd.x,
      y: cmd.y,
      x1: cmd.x1,
      y1: cmd.y1,
      x2: cmd.x2,
      y2: cmd.y2,
    }))

    // Translate to current cursor position
    const translatedCommands = rawCommands.map((cmd) => ({
      ...cmd,
      x: cmd.x !== undefined ? cmd.x + cursorX : undefined,
      y: cmd.y !== undefined ? cmd.y : undefined,
      x1: cmd.x1 !== undefined ? cmd.x1 + cursorX : undefined,
      y1: cmd.y1 !== undefined ? cmd.y1 : undefined,
      x2: cmd.x2 !== undefined ? cmd.x2 + cursorX : undefined,
      y2: cmd.y2 !== undefined ? cmd.y2 : undefined,
    }))

    // Extract sub-paths (individual strokes)
    const subPaths = extractSubPaths(translatedCommands)

    for (const subPath of subPaths) {
      if (subPath.length === 0) continue

      const pathData = commandsToPathData(subPath)
      const length = estimatePathLength(subPath)

      if (pathData && length > 0) {
        paths.push({ pathData, length })
      }
    }

    cursorX += advanceWidth
  }

  return paths
}