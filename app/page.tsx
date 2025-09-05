import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { GamesShowcase } from "@/components/games-showcase"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <GamesShowcase />
      <AboutSection />
      <Footer />
    </main>
  )
}
