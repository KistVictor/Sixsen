import React from 'react';
import { cn } from '@/lib/utils';
import Container from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  id?: string;
}

const Section = ({ 
  children, 
  className, 
  containerSize = 'lg', 
  spacing = 'lg',
  id 
}: SectionProps) => {
  const spacingClasses = {
    sm: 'py-8 lg:py-12',
    md: 'py-12 lg:py-16', 
    lg: 'py-16 lg:py-24',
    xl: 'py-20 lg:py-32'
  };

  return (
    <section 
      id={id}
      className={cn(
        spacingClasses[spacing],
        className
      )}
    >
      <Container size={containerSize}>
        {children}
      </Container>
    </section>
  );
};

export default Section;