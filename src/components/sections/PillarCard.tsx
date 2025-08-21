import React from 'react';
import Icon, { type IconName } from '@/components/ui/Icon';

interface PillarCardProps {
  icon: IconName;
  title: string;
  description: string;
  index: number;
}

const PillarCard = ({ icon, title, description, index }: PillarCardProps) => {
  return (
    <div 
      className="group relative p-8 rounded-2xl border border-border bg-card hover-lift hover:border-bridge-blue/50 transition-all duration-300 animate-fade-in-up"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      {/* Icon Background */}
      <div className="flex items-center justify-center w-16 h-16 bg-gradient-bridge rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon 
          name={icon} 
          size={28} 
          className="text-white"
        />
      </div>

      {/* Content */}
      <h3 className="font-space font-semibold text-xl mb-4 group-hover:text-bridge-blue transition-colors">
        {title}
      </h3>
      
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>

      {/* Decorative element */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

export default PillarCard;