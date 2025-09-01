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
      next: { revalidate: 3600 }, // Revalidate every hour
      cache: 'no-cache'
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch package info: ${response.status}`);
    }
    const data = await response.json();
    return data;
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
      <InstallationSection packageInfo={packageInfo}/>
      <InteractivePlayground/>
      <WhyChooseSection/>
      <PackageInfoSection packageInfo={packageInfo} />
      <ContributionsSection packageInfo={packageInfo} />
    </main>
  );
}
