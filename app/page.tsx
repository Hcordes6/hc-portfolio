"use client";
import { useState } from "react";
import { AuroraBackground } from "@/components/ui/shadcn-io/aurora-background";
import RotatingText from "@/components/animations/rotatingText";
import Dock from "@/components/animations/dock";
import { Linkedin, Github, Mail } from "lucide-react";

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
      case 'About':
        return (
          <div className="text-center max-w-2xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-white mb-4">About</h1>
            <p className="text-lg text-white/80">
              This is the about section. Add your information here.
            </p>
          </div>
        );
      case 'Employment':
        return (
          <div className="text-center max-w-2xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-white mb-4">Employment</h1>
            <p className="text-lg text-white/80">
              This is the employment section. Showcase your work experience here.
            </p>
          </div>
        );
      case 'Projects':
        return (
          <div className="text-center max-w-2xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-white mb-4">Projects</h1>
            <p className="text-lg text-white/80">
              This is the projects section. Showcase your work here.
            </p>
          </div>
        );
      case 'Contact':
        return (
          <div className="text-center max-w-2xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-white mb-4">Contact</h1>
            <p className="text-lg text-white/80">
              This is the contact section. Add your contact information here.
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
