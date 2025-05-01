
import React from 'react';
import { CheckCircle } from 'lucide-react';

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Connect with top freelancers and clients worldwide in just a few simple steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-background p-8 rounded-lg shadow-md text-center">
            <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-secondary text-xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Post a Project</h3>
            <p className="text-muted-foreground">
              Describe your project requirements, budget, and timeline to attract the right freelancers.
            </p>
          </div>
          
          <div className="bg-background p-8 rounded-lg shadow-md text-center">
            <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-secondary text-xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Get Proposals</h3>
            <p className="text-muted-foreground">
              Review proposals from skilled freelancers who are interested in your project.
            </p>
          </div>
          
          <div className="bg-background p-8 rounded-lg shadow-md text-center">
            <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-secondary text-xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Collaborate & Pay</h3>
            <p className="text-muted-foreground">
              Work with your chosen freelancer and release payment when the job is done.
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a href="#post-project" className="btn bg-secondary hover:bg-secondary/80 text-secondary-foreground py-3 px-8 rounded-md font-medium inline-flex items-center gap-2">
            <CheckCircle className="h-5 w-5" />
            Post a Project Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
