import React from 'react';

interface LogoCarouselProps {
  title: string;
}

const LogoCarousel = ({ title }: LogoCarouselProps) => {
  // Placeholder logos - na implementação real, estes viriam de dados
  const logos = [
    { name: 'The Wolves Company' },
    { name: 'Zenblue' },
    { name: 'Awise' },
    { name: 'Performance Comercial' },
    { name: 'Ardos' }
  ];

  return (
    <div className="py-8">
      <p className="text-center text-sm text-muted-foreground font-medium mb-8">
        {title}
      </p>
      
      <div className="relative overflow-hidden">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10"></div>
        
        {/* Scrolling logos */}
        <div className="flex space-x-12 animate-marquee">
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex items-center justify-center flex-shrink-0 h-16 opacity-60 hover:opacity-100 transition-opacity"
            >
              {/* Placeholder logo - em produção seriam SVGs reais */}
              <div 
                className="flex items-center justify-center h-12 px-6 bg-card border border-border rounded-lg"
              >
                <span className="text-sm font-medium text-muted-foreground">
                  {logo.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;