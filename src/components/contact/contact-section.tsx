
"use client";

import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, Phone, Instagram, Facebook, MessageCircle, Music } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo(sectionRef.current.querySelectorAll('.animate-pop-in'), 
      { opacity: 0, scale: 0.5 }, 
      { opacity: 1, scale: 1, stagger: 0.1, duration: 0.6 }
    );
  }, []);

  return (
    <div ref={sectionRef} className="flex flex-col items-center justify-center space-y-12 w-full py-10 md:py-16">
      <div className="text-center space-y-4 animate-pop-in px-4">
        <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary">Say Hi!</h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          I'm always open to new opportunities, collaborations, or just a friendly chat. Feel free to reach out!
        </p>
      </div>

      <div className="flex flex-col md:flex-row w-full max-w-5xl justify-center items-start gap-8 md:gap-12 px-4">
        {/* Professional Contact Section */}
        <div className="flex flex-col items-center space-y-3 animate-pop-in md:flex-1 w-full">
          <h3 className="text-2xl font-headline text-primary mb-2 text-center w-full">Professional Contact</h3>
          <a href="mailto:shrey@example.com" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button variant="link" className="w-full justify-start sm:w-auto text-base md:text-lg group">
              <Mail className="w-5 h-5 mr-3 text-primary group-hover:text-accent transition-colors" />
              Email
            </Button>
          </a>
          <a href="tel:+1234567890" className="w-full sm:w-auto">
            <Button variant="link" className="w-full justify-start sm:w-auto text-base md:text-lg group">
              <Phone className="w-5 h-5 mr-3 text-primary group-hover:text-accent transition-colors" />
              Phone
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/shreyashv-patel/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button variant="link" className="w-full justify-start sm:w-auto text-base md:text-lg group">
              <Linkedin className="w-5 h-5 mr-3 text-primary group-hover:text-accent transition-colors" />
              LinkedIn
            </Button>
          </a>
          <a href="https://github.com/ShreyashhhPatel" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button variant="link" className="w-full justify-start sm:w-auto text-base md:text-lg group">
              <Github className="w-5 h-5 mr-3 text-primary group-hover:text-accent transition-colors" />
              GitHub
            </Button>
          </a>
        </div>

        {/* Separator */}
        <div className="w-full md:w-auto flex justify-center md:flex-col md:items-center animate-pop-in md:self-stretch my-4 md:my-0">
          <div className="block md:hidden h-px w-3/4 bg-border"></div> {/* Horizontal for SM */}
          <div className="hidden md:block w-px min-h-[150px] bg-border mx-4"></div> {/* Vertical for MD+ */}
        </div>
        
        {/* Socials Contact Section */}
        <div className="flex flex-col items-center space-y-3 animate-pop-in md:flex-1 w-full">
          <h3 className="text-2xl font-headline text-primary mb-2 text-center w-full">Connect on Socials</h3>
           <a href="https://www.instagram.com/shhrryyy__/?igsh=MWwwZjcyOXZid3dwMA%3D%3D" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button variant="link" className="w-full justify-start sm:w-auto text-base md:text-lg group">
              <Instagram className="w-5 h-5 mr-3 text-primary group-hover:text-accent transition-colors" />
              Instagram
            </Button>
          </a>
          <a href="https://www.facebook.com/share/16TJrBudVS/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button variant="link" className="w-full justify-start sm:w-auto text-base md:text-lg group">
              <Facebook className="w-5 h-5 mr-3 text-primary group-hover:text-accent transition-colors" />
              Facebook
            </Button>
          </a>
          <a href="https://discord.gg/yourserver" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto"> {/* You might want to update this href if you have a server invite */}
            <Button variant="link" className="w-full justify-start sm:w-auto text-base md:text-lg group">
              <MessageCircle className="w-5 h-5 mr-3 text-primary group-hover:text-accent transition-colors" />
              Discord: regera3465
            </Button>
          </a>
          <a href="https://open.spotify.com/user/nesfdreaehcm8yeybio8wd9yk" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button variant="link" className="w-full justify-start sm:w-auto text-base md:text-lg group">
              <Music className="w-5 h-5 mr-3 text-primary group-hover:text-accent transition-colors" />
              Spotify
            </Button>
          </a>
        </div>
      </div>

      <div className="w-full max-w-2xl animate-pop-in px-4 mt-8">
        <h3 className="text-2xl font-headline text-primary mb-4 text-center">Or Send a Quick Message</h3>
        <div className="space-y-4">
          <Textarea 
            placeholder="Your message here..." 
            rows={5} 
            className="bg-card border-border focus:ring-primary text-base"
          />
          <Button 
            className="w-full md:w-auto md:float-right bg-primary hover:bg-primary/90 text-primary-foreground py-3 px-8 text-base"
            onClick={() => alert('Message sending functionality not implemented yet.')}
          >
            Send Message
          </Button>
        </div>
      </div>

      <p className="text-sm text-muted-foreground pt-10 animate-pop-in">
        Looking forward to hearing from you!
      </p>
    </div>
  );
};

export default ContactSection;
