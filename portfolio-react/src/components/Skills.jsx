import React from 'react';

const Skills = () => {
  const skills = [
    {
      icon: 'fa-headset',
      title: 'Sales & Client Management',
      desc: 'Core expertise built over 7 years — from Hindi calling and chat processes to WhatsApp-based customer engagement.',
      tags: ['Hindi Calling', 'Chat Process', 'WhatsApp Sales', 'Client Retention'],
      isLarge: true,
    },
    {
      icon: 'fa-users',
      title: 'Customer Service',
      desc: 'Delivering exceptional experiences with strong problem-solving skills.',
    },
    {
      icon: 'fa-database',
      title: 'CRM & Coordination',
      desc: 'Managing delivery coordination and CRM records efficiently.',
    },
    {
      icon: 'fa-bullhorn',
      title: 'Digital Marketing Exposure',
      desc: 'Basic hands-on experience with Google/Facebook ads and WhatsApp status promotion campaigns.',
      isWide: true,
    },
    {
      icon: 'fa-comments',
      title: 'Bilingual',
      desc: 'Fluent verbal & written communication in English and Hindi.',
    },
    {
      icon: 'fa-laptop',
      title: 'MS Office & Tools',
      desc: 'Proficient in MS Office Suite, CRM systems, and dialer software.',
    },
  ];

  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="section-label">
            <span className="w-8 h-0.5 bg-terracotta"></span>
            What I Bring
          </div>
          <h2 className="section-title">
            Skills that drive <span className="text-forest italic">real results</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl p-8 border border-cream-dark transition-all duration-400 hover:-translate-y-2 hover:shadow-xl flex flex-col ${
                skill.isLarge ? 'md:col-span-2 md:row-span-2 bg-forest text-white relative overflow-hidden' : ''
              } ${skill.isWide ? 'md:col-span-2 flex-row items-center gap-6' : ''}`}
            >
              {/* Background decoration for large card */}
              {skill.isLarge && (
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-terracotta/20 rounded-full blur-3xl"></div>
              )}

              <div className={`w-14 h-14 flex items-center justify-center rounded-2xl mb-5 flex-shrink-0 ${
                skill.isLarge 
                  ? 'bg-white/10 text-terracotta' 
                  : 'bg-forest/10 text-forest'
              } ${skill.isWide ? 'mb-0' : ''}`}>
                <i className={`fas ${skill.icon} text-xl`}></i>
              </div>

              <div className={skill.isWide ? '' : 'flex-1'}>
                <h3 className={`font-display text-lg font-bold mb-3 ${skill.isLarge ? 'text-white' : ''}`}>
                  {skill.title}
                </h3>
                <p className={`text-sm ${skill.isLarge ? 'text-white/80' : 'text-muted'}`}>
                  {skill.desc}
                </p>

                {skill.tags && (
                  <div className="flex flex-wrap gap-2 mt-6">
                    {skill.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3.5 py-1.5 bg-white/15 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
