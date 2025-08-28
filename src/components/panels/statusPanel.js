import { useGameContext } from "@/context/gameContext";

const StatusPanel = () => {
    const { status } = useGameContext()

    return ( <div className="h-full w-full">
        <div>Hunger: {status.hunger}</div>
        <div>Oxygen: {status.oxygen}</div>
        <div>Heat: {status.heat}</div>
    </div> );
}
 
export default StatusPanel;