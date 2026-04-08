import { Link } from "react-router";
import { 
  Github, 
  Download, 
  ArrowRight,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { ProjectCard } from "../components/ProjectCard";
import { technicalSkills } from "../../data/skills";

const developerPhoto = "/IMG-20260331-WA0079.jpg";

import { featuredProjects, Project } from "../../data/projects";

export function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        id="hero"
        className="flex items-center bg-[#F3EFEA] px-6 py-8 md:min-h-[calc(100vh-64px)] md:px-[64px] md:py-[48px]"
      >
        <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center justify-center gap-10 md:grid md:grid-cols-[1.1fr_0.9fr] md:gap-[56px]">
          {/* Left Column - Text */}
          <div className="flex flex-col items-center text-center md:block md:text-left" style={{ paddingTop: '0' }}>
            <h1>
              Fancy <span style={{ color: '#5D4037' }}>Nateku</span> Megiri
            </h1>
            <p className="text-xl font-bold mb-4">
              Full-Stack Developer | Software Engineer
            </p>
            <p className="text-lg mb-6 max-w-lg">
              Turning complex problems into software you can rely on.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col md:flex-row gap-[14px] w-full max-w-[400px] mx-auto md:mx-0 md:max-w-none md:flex-wrap md:justify-start">
              <Link
                to="/projects"
                id="hero-explore-btn"
                className="w-full md:w-auto flex justify-center items-center px-7 py-3 bg-[#5D4037] text-white rounded-lg font-bold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg shadow-md"
              >
                Explore Projects
              </Link>
              <div className="flex gap-[14px] w-full md:w-auto">
                <a
                  href="https://github.com/Fancy-nateku"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-github-btn"
                  className="flex-1 md:flex-initial flex justify-center items-center gap-2 px-6 py-3 border-2 border-[#5D4037] text-[#5D4037] rounded-lg font-bold transition-all duration-300 hover:bg-[#5D4037]/10 hover:-translate-y-0.5"
                >
                  <Github size={18} />
                  GitHub
                </a>
                <a
                  href="#"
                  id="hero-resume-btn"
                  className="flex-1 md:flex-initial flex justify-center items-center gap-2 px-6 py-3 border-2 border-[#5D4037] text-[#5D4037] rounded-lg font-bold transition-all duration-300 hover:bg-[#5D4037]/10 hover:-translate-y-0.5"
                >
                  <Download size={18} />
                  Resume
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Photo */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              paddingTop: '16px', /* slight downward offset for asymmetry */
            }}
          >
            <div className="relative">
              {/* Portrait image */}
              <img
                src={developerPhoto}
                alt="Fancy Nateku Megiri"
                id="hero-portrait"
                className="w-auto h-auto max-h-[320px] sm:max-h-[380px] md:h-auto md:w-full md:max-w-[420px] rounded-[32px] shadow-2xl object-cover object-top mx-auto aspect-[3/4]"
                style={{
                  position: 'relative',
                  zIndex: 1,
                }}
              />
            </div>
          </div>
        </div>
      </section>


      {/* Featured Projects Section */}
      <section className="py-12 md:py-24" style={{ backgroundColor: 'rgba(214,198,185,0.4)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-16 text-center">
            <h2>Featured Architecture</h2>
            <p className="mx-auto max-w-2xl text-lg text-eggplant/70">
              A selection of high-impact systems designed to solve complex financial and organizational challenges.
            </p>
          </div>

          <div className="grid gap-4 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project: Project, i: number) => (
              <div key={project.title}>
                <ProjectCard {...project} size="large" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 md:py-32 bg-[#EDEAE0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 md:mb-20 text-center">
            <h2>
              Technologies and Tools
            </h2>
          </div>
          <div className="grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-3 items-stretch">
            {technicalSkills.map((category, i) => (
              <div 
                key={category.category} 
                className={`flex flex-col p-8 bg-sand/30 rounded-2xl border border-coffee-light/30 shadow-sm`}
              >
                <h3 className="mb-8 text-sm font-bold tracking-[0.2em] text-foreground uppercase">
                  {category.category}
                </h3>
                
                <div className="space-y-4">
                  {category.items.map((item) => (
                    <div key={item.name} className="text-base leading-relaxed text-eggplant/70">
                      <span className="font-semibold text-foreground">{item.name}</span>
                      <span className="mx-2 text-coffee-light">{'\u2192'}</span>
                      <span className="font-normal">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-12 md:py-24">
        <div className="absolute inset-0 bg-coffee/10 opacity-60" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2>
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