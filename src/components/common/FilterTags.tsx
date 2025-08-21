import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/Icon';

interface FilterTagsProps {
  filters: { [key: string]: string[] };
  onRemoveFilter: (key: string, value: string) => void;
  onClearAll: () => void;
}

const FilterTags = ({ filters, onRemoveFilter, onClearAll }: FilterTagsProps) => {
  const hasFilters = Object.values(filters).some(arr => arr.length > 0);
  
  if (!hasFilters) return null;

  return (
    <div className="flex flex-wrap items-center gap-2 mb-6">
      <span className="text-sm text-muted-foreground">Filtros:</span>
      {Object.entries(filters).map(([key, values]) =>
        values.map(value => (
          <Badge 
            key={`${key}-${value}`} 
            variant="secondary" 
            className="gap-1 hover:bg-destructive/10 hover:text-destructive cursor-pointer"
            onClick={() => onRemoveFilter(key, value)}
          >
            {value}
            <Icon name="x" size={12} />
          </Badge>
        ))
      )}
      <Button 
        variant="ghost" 
        size="sm" 
        onClick={onClearAll}
        className="text-muted-foreground hover:text-foreground"
      >
        Limpar tudo
      </Button>
    </div>
  );
};

export default FilterTags;