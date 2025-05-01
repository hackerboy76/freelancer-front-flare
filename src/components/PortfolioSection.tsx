
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      category: "web",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      description: "A full-featured online shop with payment processing and inventory management.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#"
    },
    {
      id: 2,
      title: "Financial Dashboard",
      category: "app",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      description: "Interactive dashboard for tracking investments and financial data.",
      technologies: ["Vue.js", "Express", "D3.js", "PostgreSQL"],
      link: "#"
    },
    {
      id: 3,
      title: "Travel Blog",
      category: "web",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      description: "Custom WordPress theme with advanced features for a travel blogger.",
      technologies: ["WordPress", "PHP", "JavaScript", "CSS"],
      link: "#"
    },
    {
      id: 4,
      title: "Fitness Tracker App",
      category: "app",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      description: "Mobile application for tracking workouts and nutrition.",
      technologies: ["React Native", "Firebase", "Redux", "Google Fit API"],
      link: "#"
    },
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-accent">
      <div className="container px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-secondary font-light">My Work</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground mb-8">
            Check out some of my recent work. Each project is unique and solves specific problems.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2">
            {['all', 'web', 'app'].map((filter) => (
              <Button 
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                className={activeFilter === filter ? "" : "hover:border-secondary hover:text-secondary"}
                onClick={() => setActiveFilter(filter)}
              >
                {filter === 'all' ? 'All' : filter === 'web' ? 'Websites' : 'Applications'}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-56 object-cover object-center group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a 
                    href={project.link} 
                    className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-muted px-3 py-1 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
            <a href="#">View All Projects</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
