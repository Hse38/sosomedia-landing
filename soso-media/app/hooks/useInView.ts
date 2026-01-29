'use client';

import { useInView as useFramerInView } from 'framer-motion';
import { useRef } from 'react';

interface UseInViewOptions {
  once?: boolean;
  margin?: string;
  amount?: number;
}

export function useInView(options: UseInViewOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useFramerInView(ref, {
    once: options.once ?? true,
    margin: options.margin ?? '-80px',
    amount: options.amount,
  });
  return { ref, isInView };
}
