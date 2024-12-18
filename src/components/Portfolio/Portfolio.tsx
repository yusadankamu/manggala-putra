import React from 'react';
import { useInView } from 'react-intersection-observer';
import Container from '../shared/Container';
import SectionTitle from '../shared/SectionTitle';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Modern Villa',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    title: 'Urban Office',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    title: 'Eco Resort',
    category: 'Hospitality',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    title: 'Beach House',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    title: 'Cultural Center',
    category: 'Public',
    image: 'https://images.unsplash.com/photo-1600573472591-ee6981cf35d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
];

const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="portfolio" className="py-24 bg-stone-900" ref={ref}>
      <Container>
        <SectionTitle
          title="Our Portfolio"
          subtitle="Explore our diverse collection of architectural projects that showcase our commitment to excellence and innovation in design."
          light
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Portfolio;