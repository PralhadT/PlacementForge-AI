import React from 'react';
import Hero from '../components/landing/Hero';
import FeaturesGrid from '../components/landing/FeaturesGrid';
import HowItWorks from '../components/landing/HowItWorks';
import AIShowcase from '../components/landing/AIShowcase';
import DashboardPreview from '../components/landing/DashboardPreview';
import Testimonials from '../components/landing/Testimonials';
import FAQ from '../components/landing/FAQ';
import CTA from '../components/landing/CTA';

const LandingPage = () => {
  return (
    <main>
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <Hero />
      <FeaturesGrid />
      <HowItWorks />
      <AIShowcase />
      <DashboardPreview />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  );
};

export default LandingPage;
