
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Project Request Submitted",
        description: "Thanks for reaching out! I'll review your project details and get back to you within 24 hours.",
      });
      
      setName("");
      setEmail("");
      setProjectTitle("");
      setProjectDescription("");
      setBudget("");
      setTimeline("");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-muted/20">
      <div className="container px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-secondary font-light">Let's Collaborate</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Submit Your Project</h2>
          <p className="text-muted-foreground">
            Have a project in mind? Let me know the details, and I'll help bring your ideas to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <Card className="bg-card/50 border-secondary/20">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6">Why Work With Me?</h3>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="bg-secondary/20 h-12 w-12 flex items-center justify-center rounded-md mr-4">
                      <span className="text-secondary">🚀</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Fast Delivery</h4>
                      <p className="text-muted-foreground">Quick turnaround times without compromising on quality</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-secondary/20 h-12 w-12 flex items-center justify-center rounded-md mr-4">
                      <span className="text-secondary">💼</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Professional Work</h4>
                      <p className="text-muted-foreground">High-quality, professional results every time</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-secondary/20 h-12 w-12 flex items-center justify-center rounded-md mr-4">
                      <span className="text-secondary">🔄</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Unlimited Revisions</h4>
                      <p className="text-muted-foreground">I'll work until you're completely satisfied</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-secondary/20 h-12 w-12 flex items-center justify-center rounded-md mr-4">
                      <span className="text-secondary">📧</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <a href="mailto:hello@example.com" className="text-secondary hover:underline">
                        hello@example.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-secondary/20 h-12 w-12 flex items-center justify-center rounded-md mr-4">
                      <span className="text-secondary">📱</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <a href="tel:+11234567890" className="text-secondary hover:underline">
                        +1 (123) 456-7890
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  {["#", "#", "#", "#"].map((link, index) => (
                    <a 
                      key={index}
                      href={link}
                      className="bg-accent h-10 w-10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
                      aria-label="Social media"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                      </svg>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-card/50 border-secondary/20">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-6">Project Request Form</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="projectTitle" className="block text-sm font-medium mb-1">
                    Project Title
                  </label>
                  <Input
                    id="projectTitle"
                    type="text"
                    value={projectTitle}
                    onChange={(e) => setProjectTitle(e.target.value)}
                    placeholder="E-commerce Website Design"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="projectDescription" className="block text-sm font-medium mb-1">
                    Project Description
                  </label>
                  <Textarea
                    id="projectDescription"
                    value={projectDescription}
                    onChange={(e) => setProjectDescription(e.target.value)}
                    placeholder="Please describe your project requirements, goals, and any specific features you need..."
                    className="h-32"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium mb-1">
                      Budget Range
                    </label>
                    <Input
                      id="budget"
                      type="text"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      placeholder="$1,000 - $5,000"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium mb-1">
                      Timeline
                    </label>
                    <Input
                      id="timeline"
                      type="text"
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      placeholder="2 weeks, 1 month, etc."
                    />
                  </div>
                </div>
                
                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? "Submitting..." : "Submit Project Request"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
