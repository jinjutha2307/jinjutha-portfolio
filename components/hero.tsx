import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail, Sparkles, Code2, Zap } from "lucide-react"

export function Hero() {
  const skills = ["Python", "Next.js", "Flutter", "TypeScript", "Playwright", "QA/Automation"]

  const stats = [
    { label: "1.2M+ monthly visits supported", sublabel: "e-commerce web app" },
    { label: "App Store rank #16", sublabel: "Thailand, online shopping" },
    { label: "Agile delivery", sublabel: "Code reviews · GitFlow" },
  ]

  const highlights = [
    { icon: Code2, text: "Full-Stack Development" },
    { icon: Sparkles, text: "Quality Assurance" },
    { icon: Zap, text: "Automation Engineering" },
  ]

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden"
    >
      <div className="absolute inset-0 autumn-gradient -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,146,60,0.15),transparent_50%)] -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(239,68,68,0.15),transparent_50%)] -z-10" />

      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-amber-400/20 to-orange-400/20 rounded-full blur-3xl animate-float-delayed" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-8">
          <div className="flex justify-center mb-8 relative">
            <div className="glass-card p-2 rounded-full relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-red-500 to-amber-500 rounded-full opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
              <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden bg-gradient-to-br from-amber-100 to-orange-100 ring-4 ring-white/50">
                <img
                  src="/professional-headshot-software-developer.jpg"
                  alt="Jinjutha Guven"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 glass-pill px-4 py-1.5 text-xs font-semibold text-orange-700 whitespace-nowrap shadow-lg">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                Available for Projects
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 glass-pill px-4 py-2 text-sm font-medium text-orange-700 mb-4">
              <Sparkles className="h-4 w-4" />
              Software Developer & QA/Automation Enthusiast
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance bg-gradient-to-br from-orange-600 via-red-600 to-amber-600 bg-clip-text text-transparent leading-tight">
              Building Reliable
              <br />
              Digital Experiences
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
              Crafting web & mobile solutions with <span className="font-semibold text-orange-600">Next.js</span>,{" "}
              <span className="font-semibold text-red-600">Flutter</span>, and{" "}
              <span className="font-semibold text-amber-600">Python</span>
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto py-4">
            {highlights.map((highlight) => (
              <div key={highlight.text} className="glass-card px-5 py-3 flex items-center gap-2 hover-lift">
                <highlight.icon className="h-5 w-5 text-orange-600" />
                <span className="text-sm font-medium">{highlight.text}</span>
              </div>
            ))}
          </div>

          {/* Skills Pills */}
          <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
            {skills.map((skill) => (
              <span
                key={skill}
                className="glass-pill px-4 py-2 text-sm font-medium hover:bg-white/80 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button asChild size="lg" className="glass-button group text-base px-8 py-6">
              <a href="#portfolio">
                View Projects
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="glass-button-outline bg-transparent text-base px-8 py-6 hover:text-orange-700"
            >
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 pt-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-icon-button hover:text-orange-600"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-icon-button hover:text-orange-600"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="glass-icon-button hover:text-orange-600"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="glass-card p-8 text-center hover-lift group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="text-xl font-bold text-balance mb-2 text-orange-700">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.sublabel}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
