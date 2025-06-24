
"use client";

import { Briefcase } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface WorkExperience {
  company: string;
  role: string;
  location: string;
  duration: string;
  descriptionPoints: string[]; // Changed from description to descriptionPoints
  technologies: string[];
}

const experiences: WorkExperience[] = [
  {
    company: "Reliance Industrial Limited",
    role: "Software Developer Intern",
    location: "DNH DD & Diu, India",
    duration: "December 2022 – May 2023",
    descriptionPoints: [
      "Application Development: Building an application that’s been used by the company to keep a log of all the activities inside the premises, using ASP.NET.",
      "Front-End Design: Created responsive UI/UX and a purposeful interactive page for the application.",
      "Back-End Development: Implemented functionality using C# and MSSQL.",
      "Testing & Debugging: Performed manual testing and fixed issues to ensure code quality.",
      "Documentation & Training: Created documentation and training guides to improve team knowledge sharing."
    ],
    technologies: ["ASP.NET", "C#", "MSSQL", "UI/UX Design", "Manual Testing", "Debugging"]
  },
  {
    company: "Cydef Technologies Pvt. Ltd.",
    role: "Web Developer", 
    location: "Gujarat, India",
    duration: "April 2022 – May 2022",
    descriptionPoints: [
      "Full Stack Exposure: Gained experience in front-end and back-end web development.",
      "Back-End Development: Worked with PHP to build and maintain web functionalities.",
      "Team Collaboration: Supported the team in enhancing web apps and improving performance."
    ],
    technologies: ["PHP", "Full Stack Development", "MySQL", "JavaScript", "HTML", "CSS"]
  }
];

const WorkExperienceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const experienceItemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;
    gsap.fromTo(sectionRef.current.querySelector('.section-title-animate'),
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );
    experienceItemRefs.current.forEach((el, index) => {
      if (!el) return;
      gsap.fromTo(el,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: index * 0.1,
          scrollTrigger: {
            trigger: el,
            start: 'top 85%', 
            toggleActions: 'play none none none',
          }
        }
      );
    });
  }, []);
  
  return (
    <div ref={sectionRef} className="space-y-12 text-center md:text-left">
      <div className="text-center space-y-4 section-title-animate">
        <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary">Work Experience</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          My journey through impactful internships and professional roles.
        </p>
      </div>
      <div className="space-y-10">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className="py-8 border-b border-border last:border-b-0 flex flex-col md:flex-row gap-6 md:gap-8 text-left"
            ref={el => experienceItemRefs.current[index] = el}
          >
            {/* Left Column: Company, Role, Location, Duration, Technologies */}
            <div className="md:w-2/5 space-y-2">
              <div className="flex items-start gap-3 mb-2"> {/* Align items start for better icon alignment */}
                <Briefcase className="w-7 h-7 text-primary mt-1 flex-shrink-0" /> {/* Added mt-1 for better alignment with text and flex-shrink-0 */}
                <div>
                  <h3 className="text-2xl font-headline font-bold text-primary">{exp.company}</h3>
                  <p className="text-sm text-muted-foreground">{exp.location}</p>
                </div>
              </div>
              <h4 className="text-xl font-semibold text-foreground">{exp.role}</h4>
              <p className="text-sm text-muted-foreground">Duration: {exp.duration}</p>
              <div className="pt-3">
                <h5 className="font-semibold text-md text-foreground mb-2">Technologies:</h5>
                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map(tech => (
                    <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Description */}
            <div className="md:w-3/5 space-y-2">
              {exp.descriptionPoints.map((point, pointIndex) => (
                <div key={pointIndex} className="flex items-start text-sm text-muted-foreground leading-relaxed">
                  <span className="mr-2 text-primary font-semibold">●</span>
                  <p>{point}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperienceSection;
