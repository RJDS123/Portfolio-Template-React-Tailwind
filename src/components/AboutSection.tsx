import React, { useEffect, useRef, Children } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "-100px"
  });
  const controls = useAnimation();
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  return <section id="about" className="py-20 md:py-32 bg-white">
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
      }} className="text-3xl md:text-4xl font-bold mb-16 text-center">
          About <span className="text-[#C599B6]">Me</span>
        </motion.h2>
        <div ref={ref} className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.7
        }} className="w-full md:w-2/5">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-[#C599B6] to-[#E6B2BA] opacity-30 blur-lg group-hover:opacity-70 transition duration-1000"></div>
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80" alt="Jane Porter" className="w-full h-auto object-cover rounded-xl relative z-10" />
            </div>
          </motion.div>
          <motion.div variants={containerVariants} initial="hidden" animate={controls} className="w-full md:w-3/5 space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-2xl font-bold text-[#C599B6]">My Journey</h3>
              <p className="text-gray-600">
                I'm a creative developer with over 5 years of experience
                crafting beautiful digital experiences. My passion lies at the
                intersection of design and technology, where I strive to create
                intuitive, engaging, and visually stunning applications.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-2xl font-bold text-[#C599B6]">My Approach</h3>
              <p className="text-gray-600">
                I believe in user-centered design that solves real problems.
                Every project begins with understanding the needs and goals,
                followed by ideation, prototyping, and iterative refinement. The
                result is thoughtfully crafted solutions that delight users and
                achieve business objectives.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-2xl font-bold text-[#C599B6]">
                My Philosophy
              </h3>
              <p className="text-gray-600">
                Technology should enhance human experiences, not complicate
                them. I'm committed to creating accessible, inclusive designs
                that work for everyone. I constantly learn and adapt to new
                technologies while maintaining a focus on timeless design
                principles.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default AboutSection;