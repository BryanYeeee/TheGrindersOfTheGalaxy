const RadialBar = ({
  percent,
  segments = 10,
  size = 100,
  strokeWidth = 12,
  color = '#00C853',
  bgColor = '#E0E0E080'
}) => {
  let radius = (size - strokeWidth) / 2
  let circumference = Math.round(2 * Math.PI * radius * 10000) / 10000
  let gapLength = 4 // small gap between segments
  let segmentLength = Math.round((circumference / segments) * 10000) / 10000 
  let filledSegments = Math.round(percent * segments)
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <g>
        {Array.from({ length: segments }).map((_, i) => {
          let offset = i * segmentLength
          return (
            <circle
              key={i}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill='transparent'
              stroke={i < filledSegments ? color : bgColor}
              strokeWidth={strokeWidth}
              strokeDasharray={`${segmentLength - gapLength} ${
                circumference - segmentLength + gapLength
              }`}
              strokeDashoffset={0.25 * circumference - offset}
            />
          )
        })}
      </g>
      <text
        x='50%'
        y='50%'
        dominantBaseline='middle'
        textAnchor='middle'
        fontSize={size * 0.3}
        fontWeight='bold'
        fill={color}
      >
        {Math.round(percent*100)}%
      </text>
    </svg>
  )
}

export default RadialBar
