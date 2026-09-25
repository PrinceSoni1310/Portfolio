import React from 'react';
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
            href="https://linkedin.com/in/princesoni1310" 
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

export default Footer;