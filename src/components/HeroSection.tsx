
import React from 'react';
import { Button } from '@/components/ui/button';
import { Briefcase, User, Check, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="md:w-1/2 md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Find the Perfect <span className="text-gradient">Freelancers</span> for Your Projects
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Connect with skilled professionals worldwide who can help bring your ideas to life
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button className="px-8 py-6 text-lg flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                Post a Project
              </Button>
              <Button variant="outline" className="px-8 py-6 text-lg flex items-center gap-2">
                <User className="h-5 w-5" />
                Find Work
              </Button>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(index => (
                  <img 
                    key={index}
                    src={`https://i.pravatar.cc/40?img=${index+10}`}
                    alt="User" 
                    className="w-10 h-10 rounded-full border-2 border-background"
                  />
                ))}
              </div>
              <div className="text-sm">
                <strong>10,000+</strong> freelancers available
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/20 rounded-full z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/20 rounded-full z-0"></div>
              <div className="p-4 bg-background border rounded-xl shadow-lg z-10 relative">
                <img 
                  src="https://i.pravatar.cc/500?img=12" 
                  alt="Freelancer working" 
                  className="w-full h-auto rounded-lg"
                />
                
                <div className="absolute -bottom-6 -right-6 bg-card border shadow-lg p-4 rounded-lg">
                  <div className="flex items-center gap-2">
                    <span className="bg-green-500 p-1 rounded-full">
                      <Check className="h-3 w-3 text-white" />
                    </span>
                    <span className="font-medium text-sm">Projects completed</span>
                    <span className="text-secondary font-bold">25k+</span>
                  </div>
                </div>
                
                <div className="absolute -top-6 -left-6 bg-card border shadow-lg p-4 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="font-medium text-sm">Client satisfaction</span>
                    <span className="text-secondary font-bold">98%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
