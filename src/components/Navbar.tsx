import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-stone-900/80 backdrop-blur-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#" className="font-archivo text-2xl font-bold text-white">
            Manggala Putra
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-stone-300 transition">Home</a>
            <a href="#about" className="text-white hover:text-stone-300 transition">About</a>
            <a href="#portfolio" className="text-white hover:text-stone-300 transition">Portfolio</a>
            <a href="#contact" className="bg-white text-stone-900 px-6 py-2 rounded-full hover:bg-stone-200 transition">
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-stone-900/95 backdrop-blur-lg"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              <a href="#" className="block text-white hover:text-stone-300 transition py-2">Home</a>
              <a href="#about" className="block text-white hover:text-stone-300 transition py-2">About</a>
              <a href="#portfolio" className="block text-white hover:text-stone-300 transition py-2">Portfolio</a>
              <a href="#contact" className="block bg-white text-stone-900 px-6 py-2 rounded-full hover:bg-stone-200 transition text-center">
                Contact Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;