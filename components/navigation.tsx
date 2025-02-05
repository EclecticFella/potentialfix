"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { WorkWithUsDialog } from "./work-with-us-dialog"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  // Smooth scroll handler
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Adjust this value based on your header height
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
    setIsMenuOpen(false)
  }

  // Add smooth scroll behavior to HTML
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth"
    return () => {
      document.documentElement.style.scrollBehavior = "auto"
    }
  }, [])

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <a href="#home" onClick={(e) => scrollToSection(e, "home")} className="flex-shrink-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hushlynewlogo-OHmfGMSazpdTWrbKV8oyGTykJsno3P.png"
                alt="Hushly"
                width={100}
                height={50}
                className="h-10 w-auto"
                priority
              />
            </a>
            <div className="hidden sm:flex items-center space-x-8">
              <a
                href="#services"
                onClick={(e) => scrollToSection(e, "services")}
                className="text-gray-800 hover:text-roseGold transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                onClick={(e) => scrollToSection(e, "about")}
                className="text-gray-800 hover:text-roseGold transition-colors"
              >
                About Us
              </a>
              <a
                href="#faq"
                onClick={(e) => scrollToSection(e, "faq")}
                className="text-gray-800 hover:text-roseGold transition-colors"
              >
                FAQ
              </a>
              <Button
                onClick={() => setIsDialogOpen(true)}
                variant="outline"
                className="border-roseGold text-roseGold hover:bg-roseGold hover:text-white transition-colors"
              >
                Work With Us
              </Button>
            </div>
            <div className="sm:hidden">
              <Button variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </Button>
            </div>
          </div>
        </nav>
        {isMenuOpen && (
          <div className="sm:hidden bg-white py-2">
            <div className="flex flex-col items-center space-y-4 pb-4">
              <a
                href="#services"
                onClick={(e) => scrollToSection(e, "services")}
                className="text-gray-800 hover:text-roseGold transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                onClick={(e) => scrollToSection(e, "about")}
                className="text-gray-800 hover:text-roseGold transition-colors"
              >
                About Us
              </a>
              <a
                href="#faq"
                onClick={(e) => scrollToSection(e, "faq")}
                className="text-gray-800 hover:text-roseGold transition-colors"
              >
                FAQ
              </a>
              <Button
                onClick={() => setIsDialogOpen(true)}
                variant="outline"
                className="border-roseGold text-roseGold hover:bg-roseGold hover:text-white transition-colors"
              >
                Work With Us
              </Button>
            </div>
          </div>
        )}
      </header>

      <WorkWithUsDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </>
  )
}

