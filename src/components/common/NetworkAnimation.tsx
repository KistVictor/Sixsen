import React from 'react';

const NetworkAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-30">
      <svg
        className="w-full h-full"
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Animated network paths */}
        <g className="animate-network-pulse">
          <path
            d="M50 300 Q200 100 400 300 T750 300"
            stroke="hsl(var(--cyan-accent))"
            strokeWidth="2"
            fill="none"
            strokeDasharray="10 5"
            className="animate-pulse"
          />
          <path
            d="M100 200 Q300 50 500 200 T700 200"
            stroke="hsl(var(--bridge-blue))"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="8 4"
            style={{ animationDelay: '0.5s' }}
          />
          <path
            d="M50 400 Q250 500 450 400 T750 400"
            stroke="hsl(var(--cyan-accent))"
            strokeWidth="1"
            fill="none"
            strokeDasharray="6 3"
            style={{ animationDelay: '1s' }}
          />
        </g>
        
        {/* Connection nodes */}
        <g>
          <circle cx="400" cy="300" r="4" fill="hsl(var(--bridge-blue))" className="animate-pulse" />
          <circle cx="200" cy="200" r="3" fill="hsl(var(--cyan-accent))" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
          <circle cx="600" cy="350" r="3" fill="hsl(var(--cyan-accent))" className="animate-pulse" style={{ animationDelay: '0.8s' }} />
          <circle cx="150" cy="400" r="2" fill="hsl(var(--bridge-blue))" className="animate-pulse" style={{ animationDelay: '1.2s' }} />
          <circle cx="650" cy="250" r="2" fill="hsl(var(--cyan-accent))" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
        </g>
      </svg>
    </div>
  );
};

export default NetworkAnimation;