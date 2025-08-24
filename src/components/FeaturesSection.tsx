'use client'
import { Code, Layers, Zap, Settings, Play, Mic, Clock, Search, BarChart3, MousePointer, Map, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const FeaturesSection = () => {
  const features = [
    {
      title: "Modular Architecture",
      description: "Import only the plugins you need for optimal bundle sizes. Each plugin is independent and can be used separately or together.",
      longDescription: "Our modular design separates core functionality from plugins, allowing you to import only what you need. This results in smaller bundle sizes and better performance for your applications.",
      icon: Layers,
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
      description: "8 specialized plugins for different audio functionality. Each plugin provides specific features for enhanced audio experiences.",
      longDescription: "Choose from 8 carefully crafted plugins that provide specialized functionality. From timeline navigation to audio recording, each plugin is designed to work seamlessly together.",
      icon: Settings,
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
      description: "Unused code is automatically removed from your bundle. Only the plugins you actually use are included in the final build.",
      longDescription: "Built with modern bundlers in mind, our package supports tree-shaking out of the box. Unused plugins are automatically excluded, keeping your bundle size minimal.",
      icon: Zap,
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
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-sm bg-white/80 backdrop-blur-sm border-blue-200 dark:bg-slate-800/80 dark:border-slate-700">
            <Zap className="h-4 w-4 mr-2 text-blue-600" />
            Powerful Features
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent dark:from-white dark:via-blue-200 dark:to-indigo-200">
            Key Features
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Built with modern Vue 3 patterns and designed for optimal performance. 
            Experience the power of modular audio visualization.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 ${feature.borderColor} bg-white/80 backdrop-blur-sm dark:bg-slate-800/80 dark:border-slate-700/50 animate-fade-in-up`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 bg-gradient-to-br ${feature.gradient} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </div>
                    <Badge variant="secondary" className="bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600">
                      {feature.badge}
                    </Badge>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {feature.longDescription}
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Benefits */}
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Key Benefits</h4>
                    <div className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span className="text-slate-600 dark:text-slate-400">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Code Example */}
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Code Example</h4>
                    <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                      <pre className="text-sm overflow-x-auto text-slate-700 dark:text-slate-300">
                        <code>{feature.code}</code>
                      </pre>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
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
                <Card 
                  key={index} 
                  className="group text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 dark:bg-slate-800/80 dark:border-slate-700/50 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">{plugin.name}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">{plugin.description}</p>
                  
                  {/* Plugin Features */}
                  <div className="space-y-1">
                    {plugin.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="text-xs text-slate-500 dark:text-slate-500">
                        • {feature}
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-3xl p-12 max-w-4xl mx-auto border border-blue-200/50 dark:border-slate-600/50">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Ready to Get Started?
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              Start building amazing audio experiences with our modular plugin system
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
                <a href="/docs/playground">
                  <Settings className="h-5 w-5 mr-2" />
                  Try Playground
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};