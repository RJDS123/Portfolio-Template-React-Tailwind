import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import * as THREE from "three";
const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  useEffect(() => {
    if (!canvasRef.current) return;
    // Set up Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create floating shapes
    const shapes: THREE.Mesh[] = [];
    const geometries = [new THREE.TorusGeometry(1, 0.3, 16, 32), new THREE.IcosahedronGeometry(1, 0), new THREE.OctahedronGeometry(1, 0)];
    const material = new THREE.MeshStandardMaterial({
      color: 0xc599b6,
      transparent: true,
      opacity: 0.7,
      wireframe: true
    });
    for (let i = 0; i < 5; i++) {
      const geometry = geometries[i % geometries.length];
      const shape = new THREE.Mesh(geometry, material);
      shape.position.x = (Math.random() - 0.5) * 10;
      shape.position.y = (Math.random() - 0.5) * 10;
      shape.position.z = (Math.random() - 0.5) * 5 - 5;
      shape.rotation.x = Math.random() * Math.PI;
      shape.rotation.y = Math.random() * Math.PI;
      const scale = Math.random() * 0.5 + 0.5;
      shape.scale.set(scale, scale, scale);
      scene.add(shape);
      shapes.push(shape);
    }

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xe6b2ba, 1);
    pointLight.position.set(2, 3, 4);
    scene.add(pointLight);
    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      shapes.forEach((shape, i) => {
        shape.rotation.x += 0.003;
        shape.rotation.y += 0.005;
        shape.position.y += Math.sin(Date.now() * 0.001 + i) * 0.005;
      });
      renderer.render(scene, camera);
    };

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    animate();
    return () => {
      window.removeEventListener("resize", handleResize);
      scene.clear();
      renderer.dispose();
    };
  }, []);
  return <section id="home" className="relative h-screen w-full overflow-hidden">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#E6B2BA]/30 to-[#FAD0C4]/30 backdrop-blur-sm z-0"></div>
      <div className="relative z-10 flex flex-col justify-center h-full max-w-6xl mx-auto px-8">
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }} className="mb-6">
          <h2 className="text-lg md:text-xl font-medium text-[#C599B6]">
            Hi there, I'm
          </h2>
        </motion.div>
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.4
      }}>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#C599B6] to-[#E6B2BA]">
            Jane Porter
          </h1>
          <div className="h-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
              Creative <span className="text-[#E6B2BA]">Developer</span>
            </h2>
          </div>
          <p className="max-w-lg text-gray-600 text-lg md:text-xl mt-6">
            I create stunning digital experiences with modern technologies and a
            passion for beautiful design.
          </p>
        </motion.div>
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.6
      }} className="mt-8 flex flex-wrap gap-4">
          <motion.button onClick={() => scrollToSection("contact")} whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} className="px-8 py-4 rounded-lg bg-gradient-to-r from-[#C599B6] to-[#E6B2BA] text-white font-medium flex items-center">
            Let's Work Together
            <ArrowRightIcon size={18} className="ml-2" />
          </motion.button>
          <motion.button onClick={() => scrollToSection("projects")} whileHover={{
          scale: 1.05,
          backgroundColor: "rgba(197, 153, 182, 0.1)"
        }} whileTap={{
          scale: 0.95
        }} className="px-8 py-4 rounded-lg border-2 border-[#C599B6] text-[#C599B6] font-medium">
            View My Work
          </motion.button>
        </motion.div>
      </div>
    </section>;
};
export default HeroSection;