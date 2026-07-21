import * as opentype from 'opentype.js'

const fontCache = new Map<string, opentype.Font>()

/**
 * Loads a font file (.ttf or .otf) using opentype.js
 * Fetches the file via URL and parses the buffer.
 * Results are cached to avoid reloading the same font.
 */
export async function loadFont(fontUrl: string): Promise<opentype.Font> {
  if (fontCache.has(fontUrl)) {
    return fontCache.get(fontUrl)!
  }

  const response = await fetch(fontUrl)
  if (!response.ok) {
    throw new Error(`Failed to fetch font: ${response.status} ${response.statusText}`)
  }

  const arrayBuffer = await response.arrayBuffer()
  const buffer = new Uint8Array(arrayBuffer)

  const font = opentype.parse(buffer)
  fontCache.set(fontUrl, font)
  return font
}