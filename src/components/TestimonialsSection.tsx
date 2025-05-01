
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      content: "Working with John was a game-changer for our business. He delivered a website that exceeded our expectations and helped increase our conversion rates by 40%."
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Marketing Director, GreenLeaf",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      content: "John's attention to detail and technical expertise made our e-commerce platform project a success. He was responsive, professional, and delivered on time."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Founder, Artisan Collective",
      image: "https://randomuser.me/api/portraits/women/42.jpg",
      content: "I needed a portfolio site that would showcase my work effectively. John created a beautiful, functional website that perfectly represents my brand."
    }
  ];

  return (
    <section className="py-24 bg-accent">
      <div className="container px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-secondary font-light">Client Feedback</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonials</h2>
          <p className="text-muted-foreground">
            Don't just take my word for it. Here's what some of my clients have to say.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <div className="mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="h-14 w-14 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                
                <div className="mt-4 flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg 
                      key={star}
                      className="h-5 w-5 text-secondary" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
