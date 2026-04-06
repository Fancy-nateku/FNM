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
  features,
}: ProjectCardProps) {
  const isGithubPlaceholder = githubUrl === "#";
  const isLivePlaceholder = liveUrl === "#";

  return (
    <div
      className="group flex flex-col overflow-hidden rounded-lg border border-coffee-light bg-sand transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-eggplant/30 h-full"
    >
      {/* Project Image */}
      <div className="aspect-video overflow-hidden relative flex-shrink-0">
        <img
          src={image}
          alt={`Screenshot of ${title} project`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
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
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>

        {/* Bottom Content Area: Tech Tags + Links */}
        <div className="mt-auto flex flex-col gap-6 border-t border-coffee-light/20 pt-6">
          {/* Technology Tags */}
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-sm border border-coffee-light bg-coffee/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-coffee-dark"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-6">
            {githubUrl && (
              <a
                href={isGithubPlaceholder ? undefined : githubUrl}
                target={isGithubPlaceholder ? undefined : "_blank"}
                rel="noopener noreferrer"
                className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                  isGithubPlaceholder 
                    ? "text-muted-foreground/40 cursor-not-allowed grayscale" 
                    : "text-coffee-dark hover:text-eggplant"
                }`}
                title={isGithubPlaceholder ? "Repository coming soon" : "View Source Code"}
              >
                <Github size={16} />
                <span>{isGithubPlaceholder ? "Private" : "Code"}</span>
              </a>
            )}
            {liveUrl && (
              <a
                href={isLivePlaceholder ? undefined : liveUrl}
                target={isLivePlaceholder ? undefined : "_blank"}
                rel="noopener noreferrer"
                className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                  isLivePlaceholder 
                    ? "text-muted-foreground/40 cursor-not-allowed grayscale" 
                    : "text-muted-foreground hover:text-primary"
                }`}
                title={isLivePlaceholder ? "Live demo coming soon" : "View Live Project"}
              >
                <ExternalLink size={16} />
                <span>{isLivePlaceholder ? "Preview" : "Live"}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
