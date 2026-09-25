const fs = require('fs');
const path = require('path');

const files = {
  'src/index.css': `@import "tailwindcss";

@layer base {
  html {
    scroll-behavior: smooth;
    scroll-padding-top: 5rem;
  }
  body {
    @apply bg-[#0f172a] text-slate-200 font-sans;
  }
}

::selection {
  background-color: rgba(20, 184, 166, 0.3);
}`,

  'src/main.jsx': `import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)`,

  'src/App.jsx': `import React from 'react';
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

export default App;`,

  'src/components/Navbar.jsx': `import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full bg-[#0f172a]/90 backdrop-blur-sm z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#home" className="text-xl font-bold text-teal-400">Prince Soni</a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-300 hover:text-teal-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-teal-400 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#0f172a] border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-300 hover:text-teal-400 block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;`,

  'src/components/Hero.jsx': `import React from 'react';
import { Mail, ArrowRight, Download } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 flex items-center min-h-[90vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-left">
          <p className="text-teal-400 font-medium mb-2 tracking-wide uppercase">Welcome to my portfolio</p>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-100 mb-4 leading-tight">
            Hi, I'm <span className="text-teal-400">Prince Soni</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-300 mb-6">
            Software Developer
          </h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
            MERN Stack Developer focused on building modern, responsive and full-stack web applications using React.js, Node.js, Express.js and MongoDB.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <a 
              href="#projects" 
              className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-slate-900 font-medium px-6 py-3 rounded-lg transition-colors"
            >
              View Projects
              <ArrowRight size={18} />
            </a>
            <a 
              href="#contact" 
              className="flex items-center gap-2 border border-slate-600 hover:border-teal-400 hover:text-teal-400 text-slate-300 font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Contact Me
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-slate-600 hover:border-teal-400 hover:text-teal-400 text-slate-300 font-medium px-6 py-3 rounded-lg transition-colors"
            >
              <Download size={18} />
              Resume
            </a>
          </div>

          <div className="flex items-center gap-5">
            <a 
              href="https://linkedin.com/in/prince-soni" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-teal-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a 
              href="mailto:soniprince.dev@gmail.com" 
              className="text-slate-400 hover:text-teal-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="flex-1 flex justify-center md:justify-end w-full max-w-md">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-slate-800 overflow-hidden shadow-2xl flex items-center justify-center bg-slate-800">
            <span className="text-slate-500 font-medium">PROFILE_IMAGE_HERE</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;`,

  'src/components/About.jsx': `import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-100 mb-8 flex items-center gap-4">
          <span className="w-8 h-1 bg-teal-500 rounded-full"></span>
          About Me
        </h2>
        
        <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 md:p-10 shadow-lg">
          <div className="text-slate-300 text-lg leading-relaxed space-y-6">
            <p>
              I am a dedicated MERN Stack Developer with hands-on experience in building scalable and responsive web applications. My technical expertise lies in full-stack development using MongoDB, Express.js, React.js, and Node.js.
            </p>
            <p>
              Throughout my professional journey, I have successfully integrated frontend and backend systems, managed databases, and developed robust RESTful APIs. I also have practical experience implementing secure, role-based authentication systems and developing clean, user-friendly interfaces.
            </p>
            <p>
              I am passionate about writing clean, maintainable code and solving complex technical challenges. I am interested in continuously learning modern web technologies to stay up-to-date with industry standards and deliver high-quality software solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;`,

  'src/components/Skills.jsx': `import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "Frontend",
      skills: ["React.js", "Tailwind CSS"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js"]
    },
    {
      title: "Database",
      skills: ["MongoDB", "SQL"]
    },
    {
      title: "Developer Tools",
      skills: ["GitHub", "VS Code", "Postman"]
    }
  ];

  return (
    <section id="skills" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-100 mb-10 flex items-center gap-4">
          <span className="w-8 h-1 bg-teal-500 rounded-full"></span>
          Skills & Technologies
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-slate-800/40 border border-slate-700 p-6 rounded-xl hover:border-teal-500/50 transition-colors">
              <h3 className="text-xl font-semibold text-slate-100 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="bg-slate-900 text-teal-400 border border-slate-700 px-4 py-2 rounded-lg text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;`,

  'src/components/Experience.jsx': `import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "INVENTION HILL",
      position: "Web Developer",
      duration: "Apr 2026 – Present",
      description: "Working on web application development using React.js, Node.js, and SQL, contributing to frontend and backend development, REST API integration, and database management.",
      technologies: ["React.js", "Node.js", "SQL", "REST APIs"]
    },
    {
      company: "GROWNITED PRIVATE LIMITED",
      position: "MERN Stack Intern",
      duration: "Jan 2026 – Apr 2026",
      description: "Completed a 3-month MERN Stack Internship at Grownited Private Limited, gaining practical experience in full-stack web development and modern software development practices.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js"]
    }
  ];

  return (
    <section id="experience" className="py-16 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-100 mb-10 flex items-center gap-4">
          <span className="w-8 h-1 bg-teal-500 rounded-full"></span>
          Experience
        </h2>
        
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 text-teal-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <Briefcase size={18} />
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-800/80 border border-slate-700 p-6 rounded-xl shadow-lg transition-all hover:border-teal-500/50">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                  <h3 className="font-bold text-xl text-slate-100">{exp.position}</h3>
                  <span className="text-teal-400 text-sm font-medium whitespace-nowrap bg-teal-400/10 px-3 py-1 rounded-full">
                    {exp.duration}
                  </span>
                </div>
                <div className="text-slate-300 font-medium mb-4">{exp.company}</div>
                <p className="text-slate-400 text-sm mb-5 leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs font-medium text-slate-300 bg-slate-700/50 px-2.5 py-1 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;`,

  'src/components/Projects.jsx': `import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      name: "PG Management System",
      role: "Full-Stack Developer",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB"],
      description: "Developed a full-stack PG Management System with role-based authentication for Admin, Owner and Tenant users.",
      features: [
        "Role-based authentication",
        "Secure login and registration",
        "RESTful APIs",
        "MongoDB database integration",
        "Separate dashboards for tenants and owners",
        "Property management & Tenant tracking",
        "Booking functionality",
        "Axios-based frontend/backend integration"
      ],
      githubUrl: "GITHUB_URL_HERE",
      liveUrl: "LIVE_DEMO_URL_HERE"
    },
    {
      name: "Fitness Club",
      role: "Front-End Developer",
      techStack: ["HTML", "CSS", "JavaScript", "React.js", "Node.js"],
      description: "Developed a responsive and interactive fitness web platform that allows users to register, log in, and access personalized workout and diet plans.",
      features: [
        "User registration and login",
        "Personalized workout plans",
        "Personalized diet plans",
        "Age-based workout levels",
        "Exercise routines & Motivational challenges",
        "Responsive interface"
      ],
      githubUrl: "GITHUB_URL_HERE",
      liveUrl: "LIVE_DEMO_URL_HERE"
    }
  ];

  return (
    <section id="projects" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-100 mb-10 flex items-center gap-4">
          <span className="w-8 h-1 bg-teal-500 rounded-full"></span>
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-800/40 border border-slate-700 rounded-2xl overflow-hidden flex flex-col group hover:border-teal-500/50 transition-colors">
              <div className="h-48 bg-slate-800 flex items-center justify-center border-b border-slate-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/60 z-10"></div>
                <span className="text-slate-500 font-medium z-20">PROJECT_IMAGE_HERE</span>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-100 mb-1">{project.name}</h3>
                    <p className="text-teal-400 font-medium text-sm">{project.role}</p>
                  </div>
                  <div className="flex gap-3">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-teal-400 transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <FaGithub size={20} />
                    </a>
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-teal-400 transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-6 flex-1">
                  <h4 className="text-slate-200 font-medium text-sm mb-3">Key Features:</h4>
                  <ul className="list-disc list-inside text-slate-400 text-sm space-y-1.5 marker:text-teal-500">
                    {project.features.map((feature, fIndex) => (
                      <li key={fIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-700/50">
                  {project.techStack.map((tech, tIndex) => (
                    <span key={tIndex} className="text-xs font-medium text-teal-300 bg-teal-900/20 px-2.5 py-1 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;`,

  'src/components/Education.jsx': `import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const educations = [
    {
      institution: "Ahmedabad Institute Of Technology, Ahmedabad",
      degree: "Bachelor of Engineering – Computer Engineering",
      period: "2022 – 2026"
    },
    {
      institution: "Vibrant School of Science, Deesa, B.K",
      degree: "11–12 Science",
      period: "2020 – 2022"
    }
  ];

  return (
    <section id="education" className="py-16 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-100 mb-10 flex items-center gap-4">
          <span className="w-8 h-1 bg-teal-500 rounded-full"></span>
          Education
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educations.map((edu, index) => (
            <div key={index} className="bg-slate-800/60 border border-slate-700 p-6 rounded-xl flex items-start gap-4 hover:border-teal-500/50 transition-colors">
              <div className="bg-slate-700/50 p-3 rounded-lg text-teal-400 shrink-0">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-100 mb-1">{edu.degree}</h3>
                <p className="text-slate-300 font-medium mb-2">{edu.institution}</p>
                <p className="text-teal-400 text-sm font-medium">{edu.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;`,

  'src/components/Certification.jsx': `import React from 'react';
import { Award } from 'lucide-react';

const Certification = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-100 mb-10 flex items-center gap-4">
          <span className="w-8 h-1 bg-teal-500 rounded-full"></span>
          Certification
        </h2>
        
        <div className="bg-slate-800/40 border border-slate-700 p-6 md:p-8 rounded-2xl flex flex-col md:flex-row gap-6 items-start hover:border-teal-500/50 transition-colors">
          <div className="bg-slate-700/50 p-4 rounded-xl text-teal-400 shrink-0">
            <Award size={32} />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-2">Advanced Course on Emerging Technologies</h3>
            <p className="text-teal-400 font-medium mb-4">Code Unnati – SAP CSR Initiative</p>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              Completed hands-on training in Machine Learning, Internet of Things (IoT), Deep Learning, Computer Vision, and SAP ABAP on Business Technology Platform (BTP), gaining practical exposure to modern industry technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certification;`,

  'src/components/Interests.jsx': `import React from 'react';
import { Video, PenTool, Mic2 } from 'lucide-react';

const Interests = () => {
  const interests = [
    { name: "Video Editing", icon: <Video size={20} /> },
    { name: "Content Creation", icon: <PenTool size={20} /> },
    { name: "Public Speaking", icon: <Mic2 size={20} /> }
  ];

  return (
    <section className="py-16 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-100 mb-10 flex items-center gap-4">
          <span className="w-8 h-1 bg-teal-500 rounded-full"></span>
          Beyond Coding
        </h2>
        
        <div className="flex flex-wrap gap-4">
          {interests.map((interest, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3 bg-slate-800 border border-slate-700 px-5 py-3 rounded-lg hover:bg-slate-700 hover:border-teal-500/50 transition-all text-slate-200"
            >
              <span className="text-teal-400">{interest.icon}</span>
              <span className="font-medium">{interest.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;`,

  'src/components/Contact.jsx': `import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-6">
          Let's Connect
        </h2>
        
        <p className="text-slate-400 text-lg md:text-xl mb-12 leading-relaxed">
          I'm open to new opportunities, collaborations and interesting projects. Feel free to reach out.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
          <a 
            href="mailto:soniprince.dev@gmail.com" 
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-slate-900 font-medium px-8 py-3.5 rounded-lg transition-colors"
          >
            <Mail size={20} />
            Email Me
          </a>
          <a 
            href="https://linkedin.com/in/prince-soni" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 border border-slate-600 hover:border-teal-400 hover:text-teal-400 text-slate-300 font-medium px-8 py-3.5 rounded-lg transition-colors"
          >
            <FaLinkedin size={20} />
            Connect on LinkedIn
          </a>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 border-t border-slate-800 pt-10">
          <a href="mailto:soniprince.dev@gmail.com" className="flex items-center gap-3 text-slate-400 hover:text-teal-400 transition-colors group">
            <div className="bg-slate-800 p-3 rounded-full group-hover:bg-slate-700 transition-colors">
              <Mail size={20} className="text-teal-400" />
            </div>
            <span className="font-medium">soniprince.dev@gmail.com</span>
          </a>
          <a href="tel:+919023482484" className="flex items-center gap-3 text-slate-400 hover:text-teal-400 transition-colors group">
            <div className="bg-slate-800 p-3 rounded-full group-hover:bg-slate-700 transition-colors">
              <Phone size={20} className="text-teal-400" />
            </div>
            <span className="font-medium">+91 9023482484</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;`,

  'src/components/Footer.jsx': `import React from 'react';
import { Mail } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0b1120] py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm">
          © 2026 Prince Soni. All rights reserved.
        </p>
        
        <div className="flex items-center gap-4">
          <a 
            href="https://linkedin.com/in/prince-soni" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-teal-400 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>
          <a 
            href="mailto:soniprince.dev@gmail.com" 
            className="text-slate-500 hover:text-teal-400 transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;`
};

for (const [filePath, content] of Object.entries(files)) {
  const fullPath = path.join(process.cwd(), filePath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content, 'utf8');
  console.log(`Wrote ${filePath}`);
}
