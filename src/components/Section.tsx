import React from 'react';
import { ScrollReveal } from './ScrollReveal';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ title, children, id }) => {
  return (
    <section id={id} className="py-12 px-8 max-w-6xl mx-auto">
      <ScrollReveal direction="up" delay={100}>
        <h2 className="text-3xl font-roboto font-medium text-portfolio-gold mb-8 border-l-4 border-portfolio-gold pl-4">
          {title}
        </h2>
      </ScrollReveal>
      <ScrollReveal direction="up" delay={200}>
        {children}
      </ScrollReveal>
    </section>
  );
};