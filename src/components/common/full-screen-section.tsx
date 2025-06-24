
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface FullScreenSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const FullScreenSection = ({ children, className, id }: FullScreenSectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        'min-h-screen w-screen flex flex-col items-center justify-center p-8 md:p-16 relative overflow-hidden', 
        className
      )}
    >
      <div className="container mx-auto max-w-5xl text-left md:text-center"> {/* Adjusted max-width and text alignment */}
        {children}
      </div>
    </section>
  );
};

export default FullScreenSection;
