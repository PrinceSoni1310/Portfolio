import React from 'react';
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

export default Experience;