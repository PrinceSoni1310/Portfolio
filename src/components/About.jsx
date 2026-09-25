import React from 'react';

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

export default About;