
"use client";

import { Cpu, Cloud, GitMerge, Brain, LinkIcon, DollarSign } from 'lucide-react'; // Updated icons
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Interest {
  title: string;
  icon: React.ElementType;
  description: string;
}

const interestsData: Interest[] = [
  {
    title: 'COBOL & Mainframe Development',
    icon: Cpu,
    description: 'Interested in legacy system modernization and enterprise-scale transaction processing. Enjoy working with COBOL to maintain, enhance, and integrate critical business applications.',
  },
  {
    title: 'Cloud Computing & DevOps',
    icon: Cloud, // Could also use GitMerge if focusing more on DevOps aspect
    description: 'Keen on leveraging cloud platforms for deployment, automation, and CI/CD pipelines. Interested in making infrastructure efficient, resilient, and easy to maintain.',
  },
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    description: 'Curious about applying AI/ML to solve real-world problems and automate decision-making. Enjoy experimenting with new models, algorithms, and emerging technologies.',
  },
  {
    title: 'Blockchain & FinTech',
    icon: LinkIcon, // Link for Blockchain, DollarSign could be secondary or for FinTech specifically
    description: 'Fascinated by decentralized technologies and their potential in financial innovation. Interested in building secure, transparent, and efficient blockchain solutions.',
  },
];


const InterestsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    cardRefs.current.forEach((el, index) => {
      if (!el) return;
      gsap.fromTo(el,
        { opacity: 0, scale: 0.8, y: 50 },
        {
          opacity: 1, scale: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: index * 0.15,
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
        <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary">Interests & Aspirations</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Exploring the frontiers of technology and aiming for impactful contributions.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
        {interestsData.map((interest, index) => (
          <Card key={interest.title} className="bg-card shadow-lg flex flex-col h-full" ref={el => cardRefs.current[index] = el}>
            <CardHeader>
              <div className="flex items-center mb-2">
                <interest.icon className="w-8 h-8 text-accent mr-3" />
                <CardTitle className="text-xl font-headline">{interest.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground text-sm">
                {interest.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default InterestsSection;
