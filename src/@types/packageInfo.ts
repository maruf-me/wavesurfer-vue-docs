export interface NpmPackageInfo {
  name: string;
  version: string;
  description: string;
  downloads: string;
  stars: string;
  forks: string;
  lastUpdated: string;
  license: string;
  repository: string;
  npmUrl: string;
  homepage: string;
  keywords: string[];
  author: string;
  dependencies: Record<string, string>;
  peerDependencies: Record<string, string>;
  devDependencies: Record<string, string>;
  openIssues: number;
  lastRelease: string;
  language: string;
  topics: string[];
}