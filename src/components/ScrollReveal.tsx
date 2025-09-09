import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  delay?: number;
  duration?: number;
  className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 600,
  className = ''
}) => {
  const { ref, isVisible } = useScrollReveal();

  const getTransform = () => {
    if (isVisible) return 'translate3d(0, 0, 0)';
    
    switch (direction) {
      case 'up':
        return 'translate3d(0, 60px, 0)';
      case 'down':
        return 'translate3d(0, -60px, 0)';
      case 'left':
        return 'translate3d(60px, 0, 0)';
      case 'right':
        return 'translate3d(-60px, 0, 0)';
      default:
        return 'translate3d(0, 0, 0)';
    }
  };

  const style: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: getTransform(),
    transition: `all ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`,
    willChange: 'transform, opacity'
  };

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
};