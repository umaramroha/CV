import React from 'react';

const Education = () => {
  const education = [
    {
      icon: 'fa-graduation-cap',
      year: '2022',
      degree: 'Diploma in Pharmacy',
      subDegree: 'D.Pharm',
      institution: 'SGGS College of Pharmacy & Research Center, Sambhal, UP',
      board: 'Board of Technical Education, UP',
    },
    {
      icon: 'fa-microscope',
      year: '2018',
      degree: 'Bachelor of Science',
      subDegree: 'B.Sc. · Biology',
      institution: 'MJP Rohilkhand University, Bareilly',
      board: 'Specialization in Biological Sciences',
      isTerracotta: true,
    },
  ];

  return (
    <section id="education" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="section-label">
            <span className="w-8 h-0.5 bg-terracotta"></span>
            Education
          </div>
          <h2 className="section-title">
            Academic <span className="text-forest italic">foundation</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div 
              key={index}
              className={`bg-cream rounded-3xl p-10 border border-cream-dark transition-all duration-400 hover:-translate-y-2 hover:shadow-xl relative overflow-hidden`}
            >
              <div className="flex justify-between items-start mb-6">
                <div className={`w-14 h-14 flex items-center justify-center rounded-2xl text-xl ${
                  edu.isTerracotta ? 'bg-terracotta text-white' : 'bg-forest text-white'
                }`}>
                  <i className={`fas ${edu.icon}`}></i>
                </div>
                <span className={`font-display text-5xl font-bold ${
                  edu.isTerracotta ? 'text-terracotta/15' : 'text-forest/10'
                }`}>
                  0{index + 1}
                </span>
              </div>

              <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 ${
                edu.isTerracotta 
                  ? 'bg-terracotta/10 text-terracotta' 
                  : 'bg-forest/10 text-forest'
              }`}>
                {edu.year}
              </div>

              <h3 className="font-display text-2xl font-bold mb-1">{edu.degree}</h3>
              <p className={`text-base font-semibold mb-4 ${
                edu.isTerracotta ? 'text-terracotta' : 'text-forest'
              }`}>
                {edu.subDegree}
              </p>
              <p className="text-stone mb-4">{edu.institution}</p>
              <p className="text-sm text-muted pt-4 border-t border-cream-dark">
                {edu.board}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
