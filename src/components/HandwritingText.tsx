import React, { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { loadFont } from '../utils/fontLoader'
import {
  textToHandwritingPaths,
  HandwritingPath,
} from '../utils/pathProcessor'

export interface HandwritingTextProps {
  text: string
  fontUrl: string
  fontSize?: number
  color?: string
  duration?: number
  delay?: number
  strokeWidth?: number
  fillColor?: string
  linecap?: 'round' | 'butt' | 'square'
  linejoin?: 'round' | 'miter' | 'bevel'
  keepStroke?: boolean
  className?: string
}

interface TextDimensions {
  width: number
  height: number
}

function calculateDimensions(paths: HandwritingPath[]): TextDimensions {
  let minX = Infinity
  let minY = Infinity
  let maxX = -Infinity
  let maxY = -Infinity

  for (const path of paths) {
    const parts = path.pathData.match(/[MLCQ]\s*[\d.\s,-]+/g)
    if (!parts) continue

    for (const part of parts) {
      const coords = part.split(/[\s,]+/).filter(Boolean)
      const type = coords[0]
      let xIdx = -1
      let yIdx = -1

      if (type === 'M' || type === 'L') {
        xIdx = 1
        yIdx = 2
      } else if (type === 'Q') {
        xIdx = 3
        yIdx = 4
      } else if (type === 'C') {
        xIdx = 5
        yIdx = 6
      }

      if (xIdx >= 0 && coords[xIdx] !== undefined) {
        const x = parseFloat(coords[xIdx])
        const y = parseFloat(coords[yIdx])
        if (!isNaN(x)) {
          minX = Math.min(minX, x)
          maxX = Math.max(maxX, x)
        }
        if (!isNaN(y)) {
          minY = Math.min(minY, y)
          maxY = Math.max(maxY, y)
        }
      }
    }
  }

  if (!isFinite(minX)) return { width: 100, height: 50 }
  
  const padding = 10
  return {
    width: maxX - minX + padding * 2,
    height: maxY - minY + padding * 2,
  }
}

const HandwritingText: React.FC<HandwritingTextProps> = ({
  text,
  fontUrl,
  fontSize = 100,
  color = '#1E293B',
  duration = 3,
  delay = 0,
  strokeWidth = 2,
  fillColor,
  linecap = 'round',
  linejoin = 'round',
  keepStroke = false,
  className = '',
}) => {
  const svgRef = useRef<SVGSVGElement>(null)
  const pathRefs = useRef<(SVGPathElement | null)[]>([])
  const timelineRef = useRef<gsap.core.Timeline | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [renderPaths, setRenderPaths] = useState<HandwritingPath[]>([])
  const [renderDims, setDims] = useState<TextDimensions>({
    width: 100,
    height: 50,
  })

  // Load font and process text
  useEffect(() => {
    let cancelled = false

    async function init() {
      try {
        setLoading(true)
        setError(null)

        const font = await loadFont(fontUrl)
        if (cancelled) return

        const processed = textToHandwritingPaths(text, font, fontSize)
        const dims = calculateDimensions(processed)

        if (!cancelled) {
          setRenderPaths(processed)
          setDims(dims)
          setLoading(false)
        }
      } catch (err) {
        if (!cancelled) {
          setError(
            `Failed to load font: ${err instanceof Error ? err.message : 'Unknown error'}`
          )
          setLoading(false)
        }
      }
    }

    init()

    return () => {
      cancelled = true
    }
  }, [text, fontUrl, fontSize])

  // GSAP animation
  useEffect(() => {
    if (loading || error || renderPaths.length === 0) return

    const svg = svgRef.current
    if (!svg) return

    // Clear any existing animation
    if (timelineRef.current) {
      timelineRef.current.kill()
    }

    // Reset path styles and get actual lengths from SVG
    const lengths: number[] = []
    pathRefs.current.forEach((pathEl, i) => {
      if (pathEl) {
        const actualLength = pathEl.getTotalLength()
        lengths[i] = actualLength
        gsap.set(pathEl, {
          strokeDasharray: actualLength,
          strokeDashoffset: actualLength,
          opacity: 1,
          fill: 'none',
          stroke: color,
        })
      }
    })

    if (lengths.length === 0) return

    const totalLength = lengths.reduce((sum, l) => sum + l, 0)
    if (totalLength === 0) return

    // Create timeline
    const tl = gsap.timeline({ delay })

    // Animate each path sequentially with overlap
    let currentEndTime = 0

    renderPaths.forEach((_path, index) => {
      const pathEl = pathRefs.current[index]
      if (!pathEl) return

      const pathLen = lengths[index]

      // Proportional duration based on actual SVG length
      const pathDuration = Math.max(
        (pathLen / totalLength) * duration,
        0.05
      )

      // Overlap: each path starts when previous is ~70% done
      const startTime = index === 0 ? 0 : currentEndTime * 0.7

      tl.to(
        pathEl,
        {
          strokeDashoffset: 0,
          duration: pathDuration,
          ease: 'power3.inOut',
        },
        startTime
      )

      currentEndTime = startTime + pathDuration
    })

    // After all strokes complete, fill the paths
    // The fill happens at the end of the last stroke + a small gap
    const fill = fillColor ?? color
    tl.to(
      pathRefs.current.filter(Boolean),
      {
        fill: fill,
        stroke: keepStroke ? color : 'none',
        duration: 0.15,
        ease: 'power2.out',
      },
      '+=0.05'
    )

    timelineRef.current = tl

    return () => {
      tl.kill()
      timelineRef.current = null
    }
  }, [
    loading,
    error,
    renderPaths,
    color,
    duration,
    delay,
    fillColor,
    keepStroke,
  ])

  // Sync path refs count
  useEffect(() => {
    pathRefs.current = pathRefs.current.slice(0, renderPaths.length)
  }, [renderPaths.length])

  // Loading state
  if (loading) {
    return (
      <div
        className={`flex items-center justify-center ${className}`}
        style={{ minHeight: '60px' }}
        aria-label="Loading handwriting animation"
      >
        <div className="animate-pulse w-full h-8 bg-gray-200 rounded" />
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div className={`text-red-500 text-sm ${className}`} role="alert">
        {error}
      </div>
    )
  }

  // Empty state
  if (renderPaths.length === 0) {
    return null
  }

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${renderDims.width} ${renderDims.height}`}
      preserveAspectRatio="xMidYMid meet"
      className={`w-full h-auto overflow-visible ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={`Handwriting animation: ${text}`}
    >
      {renderPaths.map((path, index) => (
        <path
          key={index}
          ref={(el) => {
            pathRefs.current[index] = el
          }}
          d={path.pathData}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap={linecap}
          strokeLinejoin={linejoin}
          strokeDasharray={0}
          strokeDashoffset={0}
          opacity={0}
        />
      ))}
    </svg>
  )
}

export default HandwritingText