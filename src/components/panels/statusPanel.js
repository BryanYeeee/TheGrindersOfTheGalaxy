import { useGameContext } from "@/context/gameContext";

const StatusPanel = () => {
    const { status } = useGameContext()

    return ( <div className="h-full p-8">
        <div>Hunger: {status.hunger}</div>
        <div>Oxygen: {status.oxygen}</div>
        <div>Heat: {status.heat}</div>
    </div> );
}
 
export default StatusPanel;