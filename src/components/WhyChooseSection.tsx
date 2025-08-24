'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Layers, Zap, Code, Settings, Package, Star, 
  ArrowRight, Github
} from 'lucide-react';
import Link from 'next/link';

export function WhyChooseSection() {
  const benefits = [
    {
      icon: Layers,
      title: "Modular Architecture",
      description: "Core functionality separated from plugins. Import only what you need for optimal bundle sizes.",
      features: ["Individual plugins", "Tree-shaking friendly", "Smaller bundles"]
    },
    {
      icon: Zap,
      title: "Modern Vue 3",
      description: "Built with Vue 3 Composition API and TypeScript for type safety and modern development patterns.",
      features: ["Composition API", "TypeScript support", "Reactive state"]
    },
    {
      icon: Code,
      title: "Multiple Usage Patterns",
      description: "Flexible usage with core + plugins, standalone plugins, core only, or component patterns.",
      features: ["4 usage patterns", "Standalone plugins", "Component support"]
    },
    {
      icon: Settings,
      title: "Rich Plugin Ecosystem",
      description: "8 specialized plugins for timeline, zoom, minimap, hover, envelope, spectrogram, regions, and recording.",
      features: ["8 plugins", "Specialized functionality", "Easy integration"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-section dark:bg-gradient-section-dark">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Why Choose @meersagor/wavesurfer-vue?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A modern, modular approach to audio visualization that gives you the flexibility 
            and performance you need for your Vue 3 applications.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="border-2 border-primary/10 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{benefit.description}</p>
                  <div className="space-y-2">
                    {benefit.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Key Benefits</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Package className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold">Bundle Optimization</h4>
                  <p className="text-muted-foreground text-sm">
                    Tree-shaking ensures only used plugins are included in your final bundle.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Code className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold">Type Safety</h4>
                  <p className="text-muted-foreground text-sm">
                    Full TypeScript support with comprehensive type definitions.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Settings className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold">Flexible Architecture</h4>
                  <p className="text-muted-foreground text-sm">
                    Choose between composables, components, or standalone plugins.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Performance Features</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Zap className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold">Lazy Loading</h4>
                  <p className="text-muted-foreground text-sm">
                    Plugins are loaded only when needed, reducing initial bundle size.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Layers className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold">Modular Design</h4>
                  <p className="text-muted-foreground text-sm">
                    Each plugin is independent and can be used separately or together.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Star className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold">Modern Standards</h4>
                  <p className="text-muted-foreground text-sm">
                    Built with latest Vue 3 patterns and ES6+ features.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
            <p className="text-muted-foreground mb-6">
              Join developers who are already using @meersagor/wavesurfer-vue to build amazing audio experiences.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button asChild size="lg">
<Link href="/">
                  Get Started
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <a href="https://github.com/meer-sagor/wavesurfer-vue" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  View on GitHub
                </a>
              </Button>
              <Button variant="outline" asChild size="lg">
                <a href="https://www.npmjs.com/package/@meersagor/wavesurfer-vue" target="_blank" rel="noopener noreferrer">
                  <Package className="h-4 w-4 mr-2" />
                  View on NPM
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
