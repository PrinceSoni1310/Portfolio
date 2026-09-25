import React from 'react';
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
            href="https://linkedin.com/in/princesoni1310" 
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

export default Contact;