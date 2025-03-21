
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactHero from '@/components/ContactHero';
import ContactInfo from '@/components/ContactInfo';
import ContactForm from '@/components/ContactForm';
import MapSection from '@/components/MapSection';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <ContactHero />

        {/* Contact Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              {/* Contact Information */}
              <ContactInfo />

              {/* Contact Form */}
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Map Section */}
        <MapSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
