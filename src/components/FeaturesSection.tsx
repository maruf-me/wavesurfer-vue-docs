'use client'
import { Code, Layers, Zap, Settings, Play, Mic, Clock, Search, BarChart3, MousePointer, Map, ArrowRight } from "lucide-react";
import { SectionCard } from "@/components/ui/section-card";
import { SectionHeader } from "@/components/ui/section-header";
import { BenefitsList } from "@/components/ui/benefits-list";
import { CodeBlock } from "@/components/ui/code-block";
import { CTASection } from "@/components/ui/cta-section";
import { Button } from "@/components/ui/button";

export const FeaturesSection = () => {
  const features = [
    {
      title: "Modular Architecture",
      description: "Our modular design separates core functionality from plugins, allowing you to import only what you need. This results in smaller bundle sizes and better performance for your applications.",
      icon: <Layers className="w-6 h-6 text-white" />,
      code: `import { useWaveSurfer } from '@meersagor/wavesurfer-vue'
import { useWaveSurferTimeline } from '@meersagor/wavesurfer-vue'

const { waveSurfer } = useWaveSurfer({ containerRef, options })
const { timelinePlugin } = useWaveSurferTimeline({ waveSurfer })`,
      badge: "Core Feature",
      gradient: "from-blue-500 to-blue-600",
      borderColor: "border-blue-200/50",
      benefits: ["Smaller bundles", "Better performance", "Flexible imports"]
    },
    {
      title: "Individual Plugins",
      description: "Choose from 8 carefully crafted plugins that provide specialized functionality. From timeline navigation to audio recording, each plugin is designed to work seamlessly together.",
      icon: <Settings className="w-6 h-6 text-white" />,
      code: `// Available plugins:
// Timeline, Zoom, Minimap, Hover
// Envelope, Spectrogram, Regions, Recorder

const { zoomPlugin } = useWaveSurferZoom({ waveSurfer })
const { regionsPlugin } = useWaveSurferRegions({ waveSurfer })`,
      badge: "8 Plugins",
      gradient: "from-purple-500 to-purple-600",
      borderColor: "border-purple-200/50",
      benefits: ["Specialized functionality", "Easy integration", "Plugin ecosystem"]
    },
    {
      title: "Tree-shaking Friendly",
      description: "Built with modern bundlers in mind, our package supports tree-shaking out of the box. Unused plugins are automatically excluded, keeping your bundle size minimal.",
      icon: <Zap className="w-6 h-6 text-white" />,
      code: `// Only imports what you use
import { useWaveSurfer } from '@meersagor/wavesurfer-vue'
import { useWaveSurferTimeline } from '@meersagor/wavesurfer-vue'
// Unused plugins are not included in bundle`,
      badge: "Optimized",
      gradient: "from-indigo-500 to-indigo-600",
      borderColor: "border-indigo-200/50",
      benefits: ["Automatic optimization", "Minimal bundle size", "Modern bundlers"]
    },
  ];

  const plugins = [
    { name: 'Timeline', icon: Clock, description: 'Time markers and navigation', features: ['Time display', 'Click to seek', 'Custom formatting'] },
    { name: 'Zoom', icon: Search, description: 'Zoom in/out functionality', features: ['Zoom controls', 'Min/max limits', 'Smooth transitions'] },
    { name: 'Minimap', icon: Map, description: 'Overview of entire waveform', features: ['Full overview', 'Navigation aid', 'Custom styling'] },
    { name: 'Hover', icon: MousePointer, description: 'Hover effects and interactions', features: ['Cursor tracking', 'Hover events', 'Visual feedback'] },
    { name: 'Envelope', icon: BarChart3, description: 'Audio envelope visualization', features: ['Volume display', 'Audio analysis', 'Real-time updates'] },
    { name: 'Spectrogram', icon: BarChart3, description: 'Frequency spectrum display', features: ['Frequency analysis', 'Color mapping', 'Time-frequency view'] },
    { name: 'Regions', icon: Code, description: 'Audio region management', features: ['Region creation', 'Drag & drop', 'Event handling'] },
    { name: 'Recorder', icon: Mic, description: 'Audio recording functionality', features: ['Live recording', 'Format support', 'Download options'] }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-features dark:bg-gradient-features-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-indigo-400/10 to-pink-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto py-6 relative z-10">
        {/* Header */}
        <SectionHeader
          title="Key Features"
          subtitle="Built with modern Vue 3 patterns and designed for optimal performance. Experience the power of modular audio visualization."
          badge={{
            text: "Powerful Features",
            icon: <Zap className="h-4 w-4 mr-2 text-blue-600" />
          }}
        />
        
        {/* Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <SectionCard
              key={index}
              title={feature.title}
                             description={feature.description}
              icon={feature.icon}
              badge={feature.badge}
              gradient={feature.gradient}
              borderColor={feature.borderColor}
              animationDelay={index * 200}
            >
              {/* Benefits */}
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Key Benefits</h4>
                <BenefitsList benefits={feature.benefits} />
              </div>

              {/* Code Example */}
              <CodeBlock
                title="Code Example"
                code={feature.code}
              />
            </SectionCard>
          ))}
        </div>
        
        {/* Plugin Showcase */}
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-indigo-900 bg-clip-text text-transparent dark:from-white dark:to-indigo-200">
            Available Plugins
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto">
            Choose from 8 specialized plugins to enhance your audio visualization experience
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {plugins.map((plugin, index) => {
              const Icon = plugin.icon;
              return (
                <SectionCard
                  key={index}
                  title={plugin.name}
                  description={plugin.description}
                  icon={<Icon className="h-6 w-6 text-white" />}
                  className="text-center p-6"
                  hoverEffect={true}
                  animationDelay={index * 100}
                >
                  {/* Plugin Features */}
                  <div className="space-y-1">
                    {plugin.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="text-xs text-slate-500 dark:text-slate-500">
                        • {feature}
                      </div>
                    ))}
                  </div>
                </SectionCard>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <CTASection
          title="Ready to Get Started?"
          description="Start building amazing audio experiences with our modular plugin system"
        >
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <a href="/docs/introduction">
              <Play className="h-5 w-5 mr-2" />
              Get Started
              <ArrowRight className="h-5 w-5 ml-2" />
            </a>
          </Button>
          <Button variant="outline" asChild size="lg" className="px-8 py-4 text-lg font-semibold border-2 border-slate-300 hover:border-slate-400 bg-white/80 backdrop-blur-sm hover:bg-white dark:bg-slate-800/80 dark:border-slate-600 dark:hover:border-slate-500 transition-all duration-300 hover:-translate-y-1">
            <a href="/docs/playground">
              <Settings className="h-5 w-5 mr-2" />
              Try Playground
            </a>
          </Button>
        </CTASection>
      </div>
    </section>
  );
};