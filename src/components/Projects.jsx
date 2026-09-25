import React from 'react';
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
      githubUrl: "https://github.com/PrinceSoni1310/PG-Management-Frontend",
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
      githubUrl: "https://github.com/PrinceSoni1310/Fitness-club",
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

export default Projects;
