'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface MotionWrapperProps {
  children: ReactNode;
  className?: string;
  initial?: any;
  animate?: any;
  whileHover?: any;
  whileInView?: any;
  viewport?: any;
  transition?: any;
}

export const MotionDiv = ({
  children,
  className,
  initial,
  animate,
  whileHover,
  whileInView,
  viewport,
  transition,
}: MotionWrapperProps) => {
  return (
    <motion.div
      className={className}
      initial={initial}
      animate={animate}
      whileHover={whileHover}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}; 