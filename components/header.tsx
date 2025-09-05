import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="w-full bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-foreground">Death Arc Studio</h1>
          </div>
          <nav className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#games" className="text-foreground hover:text-primary transition-colors">
                Games
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </a>
              <Button variant="default" size="sm">
                Get in Touch
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
