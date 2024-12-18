import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-bold font-archivo mb-6">Manggala Putra</h3>
            <p className="text-stone-400 mb-6">
              Creating spaces that inspire and transform lives through innovative
              architectural design.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-stone-300 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-stone-300 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-stone-300 transition">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-stone-400 hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-stone-400 hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-stone-400 hover:text-white transition">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-stone-400 hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-stone-400">Architectural Design</li>
              <li className="text-stone-400">Interior Design</li>
              <li className="text-stone-400">Project Planning</li>
              <li className="text-stone-400">3D Visualization</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="text-stone-400">Jalan Sunset Road No. 88</li>
              <li className="text-stone-400">Kuta, Bali 80361</li>
              <li className="text-stone-400">Indonesia</li>
              <li className="text-stone-400">contact@manggalaputra.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-12 pt-8 text-center text-stone-400">
          <p>&copy; {new Date().getFullYear()} Manggala Putra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;