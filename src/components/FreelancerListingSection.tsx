
import React from 'react';
import { Star, Check, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Sample freelancer data
const FREELANCERS = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Full-Stack Developer",
    hourlyRate: "$65",
    rating: 4.9,
    reviews: 124,
    description: "Expert in React, Node.js and MongoDB with 6+ years of experience building scalable web applications.",
    skills: ["React", "Node.js", "MongoDB", "TypeScript"],
    verified: true,
    image: "https://i.pravatar.cc/150?img=1"
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "UI/UX Designer",
    hourlyRate: "$75",
    rating: 5.0,
    reviews: 87,
    description: "Award-winning designer focused on creating beautiful, intuitive interfaces for web and mobile applications.",
    skills: ["Figma", "Adobe XD", "User Research", "Prototyping"],
    verified: true,
    image: "https://i.pravatar.cc/150?img=3"
  },
  {
    id: 3,
    name: "Jessica Williams",
    title: "WordPress Expert",
    hourlyRate: "$45",
    rating: 4.7,
    reviews: 196,
    description: "Specialized in custom WordPress themes and plugins development with 8+ years of experience.",
    skills: ["WordPress", "PHP", "JavaScript", "WooCommerce"],
    verified: true,
    image: "https://i.pravatar.cc/150?img=5"
  },
  {
    id: 4,
    name: "David Martinez",
    title: "Mobile App Developer",
    hourlyRate: "$80",
    rating: 4.8,
    reviews: 65,
    description: "iOS & Android developer with a passion for creating seamless mobile experiences.",
    skills: ["Swift", "Kotlin", "Flutter", "React Native"],
    verified: false,
    image: "https://i.pravatar.cc/150?img=7"
  },
];

const FreelancerListingSection = () => {
  return (
    <section id="freelancers" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Top Freelancers</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Work with talented freelancers who have proven skills and experience
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {FREELANCERS.map(freelancer => (
            <div key={freelancer.id} className="bg-card border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6 flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <img 
                    src={freelancer.image} 
                    alt={freelancer.name} 
                    className="w-20 h-20 rounded-full object-cover" 
                  />
                  {freelancer.verified && (
                    <span className="absolute bottom-0 right-0 bg-green-500 rounded-full p-1">
                      <Check className="h-3 w-3 text-white" />
                    </span>
                  )}
                </div>
                
                <h3 className="text-lg font-semibold">{freelancer.name}</h3>
                <p className="text-secondary font-medium">{freelancer.title}</p>
                
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="ml-1 text-sm font-medium">{freelancer.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">({freelancer.reviews} reviews)</span>
                </div>
                
                <div className="mt-3 font-semibold">{freelancer.hourlyRate}/hr</div>
              </div>
              
              <div className="px-6 pb-6">
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {freelancer.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {freelancer.skills.slice(0, 3).map(skill => (
                    <span key={skill} className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-full">
                      {skill}
                    </span>
                  ))}
                  {freelancer.skills.length > 3 && (
                    <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                      +{freelancer.skills.length - 3}
                    </span>
                  )}
                </div>
                
                <Button className="w-full">View Profile</Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button variant="outline" className="min-w-[160px]">
            Browse All Freelancers
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FreelancerListingSection;
