
"use client";

import { Award } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Certification {
  name: string;
  issuer: string;
  date: string;
  id: string;
}

const certificationsData: Certification[] = [
  { id: 'cert_python_da', name: 'Python Data Analysis', issuer: 'Online Course', date: 'Completed' },
  { id: 'cert_cobol_basics', name: 'Basics of COBOL', issuer: 'Online Course', date: 'Completed' },
  { id: 'cert_ibm_mainframe', name: 'IBM Mainframe Developer Professional Certificate', issuer: 'IBM', date: 'Ongoing' },
  { id: 'cert_nn_python', name: 'Training Neural Networks in Python', issuer: 'Online Course', date: 'Ongoing' },
  { id: 'cert_langgraph', name: 'Build AI Agents and Chatbots with LangGraph', issuer: 'Online Course', date: 'Ongoing' },
];

const CertificationsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    itemRefs.current.forEach((el, index) => {
      if (!el) return;
      gsap.fromTo(el,
        { opacity: 0, x: -50 },
        {
          opacity: 1, x: 0, duration: 0.6, ease: 'power3.out', delay: index * 0.1,
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
        <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary">Certifications</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Validating my skills and knowledge through recognized certifications and ongoing learning.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificationsData.map((cert, index) => (
          <Card key={cert.id} className="bg-card shadow-lg hover:shadow-xl transition-shadow duration-300 text-left" ref={el => itemRefs.current[index] = el}>
            <CardHeader className="flex flex-row items-center gap-4">
              <Award className="w-10 h-10 text-accent" />
              <div>
                <CardTitle className="text-xl font-headline">{cert.name}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Issued by: {cert.issuer}</p>
              <p className="text-sm text-muted-foreground">Status: {cert.date}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CertificationsSection;

