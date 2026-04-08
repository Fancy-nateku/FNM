import { ProjectCard } from "../components/ProjectCard";

import { featuredProjects, additionalProjects, Project } from "../../data/projects";

export function Projects() {
  return (
    <div className="py-12 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <h1 className="mb-4">
            Projects
          </h1>
          <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
            Software built to handle real-world problems.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-12 md:mb-24">
          <h2>Featured Deployments</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {featuredProjects.map((project: Project) => (
              <ProjectCard key={project.title} {...project} size="large" />
            ))}
          </div>
        </div>

        {/* Additional Projects */}
        <div>
          <h2>Structural Interfaces</h2>
          <div className="grid md:grid-cols-2 gap-4 md:gap-8">
            {additionalProjects.map((project: Project) => (
              <ProjectCard key={project.title} {...project} size="small" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}