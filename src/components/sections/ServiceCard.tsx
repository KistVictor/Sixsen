import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/Icon';

interface ServiceCardProps {
  title: string;
  shortDescription: string;
  problem: string;
  value: string;
  slug: string;
  index: number;
}

const ServiceCard = ({ 
  title, 
  shortDescription, 
  problem, 
  value, 
  slug, 
  index 
}: ServiceCardProps) => {
  return (
    <div 
      className="group relative p-8 rounded-2xl border border-border bg-card hover-lift hover:border-cyan-accent/50 transition-all duration-300 animate-fade-in-up"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h3 className="font-space font-semibold text-xl mb-3 group-hover:text-bridge-blue transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {shortDescription}
          </p>
        </div>

        {/* Problem → Value */}
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-2 h-2 bg-destructive rounded-full mt-2"></div>
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Problema:</strong> {problem}
            </p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-2 h-2 bg-cyan-accent rounded-full mt-2"></div>
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Valor:</strong> {value}
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="pt-4">
          <Button 
            variant="outline" 
            size="sm" 
            className="group-hover:border-bridge-blue group-hover:text-bridge-blue"
            asChild
          >
            <Link to="/servicos" className="focus-ring">
              Saiba mais
              <Icon name="arrow-right" size={16} />
            </Link>
          </Button>
        </div>
      </div>

      {/* Hover indicator */}
      <div className="absolute top-4 right-4 w-3 h-3 border-2 border-cyan-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-full h-full bg-cyan-accent rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default ServiceCard;