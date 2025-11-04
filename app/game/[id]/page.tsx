import { games } from "@/config/games"
import GamePageClient from "./game-page"
import { notFound } from "next/navigation"

interface GamePageProps {
  params: Promise<{
    id: string
  }>
}

export default async function GamePage({ params }: GamePageProps) {
  const { id } = await params
  const game = games.find((g) => g.id === id)

  if (!game) {
    notFound()
  }

  return <GamePageClient game={game} />
}

export async function generateStaticParams() {
  return games.map((game) => ({
    id: game.id,
  }))
}
