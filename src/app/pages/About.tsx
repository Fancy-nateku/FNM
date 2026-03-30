import { SkillBadge } from "../components/SkillBadge";
import { GraduationCap } from "lucide-react";

const developerPhoto = "https://images.unsplash.com/photo-1620829813573-7c9e1877706f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzb2Z0d2FyZSUyMGRldmVsb3BlciUyMHBvcnRyYWl0JTIwYWZyaWNhbnxlbnwxfHx8fDE3NzQ3MzE4MDN8MA&ixlib=rb-4.1.0&q=80&w=1080";

const skillCategories = {
  Frontend: ["React", "TypeScript", "JavaScript", "Bootstrap", "HTML", "CSS"],
  Backend: ["Node.js", "Express.js"],
  Database: ["MySQL"],
  Tools: ["Git", "GitHub", "Postman", "VS Code"],
};

export function About() {
  return (
    <div className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Section */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          {/* Photo */}
          <div className="flex-shrink-0">
            <div className="w-64 h-64 rounded-2xl overflow-hidden border-4 border-blue-500 shadow-lg">
              <img
                src={developerPhoto}
                alt="Fancy Nateku Megiri"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Basic Info */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold text-white mb-2">
              Fancy Nateku Megiri
            </h1>
            <p className="text-xl text-blue-400 mb-6">
              Full-Stack Developer
            </p>
            <p className="text-lg leading-relaxed" style={{ color: "#9ca3af" }}>
              Software Engineering student passionate about building scalable systems and solving real-world problems through technology.
            </p>
          </div>
        </div>

        {/* Professional Summary */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
          <div className="prose prose-lg max-w-none">
            <p className="leading-relaxed mb-4" style={{ color: "#9ca3af" }}>
              I am a Software Engineering student at Kisii University with a strong focus on full-stack web development and system-based applications. My expertise lies in designing and building role-based financial systems, administrative dashboards, and database-driven web applications using modern full-stack technologies.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: "#9ca3af" }}>
              Throughout my academic and professional journey, I have developed a deep understanding of both frontend and backend technologies, enabling me to create comprehensive solutions that address complex business requirements. My projects demonstrate a consistent focus on financial management systems and administrative platforms, reflecting my interest in building tools that have real-world impact.
            </p>
            <p className="leading-relaxed" style={{ color: "#9ca3af" }}>
              I am particularly interested in scalable system development, clean architecture, and creating intuitive user interfaces that enhance user experience. My approach to development emphasizes code quality, maintainability, and best practices in software engineering.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skillCategories).map(([category, skills]) => (
              <div key={category}>
                <h3 className="text-lg font-semibold text-white mb-4 pb-2" style={{ borderBottom: "2px solid #3b82f6" }}>
                  {category}
                </h3>
                <div className="space-y-2">
                  {skills.map((skill) => (
                    <SkillBadge key={skill} name={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Areas of Expertise */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Areas of Expertise</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Financial Systems Development",
                desc: "Specialized in building comprehensive financial management systems with features for income tracking, expense management, and financial reporting.",
              },
              {
                title: "Role-Based Admin Dashboards",
                desc: "Expertise in creating multi-role administrative platforms with custom dashboards and access controls for different user types.",
              },
              {
                title: "Database Design & Management",
                desc: "Proficient in designing normalized database schemas and implementing efficient data access patterns using MySQL.",
              },
              {
                title: "Full-Stack Web Development",
                desc: "End-to-end development capability from designing responsive UIs to building RESTful APIs and managing databases.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-lg"
                style={{ backgroundColor: "#1e2235", border: "1px solid #2a3050" }}
              >
                <h3 className="text-white mb-3" style={{ fontSize: "1.1rem", fontWeight: 600 }}>
                  {item.title}
                </h3>
                <p style={{ color: "#9ca3af" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-8">Education</h2>
          <div
            className="rounded-lg p-8 shadow-sm"
            style={{ backgroundColor: "#1e2235", border: "1px solid #2a3050" }}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg" style={{ backgroundColor: "#1a2a4a" }}>
                <GraduationCap className="text-blue-400" size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-white mb-2" style={{ fontSize: "1.2rem", fontWeight: 600 }}>
                  Software Engineering
                </h3>
                <p className="text-blue-400 mb-2">Kisii University</p>
                <p style={{ color: "#9ca3af" }}>
                  Pursuing a degree in Software Engineering with a focus on full-stack web development, database systems, and software architecture. Actively building real-world projects to apply theoretical knowledge and develop practical skills.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}