"use client"

import { useEffect, useRef } from "react"

export default function HandDrawnChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)

    // Clear canvas
    ctx.clearRect(0, 0, rect.width, rect.height)

    // Draw graph paper background
    drawGraphPaper(ctx, rect.width, rect.height)

    // Draw axes
    drawHandDrawnAxes(ctx, rect.width, rect.height)

    // Draw data
    const data = [
      { year: "2020", projects: 1, publications: 0 },
      { year: "2021", projects: 1, publications: 0 },
      { year: "2022", projects: 2, publications: 0 },
      { year: "2023", projects: 2, publications: 0 },
      { year: "2024", projects: 4, publications: 0 },
      { year: "2025", projects: 6, publications: 0 },
    ]

    // Draw lines
    drawHandDrawnLine(ctx, data, rect.width, rect.height, "projects", "#000000")
    drawHandDrawnLine(ctx, data, rect.width, rect.height, "publications", "#555555", true)

    // Draw legend
    drawHandDrawnLegend(ctx, rect.width, rect.height)
  }, [])

  // Draw graph paper background
  const drawGraphPaper = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    ctx.strokeStyle = "#cccccc"
    ctx.lineWidth = 0.5

    // Draw vertical lines
    for (let x = 0; x <= width; x += 20) {
      ctx.beginPath()
      ctx.moveTo(x, 0)
      ctx.lineTo(x, height)
      ctx.stroke()
    }

    // Draw horizontal lines
    for (let y = 0; y <= height; y += 20) {
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(width, y)
      ctx.stroke()
    }
  }

  // Draw hand-drawn axes
  const drawHandDrawnAxes = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const margin = { top: 30, right: 30, bottom: 50, left: 50 }
    const graphWidth = width - margin.left - margin.right
    const graphHeight = height - margin.top - margin.bottom

    ctx.strokeStyle = "#000000"
    ctx.lineWidth = 2
    ctx.lineCap = "round"
    ctx.lineJoin = "round"

    // Draw x-axis with slight wobble
    ctx.beginPath()
    ctx.moveTo(margin.left - 5, height - margin.bottom)

    // Add slight irregularities to the line
    let currentX = margin.left
    while (currentX < width - margin.right) {
      const wobble = Math.random() * 2 - 1 // -1 to 1
      currentX += 10
      ctx.lineTo(currentX, height - margin.bottom + wobble)
    }

    ctx.stroke()

    // Draw y-axis with slight wobble
    ctx.beginPath()
    ctx.moveTo(margin.left, height - margin.bottom + 5)

    // Add slight irregularities to the line
    let currentY = height - margin.bottom
    while (currentY > margin.top) {
      const wobble = Math.random() * 2 - 1 // -1 to 1
      currentY -= 10
      ctx.lineTo(margin.left + wobble, currentY)
    }

    ctx.stroke()

    // Draw x-axis labels (years)
    ctx.font = "12px serif"
    ctx.textAlign = "center"
    ctx.fillStyle = "#000000"

    const years = ["2018", "2019", "2020", "2021", "2022", "2023"]
    const xStep = graphWidth / (years.length - 1)

    years.forEach((year, i) => {
      const x = margin.left + i * xStep
      const y = height - margin.bottom + 20

      // Draw tick mark
      ctx.beginPath()
      ctx.moveTo(x, height - margin.bottom)
      ctx.lineTo(x, height - margin.bottom + 5)
      ctx.stroke()

      // Draw year label with slight rotation for hand-drawn effect
      ctx.save()
      ctx.translate(x, y)
      const rotation = ((Math.random() * 6 - 3) * Math.PI) / 180 // -3 to 3 degrees
      ctx.rotate(rotation)
      ctx.fillText(year, 0, 0)
      ctx.restore()
    })

    // Draw y-axis labels
    ctx.textAlign = "right"
    ctx.textBaseline = "middle"

    const maxValue = 60
    const yStep = graphHeight / 6

    for (let i = 0; i <= 6; i++) {
      const value = i * 10
      const x = margin.left - 10
      const y = height - margin.bottom - i * yStep

      // Draw tick mark
      ctx.beginPath()
      ctx.moveTo(margin.left, y)
      ctx.lineTo(margin.left - 5, y)
      ctx.stroke()

      // Draw value label with slight variation for hand-drawn effect
      ctx.save()
      ctx.translate(x, y)
      const rotation = ((Math.random() * 4 - 2) * Math.PI) / 180 // -2 to 2 degrees
      ctx.rotate(rotation)
      ctx.fillText(value.toString(), 0, 0)
      ctx.restore()
    }

    // Add axis titles
    ctx.save()
    ctx.font = "14px serif"
    ctx.textAlign = "center"

    // X-axis title
    ctx.fillText("Year", width / 2, height - 10)

    // Y-axis title (rotated)
    ctx.translate(15, height / 2)
    ctx.rotate(-Math.PI / 2)
    ctx.fillText("Count", 0, 0)
    ctx.restore()
  }

  // Draw hand-drawn line
  const drawHandDrawnLine = (
    ctx: CanvasRenderingContext2D,
    data: any[],
    width: number,
    height: number,
    key: string,
    color: string,
    dashed = false,
  ) => {
    const margin = { top: 30, right: 30, bottom: 50, left: 50 }
    const graphWidth = width - margin.left - margin.right
    const graphHeight = height - margin.top - margin.bottom

    const maxValue = 60 // Maximum value on y-axis
    const xStep = graphWidth / (data.length - 1)

    ctx.strokeStyle = color
    ctx.lineWidth = 2
    ctx.lineCap = "round"
    ctx.lineJoin = "round"

    if (dashed) {
      ctx.setLineDash([5, 5])
    } else {
      ctx.setLineDash([])
    }

    ctx.beginPath()

    data.forEach((item, i) => {
      const x = margin.left + i * xStep
      const yValue = item[key]
      const y = height - margin.bottom - (yValue / maxValue) * graphHeight

      // Add slight irregularities for hand-drawn effect
      const wobbleX = x + (Math.random() * 4 - 2) // -2 to 2
      const wobbleY = y + (Math.random() * 4 - 2) // -2 to 2

      if (i === 0) {
        ctx.moveTo(wobbleX, wobbleY)
      } else {
        // Add a slight curve for hand-drawn effect
        const prevX = margin.left + (i - 1) * xStep
        const prevYValue = data[i - 1][key]
        const prevY = height - margin.bottom - (prevYValue / maxValue) * graphHeight

        const cpX1 = prevX + xStep / 3
        const cpY1 = prevY + (wobbleY - prevY) / 3 + (Math.random() * 6 - 3)

        const cpX2 = prevX + (2 * xStep) / 3
        const cpY2 = prevY + (2 * (wobbleY - prevY)) / 3 + (Math.random() * 6 - 3)

        ctx.bezierCurveTo(cpX1, cpY1, cpX2, cpY2, wobbleX, wobbleY)
      }
    })

    ctx.stroke()

    // Draw data points
    data.forEach((item, i) => {
      const x = margin.left + i * xStep
      const yValue = item[key]
      const y = height - margin.bottom - (yValue / maxValue) * graphHeight

      ctx.fillStyle = color
      ctx.beginPath()

      if (dashed) {
        // Draw X for publications
        const size = 5
        ctx.moveTo(x - size, y - size)
        ctx.lineTo(x + size, y + size)
        ctx.moveTo(x + size, y - size)
        ctx.lineTo(x - size, y + size)
      } else {
        // Draw circle for projects
        ctx.arc(x, y, 5, 0, Math.PI * 2)
      }

      ctx.fill()
      ctx.stroke()

      // Add data labels with slight rotation
      ctx.save()
      ctx.font = "10px serif"
      ctx.textAlign = "center"
      ctx.translate(x, y - 10)
      const rotation = ((Math.random() * 6 - 3) * Math.PI) / 180 // -3 to 3 degrees
      ctx.rotate(rotation)
      ctx.fillText(yValue.toString(), 0, 0)
      ctx.restore()
    })

    ctx.setLineDash([])
  }

  // Draw hand-drawn legend
  const drawHandDrawnLegend = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const legendX = width - 150
    const legendY = 50

    // Draw legend box
    ctx.strokeStyle = "#000000"
    ctx.lineWidth = 1
    ctx.fillStyle = "#ffffff"

    // Draw slightly irregular rectangle
    ctx.beginPath()
    ctx.moveTo(legendX, legendY)
    ctx.lineTo(legendX + 120 + (Math.random() * 4 - 2), legendY + (Math.random() * 4 - 2))
    ctx.lineTo(legendX + 120 + (Math.random() * 4 - 2), legendY + 60 + (Math.random() * 4 - 2))
    ctx.lineTo(legendX + (Math.random() * 4 - 2), legendY + 60 + (Math.random() * 4 - 2))
    ctx.closePath()
    ctx.fill()
    ctx.stroke()

    // Draw legend items
    ctx.font = "12px serif"
    ctx.textAlign = "left"
    ctx.fillStyle = "#000000"

    // Projects (solid line with circle)
    ctx.beginPath()
    ctx.setLineDash([])
    ctx.strokeStyle = "#000000"
    ctx.moveTo(legendX + 10, legendY + 20)
    ctx.lineTo(legendX + 40, legendY + 20)
    ctx.stroke()

    ctx.beginPath()
    ctx.arc(legendX + 25, legendY + 20, 5, 0, Math.PI * 2)
    ctx.fill()
    ctx.stroke()

    ctx.fillText("ML Projects", legendX + 50, legendY + 24)

    // Publications (dashed line with X)
    ctx.beginPath()
    ctx.setLineDash([5, 5])
    ctx.strokeStyle = "#555555"
    ctx.moveTo(legendX + 10, legendY + 45)
    ctx.lineTo(legendX + 40, legendY + 45)
    ctx.stroke()

    ctx.fillStyle = "#555555"
    const x = legendX + 25
    const y = legendY + 45
    const size = 5

    ctx.beginPath()
    ctx.moveTo(x - size, y - size)
    ctx.lineTo(x + size, y + size)
    ctx.moveTo(x + size, y - size)
    ctx.lineTo(x - size, y + size)
    ctx.stroke()

    ctx.fillStyle = "#000000"
    ctx.fillText("Publications", legendX + 50, legendY + 49)

    ctx.setLineDash([])
  }

  return (
    <div className="relative border-2 border-black bg-[#f9f7f1] p-4">
      <canvas
        ref={canvasRef}
        className="w-full h-[300px]"
        style={{
          filter: "url(#handdrawn)",
          maxWidth: "100%",
        }}
      />
      <svg width="0" height="0">
        <filter id="handdrawn">
          <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
        </filter>
      </svg>
      <div className="mt-4 text-center text-sm italic">
        Figure 1: Growth trajectory of research output and machine learning projects over time
      </div>
    </div>
  )
}

