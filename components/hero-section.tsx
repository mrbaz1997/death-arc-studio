import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <Image
            src="/placeholder-logo.png"
            alt="Death Arc Studio Logo"
            width={64}
            height={64}
            className="w-12 h-12 md:w-16 md:h-16"
          />
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">Death Arc Studio</h2>
        </div>
        {/* </CHANGE> */}
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
          Crafting Immersive
          <span className="text-primary block">Gaming Experiences</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
          Death Arc Studio is a passionate team of game developers creating innovative, engaging games that push the
          boundaries of interactive entertainment.
        </p>
      </div>
    </section>
  )
}
