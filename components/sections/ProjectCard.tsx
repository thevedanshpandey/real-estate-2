import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden aspect-[16/10] bg-luxury-gray cursor-pointer"
    >
      <img 
        src={project.imageUrl} 
        alt={project.name} 
        className="w-full h-full object-cover grayscale transition-transform duration-[1.5s] ease-out group-hover:scale-110 group-hover:grayscale-0"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-matte-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-700" />
      
      <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/20 transition-all duration-700 m-6 pointer-events-none" />

      <div className="absolute bottom-0 left-0 w-full p-8 lg:p-12 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700 ease-out">
        <div className="flex items-center space-x-4 mb-4">
          <span className="text-[9px] tracking-[0.4em] uppercase text-gold font-bold">{project.category}</span>
          <div className="h-[1px] w-10 bg-gold/30" />
          <span className="text-[9px] tracking-[0.4em] uppercase text-white/40">{project.location}</span>
        </div>
        <h3 className="text-2xl lg:text-4xl font-serif text-white mb-6 group-hover:text-gold transition-colors duration-500">{project.name}</h3>
        
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 flex items-end justify-between">
           <p className="text-white/40 text-sm max-w-sm font-light leading-relaxed">
             {project.description}
           </p>
           <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold border-b border-gold pb-1 whitespace-nowrap ml-4">
             Explore Case Study
           </span>
        </div>
      </div>
    </motion.div>
  );
};