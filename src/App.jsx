// src/App.jsx
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ByteShift from './components/ByteShift';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <ByteShift />
      <Experience />
      <Skills />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;