'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Package, Download, Star, GitBranch, 
  ArrowRight, ExternalLink, Github, Copy, Check
} from 'lucide-react';
import { useState } from 'react';

export function PackageInfoSection() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const packageInfo = {
    name: "@meersagor/wavesurfer-vue",
    version: "1.0.0",
    description: "A modular Vue 3 package for wavesurfer.js with individual plugins",
    downloads: "1.2k+",
    stars: "50+",
    lastUpdated: "2024-01-15",
    license: "MIT",
    repository: "https://github.com/meer-sagor/wavesurfer-vue",
    npmUrl: "https://www.npmjs.com/package/@meersagor/wavesurfer-vue"
  };

  const keywords = [
    "vue", "vue3", "wavesurfer", "audio", "waveform", "visualization",
    "typescript", "composable", "plugin", "modular", "recording"
  ];

  const stats = [
    { label: "Downloads", value: packageInfo.downloads, icon: Download },
    { label: "GitHub Stars", value: packageInfo.stars, icon: Star },
    { label: "Version", value: packageInfo.version, icon: Package },
    { label: "License", value: packageInfo.license, icon: GitBranch }
  ];

  return (
    <section className="py-20 bg-gradient-section dark:bg-gradient-section-dark">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Package Information
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about @meersagor/wavesurfer-vue
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Package Details */}
          <div className="space-y-6">
            <Card className="border-2 border-primary/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-5 w-5 text-primary" />
                  Package Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Name:</span>
                  <code className="bg-muted px-2 py-1 rounded text-sm">{packageInfo.name}</code>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Version:</span>
                  <Badge variant="secondary">{packageInfo.version}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">License:</span>
                  <Badge variant="outline">{packageInfo.license}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Last Updated:</span>
                  <span className="text-muted-foreground">{packageInfo.lastUpdated}</span>
                </div>
                <div>
                  <span className="font-medium block mb-2">Description:</span>
                  <p className="text-muted-foreground text-sm">{packageInfo.description}</p>
                </div>
              </CardContent>
            </Card>

            {/* Installation */}
            <Card className="border-2 border-primary/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="h-5 w-5 text-primary" />
                  Installation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Using npm:</h4>
                  <div className="flex items-center gap-2">
                    <code className="bg-muted px-3 py-2 rounded text-sm flex-1">
                      npm install @meersagor/wavesurfer-vue
                    </code>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard('npm install @meersagor/wavesurfer-vue', 'npm')}
                    >
                      {copied === 'npm' ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Using yarn:</h4>
                  <div className="flex items-center gap-2">
                    <code className="bg-muted px-3 py-2 rounded text-sm flex-1">
                      yarn add @meersagor/wavesurfer-vue
                    </code>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard('yarn add @meersagor/wavesurfer-vue', 'yarn')}
                    >
                      {copied === 'yarn' ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Keywords */}
            <Card className="border-2 border-primary/10">
              <CardHeader>
                <CardTitle>Keywords</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {keywords.map((keyword, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stats & Links */}
          <div className="space-y-6">
            {/* Stats */}
            <Card className="border-2 border-primary/10">
              <CardHeader>
                <CardTitle>Package Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <div key={index} className="text-center p-4 bg-muted/50 rounded-lg">
                        <Icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                        <div className="text-2xl font-bold">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="border-2 border-primary/10">
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href={packageInfo.repository} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    View on GitHub
                    <ExternalLink className="h-4 w-4 ml-auto" />
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href={packageInfo.npmUrl} target="_blank" rel="noopener noreferrer">
                    <Package className="h-4 w-4 mr-2" />
                    View on NPM
                    <ExternalLink className="h-4 w-4 ml-auto" />
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="/docs/introduction">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Documentation
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="/docs/playground">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Interactive Playground
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Dependencies */}
            <Card className="border-2 border-primary/10">
              <CardHeader>
                <CardTitle>Dependencies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Vue</span>
                    <Badge variant="secondary">^3.0.0</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">wavesurfer.js</span>
                    <Badge variant="secondary">^7.0.0</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">TypeScript</span>
                    <Badge variant="secondary">^4.9.0</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card className="border-2 border-primary/10 bg-gradient-to-r from-primary/5 to-primary/10">
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <h3 className="text-xl font-semibold">Ready to install?</h3>
                  <p className="text-muted-foreground text-sm">
                    Get started with @meersagor/wavesurfer-vue in your Vue 3 project.
                  </p>
                  <Button asChild className="w-full">
                    <a href="/docs/installation">
                      Installation Guide
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
