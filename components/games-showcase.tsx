import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const games = [
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

export function GamesShowcase() {
  return (
    <section id="games" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Games</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our portfolio of innovative games that blend creativity with cutting-edge technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {games.map((game, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={game.image || "/placeholder.svg"}
                    alt={game.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {game.status}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2">{game.title}</CardTitle>
                <CardDescription className="text-muted-foreground mb-4">{game.description}</CardDescription>
                <Button variant="outline" className="w-full bg-transparent">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
