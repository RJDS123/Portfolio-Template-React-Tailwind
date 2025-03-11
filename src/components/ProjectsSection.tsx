import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLinkIcon, GithubIcon } from "lucide-react";
const ProjectsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const projects = [{
    title: "E-Commerce Platform",
    description: "A modern online shopping experience with React and Node.js",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    featured: true
  }, {
    title: "Health & Fitness App",
    description: "Track workouts and nutrition with this mobile-first web app",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    tech: ["React Native", "Firebase", "Redux"]
  }, {
    title: "AI Content Generator",
    description: "Generate blog posts and social media content with AI",
    image: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    tech: ["React", "OpenAI API", "Next.js"]
  }, {
    title: "Real Estate Platform",
    description: "Find and list properties with interactive maps",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80",
    tech: ["React", "Leaflet", "Firebase"]
  }, {
    title: "Portfolio Website",
    description: "Responsive developer portfolio with 3D elements",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    tech: ["React", "Three.js", "Framer Motion"]
  }];
  return <section id="projects" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <motion.h2 initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5
      }} className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-[#C599B6]">Projects</span>
        </motion.h2>
        <motion.p initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5,
        delay: 0.1
      }} className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
          A selection of my recent work and passion projects
        </motion.p>
        {/* Featured Project */}
        {projects.filter(p => p.featured).map((project, index) => <motion.div key={`featured-${index}`} initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.7
      }} className="mb-20">
              <div className="bg-[#FFF7F3] rounded-2xl overflow-hidden shadow-xl">
                <div className="flex flex-col lg:flex-row">
                  <div className="w-full lg:w-3/5 h-80 lg:h-auto relative overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                  </div>
                  <div className="w-full lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center">
                    <div className="inline-block px-3 py-1 mb-4 text-xs font-medium text-[#C599B6] bg-[#C599B6]/10 rounded-full">
                      Featured Project
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-6">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((tech, i) => <span key={i} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm">
                          {tech}
                        </span>)}
                    </div>
                    <div className="flex space-x-4">
                      <motion.a whileHover={{
                  scale: 1.05
                }} whileTap={{
                  scale: 0.95
                }} href="#" className="flex items-center px-4 py-2 bg-[#C599B6] text-white rounded-lg">
                        <span>Live Demo</span>
                        <ExternalLinkIcon size={16} className="ml-2" />
                      </motion.a>
                      <motion.a whileHover={{
                  scale: 1.05
                }} whileTap={{
                  scale: 0.95
                }} href="#" className="flex items-center px-4 py-2 border border-gray-300 rounded-lg">
                        <span>GitHub</span>
                        <GithubIcon size={16} className="ml-2" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>)}
        {/* Regular Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.filter(p => !p.featured).map((project, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-lg" onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)} whileHover={{
          y: -10,
          transition: {
            duration: 0.3
          }
        }}>
                <div className="relative h-60 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700" style={{
              transform: hoveredIndex === index ? "scale(1.1)" : "scale(1)"
            }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6 transition-opacity duration-300" style={{
              opacity: hoveredIndex === index ? 1 : 0
            }}>
                    <div className="w-full">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-white/80 text-sm">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => <span key={i} className="px-2 py-1 bg-gray-50 border border-gray-100 rounded-full text-xs">
                        {tech}
                      </span>)}
                  </div>
                  <div className="flex space-x-3">
                    <motion.a whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }} href="#" className="flex items-center px-3 py-1.5 bg-[#C599B6] text-white rounded-lg text-sm">
                      <span>Live Demo</span>
                      <ExternalLinkIcon size={14} className="ml-1" />
                    </motion.a>
                    <motion.a whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }} href="#" className="flex items-center px-3 py-1.5 border border-gray-200 rounded-lg text-sm">
                      <span>GitHub</span>
                      <GithubIcon size={14} className="ml-1" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>)}
        </div>
      </div>
    </section>;
};
export default ProjectsSection;