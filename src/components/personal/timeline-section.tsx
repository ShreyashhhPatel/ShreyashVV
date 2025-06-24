
"use client";

import { School, GraduationCap, Briefcase as BriefcaseIcon, Trophy, CalendarDays } from 'lucide-react'; 
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  location?: string;
  icon: React.ElementType;
}

const timelineEvents: TimelineEvent[] = [
  { year: 'May 2019', title: 'Completed High School', description: 'Lions School', location: 'DNH & DD, India', icon: School },
  { year: '2019 - 2023', title: 'Bachelors in Computer Science', description: 'Uka Tarsadia University', location: 'Gujarat, India', icon: GraduationCap },
  { year: 'Apr 2022 – May 2022', title: 'Web Developer Intern', description: 'Cydef Technologies Pvt. Ltd.', location: 'Gujarat, India', icon: BriefcaseIcon },
  { year: 'Dec 2022 – May 2023', title: 'Software Developer Intern', description: 'Reliance Industrial Limited', location: 'DNH DD & Diu, India', icon: BriefcaseIcon },
  { year: 'May 2024 – Present', title: 'Postgraduate in Full Stack Software Development', description: 'Lambton College', location: 'Toronto, Ontario', icon: GraduationCap },
  { year: 'June 2025', title: 'Hackathon', description: 'Upcoming participation in a hackathon event.', icon: Trophy },
];

const TimelineSection = () => {
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
      gsap.fromTo(el.querySelector('.timeline-line-segment'), 
        { scaleY: 0, transformOrigin: 'top' }, 
        { scaleY: 1, duration: 0.5, ease: 'power2.inOut', 
          scrollTrigger: { trigger: el, start: 'top 80%', toggleActions: 'play none none none' }
        }
      );
      gsap.fromTo(el.querySelector('.timeline-icon-marker'), 
        { scale: 0, opacity: 0 }, 
        { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.7)', delay: 0.3,
         scrollTrigger: { trigger: el, start: 'top 80%', toggleActions: 'play none none none' }
        }
      );
      gsap.fromTo(el.querySelector('.timeline-content-card'), 
        { opacity: 0, x: (index % 2 === 0 && window.innerWidth >= 768) ? -30 : (window.innerWidth >= 768 ? 30 : -30) }, 
        { opacity: 1, x: 0, duration: 0.6, ease: 'power3.out', delay: 0.5,
          scrollTrigger: { trigger: el, start: 'top 80%', toggleActions: 'play none none none' }
        }
      );
    });
  }, []);

  return (
    <div ref={sectionRef} className="space-y-12 text-center md:text-left">
      <div className="text-center space-y-4 section-title-animate">
        <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary">My Timeline</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Key moments and milestones in my personal and professional journey.
        </p>
      </div>
      <div className="relative">
        <div className="absolute top-0 bottom-0 left-4 md:left-1/2 w-1 bg-border -translate-x-1/2 rounded-full timeline-main-line"></div>

        {timelineEvents.map((event, index) => (
          <div key={event.year + event.title} 
               className={`mb-12 flex items-start md:items-center w-full timeline-item-container ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`} 
               ref={el => itemRefs.current[index] = el}>
            
            <div className={`w-full pl-12 md:pl-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
              <div className="p-6 bg-card rounded-lg shadow-xl timeline-content-card">
                <event.icon className="w-8 h-8 text-accent mb-3 inline-block" />
                <h3 className="text-xl font-headline text-foreground mb-1">{event.title}</h3>
                <p className="text-sm text-muted-foreground font-semibold">{event.year}</p>
                <p className="text-sm text-muted-foreground">{event.description}</p>
                {event.location && <p className="text-xs text-muted-foreground italic">{event.location}</p>}
              </div>
            </div>
            
            <div className="absolute left-4 md:left-1/2 top-0 h-full -translate-x-1/2 flex flex-col items-center timeline-line-container">
               <div className="w-1 bg-border flex-grow timeline-line-segment" style={{height: 'calc(50% - 1.25rem)'}}></div> {/* Line to icon */}
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground shadow-md z-10 timeline-icon-marker">
                  <CalendarDays className="w-5 h-5" />
                </div>
               <div className="w-1 bg-border flex-grow timeline-line-segment" style={{height: 'calc(50% - 1.25rem)'}}></div> {/* Line from icon */}
            </div>

             {/* Spacer for desktop layout */}
             <div className="hidden md:block md:w-1/2"></div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineSection;
