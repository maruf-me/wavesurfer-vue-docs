import { FeaturesSection } from "@/components/FeaturesSection";
import { HeroSection } from "@/components/HeroSection";
import { InteractivePlayground } from "@/components/playground";
import { InstallationSection } from "@/components/InstallationSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { PackageInfoSection } from "@/components/PackageInfoSection";
import { ContributionsSection } from "@/components/ContributionsSection";
import type { NpmPackageInfo } from "@/@types/packageInfo";

async function getPackageInfo(): Promise<NpmPackageInfo | null> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/package-info`, {
      next: { revalidate: 3600 } // Revalidate every hour
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch package info');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching package info:', error);
    return null;
  }
}

export default async function Home() {
  const packageInfo = await getPackageInfo();

  return (
    <main>
      <HeroSection packageInfo={packageInfo}/>
      <FeaturesSection/>
      <InstallationSection/>
      <InteractivePlayground/>
      <WhyChooseSection/>
      <PackageInfoSection packageInfo={packageInfo} />
      <ContributionsSection/>
    </main>
  );
}
