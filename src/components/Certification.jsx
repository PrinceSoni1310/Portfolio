import React from 'react';
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

export default Certification;