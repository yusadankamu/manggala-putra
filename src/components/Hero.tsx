import React from 'react';
import { motion } from 'framer-motion';
import Container from './shared/Container';

const images = [
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
];

const Hero = () => {
  return (
    <div className="min-h-[100svh] bg-stone-900 flex items-center">
      <Container className="py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 font-archivo leading-tight">
              Crafting Spaces That Inspire Living
            </h1>
            <p className="text-stone-300 text-base sm:text-lg mb-8 max-w-xl mx-auto lg:mx-0">
              Transform your vision into reality with our innovative architectural designs
              that blend form, function, and sustainability.
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-stone-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-stone-200 transition"
            >
              Start Your Project
            </a>
          </motion.div>

          <div className="relative h-[300px] sm:h-[400px] lg:h-[600px] overflow-hidden rounded-2xl">
            {images.map((image, index) => (
              <motion.div
                key={image}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: index * 3,
                }}
              >
                <img
                  src={image}
                  alt="Architecture showcase"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;