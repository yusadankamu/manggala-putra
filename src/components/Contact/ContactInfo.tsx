import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      <div className="flex items-start space-x-4">
        <Phone className="w-6 h-6 text-stone-900 shrink-0" />
        <div>
          <h3 className="text-lg font-semibold text-stone-900 mb-1">Phone</h3>
          <p className="text-stone-600">+1 234 567 890</p>
        </div>
      </div>
      <div className="flex items-start space-x-4">
        <Mail className="w-6 h-6 text-stone-900 shrink-0" />
        <div>
          <h3 className="text-lg font-semibold text-stone-900 mb-1">Email</h3>
          <p className="text-stone-600 break-words">contact@manggalaputra.com</p>
        </div>
      </div>
      <div className="flex items-start space-x-4">
        <MapPin className="w-6 h-6 text-stone-900 shrink-0" />
        <div>
          <h3 className="text-lg font-semibold text-stone-900 mb-1">Office</h3>
          <p className="text-stone-600">
            Jalan Sunset Road No. 88<br />
            Kuta, Bali 80361<br />
            Indonesia
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;