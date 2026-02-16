/* eslint-disable react/no-unescaped-entities */
"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SpotlightCard from "@/components/animations/SpotlightCard";
import { Briefcase, GraduationCap, MapPin, Code, Heart, Sparkles, ChevronDown, ChevronUp, Linkedin, Github, Mail } from "lucide-react";
import TextType from "@/components/TextType";

export default function About() {
    const [isTechStackHovered, setIsTechStackHovered] = useState(false);
    const [isTechStackOpenMobile, setIsTechStackOpenMobile] = useState(false);

    const contactSectionRef = useRef<HTMLDivElement | null>(null);

    const [contactIconsVisible, setContactIconsVisible] = useState(false);

    const [transitionDirection, setTransitionDirection] = useState<"up" | "down">("down");
    const scrollDirRef = useRef<"up" | "down">("down");

    useEffect(() => {
        const sectionEl = contactSectionRef.current;
        if (!sectionEl) return;

        const findScrollParent = (node: HTMLElement | null) => {
            let current = node?.parentElement;
            while (current && current !== document.body) {
                const style = window.getComputedStyle(current);
                const overflowY = style.overflowY;
                if (overflowY === "auto" || overflowY === "scroll") return current;
                current = current.parentElement;
            }
            return null;
        };

        const scrollParent = findScrollParent(sectionEl);
        const getScrollTop = () => {
            if (scrollParent) return scrollParent.scrollTop;
            return window.scrollY;
        };

        let lastScrollTop = getScrollTop();

        const onScroll = () => {
            const next = getScrollTop();
            if (next === lastScrollTop) return;
            scrollDirRef.current = next > lastScrollTop ? "down" : "up";
            lastScrollTop = next;
        };

        (scrollParent ?? window).addEventListener("scroll", onScroll, { passive: true } as AddEventListenerOptions);

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                const inView = Boolean(entry?.isIntersecting);
                const dir = scrollDirRef.current;

                setTransitionDirection(dir);

                if (inView) {
                    setContactIconsVisible(false);
                    window.requestAnimationFrame(() => setContactIconsVisible(true));
                } else {
                    setContactIconsVisible(false);
                }
            },
            { threshold: 0.35 }
        );

        observer.observe(sectionEl);

        return () => {
            observer.disconnect();
            (scrollParent ?? window).removeEventListener("scroll", onScroll as EventListener);
        };
    }, []);


    return (
        <div className="w-full max-w-6xl mx-auto px-4 pb-8 space-y-8">
            {/* Hero */}
            <section className="w-full min-h-screen mx-auto flex flex-col items-start justify-end pb-[20%] sm:pb-[10%] text-left">
                <h1 className="inline-block pb-1 text-5xl sm:text-6xl lg:text-7xl leading-[1.12] font-bold bg-linear-to-r from-white to-white/70 bg-clip-text text-transparent">
                    Henry Cordes
                </h1>
                <TextType
                    className="mt-4 text-2xl sm:text-3xl font-medium text-white/80"
                    text={["Software Developer", "Computer Science Student", "Rock Climber", "Minnesotan"]}
                    typingSpeed={100}
                    pauseDuration={4000}
                    deletingSpeed={50}
                    cursorCharacter="_"
                    cursorClassName="text-white/70"
                />
                <div className="mt-7 h-px w-44 bg-linear-to-r from-transparent via-white/30 to-transparent" />
            </section>
            {/* Header */}
            <div className="text-center mb-12">
                <div className="w-3/5 h-1 bg-linear-to-r from-transparent via-white/50 to-transparent mx-auto"></div>
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-8 lg:items-start mb-20">
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
                                    I'm a Software Developer at <a target="_blank" href="https://techden.wustl.edu/devstac-2/" className="font-bold text-white/90 hover:text-white">DevSTAC</a>, working on a wide range of client projects. I'm also a student at <a target="_blank" href="https://washu.edu/" className="font-bold text-white/90 hover:text-white">Washington University in St. Louis</a>, pursuing Computer Science and Human-Computer Interaction.
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
                                        Washington University in St. Louis - B.S. in Computer Science, Minor in HCI
                                    </p>
                                </div>
                            </div>
                        </SpotlightCard>
                    </div>

                    {/* Tech Stack */}
                    <div
                        onMouseEnter={() => setIsTechStackHovered(true)}
                        onMouseLeave={() => setIsTechStackHovered(false)}
                    >
                        <SpotlightCard className="p-6">
                            <div className="flex items-start gap-4">
                                <div className="flex flex-col justify-between items-center self-stretch">
                                    <Code className="w-6 h-6 text-white/80 shrink-0" />
                                    <button
                                        type="button"
                                        onClick={() => setIsTechStackOpenMobile((v) => !v)}
                                        className="lg:hidden"
                                        aria-label={isTechStackOpenMobile ? "Collapse additional skills" : "Expand additional skills"}
                                    >
                                        {isTechStackOpenMobile ? (
                                            <ChevronUp className="w-6 h-6 text-white/80 shrink-0" />
                                        ) : (
                                            <ChevronDown className="w-6 h-6 text-white/80 shrink-0" />
                                        )}
                                    </button>
                                    <div className="hidden lg:block">
                                        {isTechStackHovered ? (
                                            <ChevronUp className="w-6 h-6 text-white/80 shrink-0" />
                                        ) : (
                                            <ChevronDown className="w-6 h-6 text-white/80 shrink-0" />
                                        )}
                                    </div>
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-white font-semibold mb-3">Tech Stack</h3>
                                    <p className="text-white/70 mb-4 leading-relaxed">
                                        React/Next.js, Tailwind CSS, TypeScript, Convex. I often learn new technologies and adapt my toolkit to each project's needs.
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

                            {/* Dropdown Extension */}
                            <div
                                className={`overflow-hidden transition-all duration-200 ease-in-out ${(isTechStackHovered || isTechStackOpenMobile)
                                    ? 'max-h-96 opacity-100 mt-4'
                                    : 'max-h-0 opacity-0 mt-0'
                                    }`}
                            >
                                <div className="pt-4 border-t border-white/10">
                                    <div className="flex items-start gap-4">
                                        <div className="w-6 shrink-0" />
                                        <div className="flex-1">
                                            <h3 className="text-white font-semibold mb-3">I also have experience with</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {['React Native', 'Linux', 'Figma', 'PHP', 'AWS', 'Node.js', 'MySQL', 'C++', 'Unity', 'PostHog'].map((tech) => (
                                                    <span key={tech} className="px-3 py-1 text-xs font-medium bg-white/10 text-white/80 rounded-full border border-white/20">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
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
                                    Born in Minnesota, raised in St. Paul. Currently based in both St. Louis and the Twin Cities.
                                </p>
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
                                    Rock climbing, tennis, and movies. Check out my <a href="https://letterboxd.com/hcordes6/" target="_blank" className="font-bold text-white/90 hover:text-white">Letterboxd</a> profile.
                                </p>
                            </div>
                        </div>
                    </SpotlightCard>
                </div>

                {/* Right Column - Image */}
                <div className="lg:sticky lg:top-[2%] lg:self-start">
                    <div>
                        <SpotlightCard className="overflow-hidden max-w-sm mx-auto lg:max-w-full">
                            <div className="relative aspect-4/3 lg:hidden">
                                <Image
                                    src="/images/Brookings_Hall.jpg"
                                    alt="Picture of Brookings Hall, Washington University"
                                    fill
                                    sizes="100vw"
                                    className="object-cover"
                                />
                            </div>
                            <div className="hidden lg:block">
                                <Image
                                    src="/images/Brookings_Hall.jpg"
                                    alt="Picture of Brookings Hall, Washington University"
                                    className="w-full h-auto object-cover max-h-96"
                                    width={500}
                                    height={500}
                                />
                            </div>
                        </SpotlightCard>
                    </div>
                    <SpotlightCard className="overflow-hidden mt-2">
                        <div className="grid grid-cols-2 gap-0">
                            <div className="relative aspect-4/3">
                                <Image
                                    src="/images/St_Paul_Skyline.jpg"
                                    alt="Picture of the St. Paul skyline"
                                    fill
                                    sizes="(min-width: 1024px) 50vw, 100vw"
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative aspect-4/3">
                                <Image
                                    src="/images/Lead_Climbing_RedRiver_Uncompressed.jpg"
                                    alt="Picture of me climbing at Red River Gorge in Kentucky"
                                    fill
                                    sizes="(min-width: 1024px) 50vw, 100vw"
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </SpotlightCard>
                </div>
            </div>
            <div className="w-3/5 h-1 bg-linear-to-r from-transparent via-white/50 to-transparent mx-auto"></div>
            {/* Updates  */}
            <div className="w-full px-4">
                <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 lg:grid-cols-2 lg:items-stretch">
                    <SpotlightCard className="h-full w-full p-6">
                        <div className="flex h-full flex-col">
                            <h2 className="text-2xl font-bold">Recent Updates:</h2>
                            <div className="mt-6 flex-1">
                                <p className="text-white/70 text-left leading-relaxed">
                                    <span className="text-blue-400 font-bold italic">02-16-2026:</span> I will officially be spending my summer of 2026 abroad in Stockholm, Sweden through the DIS Program! Excited for this amazing opportunity to experience a new culture, while continuing to develop my skills as a software engineer. One of my classes will be focused on Natural Language Processing and LLM's, which I am looking forward to diving deeper into.
                                </p>
                            </div>
                        </div>
                    </SpotlightCard>

                    <SpotlightCard className="h-full w-full p-6" borderColor="border-white/20">
                        <div className="flex h-full flex-col">
                            <div className="flex items-start justify-between gap-4">
                                <h2 className="text-2xl font-bold">Blog</h2>
                                <div className="shrink-0 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-white/90">
                                    UNDER CONSTRUCTION
                                </div>
                            </div>

                            <p className="mt-6 text-white/70 leading-relaxed">
                                Coming soon.
                            </p>
                        </div>
                    </SpotlightCard>
                </div>
            </div>

            {/* Contact me here */}
            <div className="w-3/5 h-1 bg-linear-to-r from-transparent via-white/50 to-transparent mx-auto"></div>
            <div ref={contactSectionRef} className="w-full mt-16 px-4 pb-24">
                <SpotlightCard className="relative p-10 text-center overflow-hidden">
                    <div className="pointer-events-none absolute inset-0 opacity-60">
                        <div className="absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
                        <div className="absolute -bottom-24 right-10 h-48 w-48 rounded-full bg-white/5 blur-3xl" />
                    </div>

                    <div className="relative">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/70">
                            Get in touch
                        </div>

                        <h1
                            className="mt-4 text-4xl sm:text-5xl font-bold bg-linear-to-r from-white to-white/60 bg-clip-text text-transparent"
                        >
                            Contact Me
                        </h1>

                        <div className="mt-5 mx-auto h-px w-40 bg-linear-to-r from-transparent via-white/30 to-transparent" />

                        <div
                            className={`mt-7 flex items-center justify-center gap-4 transition-all duration-1500 ease-out ${contactIconsVisible
                                ? "opacity-100 translate-y-0 pointer-events-auto"
                                : `opacity-0 ${transitionDirection === "down" ? "translate-y-4" : "-translate-y-4"} pointer-events-none`
                                }`}
                        >
                            <a
                                href="https://www.linkedin.com/in/hcordes97/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/80 hover:text-white transition-colors hover:scale-110 transform"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={42} />
                            </a>
                            <a
                                href="https://github.com/hcordes6"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/80 hover:text-white transition-colors hover:scale-110 transform"
                                aria-label="GitHub"
                            >
                                <Github size={42} />
                            </a>
                            <a
                                href="mailto:hello@henrycordes.dev"
                                className="text-white/80 hover:text-white transition-colors hover:scale-110 transform"
                                aria-label="Email"
                            >
                                <Mail size={42} />
                            </a>
                        </div>
                    </div>
                </SpotlightCard>
            </div>
        </div>
    );
}