import React, { useEffect } from 'react';

const RevealOnScroll = ({ children, delay = 0 }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`reveal opacity-0 translate-y-8 transition-all duration-800 ease-out ${delay ? `delay-[${delay}ms]` : ''}`}>
      {children}
    </div>
  );
};

export default RevealOnScroll;
