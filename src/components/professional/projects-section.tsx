
"use client";

import ProjectCard from './project-card';
import { useEffect, useRef, useState, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAiHint: string;
  technologies: string[];
}

const projectsData: Project[] = [
  {
    id: '1',
    title: 'Allin – SAAS Automation',
    description: 'Centralizing content management, accessing content for checking and posting across multiple social media platforms, and scheduling posts within clicks. Aims to eliminate the need for a social media manager.',
    imageUrl: 'https://firebasestudio.googleapis.com/v0/b/firebase-studio-users.appspot.com/o/image-proxy%2FRk7gYnN_yBMMjL-M_K51N%2Fimage_0.png?alt=media&token=c1303bfa-ca5c-4395-8d51-aa344efaa1f4',
    imageAiHint: 'wireframe social media',
    technologies: ["React.js", "Tailwind CSS", "Express.js", "Redis", "PostgreSQL", "BullMQ", "Firebase Auth"]
  },
  {
    id: '2',
    title: 'OverSight – Data Analysis Dashboard',
    description: 'Designed a dashboard to fetch, clean, and visualize real-world datasets with interactive charts and exportable reports. Enables filtering, aggregation, and real-time data exploration for improved insights.',
    imageUrl: 'https://firebasestudio.googleapis.com/v0/b/firebase-studio-users.appspot.com/o/image-proxy%2FRk7gYnN_yBMMjL-M_K51N%2Fimage_1.png?alt=media&token=e93a7d23-28eb-4f05-b778-4bb425c27702',
    imageAiHint: 'data dashboard chart',
    technologies: ["React.js", "Axios", "Chart.js", "Tailwind CSS", "Flask", "Pandas", "NumPy", "PostgreSQL", "Docker", "Git"]
  },
  {
    id: '3',
    title: 'Persona – 2D Multiplayer Social Platform',
    description: 'Built an interactive web app where users explore a shared 2D map, interact in real-time, and communicate via global/private chat and video calls. Implemented live notifications and seamless video streaming using WebRTC.',
    imageUrl: 'https://firebasestudio.googleapis.com/v0/b/firebase-studio-users.appspot.com/o/image-proxy%2FRk7gYnN_yBMMjL-M_K51N%2Fimage_3.png?alt=media&token=e937d7a3-487c-471e-8120-008f4c4c4ea3',
    imageAiHint: 'multiplayer game',
    technologies: ["React.js", "Phaser.js", "Node.js", "Express.js", "Socket.io", "WebRTC"]
  },
  {
    id: '4',
    title: 'Shift Logbook Manager',
    description: 'Stores information about materials arriving at a factory, including weight, arrival/departure times, storage details, employee activities, remarks, and safety information.',
    imageUrl: 'https://firebasestudio.googleapis.com/v0/b/firebase-studio-users.appspot.com/o/image-proxy%2FRk7gYnN_yBMMjL-M_K51N%2Fimage_4.png?alt=media&token=e9f4a13d-5568-45e0-84ff-f8b881180766',
    imageAiHint: 'logbook app',
    technologies: ["JavaScript", "Bootstrap", ".NET WebForms", "MSSQL", "HTML", "CSS"]
  },
  {
    id: '7',
    title: 'Marine Canada – Marine Conservation & Awareness Platform',
    description: 'Developed a multi-page web application dedicated to raising awareness and supporting conservation efforts for endangered marine species in Canada. Features include detailed species info, interactive maps, event promotion, community engagement, and integration of educational media to drive user participation and fundraising.',
    imageUrl: 'https://firebasestudio.googleapis.com/v0/b/firebase-studio-users.appspot.com/o/image-proxy%2FRk7gYnN_yBMMjL-M_K51N%2Fimage_2.png?alt=media&token=8e99e4b6-79cf-41c3-8820-22123547847c',
    imageAiHint: 'sea turtle underwater',
    technologies: ["JavaScript", "Google Maps API", "YouTube API", "CSS3", "HTML5"]
  }
];


const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [cardOuterWidth, setCardOuterWidth] = useState(0);

  useLayoutEffect(() => {
    if (sliderRef.current && sliderRef.current.children[0]) {
      const firstCardWrapper = sliderRef.current.children[0] as HTMLElement;
      setCardOuterWidth(firstCardWrapper.offsetWidth);
    }
  }, [projectsData]); 

  useEffect(() => {
    if (!sliderRef.current || !viewportRef.current || projectsData.length === 0 || cardOuterWidth === 0) {
      return;
    }

    const totalScrollWidth = cardOuterWidth * projectsData.length;
    const animationDuration = projectsData.length * 5; 

    const slider = sliderRef.current as any;
    if (slider.gsapAnimation) {
      slider.gsapAnimation.kill();
    }
    
    gsap.set(sliderRef.current, { x: 0 }); 

    slider.gsapAnimation = gsap.to(sliderRef.current, {
      x: -totalScrollWidth,
      duration: animationDuration,
      ease: 'none', 
      repeat: -1, 
      onRepeat: function() {
        gsap.set(this.targets()[0], { x: 0 });
      }
    });

    return () => {
      if (slider.gsapAnimation) {
        slider.gsapAnimation.kill();
        delete slider.gsapAnimation;
      }
    };
  }, [projectsData, cardOuterWidth]); 


  useEffect(() => {
    if (!sectionRef.current) return;
    gsap.fromTo(sectionRef.current.querySelector('.section-title-animate'),
      { opacity: 0, y: -30 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );
  }, []);
  
  const cardsToDisplay = projectsData.length > 0 ? [...projectsData, ...projectsData] : [];

  return (
    <div ref={sectionRef} className="w-full space-y-12 text-center md:text-left">
      <div className="text-center space-y-4 section-title-animate">
        <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary">My Projects</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A showcase of my passion for building and problem-solving.
        </p>
      </div>
      <div ref={viewportRef} className="w-full overflow-hidden mt-8">
        {projectsData.length > 0 ? (
          <div
            ref={sliderRef}
            className="flex" 
          >
            {cardsToDisplay.map((project, index) => (
              <div key={`${project.id}-${index}`} className="p-3 flex-shrink-0">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">No projects to display yet.</p>
        )}
      </div>
    </div>
  );
};

export default ProjectsSection;
