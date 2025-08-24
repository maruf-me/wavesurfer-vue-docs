
import { FeaturesSection } from "@/components/FeaturesSection";
import { HeroSection } from "@/components/HeroSection";
import { InteractivePlayground } from "@/components/playground";
import { InstallationSection } from "@/components/InstallationSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { PackageInfoSection } from "@/components/PackageInfoSection";
import { ContributionsSection } from "@/components/ContributionsSection";

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <FeaturesSection/>
      <InstallationSection/>
      <InteractivePlayground/>
      <WhyChooseSection/>
      <PackageInfoSection/>
      <ContributionsSection/>
    </main>
  );
}
