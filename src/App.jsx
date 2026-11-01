import { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import ThreeBackground from './components/ThreeBackground';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    document.documentElement.classList.add('js-ready');
  }, []);

  return (
    <div className="app-shell">
      {/* Precision 3D Cursor */}
      <CustomCursor />

      {/* Global 3D Interactive WebGL Starfield & Geometric Scene */}
      <ThreeBackground />

      {/* Dynamic Scroll Progress Bar */}
      <motion.div className="scroll-progress" style={{ scaleX }} />

      {/* Ambient Glow Atmosphere */}
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="ambient ambient-three" />

      {/* Main Content Layout */}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
