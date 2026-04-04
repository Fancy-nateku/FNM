import { Link } from "react-router";
import { 
  Github, 
  Download, 
  Mail, 
  ArrowRight,
  Layout,
  Server,
  Database,
  Wrench
} from "lucide-react";
import { Button } from "../components/ui/button";
import { ProjectCard } from "../components/ProjectCard";
import { SkillBadge } from "../components/SkillBadge";

const developerPhoto = "/IMG-20260331-WA0079.jpg";

import { featuredProjects, Project } from "../../data/projects";

type Skill = {
  name: string;
  level: 'primary' | 'secondary';
  label?: string;
};

type SkillCategory = {
  title: string;
  icon: React.ElementType;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Layout,
    skills: [
      { name: "React", level: "primary", label: "Core" },
      { name: "TypeScript", level: "primary" },
      { name: "JavaScript", level: "primary" },
      { name: "Bootstrap", level: "secondary" },
      { name: "HTML", level: "secondary" },
      { name: "CSS", level: "secondary" },
    ]
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", level: "primary", label: "Expert" },
      { name: "Express.js", level: "primary" },
    ]
  },
  {
    title: "Database",
    icon: Database,
    skills: [
      { name: "MySQL", level: "primary", label: "Relational" },
    ]
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git", level: "primary" },
      { name: "GitHub", level: "primary" },
      { name: "Postman", level: "secondary" },
      { name: "VS Code", level: "secondary" },
    ]
  }
];

export function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-[85vh] items-center py-20" style={{ background: 'transparent' }}>
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 md:grid-cols-2">
            {/* Left Column - Text */}
            <div className="animate-in stagger-1">
              <h1 className="mb-4 text-5xl font-bold tracking-tight text-foreground md:text-6xl">
                Fancy Nateku Megiri
              </h1>
              <p className="mb-6 text-xl font-medium text-coffee-dark">
                Full-Stack Developer | Software Engineer
              </p>
              <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
                Turning complex problems into software you can rely on.
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link to="/projects">Explore Projects</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="https://github.com/Fancy-nateku" target="_blank" rel="noopener noreferrer" className="gap-2">
                    <Github size={18} />
                    GitHub
                  </a>
                </Button>
                <Button variant="ghost" size="lg" className="gap-2">
                  <Download size={18} />
                  Resume
                </Button>
              </div>
            </div>

            {/* Right Column - Photo */}
            <div className="flex justify-center animate-in stagger-2">
              <div className="relative group">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-eggplant to-coffee-light opacity-25 blur transition duration-500 group-hover:opacity-40" />
                <div className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-sand shadow-2xl md:h-80 md:w-80">
                  <img
                    src={developerPhoto}
                    alt="Fancy Nateku Megiri"
                    className="h-full w-full object-cover object-top grayscale transition duration-500 hover:grayscale-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24" style={{ backgroundColor: 'rgba(214,198,185,0.4)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold">Featured Architecture</h2>
            <p className="mx-auto max-w-2xl text-lg text-eggplant/70">
              A selection of high-impact systems designed to solve complex financial and organizational challenges.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project: Project, i: number) => (
              <div key={project.title} className={`animate-in stagger-${i + 1}`}>
                <ProjectCard {...project} size="large" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-32 bg-[#EDEAE0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-20 text-center">
            <h2 
              className="mb-4 text-[40px] md:text-[52px] font-bold text-gray-900 tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Technical Proficiency
            </h2>
            <p 
              className="mx-auto max-w-2xl text-xl text-gray-600 font-light"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Leveraging a modern technology stack to build resilient and maintainable software solutions.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 items-stretch">
            {skillCategories.map((category, i) => (
              <div 
                key={category.title} 
                className={`flex flex-col p-8 bg-white/40 backdrop-blur-sm rounded-2xl border border-white/60 shadow-sm animate-in stagger-${i + 1}`}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-[#A67B5B]/10 rounded-xl">
                    <category.icon className="w-6 h-6 text-[#A67B5B]" />
                  </div>
                  <h3 
                    className="text-[20px] md:text-[22px] font-bold text-[#A67B5B] tracking-tight"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  {category.skills.map((skill) => (
                    <SkillBadge 
                      key={skill.name} 
                      name={skill.name} 
                      level={skill.level} 
                      label={skill.label}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-coffee/10 opacity-60" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-4xl font-bold">
            Ready to Build Your Next System?
          </h2>
          <p className="mb-10 text-xl text-eggplant/70">
            I am currently open to new opportunities and strategic collaborations.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/contact" className="gap-2">
                Get in Touch
                <ArrowRight size={18} />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/Fancy-nateku" target="_blank" rel="noopener noreferrer" className="gap-2">
                <Github size={18} />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}