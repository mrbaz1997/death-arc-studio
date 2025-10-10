import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
          Crafting Immersive
          <span className="text-primary block">Gaming Experiences</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
          Death Arc Studio is a passionate team of game developers creating innovative, engaging games that push the
          boundaries of interactive entertainment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8">
            View Our Games
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}
