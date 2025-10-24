"use client";

import { useState } from "react";
import { Code } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function Portfolio() {
  const caseStudies = [
    {
      id: "flash-sale",
      title: "Flash Sale & Coupons",
      company: "Ascend Group",
      image: "/mobile-app-flash-sale-interface.jpg",
      overview:
        "Designed and implemented high-traffic flash sale and coupon features for a major e-commerce mobile app, handling thousands of concurrent users during promotional events.",
      role: [
        "Feature owner for Flash Sale and Coupons modules",
        "Integrated third-party APIs for real-time inventory and pricing",
        "Collaborated with QA team for load testing and bug fixes",
        "Implemented GetX state management for reactive UI updates",
      ],
      stack: ["Flutter", "GetX", "REST APIs", "Firebase", "Git"],
      outcomes: [
        "Stable performance during high-traffic promotional events",
        "Improved promo conversion rates by 25%",
        "Reduced cart abandonment during flash sales",
        "Positive user feedback on app responsiveness",
      ],
    },
    {
      id: "shop-in-shop",
      title: "Shop-in-Shop Platform",
      company: "Ascend Group",
      image: "/ecommerce-shop-in-shop-dashboard.jpg",
      overview:
        "Built a comprehensive Shop-in-Shop feature allowing third-party sellers to manage their storefronts within the main e-commerce app, including admin tools for content management.",
      role: [
        "Feature owner for Shop-in-Shop integration",
        "Integrated Vietnam partner APIs for cross-border commerce",
        "Developed admin web tools using Next.js + Ant Design",
        "Coordinated with design and backend teams for seamless UX",
      ],
      stack: ["Flutter", "Next.js", "Ant Design", "TypeScript", "REST APIs"],
      outcomes: [
        "Streamlined seller onboarding process",
        "Reduced content management time by 40%",
        "Enabled cross-border commerce expansion",
        "Improved seller satisfaction scores",
      ],
    },
    {
      id: "checkout",
      title: "E-commerce Checkout Experience",
      company: "Big C Supercenter",
      image: "/ecommerce-checkout-flow-interface.jpg",
      overview:
        "Contributed to the development of a robust checkout flow for a high-traffic e-commerce platform, focusing on performance optimization and responsive design.",
      role: [
        "Team contributor for web and mobile checkout flow",
        "Built responsive interfaces using Next.js SSR + SCSS",
        "Optimized frontend performance for faster load times",
        "Collaborated with UX/UI for improved conversion funnel",
      ],
      stack: ["Next.js", "SCSS", "TypeScript", "REST APIs", "Git"],
      outcomes: [
        "Supported 1.2M+ monthly visits with 99.9% uptime",
        "Improved page load speed by 30%",
        "Enhanced mobile checkout completion rate",
        "Reduced bounce rate during checkout process",
      ],
    },
  ];

  const [activeCase, setActiveCase] = useState(caseStudies[0].id);

  return (
    <section id="portfolio" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Portfolio</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Featured case studies showcasing real-world impact and technical
            expertise
          </p>
        </div>

        <div className="space-y-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="glass-card overflow-hidden hover-lift"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 lg:h-auto bg-gradient-to-br from-blue-100 to-purple-100">
                  <img
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{study.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {study.company}
                      </p>
                    </div>
                  </div>

                  <Tabs defaultValue="overview" className="w-full">
                    <TabsList className="grid w-full grid-cols-4 glass-card-inner">
                      <TabsTrigger value="overview">Overview</TabsTrigger>
                      <TabsTrigger value="role">Role</TabsTrigger>
                      <TabsTrigger value="stack">Stack</TabsTrigger>
                      <TabsTrigger value="outcomes">Outcomes</TabsTrigger>
                    </TabsList>

                    <TabsContent value="overview" className="mt-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {study.overview}
                      </p>
                    </TabsContent>

                    <TabsContent value="role" className="mt-4">
                      <ul className="space-y-2">
                        {study.role.map((item, i) => (
                          <li
                            key={i}
                            className="text-sm text-muted-foreground flex gap-2"
                          >
                            <span className="text-blue-500 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </TabsContent>

                    <TabsContent value="stack" className="mt-4">
                      <div className="flex flex-wrap gap-2">
                        {study.stack.map((tech) => (
                          <span
                            key={tech}
                            className="glass-pill px-3 py-1.5 text-sm"
                          >
                            <Code className="inline h-3 w-3 mr-1" />
                            {tech}
                          </span>
                        ))}
                      </div>
                    </TabsContent>

                    <TabsContent value="outcomes" className="mt-4">
                      <ul className="space-y-2">
                        {study.outcomes.map((outcome, i) => (
                          <li
                            key={i}
                            className="text-sm text-muted-foreground flex gap-2"
                          >
                            <span className="text-green-500 mt-1">✓</span>
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
