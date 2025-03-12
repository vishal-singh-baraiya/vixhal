"use client"
import { motion } from "framer-motion"

interface AnimatedHeadlineProps {
  text: string
}

export default function AnimatedHeadline({ text }: AnimatedHeadlineProps) {
  return (
    <div className="relative">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        viewport={{ once: true }}
      >
        {text.split("").map((char, index) => (
          <motion.span
            key={`${char}-${index}`}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: index * 0.03,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h2>

      {/* Decorative underline */}
      <motion.div
        className="h-0.5 bg-[#333333] w-0 mx-auto"
        initial={{ width: 0 }}
        whileInView={{ width: "50%" }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      />
    </div>
  )
}

