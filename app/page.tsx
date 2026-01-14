"use client";
import { useState } from "react";
import { AuroraBackground } from "@/components/ui/shadcn-io/aurora-background";
import RotatingText from "@/components/animations/rotatingText";
import Dock from "@/components/animations/dock";
import { Linkedin, Github, Mail } from "lucide-react";
import SpotlightCard from "@/components/animations/SpotlightCard";
import About from "./pages/about";
import Projects from "./pages/projects";
import Media from "./pages/media";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>('About');

  const handleAbout = () => {
    setActiveSection('About');
  };

  const handleProjects = () => {
    setActiveSection('Projects');
  };

  const handleMedia = () => {
    setActiveSection('Media');
  };

  const handleBlog = () => {
    setActiveSection('Blog');
  };

  const items = [
    { label: 'About', onClick: handleAbout },
    { label: 'Projects', onClick: handleProjects },
    { label: 'Media', onClick: handleMedia },
    { label: 'Blog', onClick: handleBlog },
  ];

  const renderContent = () => {
    switch (activeSection) {
      // About section edits here -----------------
      case 'About':
        return (
          <About />
        );
      // Projects section edits here -----------------
      case 'Projects':
        return (
          <Projects />
        );
      // Media section edits here -----------------
      case 'Media':
        return (
          <Media />
        );
      // Blog section edits here -----------------
      case 'Blog':
        return (
          <div className="w-full max-w-6xl mx-auto px-4 py-8">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                Blog
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto"></div>
            </div>
            <div className="text-center">
              <p className="text-lg text-white/70">
                Blog posts will be displayed here.
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <AuroraBackground>
      {/* Scrollable Content Area */}
      <div className="fixed inset-0 flex items-center justify-center overflow-hidden">
        <div className="w-full h-full overflow-y-auto">
          <div className="min-h-full flex items-center justify-center py-20 px-4">
            {renderContent()}
          </div>
        </div>
      </div>
      {/* Fixed Dock Navigation */}
      <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 w-full flex justify-center z-50">
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
