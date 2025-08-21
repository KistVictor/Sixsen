import React from 'react';

interface TestimonialProps {
  name: string;
  position: string;
  company: string;
  text: string;
  avatar: string;
}

const Testimonial = ({ name, position, company, text, avatar }: TestimonialProps) => {
  return (
    <div className="relative p-8 lg:p-12 rounded-2xl border border-border bg-card hover-lift transition-all duration-300">
      {/* Quote marks */}
      <div className="absolute top-6 left-6 text-6xl text-bridge-blue/20 font-serif leading-none">
        "
      </div>
      
      <div className="relative z-10">
        {/* Testimonial text */}
        <blockquote className="text-lg lg:text-xl leading-relaxed text-foreground mb-8 font-medium">
          {text}
        </blockquote>
        
        {/* Author info */}
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-bridge flex items-center justify-center overflow-hidden">
            {avatar ? (
              <img 
                src={avatar} 
                alt={`${name} - ${position} na ${company}`}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-white font-space font-bold text-lg">
                {name.split(' ').map(n => n[0]).join('')}
              </span>
            )}
          </div>
          
          <div>
            <div className="font-space font-semibold text-foreground">
              {name}
            </div>
            <div className="text-sm text-muted-foreground">
              {position} • {company}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-6 right-6 w-4 h-4 border-2 border-cyan-accent rounded-full opacity-30"></div>
      <div className="absolute bottom-4 right-4 w-2 h-2 bg-amber-kpi rounded-full opacity-50"></div>
    </div>
  );
};

export default Testimonial;