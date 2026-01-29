'use client';

import { ReactNode } from 'react';
import { cn } from '@/app/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        'bg-white/[0.03] border border-white/[0.08] rounded-2xl',
        'hover:border-white/[0.15] transition-all duration-300',
        className
      )}
    >
      {children}
    </div>
  );
}
