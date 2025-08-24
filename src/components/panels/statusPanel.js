import { useGameContext } from "@/context/gameContext";

const StatusPanel = () => {
    const { status } = useGameContext()

    return ( <div className="h-4/5 w-full bg-amber-300">
        <div>Hunger: {status.hunger}</div>
        <div>Oxygen: {status.oxygen}</div>
        <div>Heat: {status.heat}</div>
    </div> );
}
 
export default StatusPanel;