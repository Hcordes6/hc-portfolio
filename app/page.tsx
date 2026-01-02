"use client";
import { useState } from "react";
import { AuroraBackground } from "@/components/ui/shadcn-io/aurora-background";
import RotatingText from "@/components/animations/rotatingText";
import Dock from "@/components/animations/dock";
import { Linkedin, Github, Mail } from "lucide-react";
import SpotlightCard from "@/components/animations/SpotlightCard";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>('About');

  const handleAbout = () => {
    setActiveSection('About');
  };

  const handleEmployment = () => {
    setActiveSection('Employment');
  };

  const handleProjects = () => {
    setActiveSection('Projects');
  };

  const handleContact = () => {
    setActiveSection('Contact');
  };

  const items = [
    { label: 'About', onClick: handleAbout },
    { label: 'Employment', onClick: handleEmployment },
    { label: 'Projects', onClick: handleProjects },
    { label: 'Contact', onClick: handleContact },
  ];

  const renderContent = () => {
    switch (activeSection) {
      // About section edits here -----------------
      case 'About':
        return (
          <div className="text-center max-w-2xl mx-auto px-4 gap-4">
            <h1 className="text-4xl font-bold text-white mb-4">About</h1>
            <p className="text-lg text-white/80">
              I'm a current Software Developer at DevSTAC, where I work on a variety of projects for clients. I am a Student at Washington University in St. Louis, studying Computer Science and Human-Computer Interaction.
            </p>
            <p className="text-lg text-white/80">
              I was born in Minnesota, living in St. Paul for most of my life. I began my studies at WashU in 2024. Today, I am based in both St. Louis and the Twin Cities.
            </p>
            <p className="text-lg text-white/80">
              The projects I work on include web/mobile apps, AI systems, and Databases. My current stack includes React/Next.js, Tailwind CSS, TypeScript, and Convex. I love learning new technologies. My toolsets are always adapting to the needs of the project.
            </p>
            <p className="text-lg text-white/80">
              I enjoy rock climbing, tennis, and music.
            </p>

            <SpotlightCard>
              <img src="/images/Brookings_Hall.jpg" alt="Picture of Brookings Hall, Washington University" className="w-full h-full object-cover" />
            </SpotlightCard>
          </div>
        );
      // Employment section edits here -----------------
      case 'Employment':
        return (
          <div className="text-center max-w-2xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-white mb-4">Employment</h1>
            <p className="text-lg text-white/80">

            </p>
          </div>
        );
      // Projects section edits here -----------------
      case 'Projects':
        return (
          <div className="text-center max-w-2xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-white mb-4">Projects</h1>
            <p className="text-lg text-white/80">

            </p>
          </div>
        );
      // Contact section edits here -----------------
      case 'Contact':
        return (
          <div className="text-center max-w-2xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-white mb-4">Contact</h1>
            <p className="text-lg text-white/80">

            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <AuroraBackground>
      <div className="flex min-h-screen items-center justify-center">
        {renderContent()}
      </div>
      <div className="absolute bottom-10 w-full flex justify-center">
        <Dock
          items={items}
          panelHeight={30}
        />
      </div>
      {/* Social Media Icons - Bottom Right */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
        <a
          href="https://www.linkedin.com/in/hcordes97/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/80 hover:text-white transition-colors duration-200 hover:scale-110 transform"
          aria-label="LinkedIn"
        >
          <Linkedin size={28} />
        </a>
        <a
          href="https://github.com/hcordes6"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/80 hover:text-white transition-colors duration-200 hover:scale-110 transform"
          aria-label="GitHub"
        >
          <Github size={28} />
        </a>
        <a
          href="mailto:hcordesmn@gmail.com"
          className="text-white/80 hover:text-white transition-colors duration-200 hover:scale-110 transform"
          aria-label="Email"
        >
          <Mail size={28} />
        </a>
      </div>
    </AuroraBackground>
  );
}
