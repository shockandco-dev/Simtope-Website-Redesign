import React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Features } from '../components/Features';
import { Process } from '../components/Process';
import { Contact } from '../components/Contact';

export const Home: React.FC = () => {
  // Adaptation: We don't have onNavigate from props because we use React Router.
  // If 'onConnect' is intended to scroll to contact, we can implement a simple handler.
  const handleConnect = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Hero onConnect={handleConnect} />
      <Services />
      <Features />
      <Process />
      <Contact />
    </>
  );
};
