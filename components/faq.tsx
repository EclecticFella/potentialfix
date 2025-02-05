import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-xl p-8 sm:p-12 shadow-sm">
        <h1 className="text-4xl md:text-5xl font-serif text-gray-900 text-center mb-12">Frequently Asked Questions</h1>
        <div className="space-y-8">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-serif text-gray-900">
                What is OnlyFans Management?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                OnlyFans Management involves professional guidance and support to help content creators optimize their
                OnlyFans presence. This includes content strategy, engagement tactics, pricing optimization, and overall
                account growth to maximize earnings potential.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-serif text-gray-900">
                How much can I earn on OnlyFans?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Earnings vary based on multiple factors including content quality, engagement, and marketing strategy.
                With our proven methods and dedicated support, our goal is to help creators reach $100k+ monthly within
                90 days of implementing our strategies.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-serif text-gray-900">
                What services do you provide?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Our comprehensive services include:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Account setup and optimization</li>
                  <li>Content strategy and planning</li>
                  <li>Engagement and growth tactics</li>
                  <li>Pricing strategy</li>
                  <li>Marketing and promotion</li>
                  <li>24/7 dedicated support</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-serif text-gray-900">How do I get started?</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Getting started is simple. Click the &apos;Work With Us&apos; button to schedule a consultation.
                We&apos;ll discuss your goals, explain our process, and create a customized strategy for your success.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-serif text-gray-900">
                Do you take a percentage of earnings?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                We believe in transparent pricing and fair compensation. Our fee structure will be clearly outlined
                during your consultation, ensuring you understand exactly what to expect before we begin working
                together.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}

