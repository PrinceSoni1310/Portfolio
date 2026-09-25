import React from 'react';
import { Mail, ArrowRight, Download } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import hero from '../assets/hero.png';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 flex items-center min-h-[90vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
        
        {/* Text Content */}
        <div className="flex-1 text-left order-2 md:order-1">
          <div className="flex flex-col font-black text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] leading-[0.9] tracking-tighter mb-8">
            <span className="text-teal-500">SOFTWARE</span>
            <span className="text-slate-100">DEVELOPER</span>
          </div>
          
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            Hi! I'm <span className="text-slate-100 font-bold">Prince Soni</span>. A MERN Stack Developer with experience in building scalable, modern, and full-stack web applications using React.js, Node.js, Express.js and MongoDB.
          </p>
          
          <div className="flex flex-wrap gap-4 items-center mb-10">
            <a 
              href="#contact" 
              className="bg-teal-500 hover:bg-teal-600 text-slate-900 font-bold px-8 py-3.5 tracking-wide transition-colors"
            >
              Contact Me
            </a>
            
            <a 
              href="#projects" 
              className="flex items-center gap-2 border border-slate-600 hover:border-teal-400 hover:text-teal-400 text-slate-300 font-medium px-6 py-3.5 transition-colors"
            >
              View Projects
              <ArrowRight size={18} />
            </a>

            <a 
              href="/resume.pdf" 
              download="Prince_Soni_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-slate-600 hover:border-teal-400 hover:text-teal-400 text-slate-300 font-medium px-6 py-3.5 transition-colors"
            >
              <Download size={18} />
              Resume
            </a>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href="https://www.linkedin.com/in/princesoni1310/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-teal-400 flex items-center gap-2 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
              <span className="font-medium text-sm">LinkedIn</span>
            </a>
            <a 
              href="mailto:soniprince.dev@gmail.com" 
              className="text-slate-400 hover:text-teal-400 flex items-center gap-2 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
              <span className="font-medium text-sm">Email</span>
            </a>
          </div>
        </div>
        
        {/* Image Area */}
        <div className="flex-1 flex justify-center w-full max-w-sm md:max-w-md lg:max-w-[450px] relative order-1 md:order-2 mb-12 md:mb-0 ml-auto">
          {/* Decorative outline behind the image (from the reference) */}
          <div className="absolute top-0 left-0 w-full h-full rounded-2xl border-2 border-teal-500/30 -translate-x-4 translate-y-4 md:-translate-x-8 md:translate-y-8 -z-10"></div>
          
          {/* Large portrait image with slight rounding */}
          <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-slate-800 shadow-[0_0_40px_rgba(0,0,0,0.5)] flex items-center justify-center border border-slate-700/50">
            <img src={hero} alt="Prince Soni" className="w-full h-full object-cover object-top" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;