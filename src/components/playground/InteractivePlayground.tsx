'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { SectionCard } from '@/components/ui/section-card';
import { SectionHeader } from '@/components/ui/section-header';
import { CodeBlock } from '@/components/ui/code-block';
import { CTASection } from '@/components/ui/cta-section';
import { 
  PlaygroundDemo, 
  PlaygroundConfig, 
  generateCode, 
  PlaygroundSummary 
} from './index';
import { 
  Play, Settings, Code, Copy, Check,
  Layers, Zap, ExternalLink, ArrowRight
} from 'lucide-react';

export function InteractivePlayground() {
  const [copied, setCopied] = useState<string | null>(null);
  const [activePlugins, setActivePlugins] = useState<string[]>(['timeline', 'zoom']);
  const [config, setConfig] = useState({
    height: 48,
    waveColor: '#4F4A85',
    progressColor: '#383351',
    barWidth: 3,
    barGap: 2,
    barRadius: 4,
    volume: 0.8,
    autoplay: false,
    loop: false,
    responsive: true,
    fillParent: true
  });

  const copyToClipboard = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied('config');
      setTimeout(() => setCopied(null), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const togglePlugin = (plugin: string) => {
    setActivePlugins(prev => 
      prev.includes(plugin) 
        ? prev.filter(p => p !== plugin)
        : [...prev, plugin]
    );
  };

  const updateConfig = (key: string, value: number | string | boolean) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };

  return (
    <section className="py-24 bg-gradient-section dark:bg-gradient-section-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-indigo-400/10 to-pink-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto py-6 relative z-10">
        {/* Header */}
        <SectionHeader
          title="Interactive Playground"
          subtitle="Experiment with different plugins and configurations. See live code generation and test various WaveSurfer Vue features."
          badge={{
            text: "Live Demo",
            icon: <Zap className="h-4 w-4 mr-2 text-blue-600" />
          }}
        />

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Configuration Panel */}
          <div className="space-y-6">
            <SectionCard
              title="Configuration"
              description="Configure plugins, visual settings, and audio behavior"
              icon={<Layers className="w-6 h-6 text-white" />}
              badge={`${activePlugins.length} Active`}
              gradient="from-blue-500 to-blue-600"
              borderColor="border-blue-200/50"
            >
              <PlaygroundConfig
                config={config}
                activePlugins={activePlugins}
                onConfigChange={updateConfig}
                onPluginToggle={togglePlugin}
              />
            </SectionCard>

                    {/* Quick Actions */}
        <CTASection
          title="Quick Actions"
          description="Use these presets to quickly set up common configurations"
          backgroundGradient="from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-700"
        >
          <Button 
            variant="outline" 
            onClick={() => setActivePlugins(['timeline', 'zoom'])}
            className="bg-white/80 backdrop-blur-sm hover:bg-white dark:bg-slate-800/80 dark:hover:bg-slate-700"
          >
            Music Player Setup
          </Button>
          <Button 
            variant="outline" 
            onClick={() => setActivePlugins(['timeline', 'regions'])}
            className="bg-white/80 backdrop-blur-sm hover:bg-white dark:bg-slate-800/80 dark:hover:bg-slate-700"
          >
            Audio Editor Setup
          </Button>
          <Button 
            variant="outline" 
            onClick={() => setActivePlugins(['minimap', 'hover'])}
            className="bg-white/80 backdrop-blur-sm hover:bg-white dark:bg-slate-800/80 dark:hover:bg-slate-700"
          >
            Analysis Setup
          </Button>
          <Button 
            variant="outline" 
            onClick={() => setActivePlugins([])}
            className="bg-white/80 backdrop-blur-sm hover:bg-white dark:bg-slate-800/80 dark:hover:bg-slate-700"
          >
            Core Only
          </Button>
          <Button 
            variant="outline" 
            onClick={() => setActivePlugins(['timeline', 'zoom', 'minimap', 'hover', 'envelope', 'spectrogram', 'regions'])}
            className="bg-white/80 backdrop-blur-sm hover:bg-white dark:bg-slate-800/80 dark:hover:bg-slate-700"
          >
            All Plugins
          </Button> 
        </CTASection>
          </div>

          {/* Live Demo & Code */}
          <div className="space-y-6">
            {/* Live Demo */}
            <SectionCard
              title="Live Demo"
              description="See your configuration in action with a live preview"
              icon={<Play className="w-6 h-6 text-white" />}
              badge="Preview"
              gradient="from-green-500 to-green-600"
              borderColor="border-green-200/50"
            >
              <PlaygroundDemo config={config} activePlugins={activePlugins} />
            </SectionCard>

            {/* Generated Code */}
            <SectionCard
              title="Generated Code"
              description="Copy the generated Vue 3 code for your project"
              icon={<Code className="w-6 h-6 text-white" />}
              badge="Vue 3"
              gradient="from-orange-500 to-orange-600"
              borderColor="border-orange-200/50"
            >
              <div className="flex justify-end mb-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard(generateCode({ config, activePlugins }))}
                >
                  {copied === 'config' ? (
                    <Check className="h-4 w-4 mr-2" />
                  ) : (
                    <Copy className="h-4 w-4 mr-2" />
                  )}
                  {copied === 'config' ? 'Copied!' : 'Copy Code'}
                </Button>
              </div>
              
              <CodeBlock
                code={generateCode({ config, activePlugins })}
                language="vue"
                className="max-h-96 overflow-y-auto"
              />
            </SectionCard>

            {/* Configuration Summary */}
            <SectionCard
              title="Configuration Summary"
              description="Overview of your current settings and active plugins"
              icon={<Settings className="w-6 h-6 text-white" />}
              badge="Summary"
              gradient="from-teal-500 to-teal-600"
              borderColor="border-teal-200/50"
            >
              <PlaygroundSummary config={config} activePlugins={activePlugins} />
            </SectionCard>
          </div>
        </div>



        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-3xl p-12 max-w-4xl mx-auto border border-blue-200/50 dark:border-slate-600/50">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              Start building powerful audio experiences with our modular WaveSurfer Vue components
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <a href="/docs/introduction">
                  <Play className="h-5 w-5 mr-2" />
                  Get Started
                  <ArrowRight className="h-5 w-5 ml-2" />
                </a>
              </Button>
              <Button variant="outline" asChild size="lg" className="px-8 py-4 text-lg font-semibold border-2 border-slate-300 hover:border-slate-400 bg-white/80 backdrop-blur-sm hover:bg-white dark:bg-slate-800/80 dark:border-slate-600 dark:hover:border-slate-500 transition-all duration-300 hover:-translate-y-1">
                <a href="https://github.com/meer-sagor/wavesurfer-vue" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-5 w-5 mr-2" />
                  View on GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
