import { technicalSkills } from "../../data/skills";

const developerPhoto = "/IMG-20260331-WA0079.jpg";

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
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Skills Section */}
        <section className="mb-24 animate-in stagger-3">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center md:text-left">Technologies and Tools</h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-3 items-stretch">
            {technicalSkills.map((category) => (
              <div 
                key={category.category} 
                className="flex flex-col p-8 bg-sand/30 backdrop-blur-sm rounded-2xl border border-coffee-light/30 shadow-sm"
              >
                <h3 
                  className="mb-8 text-sm font-bold tracking-[0.2em] text-coffee-dark uppercase"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {category.category}
                </h3>
                
                <div className="space-y-4">
                  {category.items.map((item) => (
                    <div key={item.name} className="text-base leading-relaxed text-muted-foreground">
                      <span className="font-semibold text-foreground">{item.name}</span>
                      <span className="mx-2 text-coffee-light">{'\u2192'}</span>
                      <span className="font-normal">{item.desc}</span>
                    </div>
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