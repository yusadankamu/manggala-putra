import React from 'react';
import Container from '../shared/Container';
import SectionTitle from '../shared/SectionTitle';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-stone-100">
      <Container>
        <SectionTitle
          title="Get in Touch"
          subtitle="Ready to start your project? Contact us today and let's discuss how we can bring your architectural vision to life."
        />

        <div className="grid md:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </Container>
    </section>
  );
};

export default Contact;