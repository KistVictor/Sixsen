import React from 'react';
import { Button } from '@/components/ui/button';
import Section from '@/components/layout/Section';
import Icon from '@/components/ui/Icon';
import baseData from "../../data/baseData.json"

interface CTASectionProps {
  title: string;
  subtitle: string;
  primaryCTA: string;
  secondaryCTA: string;
  lgpdNote: string;
}

const CTASection = ({ 
  title, 
  subtitle, 
  primaryCTA, 
  secondaryCTA, 
  lgpdNote 
}: CTASectionProps) => {
  return (
    <Section 
      id="contact"
      className="relative bg-gradient-bridge overflow-hidden" 
      spacing="xl"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Headline */}
        <h2 className="font-space font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6 animate-fade-in-up">
          {title}
        </h2>
        
        {/* Subtitle */}
        <p className="text-lg lg:text-xl text-white/90 mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button 
            variant="secondary" 
            size="xl"
            className="bg-white text-bridge-blue hover:bg-white/90 hover:shadow-elegant focus-ring"
            asChild
          >
            <a href="https://calendly.com/sixsen" target="_blank" rel="noopener noreferrer">
              <Icon name="calendar" size={20} />
              {primaryCTA}
            </a>
          </Button>
          
          <Button 
            variant="outline" 
            size="xl"
            className="border-white text-white hover:bg-white hover:text-bridge-blue focus-ring"
            asChild
          >
            <a href={`https://wa.me/${baseData.phone}?text=Olá! Gostaria de saber mais sobre os serviços da Sixsen.`} target="_blank" rel="noopener noreferrer">
              <Icon name="message-circle" size={20} />
              {secondaryCTA}
            </a>
          </Button>
        </div>

        {/* LGPD Note */}
        <p className="text-sm text-white/70 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          🔒 {lgpdNote}
        </p>
      </div>
    </Section>
  );
};

export default CTASection;