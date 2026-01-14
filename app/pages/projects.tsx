"use client";
import SpotlightCard from "@/components/animations/SpotlightCard";
import { ExternalLink } from "lucide-react";

export default function Projects() {
    const projects = [
        {
            title: "BearShare",
            description: "Social platform for WashU students to connect with other students in their courses. Supports course discussion and file sharing.",
            techStack: ["Next.js", "Tailwind", "Typescript", "Convex", "Clerk"],
            link: "https://github.com/Hcordes6/BearShare"
        },
        {
            title: "Madness.AI",
            description: "Uses college basketball statistics API. Users can adjust sliders to generate a unique march madness bracket bassed on their preferred statistics.",
            techStack: ["Node.js", "HTML", "CSS", "JavaScript"],
            link: "https://github.com/Hcordes6/Madness.AI"
        },
        {
            title: "Simulated File System",
            description: "File system simulation that can be interacted with through a customized command prompt. The commands implemented allow the user to interact with the file system, allowing file creation, deletion, reading files, and writing to files",
            techStack: ["C++", "CMake", "Object-Oriented Design"],
            link: "https://github.com/Hcordes6/BearShare"
        },
        {
            title: "Book to Website",
            description: "Front-end design final project. Directly translates a book into a website. Focuses on easy navigation and indexing of the book.",
            techStack: ["HTML", "CSS", "JavaScript"],
            link: "https://github.com/Hcordes6/BearShare"
        },
    ];
    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-8 space-y-8">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                    Projects
                </h1>
            </div>
            <div className="grid lg:grid-cols-3 gap-8 items-start">
                {/* Left Column - Text Content */}
                {projects.map((project, index) => (
                    <SpotlightCard key={index} className="p-5">
                        <div className="flex flex-col items-start gap-3 h-55">
                            <div className="flex flex-row w-full justify-between">
                                <h3 className="text-white font-semibold mb-2">{project.title}</h3>
                                <a href={project.link} target="_blank">
                                    <ExternalLink className="w-5 h-5 text-white" />
                                </a>
                            </div>

                            <p className="text-white/70 text-sm leading-relaxed">
                                {project.description}
                            </p>
                            <div className="flex flex-row items-center gap-2">
                                {project.techStack.map((tech, index) => (
                                    <span key={index} className="text-white/70 text-xs leading-relaxed bg-white/10 px-2 py-1 rounded-md">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </SpotlightCard>
                ))}
            </div>
        </div>
    );
}