
"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from 'lucide-react';

interface NavLinkItem {
  href: string;
  label: string;
  subLinks?: Array<{ href: string; label: string }>;
}

const navLinks: NavLinkItem[] = [
  {
    href: '/',
    label: 'Professional Me',
    subLinks: [
      { href: '/#profile', label: 'Profile' },
      { href: '/#work-experience', label: 'Work Experience' },
      { href: '/#projects', label: 'Projects' },
      { href: '/#timeline', label: 'Timeline' },
      { href: '/#certifications', label: 'Certifications' },
      { href: '/#skills', label: 'Skills' },
      { href: '/#interests', label: 'Interests' },
    ],
  },
  {
    href: '/personal',
    label: 'Nonchalant Me',
    subLinks: [
      { href: '/personal#hobbies', label: 'Hobbies' },
      { href: '/personal#travel', label: 'Travel' },
      { href: '/personal#books', label: 'Books' },
    ],
  },
  { href: '/contact', label: 'Say Hi' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const controlNavbar = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    controlNavbar(); 

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [isClient]);

  const linkBaseClasses = "text-sm font-medium transition-colors flex items-center";
  const scrolledLinkClasses = "text-primary hover:text-accent-foreground";
  const defaultLinkClasses = "text-foreground hover:text-primary";

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled
          ? 'bg-transparent shadow-none backdrop-blur-none'
          : 'bg-background/80 backdrop-blur-md shadow-sm',
        'h-20' 
      )}
      aria-label="Main Navigation"
    >
      <div className="container mx-auto flex h-full items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" aria-label="Shrey's Spectrum Home">
          {/* TigerFaceIcon removed */}
          <span className="text-xl font-headline font-semibold text-foreground">Shrey's Spectrum</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) =>
            link.subLinks ? (
              <div key={link.href} className="flex items-center">
                <Button
                  variant="link"
                  asChild
                  className={cn(
                    linkBaseClasses,
                    isScrolled ? scrolledLinkClasses : defaultLinkClasses,
                    'px-3 py-2' 
                  )}
                >
                  <Link href={link.href}>
                    {link.label}
                  </Link>
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className={cn(
                        'h-auto w-auto p-1 ml-0.5 rounded-sm',
                        isScrolled ? 'text-primary hover:bg-accent/10' : 'text-foreground hover:bg-accent/10'
                      )}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent 
                    className="w-56 bg-transparent shadow-none border-none p-0"
                  >
                    {link.subLinks.map((subLink) => (
                      <DropdownMenuItem key={subLink.href} asChild className="p-0 focus:bg-accent focus:text-accent-foreground">
                        <Link
                          href={subLink.href}
                           className={cn(
                            "block w-full px-3 py-2 text-sm rounded-sm",
                            isScrolled ? "text-primary hover:text-accent-foreground hover:bg-accent/10" : "text-foreground hover:text-primary hover:bg-accent/20",
                            "focus:underline focus:text-primary"
                          )}
                        >
                          {subLink.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <Button key={link.href} variant="link" asChild>
                <Link
                  href={link.href}
                  className={cn(
                    linkBaseClasses,
                    isScrolled ? scrolledLinkClasses : defaultLinkClasses,
                     'px-3 py-2'
                  )}
                >
                  {link.label}
                </Link>
              </Button>
            )
          )}
        </nav>
        {/* Mobile menu button can be added here if needed */}
      </div>
    </header>
  );
};

export default Navbar;
