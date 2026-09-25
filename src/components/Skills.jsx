import React from 'react';

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

export default Skills;