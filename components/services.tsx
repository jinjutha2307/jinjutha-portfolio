import { Globe, Smartphone, TestTube, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Services() {
  const services = [
    {
      icon: Globe,
      title: "Web App Development",
      description:
        "Next.js/TypeScript applications with server-side rendering, API integration, and optimized performance & accessibility.",
      features: [
        "SSR & SEO optimization",
        "Responsive design",
        "API integration",
        "Performance tuning",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Flutter cross-platform delivery for Android & iOS with reusable widgets and GetX state management.",
      features: [
        "Cross-platform (iOS & Android)",
        "GetX state management",
        "Reusable components",
        "Native performance",
      ],
    },
    {
      icon: TestTube,
      title: "Automation Testing",
      description:
        "Playwright end-to-end test suites, regression safety nets, and comprehensive test reporting.",
      features: [
        "E2E test automation",
        "Regression testing",
        "CI/CD integration",
        "Test reporting",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="py-24 px-4 bg-gradient-to-b from-blue-50/30 to-transparent"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Services</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Delivering high-quality software solutions across web, mobile, and
            automation testing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div key={index} className="glass-card p-8 hover-lift">
              <div className="glass-icon-button-static mb-6">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="text-sm flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Card */}
        <div className="glass-card p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Ready to start your project?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Let's discuss how I can help bring your ideas to life with clean,
            maintainable code and best practices.
          </p>
          <Button asChild size="lg" className="glass-button group">
            <a href="#contact">
              Discuss Your Project
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
