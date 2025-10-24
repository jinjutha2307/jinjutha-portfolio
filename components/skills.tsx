import {
  Code,
  TestTube,
  Layers,
  GitBranch,
  Smartphone,
  Globe,
} from "lucide-react";

export function Skills() {
  const primarySkills = [
    "Python",
    "Next.js",
    "Flutter",
    "TypeScript",
    "Playwright",
    "Git",
    "Team Collaboration",
  ];

  const expertise = [
    {
      icon: Code,
      title: "Software Development",
      description: "Full-stack web and mobile application development",
    },
    {
      icon: TestTube,
      title: "Quality Assurance",
      description: "Automated testing and quality control processes",
    },
    {
      icon: Layers,
      title: "Automation Engineering",
      description: "Building robust automation frameworks and CI/CD pipelines",
    },
  ];

  const technicalSkills = [
    {
      category: "Frontend",
      icon: Globe,
      skills: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "SCSS",
        "Ant Design",
      ],
    },
    {
      category: "Mobile",
      icon: Smartphone,
      skills: ["Flutter", "GetX", "Android", "iOS", "Cross-platform"],
    },
    {
      category: "Backend & Tools",
      icon: GitBranch,
      skills: ["Python", "Node.js", "REST APIs", "Git", "GitLab", "Playwright"],
    },
  ];

  return (
    <section id="skills" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & Tools
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full" />
        </div>

        {/* Primary Skills */}
        <div className="glass-card p-8 md:p-12 mb-8">
          <h3 className="text-xl font-bold mb-6 text-center">Primary Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {primarySkills.map((skill) => (
              <span
                key={skill}
                className="glass-pill-large px-6 py-3 text-base font-medium hover-lift"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Areas of Expertise */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {expertise.map((area, index) => (
            <div key={index} className="glass-card p-8 hover-lift text-center">
              <div className="glass-icon-button-static mx-auto mb-4">
                <area.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">{area.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>

        {/* Technical Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {technicalSkills.map((category, index) => (
            <div key={index} className="glass-card p-6 hover-lift">
              <div className="flex items-center gap-3 mb-4">
                <div className="glass-icon-button-static">
                  <category.icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-lg">{category.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="glass-pill px-3 py-1.5 text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="glass-card p-6 mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Specialized in:</strong> State
            management (GetX), SSR/SEO (Next.js), Component libraries, CI hooks
            for testing (Playwright), Agile methodologies, Code reviews &
            mentoring
          </p>
        </div>
      </div>
    </section>
  );
}
