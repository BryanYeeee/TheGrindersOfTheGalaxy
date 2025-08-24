'use client'
import Main from "@/components/screens/main"
import { GameProvider } from "@/context/gameContext"

const Game = () => {
  const currentScreen = <Main />
  return (
    <GameProvider>
    {currentScreen}
    </GameProvider>
  )
}

export default Game
