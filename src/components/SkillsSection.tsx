import React from "react";
import { motion } from "framer-motion";
import { CodeIcon, PencilRulerIcon, LayoutIcon, DatabaseIcon, BrainIcon, FlaskConicalIcon } from "lucide-react";
const SkillsSection = () => {
  const skills = [{
    title: "Frontend Development",
    icon: <CodeIcon size={28} />,
    color: "#C599B6",
    proficiency: 90,
    description: "React, TypeScript, Next.js"
  }, {
    title: "UI/UX Design",
    icon: <PencilRulerIcon size={28} />,
    color: "#E6B2BA",
    proficiency: 85,
    description: "Figma, Adobe XD, Prototyping"
  }, {
    title: "Responsive Design",
    icon: <LayoutIcon size={28} />,
    color: "#FAD0C4",
    proficiency: 95,
    description: "Tailwind CSS, SCSS, CSS Grid"
  }, {
    title: "Backend Development",
    icon: <DatabaseIcon size={28} />,
    color: "#C599B6",
    proficiency: 80,
    description: "Node.js, Express, MongoDB"
  }, {
    title: "AI Integration",
    icon: <BrainIcon size={28} />,
    color: "#E6B2BA",
    proficiency: 75,
    description: "OpenAI API, TensorFlow.js"
  }, {
    title: "Testing",
    icon: <FlaskConicalIcon size={28} />,
    color: "#FAD0C4",
    proficiency: 85,
    description: "Jest, React Testing Library"
  }];
  return <section id="skills" className="py-20 md:py-32 bg-gradient-to-br from-[#FFF7F3] to-white">
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
          My <span className="text-[#C599B6]">Skills</span>
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
          I've honed a diverse set of skills to create exceptional digital
          experiences
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => <motion.div key={index} initial={{
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
        }} whileHover={{
          y: -10,
          boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
          transition: {
            duration: 0.3
          }
        }} className="bg-white rounded-2xl p-8 shadow-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-transparent to-[#FFF7F3] rounded-bl-full opacity-50"></div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full mb-6" style={{
            backgroundColor: `${skill.color}20`
          }}>
                <div className="text-[#C599B6]">{skill.icon}</div>
              </div>
              <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
              <p className="text-gray-600 mb-4">{skill.description}</p>
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <motion.div initial={{
              width: 0
            }} whileInView={{
              width: `${skill.proficiency}%`
            }} viewport={{
              once: true
            }} transition={{
              duration: 1,
              delay: 0.5 + index * 0.1
            }} className="h-full rounded-full" style={{
              backgroundColor: skill.color
            }}></motion.div>
              </div>
              <div className="mt-2 text-sm text-gray-500 flex justify-between">
                <span>Proficiency</span>
                <span>{skill.proficiency}%</span>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default SkillsSection;