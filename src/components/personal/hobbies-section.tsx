
"use client";

import { Palette, Shield, Bike, ChefHat, Mountain } from 'lucide-react'; // Updated icons
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Hobby {
  name: string;
  icon: React.ElementType;
  description: string;
}

const hobbiesData: Hobby[] = [
  { 
    name: 'Designing', 
    icon: Palette, 
    description: 'Creating visually appealing and user-friendly designs.' 
  },
  { 
    name: 'Mixed Martial Arts', 
    icon: Shield, 
    description: 'Training in various disciplines for fitness and self-defense.' 
  },
  { 
    name: 'Cycling', 
    icon: Bike, 
    description: 'Exploring scenic routes and staying active on two wheels.' 
  },
  { 
    name: 'Cooking', 
    icon: ChefHat, 
    description: 'Experimenting with new recipes and culinary techniques.' 
  },
  { 
    name: 'Trekking', 
    icon: Mountain, 
    description: 'Discovering nature trails and challenging myself with new heights.' 
  },
];

const HobbiesSection = () => {
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
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'power3.out', delay: index * 0.1,
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
        <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary">Hobbies & Passions</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          What I enjoy doing in my free time to relax, learn, and have fun.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left"> {/* Adjusted grid for 5 items */}
        {hobbiesData.map((hobby, index) => (
          <Card key={hobby.name} className="bg-card shadow-lg hover:shadow-xl transition-shadow duration-300" ref={el => cardRefs.current[index] = el}>
            <CardHeader className="items-center text-center">
              <hobby.icon className="w-12 h-12 text-accent mb-3" />
              <CardTitle className="text-xl font-headline">{hobby.name}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground text-sm">{hobby.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HobbiesSection;

