
import React, { useState } from 'react';
import { Search, Briefcase, Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// Sample job data
const JOBS = [
  {
    id: 1,
    title: "Full-Stack Web Developer Needed",
    description: "Looking for an experienced developer to build a responsive e-commerce website with React and Node.js.",
    budget: "$1,000 - $3,000",
    skills: ["React", "Node.js", "MongoDB", "Express"],
    postedDate: "2 days ago",
    proposals: 7,
    clientRating: 4.8,
    clientCountry: "United States"
  },
  {
    id: 2,
    title: "WordPress Website Customization",
    description: "Need help customizing a WordPress theme for my personal blog.",
    budget: "$500 - $1,000",
    skills: ["WordPress", "CSS", "PHP", "JavaScript"],
    postedDate: "5 hours ago",
    proposals: 12,
    clientRating: 4.5,
    clientCountry: "Canada"
  },
  {
    id: 3,
    title: "Mobile App Developer - iOS/Android",
    description: "Looking to build a fitness tracking app for iOS and Android using Flutter.",
    budget: "$3,000 - $5,000",
    skills: ["Flutter", "Dart", "Firebase", "UI/UX"],
    postedDate: "1 week ago",
    proposals: 18,
    clientRating: 4.9,
    clientCountry: "Australia"
  },
  {
    id: 4,
    title: "Logo and Brand Identity Designer",
    description: "Startup looking for a creative designer to develop our brand identity including logo, color scheme, and style guide.",
    budget: "$800 - $1,500",
    skills: ["Logo Design", "Branding", "Illustrator", "Photoshop"],
    postedDate: "3 days ago",
    proposals: 24,
    clientRating: 4.2,
    clientCountry: "United Kingdom"
  },
];

const JobListingSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(JOBS);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const filtered = JOBS.filter(job => 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredJobs(filtered);
  };
  
  return (
    <section id="jobs" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Projects</h2>
            <p className="text-muted-foreground">Find the perfect project that matches your skills</p>
          </div>
          
          <form onSubmit={handleSearch} className="mt-6 md:mt-0 flex gap-3 w-full md:w-auto">
            <div className="relative flex-grow md:w-64">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search projects..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button type="submit">Search</Button>
          </form>
        </div>
        
        <div className="grid gap-6">
          {filteredJobs.map(job => (
            <div key={job.id} className="border bg-card rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold hover:text-secondary transition-colors">
                    <a href={`/job/${job.id}`}>{job.title}</a>
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                    <span className="flex items-center">
                      <Briefcase className="h-4 w-4 mr-1" />
                      {job.postedDate}
                    </span>
                    <span className="flex items-center">
                      <Star className="h-4 w-4 mr-1 text-yellow-500" />
                      {job.clientRating}
                    </span>
                    <span>{job.clientCountry}</span>
                    <span>Proposals: {job.proposals}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-lg">{job.budget}</div>
                </div>
              </div>
              
              <p className="mt-4 text-muted-foreground">{job.description}</p>
              
              <div className="mt-4 flex flex-wrap gap-2">
                {job.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-secondary/10 text-secondary text-xs rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
              
              <div className="mt-6 flex justify-between items-center">
                <Button variant="outline" size="sm">
                  View Details
                </Button>
                <Button size="sm">
                  Apply Now
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button variant="outline" className="min-w-[160px]">
            Browse All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JobListingSection;
