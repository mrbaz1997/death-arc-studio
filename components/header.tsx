import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  return (
    <header className="w-full bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
          <Image
            src="/placeholder-logo.png"
            alt="Death Arc Studio Logo"
            width={64}
            height={64}
            className="w-12 h-12 md:w-12 md:h-12"
          />
          <h1 className="text-2xl font-bold text-foreground">Death Arc Studio</h1>
        </div>
          <div className="flex items-center">
          </div>
          <nav className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#games" className="text-foreground hover:text-primary transition-colors">
                Games
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                About
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
