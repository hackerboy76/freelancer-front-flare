
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const SkillsSection = () => {
  const technicalSkills = [
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "UI/UX Design", level: 75 },
    { name: "WordPress", level: 85 }
  ];
  
  const softSkills = [
    { name: "Communication", icon: "💬" },
    { name: "Problem Solving", icon: "🧩" },
    { name: "Time Management", icon: "⏱️" },
    { name: "Adaptability", icon: "🔄" }
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-secondary font-light">My Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h2>
          <p className="text-muted-foreground">
            With years of experience, I've honed a diverse set of skills that allow me to create
            comprehensive web solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6 border-l-4 border-secondary pl-4">
              Technical Skills
            </h3>
            
            <div className="space-y-6">
              {technicalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-secondary">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 border-l-4 border-secondary pl-4">
              Soft Skills
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {softSkills.map((skill) => (
                <Card key={skill.name}>
                  <CardContent className="flex items-center p-4 space-x-4">
                    <span className="text-3xl">{skill.icon}</span>
                    <span className="font-medium">{skill.name}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <h3 className="text-xl font-semibold mt-8 mb-4 border-l-4 border-secondary pl-4">
              Tools & Platforms
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {["VS Code", "Git", "Figma", "AWS", "Docker", "Netlify"].map((tool) => (
                <span 
                  key={tool}
                  className="bg-accent px-4 py-2 rounded-full text-sm font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
