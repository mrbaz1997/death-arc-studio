export interface Game {
  title: string
  description: string
  image: string
  status: "Released" | "In Development" | "Coming Soon"
}

export const games: Game[] = [
  {
    title: "Mystic Realms",
    description: "An epic fantasy RPG with stunning visuals and immersive storytelling.",
    image: "/placeholder-bs772.png",
    status: "Released",
  },
  {
    title: "Cyber Runner",
    description: "Fast-paced cyberpunk action game set in a dystopian future.",
    image: "/placeholder-i5omk.png",
    status: "In Development",
  },
  {
    title: "Puzzle Nexus",
    description: "Mind-bending puzzle game that challenges your problem-solving skills.",
    image: "/colorful-puzzle-game-interface.jpg",
    status: "Released",
  },
  {
    title: "Space Odyssey",
    description: "Explore the cosmos in this ambitious space exploration adventure.",
    image: "/placeholder-xp1e4.png",
    status: "Coming Soon",
  },
]
