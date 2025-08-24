'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { SectionCard } from '@/components/ui/section-card';
import { SectionHeader } from '@/components/ui/section-header';
import { CodeBlock } from '@/components/ui/code-block';
import { CTASection } from '@/components/ui/cta-section';
import { 
  Package, Copy, Check, Download, Terminal, 
  Zap, Star, Github, ExternalLink
} from 'lucide-react';

export function InstallationSection() {
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

  const installationCommands = {
    npm: 'npm install @meersagor/wavesurfer-vue',
    yarn: 'yarn add @meersagor/wavesurfer-vue',
    pnpm: 'pnpm add @meersagor/wavesurfer-vue'
  };

  const basicUsageCode = `<script setup lang="ts">
import { ref } from 'vue'
import { useWaveSurfer } from '@meersagor/wavesurfer-vue'

const containerRef = ref<HTMLElement | null>(null)

const { waveSurfer, currentTime, totalDuration, isPlaying } = useWaveSurfer({
  containerRef,
  options: {
    height: 48,
    waveColor: '#4F4A85',
    progressColor: '#383351',
    barWidth: 3,
    barGap: 2,
    barRadius: 4
  }
})
</script>

<template>
  <div>
    <div ref="containerRef"></div>
    <button @click="waveSurfer?.playPause()">
      {{ isPlaying ? 'Pause' : 'Play' }}
    </button>
  </div>
</template>`;

  const packageStats = [
    { label: 'Downloads', value: '10K+', icon: Download },
    { label: 'Stars', value: '500+', icon: Star },
    { label: 'Version', value: '1.0.0', icon: Package },
    { label: 'License', value: 'MIT', icon: Zap }
  ];

  return (
    <section className="py-24 bg-gradient-section dark:bg-gradient-section-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-green-400/10 to-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-tl from-purple-400/10 to-pink-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto py-6 relative z-10">
        {/* Header */}
        <SectionHeader
          title="Get Started in Minutes"
          subtitle="Install and start using WaveSurfer Vue in your Vue 3 project with just a few commands"
          badge={{
            text: "Quick Setup",
            icon: <Zap className="h-4 w-4 mr-2 text-green-600" />
          }}
        />

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Installation Commands */}
          <div className="space-y-6">
            <SectionCard
              title="Installation"
              description="Choose your preferred package manager and install the package"
              icon={<Package className="w-6 h-6 text-white" />}
              badge="Package"
              gradient="from-green-500 to-green-600"
              borderColor="border-green-200/50"
            >
              <div className="space-y-4">
                {Object.entries(installationCommands).map(([manager, command]) => (
                  <div key={manager} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300 capitalize">
                        {manager}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(command, manager)}
                        className="h-8 px-3"
                      >
                        {copied === manager ? (
                          <Check className="h-4 w-4 mr-2" />
                        ) : (
                          <Copy className="h-4 w-4 mr-2" />
                        )}
                        {copied === manager ? 'Copied!' : 'Copy'}
                      </Button>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
                      <code className="text-sm text-slate-700 dark:text-slate-300 font-mono">
                        {command}
                      </code>
                    </div>
                  </div>
                ))}
              </div>
            </SectionCard>

            {/* Package Stats */}
            <SectionCard
              title="Package Stats"
              description="Community adoption and package information"
              icon={<Star className="w-6 h-6 text-white" />}
              badge="Stats"
              gradient="from-purple-500 to-purple-600"
              borderColor="border-purple-200/50"
            >
              <div className="grid grid-cols-2 gap-4">
                {packageStats.map(({ label, value, icon: Icon }) => (
                  <div key={label} className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-900 rounded-lg">
                    <div className="p-2 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg">
                      <Icon className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">{label}</div>
                      <div className="font-semibold text-slate-900 dark:text-white">{value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </SectionCard>
          </div>

          {/* Basic Usage */}
          <div className="space-y-6">
            <SectionCard
              title="Basic Usage"
              description="Get started with a simple audio player implementation"
              icon={<Terminal className="w-6 h-6 text-white" />}
              badge="Example"
              gradient="from-blue-500 to-blue-600"
              borderColor="border-blue-200/50"
            >
              <div className="space-y-4">
                <div className="flex justify-end">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard(basicUsageCode, 'usage')}
                  >
                    {copied === 'usage' ? (
                      <Check className="h-4 w-4 mr-2" />
                    ) : (
                      <Copy className="h-4 w-4 mr-2" />
                    )}
                    {copied === 'usage' ? 'Copied!' : 'Copy Code'}
                  </Button>
                </div>
                
                <CodeBlock
                  code={basicUsageCode}
                  language="vue"
                  className="max-h-96 overflow-y-auto"
                />
              </div>
            </SectionCard>

            {/* Quick Links */}
            <SectionCard
              title="Quick Links"
              description="Essential resources to help you get started"
              icon={<ExternalLink className="w-6 h-6 text-white" />}
              badge="Resources"
              gradient="from-orange-500 to-orange-600"
              borderColor="border-orange-200/50"
            >
              <div className="space-y-3">
                <Button 
                  variant="outline" 
                  asChild 
                  className="w-full justify-start bg-white/80 backdrop-blur-sm hover:bg-white dark:bg-slate-800/80 dark:hover:bg-slate-700"
                >
                  <a href="/docs/introduction">
                    <Package className="h-4 w-4 mr-2" />
                    Documentation
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  asChild 
                  className="w-full justify-start bg-white/80 backdrop-blur-sm hover:bg-white dark:bg-slate-800/80 dark:hover:bg-slate-700"
                >
                  <a href="/docs/playground">
                    <Terminal className="h-4 w-4 mr-2" />
                    Interactive Playground
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  asChild 
                  className="w-full justify-start bg-white/80 backdrop-blur-sm hover:bg-white dark:bg-slate-800/80 dark:hover:bg-slate-700"
                >
                  <a href="https://github.com/meer-sagor/wavesurfer-vue" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub Repository
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  asChild 
                  className="w-full justify-start bg-white/80 backdrop-blur-sm hover:bg-white dark:bg-slate-800/80 dark:hover:bg-slate-700"
                >
                  <a href="https://www.npmjs.com/package/@meersagor/wavesurfer-vue" target="_blank" rel="noopener noreferrer">
                    <Package className="h-4 w-4 mr-2" />
                    NPM Package
                  </a>
                </Button>
              </div>
            </SectionCard>
          </div>
        </div>

        {/* CTA Section */}
        <CTASection
          title="Ready to Start Building?"
          description="Join thousands of developers building amazing audio experiences with WaveSurfer Vue"
          backgroundGradient="from-green-50 to-blue-50 dark:from-slate-800 dark:to-slate-700"
        >
          <Button asChild size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <a href="/docs/introduction">
              <Download className="h-5 w-5 mr-2" />
              Get Started
            </a>
          </Button>
          <Button variant="outline" asChild size="lg" className="px-8 py-4 text-lg font-semibold border-2 border-slate-300 hover:border-slate-400 bg-white/80 backdrop-blur-sm hover:bg-white dark:bg-slate-800/80 dark:border-slate-600 dark:hover:border-slate-500 transition-all duration-300 hover:-translate-y-1">
            <a href="/docs/playground">
              <Terminal className="h-5 w-5 mr-2" />
              Try Playground
            </a>
          </Button>
        </CTASection>
      </div>
    </section>
  );
}
