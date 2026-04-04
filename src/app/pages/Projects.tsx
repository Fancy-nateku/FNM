import { ProjectCard } from "../components/ProjectCard";

const featuredProjects = [
  {
    title: "Agritrack — Smart Finance Management System for Farmers",
    description: "A comprehensive financial management platform designed specifically for farmers. Agritrack enables agricultural businesses to track income streams, manage operational expenses, monitor financial health through interactive dashboards, and generate detailed financial reports for better decision-making.",
    technologies: ["React", "TypeScript", "Node.js", "MySQL", "Bootstrap"],
    image: "https://images.unsplash.com/photo-1570894808314-677b57f25e45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2UlMjBzY3JlZW58ZW58MXx8fHwxNzc0NzMxODA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    githubUrl: "#",
    liveUrl: "#",
    features: [
      "Income tracking with categorization",
      "Expense management and budgeting",
      "Interactive financial dashboard with charts",
      "Reporting interface with export capabilities",
      "Real-time financial insights",
      "Data visualization for trends",
    ],
  },
  {
    title: "Role-Based Financial Administration System",
    description: "A sophisticated multi-role financial administration platform built for organizational financial management. The system features specialized interfaces and permissions for different roles including treasurers, auditors, and administrative chairs. Each role has tailored tools and access levels for secure financial record management.",
    technologies: ["React", "Node.js", "TypeScript", "MySQL", "Bootstrap"],
    image: "https://images.unsplash.com/photo-1766171359875-73155eff7f66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhZG1pbiUyMGRhc2hib2FyZCUyMGNvbXB1dGVyJTIwc2NyZWVufGVufDF8fHx8MTc3NDczMTgwNHww&ixlib=rb-4.1.0&q=80&w=1080",
    githubUrl: "#",
    liveUrl: "#",
    features: [
      "Multi-role dashboards with custom views",
      "Treasurer interface for fund management",
      "Auditor tools for financial review",
      "Chair Accounts management panel",
      "Financial records handling with audit trails",
      "Role-based access control (RBAC)",
      "Secure authentication system",
    ],
  },
  {
    title: "KSUCUMC Management System",
    description: "A comprehensive organizational management system developed for Kisii University Christian Union Methodist Church. The platform handles user administration, provides structured dashboards for different stakeholders, manages data workflows, and facilitates administrative operations efficiently.",
    technologies: ["React", "Node.js", "MySQL", "Bootstrap"],
    image: "https://images.unsplash.com/photo-1771922748624-b205cf5d002d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5hZ2VtZW50JTIwc3lzdGVtJTIwaW50ZXJmYWNlJTIwbGFwdG9wfGVufDF8fHx8MTc3NDczMTgwNXww&ixlib=rb-4.1.0&q=80&w=1080",
    githubUrl: "#",
    liveUrl: "#",
    features: [
      "User management with profile handling",
      "Structured dashboards for different roles",
      "Automated data workflows",
      "Administrative operations panel",
      "Member registration and tracking",
      "Event management system",
    ],
  },
];

const additionalProjects = [
  {
    title: "Neon Tokyo Developer",
    description: "A modern developer interface project focused on contemporary UI design and sleek styling approaches. The project showcases advanced CSS techniques, modern design patterns, and responsive layouts inspired by cyberpunk aesthetics.",
    technologies: ["React", "Bootstrap", "CSS"],
    image: "https://images.unsplash.com/photo-1585085007341-a5aadf6e48e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwdG9reW8lMjBjaXR5c2NhcGUlMjBuaWdodHxlbnwxfHx8fDE3NzQ3MzE4MDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    githubUrl: "#",
    features: [
      "Modern UI design with neon aesthetics",
      "Contemporary developer interface styling",
      "Responsive and interactive components",
    ],
  },
  {
    title: "Itumbe Resort Website",
    description: "A professional business website designed for Itumbe Resort to showcase their services, amenities, and facilities. The website features a modern responsive layout, service presentation, and booking information to attract potential guests.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    image: "https://images.unsplash.com/photo-1690199827629-552c41f6450f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNvcnQlMjB0cm9waWNhbCUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzQ3MzE4MDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    githubUrl: "#",
    liveUrl: "#",
    features: [
      "Business website with service presentation",
      "Responsive layout for all devices",
      "Image galleries and amenity showcases",
      "Contact and booking information",
    ],
  },
];

export function Projects() {
  return (
    <div className="py-24 bg-background min-h-[100vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-in stagger-1">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Systems Architecture
          </h1>
          <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
            A selection of high-integrity financial systems, administrative platforms, and structural web applications. Each deployment demonstrates end-to-end full-stack capabilities and deliberate problem-solving.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-24 animate-in stagger-2">
          <h2 className="text-2xl font-bold text-foreground mb-8">Featured Deployments</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} {...project} size="large" />
            ))}
          </div>
        </div>

        {/* Additional Projects */}
        <div className="animate-in stagger-3">
          <h2 className="text-2xl font-bold text-foreground mb-8">Structural Interfaces</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {additionalProjects.map((project) => (
              <ProjectCard key={project.title} {...project} size="small" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}