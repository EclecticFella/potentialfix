import { Button } from "@/components/ui/button"
import { WorkWithUsDialog } from "./work-with-us-dialog"
import { useState } from "react"

export function About() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-xl p-8 sm:p-12 shadow-sm">
        <h1 className="text-4xl md:text-5xl font-serif text-gray-900 text-center mb-12">About Hushly</h1>
        <div className="bg-white p-8 rounded-lg shadow-md border border-roseGold/20 mb-16">
          <p className="text-xl text-gray-600 mb-6">
            Hushly is a premier OnlyFans management agency dedicated to empowering content creators to reach their full
            potential. Our team of experts combines industry knowledge, innovative strategies, and personalized support
            to help our clients achieve unprecedented success in the digital content space.
          </p>
          <p className="text-xl text-gray-600 mb-6">
            Founded in 2021, Hushly has quickly become a leader in the OnlyFans management industry. We've helped
            hundreds of creators increase their earnings, grow their audience, and build sustainable careers on the
            platform.
          </p>
          <p className="text-xl text-gray-600">
            Our mission is to provide creators with the tools, knowledge, and support they need to thrive in the
            competitive world of online content creation. We believe in empowering individuals to take control of their
            financial future while expressing their creativity and authenticity.
          </p>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-serif text-gray-900 mb-6">
            Ready to take your OnlyFans career to the next level?
          </h3>
          <Button
            size="lg"
            className="bg-roseGold text-white hover:bg-roseGold/80 transition-colors"
            onClick={() => setIsDialogOpen(true)}
          >
            Work With Us
          </Button>
        </div>
      </div>
      <WorkWithUsDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </div>
  )
}

