import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hello, I'm ${formData.name}.\n\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            required
            className="w-full px-4 py-3 rounded-lg bg-white border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-500"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            className="w-full px-4 py-3 rounded-lg bg-white border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-500"
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            required
            className="w-full px-4 py-3 rounded-lg bg-white border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-500"
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            required
            className="w-full px-4 py-3 rounded-lg bg-white border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-500"
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-stone-900 text-white px-6 py-3 rounded-lg hover:bg-stone-800 transition"
        >
          Send Message
        </button>
      </form>
    </motion.div>
  );
};

export default ContactForm;