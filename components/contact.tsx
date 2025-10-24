"use client";

import type React from "react";

import { useState } from "react";
import { Mail, Linkedin, Github, Send, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 bg-gradient-to-b from-transparent to-blue-50/30"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4">
            I usually reply within 1–2 business days
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold mb-6">Connect with me</h3>

              <div className="space-y-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 glass-card-inner hover-lift transition-all duration-150"
                >
                  <div className="glass-icon-button-static">
                    <Linkedin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold">LinkedIn</div>
                    <div className="text-sm text-muted-foreground">
                      Connect professionally
                    </div>
                  </div>
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 glass-card-inner hover-lift transition-all duration-150"
                >
                  <div className="glass-icon-button-static">
                    <Github className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold">GitHub</div>
                    <div className="text-sm text-muted-foreground">
                      View my code
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:your.email@example.com"
                  className="flex items-center gap-4 p-4 glass-card-inner hover-lift transition-all duration-150"
                >
                  <div className="glass-icon-button-static">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-sm text-muted-foreground">
                      your.email@example.com
                    </div>
                  </div>
                </a>
              </div>

              <div className="mt-6 pt-6 border-t border-border/50">
                <Button
                  variant="outline"
                  className="w-full glass-button-outline bg-transparent"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8">
            <h3 className="text-xl font-bold mb-6">Send a message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-medium mb-2 block"
                >
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="glass-input"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium mb-2 block"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="glass-input"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-sm font-medium mb-2 block"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={5}
                  className="glass-input resize-none"
                />
              </div>

              <Button type="submit" className="w-full glass-button group">
                Send Message
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground">
            © 2025 Jinjutha Guven. Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
}
