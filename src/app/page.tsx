import { DemoSection } from "@/components/DemoSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { HeroSection } from "@/components/HeroSection";
import { InstallationSection } from "@/components/InstallationSection";

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <FeaturesSection/>
      <DemoSection/>
      <InstallationSection/>
    </main>
  );
}
