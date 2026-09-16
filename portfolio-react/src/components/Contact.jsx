import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setShowSuccess(false), 4000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-ink text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-forest/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-terracotta/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Left Info */}
          <div className="lg:col-span-2">
            <div className="section-label">
              <span className="w-8 h-0.5 bg-terracotta"></span>
              Get in Touch
            </div>
            <h2 className="section-title text-white">
              Let's build <span className="text-terracotta italic">something</span> together.
            </h2>
            <p className="text-lg text-white/60 mb-8">
              Open to back office, CRM, and administrative support roles in the Amroha–Moradabad region. 
              Available after notice period.
            </p>

            <div className="space-y-4">
              {[
                { 
                  icon: 'fa-envelope', 
                  label: 'Email', 
                  value: 'umarimam39@gmail.com', 
                  href: 'mailto:umarimam39@gmail.com',
                },
                { 
                  icon: 'fa-phone', 
                  label: 'Phone', 
                  value: '+91 84391 52507', 
                  href: 'tel:+918439152507',
                },
                { 
                  icon: 'fa-map-marker-alt', 
                  label: 'Location', 
                  value: 'Amroha, Uttar Pradesh',
                },
                { 
                  icon: 'fab fa-linkedin-in', 
                  label: 'LinkedIn', 
                  value: 'umar-imam-aa5695137',
                  href: 'https://www.linkedin.com/in/umar-imam-aa5695137',
                  isLinkedin: true,
                  external: true,
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href || '#'}
                  className={`flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 ${
                    item.isLinkedin 
                      ? 'bg-[#0A66C2]/10 border-[#0A66C2]/30 hover:bg-[#0A66C2]/20' 
                      : 'bg-white/5 border-white/10 hover:bg-white/10 hover:translate-x-2'
                  }`}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                >
                  <div className={`w-12 h-12 flex items-center justify-center rounded-xl ${
                    item.isLinkedin ? 'bg-[#0A66C2] text-white' : 'bg-terracotta/20 text-terracotta'
                  }`}>
                    <i className={`fas ${item.icon}`}></i>
                  </div>
                  <div>
                    <small className="block text-xs text-white/50 uppercase tracking-wide mb-1">
                      {item.label}
                    </small>
                    <strong className="font-display">{item.value}</strong>
                  </div>
                  {item.href && (
                    <i className={`fas ml-auto ${item.external ? 'fa-external-link-alt' : 'fa-arrow-right'} text-white/30 transition-all hover:text-terracotta ${item.href ? 'group-hover:translate-x-1' : ''}`}></i>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-3">
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs text-white/50 uppercase tracking-widest mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-0 py-3 bg-transparent border-b-2 border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-terracotta transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-white/50 uppercase tracking-widest mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@company.com"
                      className="w-full px-0 py-3 bg-transparent border-b-2 border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-terracotta transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-white/50 uppercase tracking-widest mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Job Opportunity"
                    className="w-full px-0 py-3 bg-transparent border-b-2 border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-terracotta transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs text-white/50 uppercase tracking-widest mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell me about the role..."
                    className="w-full px-0 py-3 bg-transparent border-b-2 border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-terracotta transition-colors resize-none"
                  ></textarea>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>Sending... <i className="fas fa-spinner fa-spin"></i></>
                    ) : (
                      <>Send Message <i className="fas fa-paper-plane"></i></>
                    )}
                  </button>
                  <a href="#" className="btn-outline-light">
                    <i className="fas fa-download"></i> Download CV
                  </a>
                </div>

                {showSuccess && (
                  <div className="mt-4 p-3 bg-forest/20 border border-forest/30 rounded-lg text-green-400 text-sm flex items-center gap-2">
                    <i className="fas fa-check-circle"></i> Message sent successfully!
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
