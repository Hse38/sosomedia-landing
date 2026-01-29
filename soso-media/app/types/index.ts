import type { LucideIcon } from 'lucide-react';

export interface NavLink {
  href: string;
  label: string;
}

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  color: string;
}

export interface PlanItem {
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  cta: string;
  popular: boolean;
}

export interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating: number;
  metrics: { timeSaved: string; efficiency: string };
}

export interface FAQQuestion {
  q: string;
  a: string;
}

export interface FAQCategory {
  category: string;
  questions: FAQQuestion[];
}

export interface ReportMetric {
  label: string;
  value: string;
  change: string;
  icon: LucideIcon;
}

export interface ReportRecommendation {
  type: string;
  text: string;
  priority: 'high' | 'medium';
}
