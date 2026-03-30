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
      className="rounded-2xl overflow-hidden flex flex-col"
      style={{ backgroundColor: "#1e2235" }}
    >
      {/* Project Image */}
      <div className="h-56 overflow-hidden relative flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Project Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Title */}
        <h3 className="text-white mb-3" style={{ fontSize: "1.25rem", fontWeight: 700 }}>
          {title}
        </h3>

        {/* Description */}
        <p className="mb-5 leading-relaxed flex-1" style={{ color: "#9ca3af", fontSize: "0.95rem" }}>
          {description}
        </p>

        {/* Technology Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-xs"
              style={{
                border: "1px solid #4b5563",
                color: "#d1d5db",
                backgroundColor: "transparent",
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-5">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors"
              style={{ color: "#9ca3af" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}
            >
              <Github size={17} />
              <span style={{ fontSize: "0.9rem" }}>Code</span>
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors"
              style={{ color: "#9ca3af" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}
            >
              <ExternalLink size={17} />
              <span style={{ fontSize: "0.9rem" }}>Live</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
