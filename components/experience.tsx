import { Briefcase, MapPin, Calendar } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      company: "Ascend Group",
      role: "Mobile Developer",
      period: "Dec 2023 – Apr 2025",
      location: "Bangkok · Hybrid",
      logo: "/ascend-group-logo.jpg",
      achievements: [
        "Built and maintained Flutter apps (Android & iOS) with GetX for state management and navigation",
        "Shipped key features: Flash Sale, Coupons, Shop-in-Shop",
        "Integrated third-party APIs (Vietnam partner) for core commerce flows",
        "Created internal admin web tools using Next.js + Ant Design",
        "Git/GitLab: merge requests, issue tracking, GitFlow; conducted code reviews & mentored juniors",
      ],
      highlight: "#16 in Thailand's App Store (online shopping category)",
    },
    {
      company: "Big C Supercenter PCL",
      role: "Software Engineer",
      period: "Nov 2022 – Oct 2023",
      location: "Bangkok · Hybrid",
      logo: "/big-c-supercenter-logo.jpg",
      achievements: [
        "Built responsive web interfaces using Next.js SSR + SCSS",
        "Collaborated closely with UX/UI designers",
        "Integrated backend APIs and optimized frontend performance",
        "Delivered features through Agile methodology with proactive issue detection",
      ],
      highlight: "Supported ~1.2M visits/month on e-commerce web app",
    },
    {
      company: "mu Space Corp",
      role: "Frontend Developer",
      period: "Jan 2022 – May 2022",
      location: "Bangkok",
      logo: "/mu-space-corp-logo.jpg",
      achievements: [
        "Developed internal inventory system UI using Next.js + Tailwind CSS",
        "Conducted UX research and created Figma prototypes",
        "Collaborated with backend team for seamless API integration",
      ],
      highlight: null,
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 px-4 bg-gradient-to-b from-transparent to-blue-50/30"
    >
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-transparent -translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 top-8 w-4 h-4 bg-blue-500 rounded-full -translate-x-1/2 ring-4 ring-background" />

                {/* Content */}
                <div className="md:w-1/2">
                  <div className="glass-card p-6 md:p-8 hover-lift">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="glass-card-inner p-3 rounded-xl">
                        <img
                          src={exp.logo || "/placeholder.svg"}
                          alt={`${exp.company} logo`}
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-1">
                          {exp.company}
                        </h3>
                        <p className="text-lg text-muted-foreground mb-2">
                          {exp.role}
                        </p>
                        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="text-sm text-muted-foreground leading-relaxed flex gap-2"
                        >
                          <span className="text-blue-500 mt-1.5">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Highlight */}
                    {exp.highlight && (
                      <div className="glass-card-inner p-4 border-l-4 border-blue-500">
                        <p className="text-sm font-semibold text-balance">
                          <Briefcase className="inline h-4 w-4 mr-2" />
                          {exp.highlight}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
