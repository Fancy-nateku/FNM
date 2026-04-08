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
        className="flex items-center bg-[#F3EFEA] px-6 py-8 md:px-[64px] md:py-[48px]"
        style={{
          minHeight: 'calc(100vh - 64px)',
        }}
      >
        <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center justify-center gap-10 md:grid md:grid-cols-[1.1fr_0.9fr] md:gap-[56px]">
          {/* Left Column - Text */}
          <div className="flex flex-col items-center text-center md:block md:text-left" style={{ paddingTop: '0' }}>
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(48px, 5.5vw, 80px)',
                fontWeight: 700,
                lineHeight: 1.05,
                color: '#3E2723',
                marginBottom: '16px',
                letterSpacing: '-0.02em',
              }}
            >
              Fancy{' '}
              <span style={{ color: '#5D4037' }}>Nateku</span>{' '}
              Megiri
            </h1>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '19px',
                fontWeight: 600,
                color: '#7B5E57',
                marginBottom: '14px',
                letterSpacing: '0.02em',
              }}
            >
              Full-Stack Developer | Software Engineer
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '17px',
                lineHeight: 1.6,
                color: '#7B5E57',
                maxWidth: '540px',
                marginBottom: '24px',
              }}
            >
              Turning complex problems into software you can rely on.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col md:flex-row gap-[14px] w-full max-w-[400px] mx-auto md:mx-0 md:max-w-none md:flex-wrap md:justify-start">
              <Link
                to="/projects"
                id="hero-explore-btn"
                className="w-full md:w-auto flex justify-center items-center"
                style={{
                  gap: '8px',
                  padding: '12px 28px',
                  backgroundColor: '#5D4037',
                  color: '#fff',
                  borderRadius: '10px',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '15px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'all 300ms ease',
                  boxShadow: '0 4px 14px rgba(93,64,55,0.25)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(93,64,55,0.35)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 14px rgba(93,64,55,0.25)';
                }}
              >
                Explore Projects
              </Link>
              <div className="flex gap-[14px] w-full md:w-auto">
                <a
                  href="https://github.com/Fancy-nateku"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-github-btn"
                  className="flex-1 md:flex-initial flex justify-center items-center"
                  style={{
                    gap: '8px',
                    padding: '12px 24px',
                    backgroundColor: 'transparent',
                    color: '#5D4037',
                    border: '2px solid #5D4037',
                    borderRadius: '10px',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '15px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    transition: 'all 300ms ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(93,64,55,0.08)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <Github size={18} />
                  GitHub
                </a>
                <a
                  href="#"
                  id="hero-resume-btn"
                  className="flex-1 md:flex-initial flex justify-center items-center"
                  style={{
                    gap: '8px',
                    padding: '12px 24px',
                    backgroundColor: 'transparent',
                    color: '#5D4037',
                    border: '2px solid #5D4037',
                    borderRadius: '10px',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '15px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    transition: 'all 300ms ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(93,64,55,0.08)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
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
            <div style={{ position: 'relative' }}>
              {/* Portrait image */}
              <img
                src={developerPhoto}
                alt="Fancy Nateku Megiri"
                id="hero-portrait"
                className="w-full max-w-[300px] sm:max-w-[340px] md:max-w-[380px]"
                style={{
                  position: 'relative',
                  zIndex: 1,
                  maxHeight: 'calc(100vh - 200px)',
                  aspectRatio: '3 / 4',
                  objectFit: 'cover',
                  objectPosition: 'top',
                  borderRadius: '28px',
                  boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
                }}
              />
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
              <div key={project.title}>
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
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Technologies and Tools
            </h2>
          </div>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-3 items-stretch">
            {technicalSkills.map((category, i) => (
              <div 
                key={category.category} 
                className={`flex flex-col p-8 bg-sand/30 rounded-2xl border border-coffee-light/30 shadow-sm`}
              >
                <h3 
                  className="mb-8 text-sm font-bold tracking-[0.2em] text-foreground uppercase"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
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