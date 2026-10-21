import { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    document.documentElement.classList.add('js-ready');
  }, []);

  return <div className="app-shell"><motion.div className="scroll-progress" style={{ scaleX }} /><div className="ambient ambient-one"/><div className="ambient ambient-two"/><Navbar/><main><Hero/><About/><Experience/><Skills/><Projects/><Services/><Contact/></main><Footer/></div>;
}