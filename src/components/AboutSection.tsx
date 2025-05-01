
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-accent">
      <div className="container px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-2/5">
            <div className="relative">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="Professional headshot" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="absolute inset-0 border-2 border-secondary rounded-lg transform translate-x-4 translate-y-4 -z-10"></div>
            </div>
          </div>
          
          <div className="w-full md:w-3/5">
            <p className="text-secondary font-light">About Me</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transforming ideas into <span className="text-gradient">digital reality</span>
            </h2>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Hello! I'm John, a passionate web developer with over 5 years of experience creating
              websites and applications. My journey in web development began during college when I 
              built my first project, and I've been hooked ever since.
            </p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I work with businesses and individuals to create responsive, user-friendly websites
              that help achieve their goals. Whether it's a simple landing page or a complex web
              application, I bring ideas to life with clean code and modern design principles.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4 flex items-center space-x-4">
                  <div className="bg-secondary/20 h-12 w-12 flex items-center justify-center rounded-md">
                    <span className="text-secondary text-xl font-bold">5+</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Years of Experience</h3>
                    <p className="text-sm text-muted-foreground">Professional development</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4 flex items-center space-x-4">
                  <div className="bg-secondary/20 h-12 w-12 flex items-center justify-center rounded-md">
                    <span className="text-secondary text-xl font-bold">50+</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Projects Completed</h3>
                    <p className="text-sm text-muted-foreground">Across various industries</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
