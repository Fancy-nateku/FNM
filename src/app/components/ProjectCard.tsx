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

        {/* Features (if any) */}
        {features && features.length > 0 && (
          <div className="mb-6 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#6F4E37]/60">Key Features</h4>
            <ul className="grid grid-cols-1 gap-x-4 gap-y-1 text-xs text-muted-foreground">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#6F4E37]/40" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technology Tags */}
        <div className="mb-8 flex flex-wrap gap-2">
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
        <div className="mt-auto flex items-center gap-6 border-t border-coffee-light/20 pt-6">
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
  );
}
