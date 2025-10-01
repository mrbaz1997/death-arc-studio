import { Card, CardContent } from "@/components/ui/card"

const teamStats = [
  { label: "Games", value: "8+" }
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-6">About Death Arc Studio</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
             Crafting immersive experiences through innovative gameplay and cutting-edge technology. Join us in shaping the future of gaming!
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our team combines years of industry experience with fresh perspectives, resulting in innovative games that
              push creative boundaries while maintaining the highest quality standards.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {teamStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <Card className="p-8">
              <CardContent className="p-0">
                <img
                  src="game-development-team-working-together-in-modern-s.jpg"
                  alt="Death Arc Studio Team"
                  className="w-full h-80 object-cover rounded-lg"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
