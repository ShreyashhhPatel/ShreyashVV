
"use client";

import { Badge } from '@/components/ui/badge';
import { Code2, Database, Brain, Library, BarChart3, Cloud, GitMerge, Network, Cpu, Settings2 } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SkillCategory {
  name: string;
  icon: React.ElementType;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  { 
    name: 'Languages & Web Technologies', 
    icon: Code2, 
    skills: ['C#', 'JavaScript', 'TypeScript', 'Python', 'Java', 'SQL', 'HTML', 'CSS', 'COBOL'] 
  },
  { 
    name: 'Frameworks & Libraries', 
    icon: Library, 
    skills: ['ASP.NET / Core', 'MVC', 'Angular', 'React', 'Next.js', 'Vite.js', 'Node.js', 'Express.js', 'Django', 'Spring Boot', 'Tailwind CSS'] 
  },
  { 
    name: 'Databases', 
    icon: Database, 
    skills: ['SQL Server', 'MySQL', 'PostgreSQL', 'MongoDB', 'Oracle', 'ADO.NET', 'Redis'] 
  },
  { 
    name: 'Data & Analytics Tools', 
    icon: BarChart3, 
    skills: ['Numpy', 'Matplotlib', 'Data Analytics', 'Data Structures & Algorithms', 'Discrete Mathematics'] 
  },
  { 
    name: 'Cloud & Backend Services', 
    icon: Cloud, 
    skills: ['AWS', 'Firebase Auth', 'Docker', 'Kubernetes'] 
  },
  { 
    name: 'DevOps & Automation', 
    icon: GitMerge, 
    skills: ['CI/CD Pipelines', 'Jenkins', 'Git', 'PowerShell', 'Bullmq'] 
  },
  { 
    name: 'Networking Protocols', 
    icon: Network, 
    skills: ['SOAP', 'SSL', 'FTP', 'TCP/IP', 'HTTP'] 
  },
  { 
    name: 'Soft Skills', 
    icon: Brain, 
    skills: ['Problem-solving', 'Team collaboration', 'Adaptability', 'Time management', 'Critical thinking'] 
  },
];

const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const categoryRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    categoryRefs.current.forEach((el) => {
      if (!el) return;
      gsap.fromTo(el.querySelectorAll('.skill-badge-animate'),
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.7)', stagger: 0.05,
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          }
        }
      );
       gsap.fromTo(el.querySelector('.category-title-animate'),
        { opacity: 0, x: -30 },
        {
          opacity: 1, x: 0, duration: 0.6, ease: 'power3.out',
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
        <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary">Skills</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          My technical expertise and professional competencies.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
        {skillCategories.map((category, index) => (
          <div key={category.name} className="p-4 bg-card rounded-lg shadow-lg" ref={el => categoryRefs.current[index] = el}>
            <div className="flex items-center mb-3 category-title-animate">
              <category.icon className="w-7 h-7 text-primary mr-2.5" />
              <h3 className="text-xl font-headline text-foreground">{category.name}</h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {category.skills.map(skill => (
                <Badge key={skill} variant="secondary" className="text-xs skill-badge-animate">{skill}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
