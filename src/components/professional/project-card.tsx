"use client";

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import type { Project } from './projects-section'; 

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="w-full max-w-sm overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card flex flex-col h-full">
      <div className="relative w-full h-48">
        <Image
          src={project.imageUrl}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          data-ai-hint={project.imageAiHint}
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-headline">{project.title}</CardTitle>
        <CardDescription className="text-sm h-16 overflow-hidden text-ellipsis">{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="mt-auto space-y-3">
         <div className="flex flex-wrap gap-2 mb-2">
            {project.technologies.map(tech => (
              <span key={tech} className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md">{tech}</span>
            ))}
          </div>
        <Button variant="outline" className="w-full" onClick={() => alert(`Showing details for ${project.title}`)}>
          View Details <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
