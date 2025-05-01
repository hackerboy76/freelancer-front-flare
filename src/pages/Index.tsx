
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FreelancerListingSection from '@/components/FreelancerListingSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import JobListingSection from '@/components/JobListingSection';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <JobListingSection />
      <FreelancerListingSection />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
