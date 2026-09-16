import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-ink border-t border-white/10 py-10 text-white/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-display text-2xl font-bold text-white">
            Umar<span className="text-terracotta">.</span>
          </div>

          <div className="flex gap-4">
            <a 
              href="https://www.linkedin.com/in/umar-imam-aa5695137" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-terracotta hover:text-white transition-all"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a 
              href="mailto:umarimam39@gmail.com"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-terracotta hover:text-white transition-all"
            >
              <i className="fas fa-envelope"></i>
            </a>
            <a 
              href="tel:+918439152507"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-terracotta hover:text-white transition-all"
            >
              <i className="fas fa-phone"></i>
            </a>
          </div>

          <div className="text-sm">
            © 2026 Umar Imam. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
