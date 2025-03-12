"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  description: string
  date: string
  image: string
}

export default function ProjectCard({ title, description, date, image }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="overflow-hidden border-[#333333] bg-[#f0ead6] rounded-none">
        <CardHeader className="p-0">
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover transition-transform duration-500"
              style={{
                transform: isHovered ? "scale(1.05)" : "scale(1)",
                filter: "sepia(0.2)",
              }}
            />
            <div className="absolute top-0 left-0 bg-[#333333] text-white px-3 py-1 text-xs">{date}</div>
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm">{description}</p>
          <div className="mt-4 text-right">
            <span className="inline-block border-b border-[#333333] text-sm hover:border-b-2 cursor-pointer">
              Read More →
            </span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

