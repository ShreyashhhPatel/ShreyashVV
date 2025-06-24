
"use client";

import { BookOpen, Star } from 'lucide-react'; // Using lucide-react icon
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

interface Book {
  title: string;
  author: string;
  coverUrl: string;
  imageAiHint: string;
  shortTake: string;
  isStarred?: boolean;
}

const booksData: Book[] = [
  { 
    title: 'The Alchemist', 
    author: 'Paulo Coelho', 
    coverUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590.jpg', 
    imageAiHint: 'book cover fable', 
    shortTake: 'A magical fable about following your dreams.',
    isStarred: true,
  },
  { 
    title: 'Maus', 
    author: 'Art Spiegelman', 
    coverUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327863622i/15195.jpg', 
    imageAiHint: 'book cover graphic novel', 
    shortTake: 'A powerful graphic novel of the Holocaust.',
    isStarred: true,
  },
  { 
    title: 'And Then There Were None', 
    author: 'Agatha Christie', 
    coverUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1638425805i/16299.jpg', 
    imageAiHint: 'book cover mystery', 
    shortTake: 'A classic whodunit, masterfully plotted.',
    isStarred: true,
  },
  { 
    title: 'The Thirteen Problems', 
    author: 'Agatha Christie', 
    coverUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1389053909i/16335.jpg', 
    imageAiHint: 'book cover short stories', 
    shortTake: 'Clever short mysteries by Miss Marple.',
    isStarred: false,
  },
  { 
    title: 'This Is Going to Hurt', 
    author: 'Adam Kay', 
    coverUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1510682859i/35550710.jpg', 
    imageAiHint: 'book cover memoir', 
    shortTake: 'A hilarious and heartbreaking medical memoir.',
    isStarred: false,
  },
  { 
    title: 'The Art of War', 
    author: 'Sun Tzu', 
    coverUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1698717937i/10534.jpg', 
    imageAiHint: 'book cover strategy', 
    shortTake: 'Timeless strategies for conflict and life.',
    isStarred: false,
  },
];

const BooksSection = () => {
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
        { opacity: 0, rotateY: -90, transformOrigin: "left" },
        {
          opacity: 1, rotateY: 0, duration: 0.7, ease: 'power2.out', delay: index * 0.1,
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
        <BookOpen className="w-16 h-16 text-primary mx-auto" />
        <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary">Favorite Reads</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Books that have inspired, entertained, or taught me something new.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {booksData.map((book, index) => (
          <Card key={book.title} className="flex flex-col items-center p-6 bg-card shadow-lg hover:shadow-xl transition-shadow duration-300" ref={el => cardRefs.current[index] = el}>
            <div className="relative w-32 h-48 bg-secondary rounded flex items-center justify-center mb-4 overflow-hidden">
               <Image src={book.coverUrl} alt={`${book.title} cover`} layout="fill" objectFit="cover" data-ai-hint={book.imageAiHint} />
            </div>
            <CardHeader className="text-center p-0">
              <CardTitle className="text-lg font-headline flex items-center justify-center">
                {book.title}
                {book.isStarred && <Star className="w-4 h-4 ml-2 text-yellow-400 fill-yellow-400" />}
              </CardTitle>
              <CardDescription className="text-sm">by {book.author}</CardDescription>
            </CardHeader>
            <CardContent className="text-center p-0 mt-2">
              <p className="text-xs text-muted-foreground italic">"{book.shortTake}"</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BooksSection;
