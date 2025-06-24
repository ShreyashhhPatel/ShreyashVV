
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ProfileSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const roleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !nameRef.current || !roleRef.current || !descriptionRef.current || !buttonRef.current || !imageRef.current) return;
    
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Initial setup (elements hidden)
    gsap.set([nameRef.current, roleRef.current, descriptionRef.current, buttonRef.current, imageRef.current], { opacity: 0 });
    gsap.set(nameRef.current, { x: -100 });
    gsap.set(roleRef.current, { x: 100 });

    tl.to(nameRef.current, { opacity: 1, x: 0, duration: 0.8, delay: 0.2 })
      .to(roleRef.current, { opacity: 1, x: 0, duration: 0.8 }, "-=0.6")
      .to(descriptionRef.current, { opacity: 1, duration: 0.8 }, "-=0.5")
      .to(buttonRef.current, { opacity: 1, duration: 0.8 }, "-=0.6")
      .to(imageRef.current, { opacity: 1, scale: 1, duration: 1, ease: 'elastic.out(1, 0.75)' }, "-=0.5");

  }, []);

  return (
    <div ref={sectionRef} className="grid md:grid-cols-2 gap-12 items-center text-left">
      <div className="space-y-6">
        <h1 ref={nameRef} className="text-5xl md:text-6xl font-headline font-bold text-primary">Shreyash V Patel</h1>
        <h2 ref={roleRef} className="text-2xl md:text-3xl font-headline text-foreground">Software developer / Data Analyst</h2>
        <p ref={descriptionRef} className="text-lg text-muted-foreground">
          A passionate developer crafting beautiful and functional web experiences. Always learning, always building, always pushing boundaries.
        </p>
        <div ref={buttonRef}>
          <Button size="lg" onClick={() => document.getElementById('work-experience')?.scrollIntoView({ behavior: 'smooth' })}>
            Explore My Work <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
      <div ref={imageRef} className="flex justify-center md:justify-end" style={{ opacity: 0, transform: 'scale(0.8)' }}>
        <Image
          src="https://firebasestudio.googleapis.com/v0/b/firebase-studio-users.appspot.com/o/image-proxy%2FRk7gYnN_yBMMjL-M_K51N%2Fimage_0.png?alt=media&token=c1303bfa-ca5c-4395-8d51-aa344efaa1f4"
          alt="Shreyash V Patel's Profile Picture"
          width={400}
          height={400}
          className="rounded-full shadow-2xl object-cover"
          data-ai-hint="man cityscape"
          priority
        />
      </div>
    </div>
  );
};

export default ProfileSection;
