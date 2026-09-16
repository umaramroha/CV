import React from 'react';

const Stats = () => {
  return (
    <section className="py-16 border-y border-cream-dark bg-white/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '7', label: 'Years Experience' },
            { number: '500+', label: 'Happy Clients' },
            { number: '2', label: 'Degrees' },
            { number: '1', label: 'Company Loyalty', isTerracotta: true },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`font-display text-5xl font-bold ${stat.isTerracotta ? 'text-terracotta' : 'text-forest'}`}>
                {stat.number}
              </div>
              <div className="text-sm text-muted font-medium mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
