"use client";
import { AuroraBackground } from "@/components/ui/shadcn-io/aurora-background";
import RotatingText from "@/components/animations/rotatingText";
import Dock from "@/components/animations/dock";

export default function Home() {
  const items = [
    { label: 'Home', onClick: () => alert('Home!') },
    { label: 'Archive', onClick: () => alert('Archive!') },
    { label: 'Profile', onClick: () => alert('Profile!') },
    { label: 'Settings', onClick: () => alert('Settings!') },
  ];
  return (
    <AuroraBackground>
      <div className="flex min-h-screen items-center justify-center">

      </div>
      <div className="absolute bottom-10 w-full flex justify-center">
        <Dock
          items={items}
          panelHeight={30}
        />
      </div>

    </AuroraBackground>
  );
}
