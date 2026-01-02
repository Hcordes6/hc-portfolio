import SpotlightCard from "@/components/animations/SpotlightCard";

export default function About() {
    return (
        <div className="text-center max-w-2xl mx-auto px-4 space-y-4 overflow-hidden">
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

            <div className="mt-8">
                <SpotlightCard>
                    <img src="/images/Brookings_Hall.jpg" alt="Picture of Brookings Hall, Washington University" className="w-full h-full object-cover" />
                </SpotlightCard>
            </div>
        </div>
    );

}