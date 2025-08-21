import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/Icon';

interface BlogCardProps {
  title: string;
  summary: string;
  readingTime: number;
  href: string;
  category: string;
  publishDate: string;
  index: number;
}

const BlogCard = ({ 
  title, 
  summary, 
  readingTime, 
  href, 
  category, 
  publishDate, 
  index 
}: BlogCardProps) => {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <Link to={href} className="group block focus-ring rounded-2xl">
      <article 
        className="p-6 rounded-2xl border border-border bg-card hover-lift hover:border-cyan-accent/50 transition-all duration-300 h-full animate-fade-in-up"
        style={{ animationDelay: `${index * 0.15}s` }}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <Badge variant="outline" className="text-xs">
            {category}
          </Badge>
          <div className="flex items-center text-xs text-muted-foreground">
            <Icon name="clock" size={12} className="mr-1" />
            {readingTime} min
          </div>
        </div>

        {/* Content */}
        <h3 className="font-space font-semibold text-lg mb-3 group-hover:text-bridge-blue transition-colors line-clamp-2">
          {title}
        </h3>
        
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
          {summary}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <span className="text-xs text-muted-foreground">
            {formatDate(publishDate)}
          </span>
          
          <div className="flex items-center text-sm text-bridge-blue font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            Ler artigo
            <Icon name="arrow-right" size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;