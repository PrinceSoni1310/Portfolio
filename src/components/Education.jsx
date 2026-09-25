import React from 'react';
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

export default Education;