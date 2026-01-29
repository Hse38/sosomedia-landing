'use client';

import { ReactNode } from 'react';
import { cn } from '@/app/lib/utils';

interface GradientButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
  disabled?: boolean;
}

export function GradientButton({
  children,
  href,
  onClick,
  type = 'button',
  className,
  disabled,
}: GradientButtonProps) {
  const baseClass =
    'inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-lime-400 to-lime-500 text-black font-semibold rounded-full hover:shadow-[0_0_30px_rgba(163,230,53,0.4)] hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100';

  if (href) {
    return (
      <a href={href} className={cn(baseClass, className)}>
        {children}
      </a>
    );
  }
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(baseClass, className)}
    >
      {children}
    </button>
  );
}
