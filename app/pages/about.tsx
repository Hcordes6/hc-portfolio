"use client";
import SpotlightCard from "@/components/animations/SpotlightCard";
import { Briefcase, GraduationCap, MapPin, Code, Heart, Sparkles } from "lucide-react";

export default function About() {
    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-8 space-y-8">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                    About Me
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto"></div>
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-8 items-start">
                {/* Left Column - Text Content */}
                <div className="space-y-6">
                    {/* Introduction Card */}
                    <SpotlightCard className="p-6">
                        <div className="flex items-start gap-4">
                                <div className="shrink-0 w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                                <Sparkles className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                                <p className="text-lg text-white/90 leading-relaxed">
                                    I'm a Software Developer at <span className="font-semibold text-white">DevSTAC</span>, working on diverse client projects. I'm also a student at <span className="font-semibold text-white">Washington University in St. Louis</span>, pursuing Computer Science and Human-Computer Interaction.
                                </p>
                            </div>
                        </div>
                    </SpotlightCard>

                    {/* Work & Education */}
                    <div className="grid md:grid-cols-2 gap-4">
                        <SpotlightCard className="p-5">
                            <div className="flex items-start gap-3">
                                <Briefcase className="w-5 h-5 text-white/80 mt-1 shrink-0" />
                                <div>
                                    <h3 className="text-white font-semibold mb-2">Work</h3>
                                    <p className="text-white/70 text-sm leading-relaxed">
                                        Software Developer at DevSTAC, building web/mobile apps, AI systems, and databases.
                                    </p>
                                </div>
                            </div>
                        </SpotlightCard>

                        <SpotlightCard className="p-5">
                            <div className="flex items-start gap-3">
                                <GraduationCap className="w-5 h-5 text-white/80 mt-1 shrink-0" />
                                <div>
                                    <h3 className="text-white font-semibold mb-2">Education</h3>
                                    <p className="text-white/70 text-sm leading-relaxed">
                                        Washington University in St. Louis - Computer Science & HCI (2024 - Present)
                                    </p>
                                </div>
                            </div>
                        </SpotlightCard>
                    </div>

                    {/* Location */}
                    <SpotlightCard className="p-5">
                        <div className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-white/80 mt-1 shrink-0" />
                            <div>
                                <h3 className="text-white font-semibold mb-2">Location</h3>
                                <p className="text-white/70 leading-relaxed">
                                    Born in Minnesota, raised in St. Paul. Currently splitting time between St. Louis and the Twin Cities.
                                </p>
                            </div>
                        </div>
                    </SpotlightCard>

                    {/* Tech Stack */}
                    <SpotlightCard className="p-6">
                        <div className="flex items-start gap-4">
                            <Code className="w-6 h-6 text-white/80 mt-1 shrink-0" />
                            <div className="flex-1">
                                <h3 className="text-white font-semibold mb-3">Tech Stack</h3>
                                <p className="text-white/70 mb-4 leading-relaxed">
                                    React/Next.js, Tailwind CSS, TypeScript, Convex. I love learning new technologies and adapt my toolkit to each project's needs.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Convex'].map((tech) => (
                                        <span key={tech} className="px-3 py-1 text-xs font-medium bg-white/10 text-white/80 rounded-full border border-white/20">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </SpotlightCard>

                    {/* Interests */}
                    <SpotlightCard className="p-5">
                        <div className="flex items-start gap-3">
                            <Heart className="w-5 h-5 text-white/80 mt-1 shrink-0" />
                            <div>
                                <h3 className="text-white font-semibold mb-2">Interests</h3>
                                <p className="text-white/70 leading-relaxed">
                                    Rock climbing, tennis, and music
                                </p>
                            </div>
                        </div>
                    </SpotlightCard>
                </div>

                {/* Right Column - Image */}
                <div className="lg:sticky lg:top-8">
                    <SpotlightCard className="aspect-[4/5] overflow-hidden">
                        <img 
                            src="/images/Brookings_Hall.jpg" 
                            alt="Picture of Brookings Hall, Washington University" 
                            className="w-full h-full object-cover" 
                        />
                    </SpotlightCard>
                </div>
            </div>
        </div>
    );
}