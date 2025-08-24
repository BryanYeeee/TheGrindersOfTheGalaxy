import { useGameContext } from "@/context/gameContext";

const EventLogPanel = () => {
    const { eventLog } = useGameContext()

    return ( <div className="h-4/5 w-full bg-amber-300">
        {eventLog.map((msg, i) => 
            <div key={i}>{msg}</div>
        )}
    </div> );
}
 
export default EventLogPanel;