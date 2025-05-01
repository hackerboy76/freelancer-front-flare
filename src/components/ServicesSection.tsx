
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      icon: "🎨",
      title: "Website Design",
      description: "Custom, responsive website designs that reflect your brand and engage your audience."
    },
    {
      id: 2,
      icon: "💻",
      title: "Web Development",
      description: "From simple landing pages to complex web applications using modern technologies and frameworks."
    },
    {
      id: 3,
      icon: "📱",
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences."
    },
    {
      id: 4,
      icon: "🔍",
      title: "SEO Optimization",
      description: "Improve your site's visibility in search engines with technical SEO and content optimization."
    },
    {
      id: 5,
      icon: "🔄",
      title: "Website Maintenance",
      description: "Keep your website secure, updated, and performing optimally with regular maintenance services."
    },
    {
      id: 6,
      icon: "💡",
      title: "Technical Consultation",
      description: "Expert advice on technology choices, architecture decisions, and digital strategy."
    }
  ];

  return (
    <section id="services" className="py-24">
      <div className="container px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-secondary font-light">What I Offer</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
          <p className="text-muted-foreground">
            I provide a range of services to help businesses establish a strong online presence
            and deliver exceptional user experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="group hover:border-secondary transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold group-hover:text-secondary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
