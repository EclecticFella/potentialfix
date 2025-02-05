"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Search, Users, MessageSquare } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { InfiniteScroll } from "@/components/infinite-scroll"
import { BidirectionalScroll } from "@/components/bidirectional-scroll"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { FAQ } from "@/components/faq"
import { WorkWithUsDialog } from "@/components/work-with-us-dialog"

export default function Home() {
  const parallaxRef = useRef<HTMLDivElement>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.5}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-softPink">
      <Navigation />
      {/* Hero Section */}
      <section id="home" className="relative min-h-[60vh] md:min-h-[80vh] overflow-hidden">
        {/* Parallax Background */}
        <div ref={parallaxRef} className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wmremove-transformed-ehRNrCoUmIx1v2rOBG9hnccyTdK789.jpeg"
            alt="Professional model in elegant attire"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 pt-16 pb-12 sm:pt-24 sm:pb-16 md:pt-32 md:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hushlynewlogo-OHmfGMSazpdTWrbKV8oyGTykJsno3P.png"
                alt="Hushly"
                width={200}
                height={100}
                className="mx-auto mb-8"
              />
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif text-white tracking-tight mb-4 sm:mb-6">
                Premier OnlyFans Management Agency
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8">
                We help OnlyFans creators earn $100k+ per month in 90 days.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-roseGold text-white hover:bg-roseGold/80 transition-colors"
                  onClick={() => setIsDialogOpen(true)}
                >
                  Work With Us
                </Button>
                <a href="#services" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-white text-white hover:bg-white/20 transition-colors"
                  >
                    Browse Services
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-900 mb-2 sm:mb-4">
              Full Service Management Agency
            </h2>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-roseGold mb-10">For OnlyFans Creators</h3>
          </div>
        </div>

        {/* Infinite Scroll Banner */}
        <InfiniteScroll />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-6 sm:p-8 rounded-lg bg-softPink border border-roseGold/20 flex flex-col items-center">
              <div className="h-10 w-10 sm:h-12 sm:w-12 mb-4 sm:mb-6 text-roseGold">
                <Search className="w-full h-full" />
              </div>
              <h3 className="text-lg sm:text-xl font-serif text-roseGold mb-3 sm:mb-4">Account Management</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 text-center">
                Your content will be managed and categorized by your account manager, including PPV, customs, and feed
                posts.
              </p>
              <p className="text-sm sm:text-base text-gray-600 text-center">
                All you have to do is share your content with us, and we will handle the posting, captions, and income
                optimization.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-lg bg-softPink border border-roseGold/20 flex flex-col items-center">
              <div className="h-10 w-10 sm:h-12 sm:w-12 mb-4 sm:mb-6 text-roseGold">
                <Users className="w-full h-full" />
              </div>
              <h3 className="text-lg sm:text-xl font-serif text-roseGold mb-3 sm:mb-4">Grow Your Fanbase</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 text-center">
                To achieve financial success with your account, it is crucial to both acquire new fans and maintain the
                loyalty of your existing ones. We have proven strategies for attracting new fans.
              </p>
              <p className="text-sm sm:text-base text-gray-600 text-center">
                We will provide you with TikTok, Instagram, and Twitter strategies, as well as assist you in optimizing
                your organic social presence.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-lg bg-softPink border border-roseGold/20 flex flex-col items-center">
              <div className="h-10 w-10 sm:h-12 sm:w-12 mb-4 sm:mb-6 text-roseGold">
                <MessageSquare className="w-full h-full" />
              </div>
              <h3 className="text-lg sm:text-xl font-serif text-roseGold mb-3 sm:mb-4">Messaging</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 text-center">
                The messaging function is where you will earn the majority of your income.
              </p>
              <p className="text-sm sm:text-base text-gray-600 text-center">
                When managing a creator's direct messages, we build genuine connections and have a slick selling
                strategy to sell PPV & custom requests, in order to maximize earnings.
              </p>
            </div>
          </div>
        </div>

        {/* Bidirectional Scroll moved below features */}
        <div className="mt-20">
          <BidirectionalScroll />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 md:py-20 bg-softPink">
        <Services />
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 md:py-20 bg-white">
        <About />
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-12 sm:py-16 md:py-20 bg-softPink">
        <FAQ />
      </section>

      <WorkWithUsDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </div>
  )
}

