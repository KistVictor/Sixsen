
// Added React import to resolve "Cannot find namespace 'React'" when using React.ReactNode
import React from 'react';

export interface ValueProp {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface Project {
  title: string;
  category: string;
  challenge: string;
  // Made solution optional as some projects use 'delivery' instead, consistent with implementation in AboutPortfolio.tsx
  solution?: string;
  result: string;
  impact?: string;
  role?: string;
  delivery?: string;
  link?: string;
}
