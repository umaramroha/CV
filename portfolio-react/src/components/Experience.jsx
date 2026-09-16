import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="section-label">
            <span className="w-8 h-0.5 bg-terracotta"></span>
            Work Experience
          </div>
          <h2 className="section-title">
            One company. <span className="text-forest italic">Seven years</span> of growth.
          </h2>
        </div>

        <div className="bg-cream rounded-[32px] p-8 md:p-12 border border-cream-dark relative">
          {/* Loyalty Badge */}
          <div className="absolute top-8 right-8 bg-forest text-white px-4 py-2 rounded-full text-xs font-bold uppercase flex items-center gap-2">
            <i className="fas fa-medal"></i> 7-Year Tenure
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left Meta */}
            <div className="lg:col-span-2">
              <div className="text-xs text-muted uppercase tracking-widest mb-2">2017 — Present</div>
              <h3 className="font-display text-3xl font-bold mb-2">Sales Associate</h3>
              <p className="text-lg text-forest font-semibold">Hashmi Unani Pharmacy</p>
              <p className="text-muted mb-6">(Hashmi Dawakhana)</p>

              <div className="flex flex-col gap-3 pt-6 border-t border-cream-dark">
                {[
                  { icon: 'fa-map-marker-alt', text: 'Amroha, UP' },
                  { icon: 'fa-clock', text: 'Part-time → Full-time (Aug 2022)' },
                  { icon: 'fa-language', text: 'Hindi + English' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm text-stone">
                    <i className={`fas ${item.icon} w-5 text-terracotta`}></i>
                    {item.text}
                  </div>
                ))}
              </div>

              <a 
                href="https://www.linkedin.com/in/umar-imam-aa5695137"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-forest hover:text-terracotta transition-colors"
              >
                View on LinkedIn <i className="fas fa-external-link-alt"></i>
              </a>
            </div>

            {/* Right Responsibilities */}
            <div className="lg:col-span-3">
              <h4 className="font-display text-xl font-bold mb-6">Key Responsibilities</h4>
              
              <div className="space-y-6">
                {[
                  { 
                    icon: 'fa-phone-alt', 
                    title: 'Customer Communication',
                    desc: 'Handle Hindi calling and chat-based customer interactions for sales and support.',
                  },
                  { 
                    icon: 'fa-truck', 
                    title: 'CRM & Delivery Coordination',
                    desc: 'Manage delivery coordination and CRM records for orders and customers.',
                  },
                  { 
                    icon: 'fa-handshake', 
                    title: 'Relationship Management',
                    desc: 'Follow up with repeat customers to maintain long-term relationships.',
                  },
                  { 
                    icon: 'fa-bullhorn', 
                    title: 'Digital Marketing Support',
                    desc: 'Assisted with Google/Facebook ads (2024–25); promote via WhatsApp status.',
                    isTerracotta: true,
                  },
                ].map((resp, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className={`w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-lg transition-all duration-300 ${
                      resp.isTerracotta 
                        ? 'bg-terracotta/10 text-terracotta group-hover:bg-terracotta group-hover:text-white'
                        : 'bg-forest/10 text-forest group-hover:bg-forest group-hover:text-white'
                    }`}>
                      <i className={`fas ${resp.icon}`}></i>
                    </div>
                    <div>
                      <h5 className="font-medium text-base mb-1">{resp.title}</h5>
                      <p className="text-sm text-muted">{resp.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
