"use client"

import { useEffect, useState } from "react"

export function InfiniteScroll() {
  const [scrollWidth, setScrollWidth] = useState(0)
  const items = [
    "Marketing Strategy",
    "Fan Engagement",
    "Branding Development",
    "Content Strategy",
    "Social Media Growth",
    "Revenue Optimization",
  ]

  // Double the items to create seamless loop
  const doubledItems = [...items, ...items]

  useEffect(() => {
    // Calculate the scroll width based on viewport
    setScrollWidth(window.innerWidth)

    const handleResize = () => {
      setScrollWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="w-full overflow-hidden bg-white py-8">
      <div
        className="animate-scroll flex whitespace-nowrap"
        style={{
          animationDuration: `${items.length * 5}s`,
        }}
      >
        {doubledItems.map((item, index) => (
          <div
            key={index}
            className="inline-flex items-center justify-center mx-4 px-8 py-4 bg-softPink rounded-lg border border-roseGold/20 text-gray-800"
            style={{ minWidth: "fit-content" }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

