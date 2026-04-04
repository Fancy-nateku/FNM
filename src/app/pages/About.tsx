import { SkillBadge } from "../components/SkillBadge";
import { GraduationCap, Layout, Server, Database, Wrench } from "lucide-react";

const developerPhoto = "/IMG-20260331-WA0079.jpg";

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

export function About() {
  return (
    <div className="py-24 bg-background min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Section */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-24 animate-in stagger-1">
          {/* Photo */}
          <div className="flex-shrink-0">
            <div className="relative group w-64 h-64">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-eggplant to-coffee-light opacity-25 blur transition duration-500 group-hover:opacity-40" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-sand shadow-2xl">
                <img
                  src={developerPhoto}
                  alt="Fancy Nateku Megiri"
                  className="w-full h-full object-cover object-top grayscale transition duration-500 hover:grayscale-0"
                />
              </div>
            </div>
          </div>

          {/* Basic Info */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
              Fancy Nateku Megiri
            </h1>
            <p className="text-xl font-medium text-coffee-dark mb-6">
              Full-Stack Developer
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mt-4">
              I'm a Software Engineering student at Kisii University who builds full-stack systems that solve real problems. Think: AgriTrack (farm management), the KSUCU-MC website, and other database-driven apps with React, Node, TypeScript, and MySQL.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <section className="mb-24 animate-in stagger-3">
          <h2 className="text-3xl font-bold text-foreground mb-12">Technical Skills</h2>
          <div className="grid gap-8 md:grid-cols-2 items-stretch">
            {skillCategories.map((category) => (
              <div 
                key={category.title} 
                className="flex flex-col p-8 bg-white/40 backdrop-blur-sm rounded-2xl border border-white/60 shadow-sm"
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
        </section>


      </div>
    </div>
  );
}