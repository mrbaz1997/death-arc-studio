"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState, useRef } from "react"
import type { Game } from "@/config/games"

interface GamePageClientProps {
  game: Game
}

export default function GamePageClient({ game }: GamePageClientProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const galleryRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (galleryRef.current) {
      const scrollAmount = 300
      if (direction === "left") {
        galleryRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" })
      } else {
        galleryRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
      }
    }
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header with back button */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/">
            <Button variant="ghost">← Back to Games</Button>
          </Link>
        </div>
      </div>

      {/* Game Details Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Game Header */}
        <div className="flex items-center gap-6 mb-8">
          {game.logo && (
            <img src={game.logo || "/placeholder.svg"} alt={game.title} className="w-24 h-24 object-contain" />
          )}
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">{game.title}</h1>
            <div className="flex gap-4 items-center">
              <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                {game.status}
              </span>
              <p className="text-lg text-muted-foreground">{game.description}</p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Images and Videos */}
          <div className="lg:col-span-2">

            {/* Gallery */}
            {game.gallery && game.gallery.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Gallery</h2>
                <div className="relative group">
                  <div
                    ref={galleryRef}
                    className="flex gap-4 overflow-x-auto scroll-smooth pb-2 hide-scrollbar"
                    style={{ scrollBehavior: "smooth" }}
                  >
                    {game.gallery.map((image, idx) => (
                      <div
                        key={idx}
                        className="flex-shrink-0 cursor-pointer transition-transform hover:scale-105"
                        onClick={() => setSelectedImage(image)}
                      >
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`${game.title} gallery ${idx + 1}`}
                          className="h-32 w-32 object-cover rounded-lg border-2 border-transparent hover:border-primary"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Videos */}
            {game.videos && game.videos.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Videos</h2>
                <div className="space-y-4">
                  {game.videos.map((video, idx) => (
                    <div key={idx} className="w-full" style={{ aspectRatio: "1 / 1" }}>
                      <video
                        controls
                        className="w-full h-full rounded-lg object-contain bg-black"
                        poster={game.gallery?.[0]}
                      >
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Description and Links */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-lg p-6 sticky top-20">
              <h2 className="text-2xl font-bold text-foreground mb-4">About</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">{game.fullDescription || game.description}</p>

              {game.link && (
                <a href={game.link} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full">Download Now</Button>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </main>
  )
}
