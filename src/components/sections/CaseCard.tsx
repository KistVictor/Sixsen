import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/Icon';

interface CaseCardProps {
  client: string;
  industry: string;
  challenge: string;
  approach: string;
  impact: string;
  keyMetric?: {
    value: string;
    label: string;
  };
  kpis?: {
    value: string;
    label: string;
  }[];
  timeline: string;
  index: number;
}

const CaseCard = ({ 
  client, 
  industry,
  challenge, 
  approach, 
  impact, 
  keyMetric, 
  kpis,
  timeline, 
  index 
}: CaseCardProps) => {
  const displayKpi = keyMetric ?? (kpis && kpis[0]);
  return (
    <div 
      className="group relative p-8 rounded-2xl border border-border bg-card hover-lift hover:border-amber-kpi/50 transition-all duration-300 animate-fade-in-up"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="font-space font-semibold text-lg mb-2">
            {client}
          </h3>
          <Badge variant="outline" className="text-xs">
            {industry}
          </Badge>
        </div>
{displayKpi && (
  <Badge variant="kpi" className="ml-4">
    {displayKpi.value} {displayKpi.label}
  </Badge>
)}
      </div>

      {/* Content Structure */}
      <div className="space-y-6">
        {/* Challenge */}
        <div>
          <h4 className="font-medium text-sm text-destructive mb-2 flex items-center">
            <div className="w-2 h-2 bg-destructive rounded-full mr-2"></div>
            Desafio
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {challenge}
          </p>
        </div>

        {/* Bridge/Approach */}
        <div>
          <h4 className="font-medium text-sm text-bridge-blue mb-2 flex items-center">
            <div className="w-2 h-2 bg-bridge-blue rounded-full mr-2"></div>
            Ponte (Abordagem)
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {approach}
          </p>
        </div>

        {/* Impact */}
        <div>
          <h4 className="font-medium text-sm text-cyan-accent mb-2 flex items-center">
            <div className="w-2 h-2 bg-cyan-accent rounded-full mr-2"></div>
            Impacto
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {impact}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-6 mt-6 border-t border-border">
        <div className="flex items-center text-xs text-muted-foreground">
          <Icon name="clock" size={14} className="mr-1" />
          {timeline}
        </div>
        <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
          <Icon name="external-link" size={14} />
        </Button>
      </div>

      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-amber-kpi/20 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

export default CaseCard;