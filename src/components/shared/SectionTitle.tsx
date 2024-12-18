import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  className?: string;
}

const SectionTitle = ({ title, subtitle, light = false, className = '' }: SectionTitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`text-center mb-16 ${className}`}
    >
      <h2 className={`text-3xl sm:text-4xl font-bold font-archivo mb-6 ${
        light ? 'text-white' : 'text-stone-900'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base sm:text-lg max-w-2xl mx-auto ${
          light ? 'text-stone-300' : 'text-stone-600'
        }`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;