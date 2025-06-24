
"use client";

import { useState, useEffect, useRef, type ReactNode } from 'react';
import gsap from 'gsap';
import { cn } from '@/lib/utils';

interface IntroAnimationWrapperProps {
  children: ReactNode;
}

const INTRO_SEEN_KEY = 'hasSeenIntroAnimation';

const IntroAnimationWrapper = ({ children }: IntroAnimationWrapperProps) => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const welcomeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let hasSeenIntro = false;
    try {
      hasSeenIntro = localStorage.getItem(INTRO_SEEN_KEY) === 'true';
    } catch (e) {
      // localStorage might be disabled (e.g., incognito, security settings)
      // In this case, we'll show the animation every time as a fallback.
      console.warn('Could not access localStorage for intro animation:', e);
    }

    if (hasSeenIntro) {
      setShowWelcome(false);
      setShowContent(true);
      return;
    }

    if (welcomeRef.current) {
      const tl = gsap.timeline({
        onComplete: () => {
          setShowWelcome(false);
          setShowContent(true);
          try {
            localStorage.setItem(INTRO_SEEN_KEY, 'true');
          } catch (e) {
            console.warn('Could not set localStorage for intro animation:', e);
          }
        }
      });
      tl.fromTo(welcomeRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out' }
      )
      // Reduced delay for the message to be visible for a very short period
      .to(welcomeRef.current,
        { opacity: 0, scale: 0.8, duration: 0.8, ease: 'power3.in', delay: 0.3 } 
      );
    } else {
      // Fallback if ref is not available, directly show content after a short delay
      const timer = setTimeout(() => {
        setShowWelcome(false);
        setShowContent(true);
        // Also try to set the flag here for consistency if this path is taken
        try {
            localStorage.setItem(INTRO_SEEN_KEY, 'true');
        } catch (e) {
            console.warn('Could not set localStorage for intro animation (fallback):', e);
        }
      }, 50); 
      return () => clearTimeout(timer);
    }
  }, []);

  if (showWelcome) {
    return (
      <div
        ref={welcomeRef}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
      >
        <h1 className="text-3xl md:text-5xl font-headline text-center text-primary px-4">
          Hello there, hope you are having a nice and beautiful day
        </h1>
      </div>
    );
  }

  if (showContent) {
    return <>{children}</>;
  }

  return null; 
};

export default IntroAnimationWrapper;
