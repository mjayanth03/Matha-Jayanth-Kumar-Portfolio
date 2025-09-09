import React from 'react';
import { ScrollReveal } from './ScrollReveal';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const Card: React.FC<CardProps> = ({ children, className = '', delay = 0 }) => {
  return (
    <ScrollReveal direction="up" delay={delay}>
      <div className={`bg-portfolio-card p-6 rounded-lg shadow-lg shadow-portfolio-gold/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-portfolio-gold/30 ${className}`}>
        {children}
      </div>
    </ScrollReveal>
  );
};