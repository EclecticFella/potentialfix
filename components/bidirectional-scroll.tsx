"use client"

export function BidirectionalScroll() {
  const text = "Amplify Your Influence, Maximize Your Earnings"

  return (
    <div className="w-full overflow-hidden bg-white py-12">
      {/* Top row - scrolling right */}
      <div
        className="animate-scroll-right flex whitespace-nowrap mb-4"
        style={{
          animationDuration: "20s",
        }}
      >
        {[...Array(4)].map((_, i) => (
          <span key={i} className="inline-block text-4xl sm:text-5xl md:text-6xl font-serif text-roseGold mx-4">
            {text}
          </span>
        ))}
      </div>

      {/* Bottom row - scrolling left */}
      <div
        className="animate-scroll-left flex whitespace-nowrap"
        style={{
          animationDuration: "20s",
        }}
      >
        {[...Array(4)].map((_, i) => (
          <span key={i} className="inline-block text-4xl sm:text-5xl md:text-6xl font-serif text-roseGold mx-4">
            {text}
          </span>
        ))}
      </div>
    </div>
  )
}

