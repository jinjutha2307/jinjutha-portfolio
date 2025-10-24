"use client";

import { useState } from "react";
import { GraduationCap, Code2, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  const values = [
    {
      icon: Code2,
      title: "Reusable Architecture",
      description:
        "Stateless/Stateful components in Flutter, modular design patterns",
    },
    {
      icon: Users,
      title: "Strong Collaboration",
      description: "Design ↔ Backend ↔ QA cross-functional teamwork",
    },
    {
      icon: Zap,
      title: "Agile Delivery",
      description: "Planning, daily stand-ups, retros, continuous improvement",
    },
  ];

  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full" />
        </div>

        <div className="glass-card p-8 md:p-12 space-y-8">
          {/* Bio */}
          <div className="space-y-4">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a Software Developer with a bachelor's in Avionics
              Engineering. I've built and maintained cross-platform mobile apps
              and enterprise e-commerce features.
            </p>

            {isExpanded && (
              <p className="text-lg leading-relaxed text-muted-foreground animate-in fade-in duration-300">
                I study and ship personal projects in my free time. Fast
                learner, relentlessly improving, and currently diving deep into
                automation engineering. I believe in writing clean, maintainable
                code and mentoring juniors to grow the team's capabilities.
              </p>
            )}

            <Button
              variant="ghost"
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-sm"
            >
              {isExpanded ? "Show less" : "Read more"}
            </Button>
          </div>

          {/* Education */}
          <div className="glass-card-inner p-6 flex items-start gap-4">
            <div className="glass-icon-button-static">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">
                B.Eng., Avionics Engineering
              </h3>
              <p className="text-muted-foreground">
                Second Class Honors · 2022
              </p>
            </div>
          </div>

          {/* Values */}
          <div>
            <h3 className="font-bold text-xl mb-6">Values & Working Style</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="glass-card-inner p-6 hover-lift text-center"
                >
                  <div className="glass-icon-button-static mx-auto mb-4">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h4 className="font-semibold mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mentoring Note */}
          <div className="glass-card-inner p-6 border-l-4 border-blue-500">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">
                Mentoring & Code Reviews:
              </strong>{" "}
              I actively facilitate code reviews and mentor junior developers,
              helping them grow their skills and understanding of best
              practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
