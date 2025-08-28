const Panel = ({ children, clip, bgCol }) => {
  const bgMap = {
    1: 'bg-foreground1',
    2: 'bg-foreground2'
  }
  return (
    <div className={`h-full border-1 glow-border clip-${clip} ${bgMap[bgCol]}`}>
      {children}
    </div>
  )
}
export default Panel
