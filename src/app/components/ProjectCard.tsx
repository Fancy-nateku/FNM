import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  features?: string[];
  size?: "large" | "small";
}

export function ProjectCard({
  title,
  description,
  technologies,
  image,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <div
      className="group flex flex-col overflow-hidden rounded-lg border border-coffee-light bg-sand transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-eggplant/30"
    >
      {/* Project Image */}
      <div className="aspect-video overflow-hidden relative flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-eggplant/15 to-transparent" />
      </div>

      {/* Project Content */}
      <div className="flex flex-1 flex-col p-6">
        {/* Title */}
        <h3 className="mb-2 text-xl font-bold text-foreground">
          {title}
        </h3>

        {/* Description */}
        <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>

        {/* Technology Tags */}
        <div className="mb-6 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-sm border border-coffee-light bg-coffee/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-coffee-dark"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-auto flex items-center gap-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-coffee-dark hover:text-eggplant"
            >
              <Github size={16} />
              <span>Code</span>
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary"
            >
              <ExternalLink size={16} />
              <span>Live</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
