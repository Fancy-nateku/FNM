export interface SkillItem {
  name: string;
  desc: string;
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
}

export const technicalSkills: SkillCategory[] = [
  {
    category: "FRONTEND",
    items: [
      { name: "React", desc: "Component-based UI, hooks, state management" },
      { name: "JavaScript", desc: "ES6+, DOM manipulation, async programming" },
      { name: "HTML & CSS", desc: "Semantic markup, responsive styling" },
      { name: "Tailwind/Bootstrap", desc: "Utility & component styling" }
    ]
  },
  {
    category: "BACKEND",
    items: [
      { name: "Node.js/Express", desc: "REST APIs, middleware, server-side logic" },
      { name: "Databases", desc: "MySQL, PostgreSQL, MongoDB" },
      { name: "Authentication", desc: "JWT, OAuth, Passport.js" }
    ]
  },
  {
    category: "TOOLS & WORKFLOW",
    items: [
      { name: "Git/GitHub", desc: "Version control, collaboration" },
      { name: "Docker", desc: "Containerization" },
      { name: "Postman", desc: "API testing" }
    ]
  }
];
