"use client"

import Image from "next/image"
import { Instagram, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WorkWithUsDialog } from "./work-with-us-dialog"
import { useState } from "react"

export function Footer() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <footer className="bg-white pt-12 pb-6 sm:pt-16 sm:pb-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-stretch space-y-8 sm:space-y-12">
          {/* Logo and Buttons Section */}
          <div className="flex flex-col items-center sm:flex-row sm:justify-between gap-6 sm:gap-8">
            {/* Logo */}
            <a href="#home" className="flex-shrink-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hushlynewlogo-OHmfGMSazpdTWrbKV8oyGTykJsno3P.png"
                alt="Hushly"
                width={200}
                height={100}
                className="h-20 w-auto sm:h-24"
              />
            </a>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="mailto:hushly@gmail.com">
                <Button
                  size="lg"
                  className="bg-roseGold text-white hover:bg-roseGold/80 transition-colors w-full sm:w-auto px-12 py-7 text-xl"
                >
                  <span className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <div className="flex flex-col items-start">
                      <span className="text-sm">Send us an email</span>
                      <span className="text-xs">hushly@gmail.com</span>
                    </div>
                  </span>
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                className="border-roseGold text-roseGold hover:bg-roseGold hover:text-white transition-colors w-full sm:w-auto px-12 py-7 text-xl"
                onClick={() => setIsDialogOpen(true)}
              >
                <span className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  Apply Here
                </span>
              </Button>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a
              href="https://www.instagram.com/hushlyco/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-roseGold transition-colors"
            >
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-roseGold transition-colors"
            >
              <span className="sr-only">TikTok</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-roseGold transition-colors"
            >
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" />
            </a>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <a href="#home" className="text-gray-600 hover:text-roseGold transition-colors">
              Home
            </a>
            <a href="#services" className="text-gray-600 hover:text-roseGold transition-colors">
              Services
            </a>
            <a href="#about" className="text-gray-600 hover:text-roseGold transition-colors">
              About Us
            </a>
            <a href="#faq" className="text-gray-600 hover:text-roseGold transition-colors">
              FAQ
            </a>
          </nav>

          {/* Copyright */}
          <div className="text-gray-500 text-sm text-center sm:text-left">
            Copyright © {new Date().getFullYear()} Hushly | All Rights Reserved
          </div>
        </div>
      </div>
      <WorkWithUsDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </footer>
  )
}

