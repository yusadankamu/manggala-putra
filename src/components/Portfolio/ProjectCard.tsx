import React from 'react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  index: number;
  inView: boolean;
}

const ProjectCard = ({ title, category, image, index, inView }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="group relative overflow-hidden rounded-2xl aspect-square sm:aspect-[4/3]"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-stone-300">{category}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;