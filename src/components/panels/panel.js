const Panel = ({ children, clip, bgCol }) => {
    return ( 
        <div className={`h-full border-1 glow-border clip-${clip} bg-foreground${bgCol}`}>
            {children}
        </div>
     );
}
 
export default Panel;