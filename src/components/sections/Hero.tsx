import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Section from '@/components/layout/Section';
import NetworkAnimation from '@/components/common/NetworkAnimation';
import Icon from '@/components/ui/Icon';
interface HeroProps {
  headlines: string[];
  currentHeadline: number;
  subhead: string;
  primaryCTA: string;
  secondaryCTA: string;
  microtrust: string;
}
const Hero = ({
  headlines,
  currentHeadline,
  subhead,
  primaryCTA,
  secondaryCTA,
  microtrust
}: HeroProps) => {
  const [activeHeadline, setActiveHeadline] = useState(currentHeadline);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveHeadline(prev => (prev + 1) % headlines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [headlines.length]);
  return <Section className="relative bg-background min-h-screen flex items-center overflow-hidden pt-20" spacing="xl">
      {/* Background Animation */}
      <NetworkAnimation />
      
      <div className="relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="font-space font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6">
            <span className="text-gradient animate-fade-in-up">
              {headlines[activeHeadline]}
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{
          animationDelay: '0.2s'
        }}>
            {subhead}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fade-in-up" style={{
          animationDelay: '0.4s'
        }}>
            <Button variant="bridge" size="xl" className="focus-ring" asChild>
              <a href="#contact">
                <Icon name="calendar" size={20} />
                {primaryCTA}
              </a>
            </Button>
            
            <Button variant="outline" size="xl" className="focus-ring" asChild>
              <a href="#cases">
                <Icon name="arrow-right" size={20} />
                {secondaryCTA}
              </a>
            </Button>
          </div>

          {/* Microtrust */}
          <p className="text-sm text-muted-foreground font-medium animate-fade-in-up" style={{
          animationDelay: '0.6s'
        }}>
            ✨ {microtrust}
          </p>

          {/* Scroll indicator */}
          
        </div>
      </div>
    </Section>;
};
export default Hero;