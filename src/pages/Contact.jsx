import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Contact from '../components/sections/Contact';

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-28">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
