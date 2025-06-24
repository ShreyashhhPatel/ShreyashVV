
"use client";

import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TravelSpot {
  name: string;
  imageUrl: string;
  imageAiHint: string;
  description: string;
}

const travelData: TravelSpot[] = [
  { 
    name: 'Little Italy, Toronto', 
    imageUrl: 'https://firebasestudio.googleapis.com/v0/b/firebase-studio-users.appspot.com/o/image-proxy%2FRk7gYnN_yBMMjL-M_K51N%2Fimage_6.png?alt=media&token=c27f99ff-9d0d-4977-83d3-7d97b4869c02', 
    imageAiHint: 'street festival sunset', 
    description: 'Vibrant streets, delicious food, and a taste of Italian culture in Toronto.' 
  },
  { 
    name: 'Toronto Islands', 
    imageUrl: 'https://firebasestudio.googleapis.com/v0/b/firebase-studio-users.appspot.com/o/image-proxy%2FRk7gYnN_yBMMjL-M_K51N%2Fimage_8.png?alt=media&token=c27f99ff-9d0d-4977-83d3-7d97b4869c02', 
    imageAiHint: 'friends Toronto skyline', 
    description: 'A peaceful getaway with stunning city views, beaches, and parks.' 
  },
  { 
    name: 'Madhuban Dam', 
    imageUrl: 'https://firebasestudio.googleapis.com/v0/b/firebase-studio-users.appspot.com/o/image-proxy%2FRk7gYnN_yBMMjL-M_K51N%2Fimage_7.png?alt=media&token=c27f99ff-9d0d-4977-83d3-7d97b4869c02', 
    imageAiHint: 'boats lake', 
    description: 'A scenic reservoir, perfect for a quiet day out amidst nature.' 
  },
  { 
    name: 'Mumbai', 
    imageUrl: 'https://firebasestudio.googleapis.com/v0/b/firebase-studio-users.appspot.com/o/image-proxy%2FRk7gYnN_yBMMjL-M_K51N%2Fimage_5.png?alt=media&token=c27f99ff-9d0d-4977-83d3-7d97b4869c02', 
    imageAiHint: 'Mumbai cityscape ocean', 
    description: "The bustling 'City of Dreams', full of energy, history, and iconic landmarks." 
  },
];

const TravelSection = () => {
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
        { opacity: 0, filter: 'blur(10px)', y: 50 },
        {
          opacity: 1, filter: 'blur(0px)', y: 0, duration: 0.8, ease: 'power3.out', delay: index * 0.15,
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
        <MapPin className="w-16 h-16 text-primary mx-auto" />
        <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary">Shrey's Random Roams</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Exploring new places, cultures, and creating unforgettable memories.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {travelData.map((spot, index) => (
          <Card key={spot.name} className="overflow-hidden bg-card shadow-lg hover:shadow-xl transition-shadow duration-300 text-left" ref={el => cardRefs.current[index] = el}>
            <div className="relative w-full h-56">
              <Image
                src={spot.imageUrl}
                alt={spot.name}
                layout="fill"
                objectFit="cover"
                data-ai-hint={spot.imageAiHint}
              />
            </div>
            <CardContent className="p-6">
              <div className="flex items-center mb-2">
                <MapPin className="w-5 h-5 text-accent mr-2" />
                <h3 className="text-xl font-headline text-foreground">{spot.name}</h3>
              </div>
              <p className="text-muted-foreground text-sm">{spot.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TravelSection;
