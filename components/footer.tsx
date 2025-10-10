export function Footer() {
  return (
    <footer id="contact" className="bg-secondary py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-secondary-foreground mb-4">Death Arc Studio</h3>
            <p className="text-secondary-foreground/80 leading-relaxed">
              Creating immersive gaming experiences that captivate players and push the boundaries of interactive
              entertainment.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-secondary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#games"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Our Games
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-secondary-foreground mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                Twitter
              </a>
              <a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-secondary-foreground/60">© 2024 Death Arc Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
