import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jinjutha Guven | Software Developer & QA/Automation Enthusiast",
  description:
    "Software Developer with expertise in Next.js, Flutter, Python, and automation testing. Building reliable web & mobile experiences.",
  keywords: ["Software Developer", "Next.js", "Flutter", "Python", "Playwright", "QA", "Automation", "TypeScript"],
  authors: [{ name: "Jinjutha Guven" }],
  openGraph: {
    title: "Jinjutha Guven | Software Developer",
    description: "Building reliable web & mobile experiences with Next.js, Flutter, and Python",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
