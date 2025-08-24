import { useGameContext } from "@/context/gameContext";

const EventLogPanel = () => {
    const { eventLog } = useGameContext()

    return ( <div className="h-full w-full bg-foreground1">
        {eventLog.map((msg, i) => 
            <div key={i}>{msg}</div>
        )}
    </div> );
}
 
export default EventLogPanel;