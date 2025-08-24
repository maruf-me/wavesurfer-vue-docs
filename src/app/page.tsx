
import { FeaturesSection } from "@/components/FeaturesSection";
import { HeroSection } from "@/components/HeroSection";
import { InteractivePlayground } from "@/components/playground";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { PackageInfoSection } from "@/components/PackageInfoSection";

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <FeaturesSection/>
      <InteractivePlayground/>
      <WhyChooseSection/>
      <PackageInfoSection/> 
    </main>
  );
}
