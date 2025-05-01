
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-32 h-screen flex items-center">
      <div className="container px-6 md:px-12">
        <div className="max-w-4xl">
          <div className={`opacity-0 ${loaded ? 'opacity-100 transition-opacity duration-700' : ''}`}>
            <p className="text-secondary mb-4 font-light">Hello, my name is</p>
          </div>
          
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-2 opacity-0 ${
            loaded ? 'opacity-100 transition-opacity duration-700 delay-300' : ''
          }`}>
            John Doe.
          </h1>
          
          <h2 className={`text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground mb-6 opacity-0 ${
            loaded ? 'opacity-100 transition-opacity duration-700 delay-600' : ''
          }`}>
            I build <span className="text-gradient">amazing</span> web experiences.
          </h2>
          
          <p className={`text-muted-foreground max-w-xl mb-8 leading-relaxed opacity-0 ${
            loaded ? 'opacity-100 transition-opacity duration-700 delay-900' : ''
          }`}>
            I'm a freelance web developer specializing in building exceptional digital experiences.
            Currently, I'm focused on creating accessible, user-friendly websites and applications.
          </p>
          
          <div className={`space-x-4 opacity-0 ${
            loaded ? 'opacity-100 transition-opacity duration-700 delay-1200' : ''
          }`}>
            <Button asChild size="lg">
              <a href="#portfolio">View My Work</a>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
