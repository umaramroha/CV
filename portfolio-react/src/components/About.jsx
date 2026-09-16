import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div>
            <div className="section-label">
              <span className="w-8 h-0.5 bg-terracotta"></span>
              About Me
            </div>
            <h2 className="section-title">
              A blend of <span className="text-forest italic">science</span> & sales expertise.
            </h2>
            
            <div className="mt-10 rounded-[24px_24px_24px_8px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=750&fit=crop" 
                alt="Umar Imam Professional"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
          </div>

          {/* Right Column */}
          <div>
            <p className="text-lg text-stone mb-5 leading-relaxed">
              I'm a <strong>B.Sc. Biology graduate</strong> and <strong>Diploma in Pharmacy holder</strong> with 
              over 7 years of practical experience in sales and customer service. I specialize in client 
              communication, CRM coordination, and building long-term customer relationships.
            </p>
            <p className="text-lg text-stone mb-8 leading-relaxed">
              Adaptable and quick to learn, I bring a unique mix of communication, sales, and organizational 
              skills to every role. Currently seeking opportunities in{' '}
              <strong className="text-forest">back office, CRM, and administrative support</strong> within 
              the Amroha–Moradabad region.
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: 'fa-user', label: 'Full Name', value: 'Umar Imam' },
                { icon: 'fa-map-marker-alt', label: 'Location', value: 'Amroha, UP' },
                { icon: 'fa-envelope', label: 'Email', value: 'umarimam39@gmail.com' },
                { icon: 'fa-phone', label: 'Phone', value: '+91 84391 52507' },
              ].map((item, index) => (
                <div 
                  key={index}
                  className={`flex items-center gap-4 p-4 bg-white rounded-2xl border border-cream-dark transition-transform hover:-translate-y-1 ${
                    index % 2 === 0 ? '' : ''
                  }`}
                >
                  <div className={`w-10 h-10 flex items-center justify-center rounded-xl ${
                    index % 2 === 0 ? 'bg-forest/10 text-forest' : 'bg-terracotta/10 text-terracotta'
                  }`}>
                    <i className={`fas ${item.icon}`}></i>
                  </div>
                  <div>
                    <small className="block text-xs text-muted uppercase tracking-wide mb-1">
                      {item.label}
                    </small>
                    <strong className="font-display text-sm">{item.value}</strong>
                  </div>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://www.linkedin.com/in/umar-imam-aa5695137" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-linkedin"
              >
                <i className="fab fa-linkedin-in"></i> Connect on LinkedIn
              </a>
              <a href="#contact" className="btn-dark">
                <i className="fas fa-paper-plane"></i> Send Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
