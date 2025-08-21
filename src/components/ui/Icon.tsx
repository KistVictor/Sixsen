import React from 'react';
import { 
  Search, 
  PenTool, 
  Zap, 
  TrendingUp, 
  ShieldCheck,
  Languages,
  Users,
  Target,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  Calendar,
  MessageCircle,
  Mail,
  ArrowRight,
  ExternalLink,
  Check,
  Clock,
  Star,
  Award,
  Layers,
  Minus,
  Plus,
  X as XIcon,
  type LucideIcon
} from 'lucide-react';

const iconMap = {
  search: Search,
  'pen-tool': PenTool,
  zap: Zap,
  'trending-up': TrendingUp,
  'shield-check': ShieldCheck,
  translate: Languages,
  users: Users,
  target: Target,
  'chevron-right': ChevronRight,
  'chevron-up': ChevronUp,
  'chevron-down': ChevronDown,
  calendar: Calendar,
  'message-circle': MessageCircle,
  mail: Mail,
  'arrow-right': ArrowRight,
  'external-link': ExternalLink,
  check: Check,
  clock: Clock,
  star: Star,
  award: Award,
  layers: Layers,
  minus: Minus,
  plus: Plus,
  x: XIcon
} as const;

export type IconName = keyof typeof iconMap;

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
  color?: string;
}

const Icon = ({ name, size = 24, className, color }: IconProps) => {
  const IconComponent: LucideIcon = iconMap[name];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return (
    <IconComponent 
      size={size} 
      className={className} 
      color={color}
    />
  );
};

export default Icon;