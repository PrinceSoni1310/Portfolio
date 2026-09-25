import React from 'react';
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

export default Interests;