import { Playfair_Display, Inter } from "next/font/google"
import { Footer } from "@/components/footer"
import "./globals.css"
import type React from "react" // Import React

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata = {
  title: "Hushly - OnlyFans Management Agency",
  description: "Premier OnlyFans management agency helping creators earn $100k+ per month",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-softPink font-sans flex flex-col">
        {children}
        <Footer />
      </body>
    </html>
  )
}

