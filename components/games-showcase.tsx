"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { games } from "@/config/games"
import { VideoPopup } from "@/components/video-popup"

export function GamesShowcase() {
  const [videoPopup, setVideoPopup] = useState<{ isOpen: boolean; videoUrl: string; title: string }>({
    isOpen: false,
    videoUrl: "",
    title: "",
  })

  const handleLearnMore = (game: (typeof games)[0]) => {
    if (!game.link) return

    // Check if it's an external link (contains http/https or common domains)
    const isExternalLink =
      game.link.includes("play.google.com") ||
      game.link.includes("store.steampowered.com") ||
      game.link.includes("itunes.apple.com")

    if (isExternalLink) {
      // Open external link in new tab
      window.open(game.link, "_blank", "noopener,noreferrer")
    } else {
      // Open video popup for internal links
      setVideoPopup({
        isOpen: true,
        videoUrl: game.link,
        title: game.title,
      })
    }
  }

  return (
    <>
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
                  <Button
                    variant="outline"
                    className="w-full bg-transparent"
                    onClick={() => handleLearnMore(game)}
                    disabled={!game.link}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <VideoPopup
        videoUrl={videoPopup.videoUrl}
        isOpen={videoPopup.isOpen}
        onClose={() => setVideoPopup({ isOpen: false, videoUrl: "", title: "" })}
        title={videoPopup.title}
      />
    </>
  )
}
