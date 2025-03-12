import React from "react"

interface ChartProps extends React.SVGAttributes<SVGSVGElement> {}

export const Chart = React.forwardRef<SVGSVGElement, ChartProps>(({ className, children, ...props }, ref) => {
  return (
    <svg
      className={`w-full ${className}`}
      ref={ref}
      viewBox="0 0 500 300"
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      {children}
    </svg>
  )
})
Chart.displayName = "Chart"

interface ChartContainerProps {
  xAxis?: any[]
  yAxis?: any[]
  children: React.ReactNode
}

export const ChartContainer = React.forwardRef<SVGGElement, ChartContainerProps>(({ xAxis, yAxis, children }, ref) => {
  const data = xAxis?.[0]?.data || []
  const maxValue = yAxis?.[0]?.max || 100
  const tickNumber = yAxis?.[0]?.tickNumber || 5

  // Calculate positions
  const chartWidth = 400
  const chartHeight = 250
  const padding = { top: 20, right: 20, bottom: 30, left: 60 }
  const barWidth = (chartWidth - padding.left - padding.right) / (data.length * 2)

  return (
    <g ref={ref} transform={`translate(${padding.left}, ${padding.top})`}>
      {/* Y-axis */}
      <line x1="0" y1="0" x2="0" y2={chartHeight} stroke="#333333" strokeWidth="1" strokeDasharray="4,4" />

      {/* Y-axis ticks */}
      {Array.from({ length: tickNumber + 1 }).map((_, i) => {
        const y = chartHeight - i * (chartHeight / tickNumber)
        const value = i * (maxValue / tickNumber)
        return (
          <g key={`y-tick-${i}`}>
            <line x1="-5" y1={y} x2="0" y2={y} stroke="#333333" strokeWidth="1" />
            <text x="-10" y={y} textAnchor="end" dominantBaseline="middle" fontSize="12" fill="#333333">
              {`${value}%`}
            </text>
            <line
              x1="0"
              y1={y}
              x2={chartWidth}
              y2={y}
              stroke="#333333"
              strokeWidth="0.5"
              strokeDasharray="2,4"
              opacity="0.3"
            />
          </g>
        )
      })}

      {/* X-axis */}
      <line
        x1="0"
        y1={chartHeight}
        x2={chartWidth}
        y2={chartHeight}
        stroke="#333333"
        strokeWidth="1"
        strokeDasharray="4,4"
      />

      {/* X-axis labels */}
      {data.map((label, i) => {
        const x = i * (chartWidth / data.length) + chartWidth / data.length / 2
        return (
          <text
            key={`x-label-${i}`}
            x={x}
            y={chartHeight + 20}
            textAnchor="middle"
            fontSize="12"
            fill="#333333"
            transform={`rotate(15, ${x}, ${chartHeight + 20})`}
          >
            {label}
          </text>
        )
      })}

      {/* Chart content */}
      <g transform={`translate(${barWidth}, 0)`}>{children}</g>
    </g>
  )
})
ChartContainer.displayName = "ChartContainer"

interface ChartBarProps {
  data: number[]
  color: string
  index?: number
  style?: React.CSSProperties
}

export const ChartBar = React.forwardRef<SVGRectElement, ChartBarProps>(({ data, color, index = 0, style }, ref) => {
  const value = data[0] || 0
  const chartHeight = 250
  const chartWidth = 400
  const barWidth = 30
  const barSpacing = chartWidth / 6

  return (
    <g transform={`translate(${index * barSpacing}, 0)`}>
      <rect
        ref={ref}
        x="0"
        y={chartHeight - (value / 100) * chartHeight}
        width={barWidth}
        height={(value / 100) * chartHeight}
        fill={color}
        stroke="#333333"
        strokeWidth="1"
        strokeDasharray="3,2"
        style={style}
      />
      <text
        x={barWidth / 2}
        y={chartHeight - (value / 100) * chartHeight - 10}
        textAnchor="middle"
        fontSize="12"
        fontWeight="bold"
        fill="#333333"
      >
        {value}%
      </text>
    </g>
  )
})
ChartBar.displayName = "ChartBar"

interface ChartGroupProps extends React.SVGAttributes<SVGGElement> {}

export const ChartGroup = React.forwardRef<SVGGElement, ChartGroupProps>(({ className, children, ...props }, ref) => {
  return (
    <g className={className} ref={ref} {...props}>
      {children}
    </g>
  )
})
ChartGroup.displayName = "ChartGroup"

