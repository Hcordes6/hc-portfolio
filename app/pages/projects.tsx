"use client";
import SpotlightCard from "@/components/animations/SpotlightCard";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

export default function Projects() {
    const projects = [
        {
            title: "BearShare",
            description: "Social platform for WashU students to connect with other students in their courses. Supports course discussion and file sharing. Utilizes authentication and database for user and post data management.",
            techStack: ["Next.js", "Tailwind", "Typescript", "Convex", "Clerk"],
            link: "https://github.com/Hcordes6/BearShare",
            isDevSTAC: false
        },
        {
            title: "DevSTAC: Postpartum Mental Health App",
            description: "Mobile app designed to support the patients of the WashU OBGYN's. Includes weekly mental health check-ins, educational resources, and local resources based on the patient's location.",
            techStack: ["React Native", "Expo", "Figma", "PostHog"],
            link: undefined, // No public repository
            isDevSTAC: true
        },
        {
            title: "Madness.AI",
            description: "Uses college basketball statistics API. Users can adjust sliders to generate a unique march madness bracket bassed on their preferred statistics.",
            techStack: ["Node.js", "HTML", "CSS", "JavaScript"],
            link: "https://github.com/Hcordes6/Madness.AI",
            isDevSTAC: false
        },
        {
            title: "Simulated File System",
            description: "File system simulation that can be interacted with through a customized command prompt. The commands implemented allow the user to interact with the file system, allowing file creation, deletion, reading files, and writing to files",
            techStack: ["C++", "CMake", "Object-Oriented Design"],
            link: undefined, // No public repository
            isDevSTAC: false
        },
        {
            title: "Book to Website",
            description: "Front-end design final project. Directly translates a book into a website. Focuses on easy navigation and indexing of the book.",
            techStack: ["HTML", "CSS", "JavaScript", "Figma"],
            link: "https://github.com/Hcordes6/Book-to-Website",
            isDevSTAC: false
        },
        {
            title: "Web File Sharing Site",
            description: "Currently in development. Users can upload and share files through a web interface. Developed using traditional LAMP stack.",
            techStack: ["PHP", "CSS", "AWS", "Linux"],
            link: undefined, // No public repository
            isDevSTAC: false
        },
    ];
    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-8 space-y-8">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r text-white/70">
                    Projects
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto"></div>
            </div>
            <div className="grid lg:grid-cols-3 gap-8 items-start">
                {/* Left Column - Text Content */}
                {projects.map((project, index) => (
                    <div key={index} className="relative">
                        <SpotlightCard className="p-5" borderColor={project.isDevSTAC ? "border-neutral-400" : "border-neutral-800"}>
                            <div className="flex flex-col items-start gap-3 h-55">
                                <div className="flex flex-row w-full justify-between items-start">
                                    <h3 className="text-white font-semibold mb-2">{project.title}</h3>
                                    {project.link ? (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink className="w-5 h-5 text-white hover:text-white/70 transition-colors" />
                                        </a>
                                    ) : (
                                        <div className="relative group">
                                            <ExternalLink className="w-5 h-5 text-white/30 cursor-not-allowed" />
                                            <div className="absolute top-7 right-0 px-3 py-1.5 bg-neutral-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg z-50">
                                                No public repository
                                            </div>
                                        </div>
                                    )}
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
                    </div>
                ))}
            </div>
        </div>
    );
}