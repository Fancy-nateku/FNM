import { technicalSkills } from "../../data/skills";

const developerPhoto = "/IMG-20260331-WA0079.jpg";

export function About() {
  return (
    <div className="py-6 md:py-10 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Section */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-8 md:mb-12">
          {/* Photo */}
          <div className="flex-shrink-0">
            <div className="relative group w-48 h-48 md:w-64 md:h-64">
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-sand shadow-2xl bg-white">
                <img
                  src={developerPhoto}
                  alt="Fancy Nateku Megiri"
                  className="w-full h-full object-cover object-top transition duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Basic Info */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2 tracking-tight">
              Fancy Nateku Megiri
            </h1>
            <p className="text-xl font-medium text-coffee-dark mb-3">
              Software Engineer | Full-Stack Developer 
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mt-2">
              Hey! I’m a software engineering student at Kisii University, turning real-world problems into smart solutions.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Background Section */}
        <section className="mb-6 md:mb-10 flex flex-col items-start">
          <div className="w-full max-w-3xl">
            <h2 className="text-3xl font-bold text-foreground mb-4 text-left">Background</h2>
            <div className="space-y-2 text-lg leading-[1.7] text-muted-foreground text-left">
              <p>
                Seeing farmers in my family struggle to track expenses and daily farm activities pushed me to build AgriTrack, a system that records expenses and tracks farm work. It is used by my family and a small group of early users, with expense tracking being the feature they depend on most.
              </p>
              <p>
                I also improved the KSUCU MC platform, which helps Christian Union students share updates, access activities, and stay informed.
              </p>
              <p>
                Some early versions of my systems failed when moved outside my local machine, especially during login and network requests. Fixing these problems taught me how client and server systems communicate and how to configure applications to run correctly outside development environments.
              </p>
              <p>
                As my projects grow, I plan to explore machine learning, IoT, and large data systems to support more advanced features in the tools I build.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-8 md:mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-left">Technologies and Tools</h2>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-3 items-stretch">
            {technicalSkills.map((category) => (
              <div 
                key={category.category} 
                className="flex flex-col p-8 bg-sand/30 rounded-2xl border border-coffee-light/30 shadow-sm"
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