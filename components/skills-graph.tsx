"use client"
import { motion } from "framer-motion"
import { Chart, ChartContainer, ChartBar, ChartGroup } from "@/components/ui/chart"

export default function SkillsGraph() {
  const skills = [
    { name: "Machine Learning", value: 90 },
    { name: "Data Analysis", value: 85 },
    { name: "Deep Learning", value: 80 },
    { name: "Data Visualization", value: 75 },
    { name: "NLP", value: 70 },
    { name: "Computer Vision", value: 65 },
  ]

  return (
    <div className="relative">
      {/* Hand-drawn style paper background */}
      <div className="absolute inset-0 bg-[#f8f5e6] border border-dashed border-[#333333] opacity-50"></div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative"
      >
        <Chart className="h-80">
          <defs>
            <pattern id="pencil-pattern" patternUnits="userSpaceOnUse" width="4" height="4">
              <path d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2" stroke="#333333" strokeWidth="0.5" opacity="0.3" />
            </pattern>
          </defs>

          <ChartContainer
            xAxis={[{ scaleType: "band", data: skills.map((skill) => skill.name) }]}
            yAxis={[
              {
                scaleType: "linear",
                max: 100,
                tickNumber: 5,
                tickFormat: (value) => `${value}%`,
              },
            ]}
          >
            <ChartGroup>
              {skills.map((skill, index) => (
                <motion.g
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ChartBar
                    data={[skill.value]}
                    color="#333333"
                    index={index}
                    style={{
                      fill: "url(#pencil-pattern)",
                    }}
                  />
                </motion.g>
              ))}
            </ChartGroup>
          </ChartContainer>
        </Chart>
      </motion.div>

      {/* Hand-drawn annotations */}
      <div className="absolute -bottom-4 -right-4 transform rotate-6 text-xs italic text-[#555555]">
        *Based on project experience
      </div>
    </div>
  )
}

