import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certification from './components/Certification';
import Interests from './components/Interests';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#0f172a] text-slate-200 min-h-screen font-sans selection:bg-teal-500/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certification />
        <Interests />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;