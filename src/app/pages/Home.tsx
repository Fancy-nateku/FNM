import { Link } from "react-router";
import { Github, Download, Mail, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { ProjectCard } from "../components/ProjectCard";
import { SkillBadge } from "../components/SkillBadge";

const developerPhoto = "https://images.unsplash.com/photo-1620829813573-7c9e1877706f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzb2Z0d2FyZSUyMGRldmVsb3BlciUyMHBvcnRyYWl0JTIwYWZyaWNhbnxlbnwxfHx8fDE3NzQ3MzE4MDN8MA&ixlib=rb-4.1.0&q=80&w=1080";

const featuredProjects = [
  {
    title: "Agritrack — Smart Finance Management System",
    description: "A comprehensive financial management platform designed specifically for farmers to track income, manage expenses, and generate detailed financial reports.",
    technologies: ["React", "TypeScript", "Node.js", "MySQL", "Bootstrap"],
    image: "https://images.unsplash.com/photo-1570894808314-677b57f25e45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2UlMjBzY3JlZW58ZW58MXx8fHwxNzc0NzMxODA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    githubUrl: "#",
    features: ["Income tracking", "Expense management", "Financial dashboard", "Reporting interface"],
  },
  {
    title: "Role-Based Financial Administration System",
    description: "A multi-role financial administration platform with specialized interfaces for treasurers, auditors, and chair accounts management.",
    technologies: ["React", "Node.js", "TypeScript", "MySQL", "Bootstrap"],
    image: "https://images.unsplash.com/photo-1766171359875-73155eff7f66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhZG1pbiUyMGRhc2hib2FyZCUyMGNvbXB1dGVyJTIwc2NyZWVufGVufDF8fHx8MTc3NDczMTgwNHww&ixlib=rb-4.1.0&q=80&w=1080",
    githubUrl: "#",
    features: ["Multi-role dashboards", "Treasurer interface", "Auditor tools", "Financial records handling"],
  },
  {
    title: "KSUCUMC Management System",
    description: "A comprehensive management system for handling user administration, structured dashboards, and data workflows for organizational operations.",
    technologies: ["React", "Node.js", "MySQL", "Bootstrap"],
    image: "https://images.unsplash.com/photo-1771922748624-b205cf5d002d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5hZ2VtZW50JTIwc3lzdGVtJTIwaW50ZXJmYWNlJTIwbGFwdG9wfGVufDF8fHx8MTc3NDczMTgwNXww&ixlib=rb-4.1.0&q=80&w=1080",
    githubUrl: "#",
    features: ["User management", "Structured dashboards", "Data workflows", "Administrative operations"],
  },
];

const additionalProjects = [
  {
    title: "Neon Tokyo Developer",
    description: "A modern developer interface with sleek UI design and contemporary styling approaches.",
    technologies: ["React", "Bootstrap", "CSS"],
    image: "https://images.unsplash.com/photo-1585085007341-a5aadf6e48e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwdG9reW8lMjBjaXR5c2NhcGUlMjBuaWdodHxlbnwxfHx8fDE3NzQ3MzE4MDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    githubUrl: "#",
  },
  {
    title: "Itumbe Resort Website",
    description: "A responsive business website showcasing resort services with modern design and layout.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    image: "https://images.unsplash.com/photo-1690199827629-552c41f6450f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNvcnQlMjB0cm9waWNhbCUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzQ3MzE4MDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    githubUrl: "#",
  },
];

const skillCategories = {
  Frontend: ["React", "TypeScript", "JavaScript", "Bootstrap", "HTML", "CSS"],
  Backend: ["Node.js", "Express.js"],
  Database: ["MySQL"],
  Tools: ["Git", "GitHub", "Postman", "VS Code"],
};

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="w-full py-20"
        style={{ minHeight: "90vh", display: "flex", alignItems: "center" }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Fancy Nateku Megiri
              </h1>
              <p className="text-xl text-blue-400 mb-6">
                Full-Stack Web Developer | Financial Systems Developer
              </p>
              <p className="text-lg mb-8 leading-relaxed" style={{ color: "#9ca3af" }}>
                Builds structured financial systems, admin dashboards, and scalable web applications using modern full-stack technologies.
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link to="/projects">View Projects</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Github size={20} />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="flex items-center gap-2">
                  <Download size={20} />
                  Download Resume
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact" className="flex items-center gap-2">
                    <Mail size={20} />
                    Contact Me
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Column - Photo */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-blue-600 shadow-xl">
                  <img
                    src={developerPhoto}
                    alt="Fancy Nateku Megiri"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20" style={{ backgroundColor: "#13172a" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-lg" style={{ color: "#9ca3af" }}>
              Explore my main projects showcasing financial systems and web platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} {...project} size="large" />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Technologies & Skills</h2>
            <p className="text-lg" style={{ color: "#9ca3af" }}>
              Tools and technologies I use to build scalable applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skillCategories).map(([category, skills]) => (
              <div key={category}>
                <h3 className="text-lg font-semibold text-white mb-4">{category}</h3>
                <div className="space-y-2">
                  {skills.map((skill) => (
                    <SkillBadge key={skill} name={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Projects Section */}
      <section className="py-20" style={{ backgroundColor: "#13172a" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">More Projects</h2>
            <p className="text-lg" style={{ color: "#9ca3af" }}>
              Additional work showcasing UI design and web development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {additionalProjects.map((project) => (
              <ProjectCard key={project.title} {...project} size="small" />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Let's Build Something Together
          </h2>
          <p className="text-lg mb-8" style={{ color: "#9ca3af" }}>
            I'm always interested in new opportunities and collaborations. Get in touch to discuss your project.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/contact" className="flex items-center gap-2">
                Contact Me
                <ArrowRight size={20} />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Github size={20} />
                View GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}