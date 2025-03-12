import React from 'react';
import { Newspaper, Github, Mail, Linkedin } from "lucide-react"
import ProjectCard from "@/components/project-card"
import SkillsGraph from "@/components/skills-graph"
import AnimatedHeadline from "@/components/animated-headline"
import { Button } from "@/components/ui/button"
import HandDrawnChart from "@/components/hand-drawn-chart"
import TypewriterEffect from "@/components/typewriter-effect"

export default function Home() {
  return (
   
    <main className="min-h-screen bg-[#f8f5e6] text-[#333333] font-serif relative overflow-hidden">
      {/* Paper texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-10 opacity-40"
        style={{
          backgroundImage: "url('https://thedesignest.net/wp-content/uploads/2021/12/6-2.jpg')",
          backgroundSize: "cover",
          mixBlendMode: "multiply",
        }}
      />

      {/* Masthead */}
      <header className="border-b-2 border-[#333333] py-6 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-4">
            <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight leading-none">
            <TypewriterEffect text="The Vixhal Times">
            </h1>
            <p className="text-sm mt-1">ESTABLISHED 2025</p>
            <div className="flex justify-center items-center gap-2 mt-2 text-xs">
              <span>VOL. XXIV</span>
              <span className="w-1 h-1 rounded-full bg-black"></span>
              <span>ISSUE 42</span>
              <span className="w-1 h-1 rounded-full bg-black"></span>
              <span>
                {new Date().toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          </div>

          <nav className="flex justify-center border-t border-b border-[#333333] py-2">
            <ul className="flex flex-wrap gap-6 md:gap-10 text-sm uppercase tracking-wider">
              <li>
                <a href="#about" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:underline">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:underline">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8">
        {/* About Section */}
        <section id="about" className="mb-12">
          <AnimatedHeadline text="Data Science & AI Student" />
          

          <div className="md:flex gap-6 mt-6">
            <div className="md:w-2/3">
              <p className="text-lg first-letter:text-4xl first-letter:font-bold first-letter:mr-1 first-letter:float-left mb-4">
                I am a student at IIT Madras, pursuing a BS in Data Science and Applications. Currently, I am working on asynchronous neural networks, exploring novel approaches to enhance efficiency and scalability in deep learning. Alongside AI, I also have experience in web development.
              </p>
              <p className="mb-4 text-lg">
                I have successfully reproduced GPT-2, LLaMA, and Mistral from research papers, deepening my understanding of transformer architectures and large-scale language models. Additionally, I am part of AI4Bharat, contributing to the development of foundation models for India.
              </p>
              
              <div className="mt-6 border-2 border-black p-4 bg-[#e5e0d1]">
                <h3 className="font-bold text-lg mb-2 uppercase border-b border-black pb-1">At A Glance</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex">
                    <span className="font-bold mr-2">•</span>
                    <span>BS in Data Science, IIT Madras</span>
                  </li>
                  <li className="flex">
                    <span className="font-bold mr-2">•</span>
                    <span>Reproduced GPT-2, LLaMA, and Mixtral from research papers.</span>
                  </li>
                  <li className="flex">
                    <span className="font-bold mr-2">•</span>
                    <span>Researching on Asynchronous Neural Network.</span>
                  </li>
                  <li className="flex">
                    <span className="font-bold mr-2">•</span>
                    <span>Contributed to 5+ open-source AI frameworks</span>
                  </li>
                  <li className="flex">
                    <span className="font-bold mr-2">•</span>
                    <span>Experienced in building AI wrappers.</span>
                  </li>
                </ul>
              </div>
              <div className="flex gap-4 mt-6">
                <Button variant="outline" className="border-black rounded-none">
                  <span className="mr-2">Resume</span>
                  <Newspaper size={16} />
                </Button>
                <Button variant="outline" className="border-black rounded-none">
                  <span className="mr-2">GitHub</span>
                  <Github size={16} />
                </Button>
              </div>
            </div>
            <div className="md:w-1/3 mt-6 md:mt-0 border border-[#333333] p-4 bg-[#f0ead6]">
              <div className="md:col-span-4">
                <div className="relative">
                  <div className="absolute inset-0 border-2 border-black bg-[#e5e0d1] rotate-3"></div>
                  <div className="absolute inset-0 border-2 border-black bg-[#e5e0d1] -rotate-2"></div>
                  <div className="relative border-2 border-black overflow-hidden">
                    <img
                      src="https://i.ibb.co/7xB2btZD/Screenshot-2024-11-29-021540-like-paper.png?height=500&width=400"
                      alt="Portrait of the data scientist"
                      className="w-full grayscale contrast-125 mix-blend-multiply"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-2 text-white text-center text-sm">
                      Leading Data Scientist & AI Engineer
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center border-b border-[#333333] pb-2">Latest Updates</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-2">
                    <span className="font-bold">MAY 2023:</span>
                    <span>Vishal started BS in DS and AI at IIT Madras.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold">MAY 2024:</span>
                    <span>Completed Foundation Level & Started Diploma Level</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold">MARCH 2025:</span>
                    <span>Started doing research on Asynchronous Neural Network</span>
                  </li>
                </ul>
              </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-12">
          <div className="border-t-2 border-b-2 border-[#333333] py-2 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center uppercase">Featured Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
            <ProjectCard
              title="Web Interface for Finetuning AI Models"
              description="This web interface simplifies fine-tuning models by providing an intuitive platform for dataset management, training configuration, and real-time monitoring. Users can customize hyperparameters, track progress, and deploy models seamlessly"
              date="March 2025"
              image="https://i.ibb.co/m5rTQHtG/Fine-tune-example-removebg-preview.png?height=200&width=500"
            />
            <ProjectCard
              title="Clone of Bolt and V0"
              description="This AI-powered web development tool, inspired by Bolt and V0, acts as an AI wrapper that automates website creation. Users input requirements in natural language, and the system generates optimized, production-ready web applications."
              date="December 2024"
              image="https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F2edcbc59aba41eac20575bf8d9df568b3f7c8773-2880x1620.png&w=3840&q=75?height=200&width=400"
            />
            <ProjectCard
              title="GitHub Repo Maintainer"
              description="This AI-powered GitHub repo maintainer automates bug fixes, feature additions, and code management based on user prompts. It streamlines repository maintenance by analyzing issues, generating solutions, and committing updates autonomously."
              date="Febuary 2025"
              image="https://i.ibb.co/zHbX8zRw/maxresdefault-44-removebg-preview.png?height=200&width=400"
            />
            <ProjectCard
              title="Reproduced LLaMA and Mixtral architectures"
              description="Reproduced LLaMA and Mixtral architectures from research papers by implementing their core components from scratch, ensuring structural alignment with the original designs. Focused on replicating model architecture"
              date="August 2024"
              image="https://dimensionless.in/wp-content/uploads/2018/08/neural_network.png?height=200&width=400"
            />
          </div>
        </section>

        {/* Skills Section */}
        <div className="mt-12 border-2 border-black p-6 bg-[#f9f7f1]">
            <h3 className="text-xl font-bold mb-6 text-center">PROJECT OUTPUT OVER TIME</h3>
            <HandDrawnChart />
        </div>
        <section id="skills" className="mb-12">
          <div className="border-t-2 border-b-2 border-[#333333] py-2 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center uppercase">Technical Analytics</h2>
          </div>

          <div className="md:flex gap-8">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-4 border-b border-[#333333] pb-2">Skills Assessment</h3>
              <SkillsGraph />
            </div>

            <div className="md:w-1/2">
              <h3 className="text-xl font-bold mb-4 border-b border-[#333333] pb-2">Technical Expertise</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold mb-2">Programming</h4>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Python</li>
                    <li>Rust</li>
                    <li>Go</li>
                    <li>C/C++</li>
                    <li>JavaScript</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Machine Learning</h4>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Supervised Learning</li>
                    <li>Deep Learning</li>
                    <li>Natural Language Processing</li>
                    <li>Computer Vision</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Data Engineering</h4>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>ETL Pipelines</li>
                    <li>Data Warehousing</li>
                    <li>Big Data (Spark)</li>
                    <li>Cloud Platforms</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Tools & Frameworks</h4>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>TensorFlow/PyTorch</li>
                    <li>scikit-learn</li>
                    <li>Pandas/NumPy</li>
                    <li>Docker/Kubernetes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-12">
          <div className="border-t-2 border-b-2 border-[#333333] py-2 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center uppercase">Classified Advertisements</h2>
          </div>

          <div className="bg-[#f0ead6] border border-[#333333] p-6 text-center">
            <h3 className="text-xl font-bold mb-4">CONTACT INFORMATION</h3>
            <p className="mb-4">
              For inquiries, collaborations, or professional opportunities, please reach out through the following
              channels:
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-6 mt-6">
              <a href="mailto:example@email.com" className="flex items-center justify-center gap-2 hover:underline">
                <Mail size={18} />
                <span>realvixhal@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/vixhal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 hover:underline"
              >
                <Linkedin size={18} />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 hover:underline"
              >
                <Github size={18} />
                <span>GitHub Repository</span>
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t-2 border-[#333333] py-4 px-4 md:px-8 text-center text-sm">
        <div className="max-w-6xl mx-auto">
          <p>© {new Date().getFullYear()} The Vixhal Times. All Rights Reserved.</p>
          <p className="mt-1">Designed and Developed by Vishal Singh Baraiya</p>
        </div>
      </footer>
    </main>
      
  )
}

