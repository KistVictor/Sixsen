import React from 'react';
import Icon, { type IconName } from '@/components/ui/Icon';

interface MethodStepProps {
  icon: IconName;
  title: string;
  description: string;
  index: number;
  isLast?: boolean;
}

const MethodStep = ({ icon, title, description, index, isLast = false }: MethodStepProps) => {
  return (
    <div className="relative flex items-start space-x-6">
      {/* Step indicator with line */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="flex items-center justify-center w-16 h-16 bg-gradient-bridge rounded-2xl shadow-elegant animate-scale-in"
             style={{ animationDelay: `${index * 0.2}s` }}>
          <Icon name={icon} size={24} className="text-white" />
        </div>
        
        {!isLast && (
          <div className="w-0.5 h-12 bg-gradient-to-b from-bridge-blue to-cyan-accent mt-4 opacity-50"></div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-8 animate-fade-in-up" style={{ animationDelay: `${index * 0.2 + 0.1}s` }}>
        <div className="flex items-center space-x-3 mb-3">
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-kpi text-ink text-xs font-bold">
            {index + 1}
          </span>
          <h3 className="font-space font-semibold text-lg text-foreground">
            {title}
          </h3>
        </div>
        
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default MethodStep;