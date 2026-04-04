import { ProjectCard } from "../components/ProjectCard";

import { featuredProjects, additionalProjects, Project } from "../../data/projects";

export function Projects() {
  return (
    <div className="py-24 bg-background min-h-[100vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-in stagger-1">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Projects
          </h1>
          <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
            Software built to handle real-world problems.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-24 animate-in stagger-2">
          <h2 className="text-2xl font-bold text-foreground mb-8">Featured Deployments</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project: Project) => (
              <ProjectCard key={project.title} {...project} size="large" />
            ))}
          </div>
        </div>

        {/* Additional Projects */}
        <div className="animate-in stagger-3">
          <h2 className="text-2xl font-bold text-foreground mb-8">Structural Interfaces</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {additionalProjects.map((project: Project) => (
              <ProjectCard key={project.title} {...project} size="small" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}