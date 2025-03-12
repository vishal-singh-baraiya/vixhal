"use client";

import React from 'react';
import { Newspaper, Github, Mail, Linkedin } from "lucide-react";
import ProjectCard from "@/components/project-card";
import SkillsGraph from "@/components/skills-graph";
import AnimatedHeadline from "@/components/animated-headline";
import { Button } from "@/components/ui/button";
import HandDrawnChart from "@/components/hand-drawn-chart";
import TypewriterEffect from "@/components/typewriter-effect";

export default function Home() {
  // Using React.Fragment instead of div or main
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      'div',
      { 
        className: "min-h-screen bg-[#f8f5e6] text-[#333333] font-serif relative overflow-hidden" 
      },
      // Paper texture overlay
      React.createElement('div', {
        className: "absolute inset-0 pointer-events-none z-10 opacity-40",
        style: {
          backgroundImage: "url('https://thedesignest.net/wp-content/uploads/2021/12/6-2.jpg')",
          backgroundSize: "cover",
          mixBlendMode: "multiply",
        }
      }),

      // Masthead
      React.createElement('header', {
        className: "border-b-2 border-[#333333] py-6 px-4 md:px-8"
      }, 
        React.createElement('div', { className: "max-w-6xl mx-auto" },
          React.createElement('div', { className: "text-center mb-4" },
            React.createElement('h1', { className: "text-4xl md:text-6xl font-bold uppercase tracking-tight leading-none" },
              React.createElement(TypewriterEffect, { text: "The Vixhal Times" })
            ),
            React.createElement('p', { className: "text-sm mt-1" }, "ESTABLISHED 2025"),
            React.createElement('div', { className: "flex justify-center items-center gap-2 mt-2 text-xs" },
              React.createElement('span', null, "VOL. XXIV"),
              React.createElement('span', { className: "w-1 h-1 rounded-full bg-black" }),
              React.createElement('span', null, "ISSUE 42"),
              React.createElement('span', { className: "w-1 h-1 rounded-full bg-black" }),
              React.createElement('span', null, 
                new Date().toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              )
            )
          ),
          
          React.createElement('nav', { className: "flex justify-center border-t border-b border-[#333333] py-2" },
            React.createElement('ul', { className: "flex flex-wrap gap-6 md:gap-10 text-sm uppercase tracking-wider" },
              React.createElement('li', null, 
                React.createElement('a', { href: "#about", className: "hover:underline" }, "Home")
              ),
              React.createElement('li', null, 
                React.createElement('a', { href: "#projects", className: "hover:underline" }, "Projects")
              ),
              React.createElement('li', null, 
                React.createElement('a', { href: "#skills", className: "hover:underline" }, "Skills")
              ),
              React.createElement('li', null, 
                React.createElement('a', { href: "#contact", className: "hover:underline" }, "Contact")
              )
            )
          )
        )
      ),

      // Main content
      React.createElement('div', { className: "max-w-6xl mx-auto px-4 md:px-8 py-8" },
        // About Section
        React.createElement('section', { id: "about", className: "mb-12" },
          React.createElement(AnimatedHeadline, { text: "Data Science & AI Student" }),
          
          React.createElement('div', { className: "md:flex gap-6 mt-6" },
            // Left column
            React.createElement('div', { className: "md:w-2/3" },
              React.createElement('p', { className: "text-lg first-letter:text-4xl first-letter:font-bold first-letter:mr-1 first-letter:float-left mb-4" },
                "I am a student at IIT Madras, pursuing a BS in Data Science and Applications. Currently, I am working on asynchronous neural networks, exploring novel approaches to enhance efficiency and scalability in deep learning. Alongside AI, I also have experience in web development."
              ),
              React.createElement('p', { className: "mb-4 text-lg" },
                "I have successfully reproduced GPT-2, LLaMA, and Mistral from research papers, deepening my understanding of transformer architectures and large-scale language models. Additionally, I am part of AI4Bharat, contributing to the development of foundation models for India."
              ),
              
              // At A Glance box
              React.createElement('div', { className: "mt-6 border-2 border-black p-4 bg-[#e5e0d1]" },
                React.createElement('h3', { className: "font-bold text-lg mb-2 uppercase border-b border-black pb-1" }, "At A Glance"),
                React.createElement('ul', { className: "space-y-2 text-sm" },
                  // Simplified list items for brevity
                  React.createElement('li', { className: "flex" },
                    React.createElement('span', { className: "font-bold mr-2" }, "•"),
                    React.createElement('span', null, "BS in Data Science, IIT Madras")
                  ),
                  React.createElement('li', { className: "flex" },
                    React.createElement('span', { className: "font-bold mr-2" }, "•"),
                    React.createElement('span', null, "Reproduced GPT-2, LLaMA, and Mixtral from research papers.")
                  ),
                  React.createElement('li', { className: "flex" },
                    React.createElement('span', { className: "font-bold mr-2" }, "•"),
                    React.createElement('span', null, "Researching on Asynchronous Neural Network.")
                  ),
                  React.createElement('li', { className: "flex" },
                    React.createElement('span', { className: "font-bold mr-2" }, "•"),
                    React.createElement('span', null, "Contributed to 5+ open-source AI frameworks")
                  ),
                  React.createElement('li', { className: "flex" },
                    React.createElement('span', { className: "font-bold mr-2" }, "•"),
                    React.createElement('span', null, "Experienced in building AI wrappers.")
                  )
                )
              ),
              
              // Buttons
              React.createElement('div', { className: "flex gap-4 mt-6" },
                React.createElement(Button, { variant: "outline", className: "border-black rounded-none" },
                  React.createElement('span', { className: "mr-2" }, "Resume"),
                  React.createElement(Newspaper, { size: 16 })
                ),
                React.createElement(Button, { variant: "outline", className: "border-black rounded-none" },
                  React.createElement('span', { className: "mr-2" }, "GitHub"),
                  React.createElement(Github, { size: 16 })
                )
              )
            ),
            
            // Right column
            React.createElement('div', { className: "md:w-1/3 mt-6 md:mt-0 border border-[#333333] p-4 bg-[#f0ead6]" },
              React.createElement('div', { className: "md:col-span-4" },
                // Profile image with decorative elements
                React.createElement('div', { className: "relative" },
                  React.createElement('div', { className: "absolute inset-0 border-2 border-black bg-[#e5e0d1] rotate-3" }),
                  React.createElement('div', { className: "absolute inset-0 border-2 border-black bg-[#e5e0d1] -rotate-2" }),
                  React.createElement('div', { className: "relative border-2 border-black overflow-hidden" },
                    React.createElement('img', {
                      src: "https://i.ibb.co/7xB2btZD/Screenshot-2024-11-29-021540-like-paper.png?height=500&width=400",
                      alt: "Portrait of the data scientist",
                      className: "w-full grayscale contrast-125 mix-blend-multiply"
                    }),
                    React.createElement('div', { className: "absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-2 text-white text-center text-sm" },
                      "Leading Data Scientist & AI Engineer"
                    )
                  )
                ),
                
                // Latest Updates
                React.createElement('h3', { className: "text-xl font-bold mb-3 text-center border-b border-[#333333] pb-2" }, "Latest Updates"),
                React.createElement('ul', { className: "space-y-3 text-sm" },
                  React.createElement('li', { className: "flex gap-2" },
                    React.createElement('span', { className: "font-bold" }, "MAY 2023:"),
                    React.createElement('span', null, "Vishal started BS in DS and AI at IIT Madras.")
                  ),
                  React.createElement('li', { className: "flex gap-2" },
                    React.createElement('span', { className: "font-bold" }, "MAY 2024:"),
                    React.createElement('span', null, "Completed Foundation Level & Started Diploma Level")
                  ),
                  React.createElement('li', { className: "flex gap-2" },
                    React.createElement('span', { className: "font-bold" }, "MARCH 2025:"),
                    React.createElement('span', null, "Started doing research on Asynchronous Neural Network")
                  )
                )
              )
            )
          )
        ),
        
        // Projects Section
        React.createElement('section', { id: "projects", className: "mb-12" },
          React.createElement('div', { className: "border-t-2 border-b-2 border-[#333333] py-2 mb-6" },
            React.createElement('h2', { className: "text-2xl md:text-3xl font-bold text-center uppercase" }, "Featured Projects")
          ),
          
          React.createElement('div', { className: "grid md:grid-cols-2 grid-cols-1 gap-6" },
            React.createElement(ProjectCard, {
              title: "Web Interface for Finetuning AI Models",
              description: "This web interface simplifies fine-tuning models by providing an intuitive platform for dataset management, training configuration, and real-time monitoring. Users can customize hyperparameters, track progress, and deploy models seamlessly",
              date: "March 2025",
              image: "https://i.ibb.co/m5rTQHtG/Fine-tune-example-removebg-preview.png?height=200&width=500"
            }),
            React.createElement(ProjectCard, {
              title: "Clone of Bolt and V0",
              description: "This AI-powered web development tool, inspired by Bolt and V0, acts as an AI wrapper that automates website creation. Users input requirements in natural language, and the system generates optimized, production-ready web applications.",
              date: "December 2024",
              image: "https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F2edcbc59aba41eac20575bf8d9df568b3f7c8773-2880x1620.png&w=3840&q=75?height=200&width=400"
            }),
            React.createElement(ProjectCard, {
              title: "GitHub Repo Maintainer",
              description: "This AI-powered GitHub repo maintainer automates bug fixes, feature additions, and code management based on user prompts. It streamlines repository maintenance by analyzing issues, generating solutions, and committing updates autonomously.",
              date: "Febuary 2025",
              image: "https://i.ibb.co/zHbX8zRw/maxresdefault-44-removebg-preview.png?height=200&width=400"
            }),
            React.createElement(ProjectCard, {
              title: "Reproduced LLaMA and Mixtral architectures",
              description: "Reproduced LLaMA and Mixtral architectures from research papers by implementing their core components from scratch, ensuring structural alignment with the original designs. Focused on replicating model architecture",
              date: "August 2024",
              image: "https://dimensionless.in/wp-content/uploads/2018/08/neural_network.png?height=200&width=400"
            })
          )
        ),
        
        // Chart Section
        React.createElement('div', { className: "mt-12 border-2 border-black p-6 bg-[#f9f7f1]" },
          React.createElement('h3', { className: "text-xl font-bold mb-6 text-center" }, "PROJECT OUTPUT OVER TIME"),
          React.createElement(HandDrawnChart)
        ),
        
        // Skills Section
        React.createElement('section', { id: "skills", className: "mb-12" },
          React.createElement('div', { className: "border-t-2 border-b-2 border-[#333333] py-2 mb-6" },
            React.createElement('h2', { className: "text-2xl md:text-3xl font-bold text-center uppercase" }, "Technical Analytics")
          ),
          
          React.createElement('div', { className: "md:flex gap-8" },
            // Skills graph
            React.createElement('div', { className: "md:w-1/2 mb-6 md:mb-0" },
              React.createElement('h3', { className: "text-xl font-bold mb-4 border-b border-[#333333] pb-2" }, "Skills Assessment"),
              React.createElement(SkillsGraph)
            ),
            
            // Technical expertise
            React.createElement('div', { className: "md:w-1/2" },
              React.createElement('h3', { className: "text-xl font-bold mb-4 border-b border-[#333333] pb-2" }, "Technical Expertise"),
              React.createElement('div', { className: "grid grid-cols-2 gap-4" },
                // Simplified for brevity - showing just one category
                React.createElement('div', null,
                  React.createElement('h4', { className: "font-bold mb-2" }, "Programming"),
                  React.createElement('ul', { className: "list-disc pl-5 text-sm space-y-1" },
                    React.createElement('li', null, "Python"),
                    React.createElement('li', null, "Rust"),
                    React.createElement('li', null, "Go"),
                    React.createElement('li', null, "C/C++"),
                    React.createElement('li', null, "JavaScript")
                  )
                ),
                // Other categories would follow the same pattern
                React.createElement('div', null,
                  React.createElement('h4', { className: "font-bold mb-2" }, "Machine Learning"),
                  React.createElement('ul', { className: "list-disc pl-5 text-sm space-y-1" },
                    React.createElement('li', null, "Supervised Learning"),
                    React.createElement('li', null, "Deep Learning"),
                    React.createElement('li', null, "Natural Language Processing"),
                    React.createElement('li', null, "Computer Vision")
                  )
                )
              )
            )
          )
        ),
        
        // Contact Section
        React.createElement('section', { id: "contact", className: "mb-12" },
          React.createElement('div', { className: "border-t-2 border-b-2 border-[#333333] py-2 mb-6" },
            React.createElement('h2', { className: "text-2xl md:text-3xl font-bold text-center uppercase" }, "Classified Advertisements")
          ),
          
          React.createElement('div', { className: "bg-[#f0ead6] border border-[#333333] p-6 text-center" },
            React.createElement('h3', { className: "text-xl font-bold mb-4" }, "CONTACT INFORMATION"),
            React.createElement('p', { className: "mb-4" },
              "For inquiries, collaborations, or professional opportunities, please reach out through the following channels:"
            ),
            
            React.createElement('div', { className: "flex flex-col md:flex-row justify-center gap-6 mt-6" },
              React.createElement('a', { 
                href: "mailto:example@email.com", 
                className: "flex items-center justify-center gap-2 hover:underline" 
              },
                React.createElement(Mail, { size: 18 }),
                React.createElement('span', null, "realvixhal@gmail.com")
              ),
              React.createElement('a', { 
                href: "https://www.linkedin.com/in/vixhal",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "flex items-center justify-center gap-2 hover:underline"
              },
                React.createElement(Linkedin, { size: 18 }),
                React.createElement('span', null, "LinkedIn Profile")
              ),
              React.createElement('a', { 
                href: "https://github.com",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "flex items-center justify-center gap-2 hover:underline"
              },
                React.createElement(Github, { size: 18 }),
                React.createElement('span', null, "GitHub Repository")
              )
            )
          )
        )
      ),
      
      // Footer
      React.createElement('footer', { className: "border-t-2 border-[#333333] py-4 px-4 md:px-8 text-center text-sm" },
        React.createElement('div', { className: "max-w-6xl mx-auto" },
          React.createElement('p', null, `© ${new Date().getFullYear()} The Vixhal Times. All Rights Reserved.`),
          React.createElement('p', { className: "mt-1" }, "Designed and Developed by Vishal Singh Baraiya")
        )
      )
    )
  );
}
