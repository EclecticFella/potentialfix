import type { IconType } from "react-icons"
import { FaInstagram, FaHeart, FaGift, FaLock, FaCommentAlt, FaBullseye } from "react-icons/fa"

export function Services() {
  const services: {
    title: string
    description: string
    Icon: IconType
  }[] = [
    {
      title: "Social Media Marketing",
      description:
        "We create and manage your social media presence across platforms like TikTok, Instagram, and Twitter to maximize visibility and engagement.",
      Icon: FaInstagram,
    },
    {
      title: "Fan Engagement",
      description:
        "Build and maintain a loyal fanbase through personalized interactions, exclusive content, and strategic engagement tactics.",
      Icon: FaHeart,
    },
    {
      title: "Revenue Optimization",
      description:
        "Maximize your earnings through strategic pricing, PPV content optimization, and proven upselling techniques.",
      Icon: FaGift,
    },
    {
      title: "Branding Development",
      description:
        "Develop a unique and compelling personal brand that sets you apart and attracts your target audience.",
      Icon: FaLock,
    },
    {
      title: "Content Strategy",
      description:
        "Our expert team works with you to create high-quality, engaging content that drives subscriber growth and retention.",
      Icon: FaCommentAlt,
    },
    {
      title: "Advertising Campaigns",
      description:
        "Strategic paid advertising campaigns across multiple platforms to expand your reach and attract new subscribers.",
      Icon: FaBullseye,
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">Our Services</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive solutions to help you succeed on OnlyFans and maximize your earning potential.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col sm:flex-row items-start gap-4 sm:gap-6"
          >
            <div className="flex-shrink-0">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-softPink rounded-full flex items-center justify-center">
                <service.Icon className="w-6 h-6 sm:w-8 sm:h-8 text-roseGold" />
              </div>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-serif text-gray-900 mb-2">{service.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

