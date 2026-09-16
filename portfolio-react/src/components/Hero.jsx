import React, { useState, useEffect } from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-32 pb-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-stone/10 rounded-full text-sm font-medium mb-6 shadow-sm animate-pulse-dot">
              <span className="w-2 h-2 bg-forest rounded-full"></span>
              Open to Back Office & CRM Roles
            </div>
            
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              7+ Years Building{' '}
              <span className="text-forest">Customer</span>{' '}
              Relationships<span className="text-terracotta">.</span>
            </h1>
            
            <p className="text-lg text-muted max-w-xl mb-8 leading-relaxed">
              I'm <strong>Umar Imam</strong> — a Sales & CRM professional blending pharmaceutical 
              education with hands-on client management, delivery coordination, and bilingual communication.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="#contact" className="btn-primary">
                Get in Touch <i className="fas fa-arrow-right"></i>
              </a>
              <a href="#experience" className="btn-outline">
                View My Work
              </a>
            </div>
            
            <div className="flex flex-wrap gap-6">
              <a 
                href="https://www.linkedin.com/in/umar-imam-aa5695137" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-muted hover:text-forest transition-colors flex items-center gap-2"
              >
                <i className="fab fa-linkedin-in"></i> LinkedIn
              </a>
              <a 
                href="mailto:umarimam39@gmail.com"
                className="text-sm font-medium text-muted hover:text-forest transition-colors flex items-center gap-2"
              >
                <i className="fas fa-envelope"></i> Email Me
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-2 relative">
            <div className="relative max-w-md mx-auto">
              <div className="aspect-[4/5] rounded-[24px_24px_24px_8px] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&h=1000&fit=crop&crop=face" 
                  alt="Umar Imam"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Badges */}
              <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-2xl shadow-lg flex items-center gap-3">
                <i className="fas fa-award text-2xl text-forest"></i>
                <div>
                  <strong className="block text-forest">7+</strong>
                  <small className="text-xs text-muted">Years Exp.</small>
                </div>
              </div>
              
              <div className="absolute -top-5 -right-5 bg-white p-4 rounded-2xl shadow-lg flex items-center gap-3">
                <i className="fas fa-graduation-cap text-2xl text-terracotta"></i>
                <div>
                  <strong className="block text-terracotta">D.Pharm</strong>
                  <small className="text-xs text-muted">+ B.Sc. Bio</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
