import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-24 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Our studio"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-stone-900/10 rounded-2xl"></div>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold text-stone-900 mb-6 font-archivo">
              About Manggala Putra
            </h2>
            <p className="text-stone-600 mb-6 text-lg">
              We are a premier architectural firm based in the heart of Bali, Indonesia. 
              With over a decade of experience, we blend traditional Balinese elements 
              with contemporary design principles to create spaces that are both 
              functional and aesthetically pleasing.
            </p>
            <p className="text-stone-600 mb-8 text-lg">
              Our team of skilled architects and designers is passionate about creating 
              sustainable, innovative solutions that enhance the way people live and work. 
              We believe in the power of architecture to transform communities and improve lives.
            </p>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-stone-900 mb-2">150+</h3>
                <p className="text-stone-600">Projects</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-stone-900 mb-2">15+</h3>
                <p className="text-stone-600">Years</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-stone-900 mb-2">50+</h3>
                <p className="text-stone-600">Awards</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;