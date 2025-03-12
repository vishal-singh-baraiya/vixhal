"use client"

import { useState, useEffect } from "react"

interface TypewriterEffectProps {
  text: string
  speed?: number
}

export default function TypewriterEffect({ text, speed = 50 }: TypewriterEffectProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    } else {
      setIsComplete(true)
    }
  }, [currentIndex, speed, text])

  return (
    <span>
      {displayText}
      {!isComplete && <span className="animate-pulse">|</span>}
    </span>
  )
}

