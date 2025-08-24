import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Play, Mic, Code, Zap } from 'lucide-react';

export default function IntroductionPage() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Badge variant="secondary" className="text-sm">v1.0.0</Badge>
          <Badge variant="outline" className="text-sm">Vue 3</Badge>
          <Badge variant="outline" className="text-sm">TypeScript</Badge>
        </div>
        
        <h1 className="text-4xl font-bold tracking-tight">
          @meersagor/wavesurfer-vue
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A modular Vue 3 package for wavesurfer.js with individual plugins. Import only what you need 
          for optimal bundle sizes, complete with TypeScript support and modern Vue 3 patterns.
        </p>

        <div className="flex items-center justify-center gap-4 mt-6">
          <Button asChild>
            <a href="https://github.com/meer-sagor/wavesurfer-vue" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              View on GitHub
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://www.npmjs.com/package/@meersagor/wavesurfer-vue" target="_blank" rel="noopener noreferrer">
              <Code className="h-4 w-4 mr-2" />
              NPM Package
            </a>
          </Button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <Play className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Audio Player</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Full-featured audio player with waveform visualization, playback controls, 
              and real-time progress tracking.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Mic className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Audio Recorder</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Built-in audio recording capabilities with pause/resume functionality 
              and real-time waveform display.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Zap className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Plugin Support</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Extensible plugin system supporting all wavesurfer.js plugins 
              with Vue-friendly configuration.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Key Benefits */}
      <Card>
        <CardHeader>
          <CardTitle>Why Choose @meersagor/wavesurfer-vue?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">🎯 Vue 3 Native</h4>
              <p className="text-muted-foreground">
                Built specifically for Vue 3 with Composition API support, providing 
                seamless integration with modern Vue applications.
              </p>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">🔧 TypeScript Ready</h4>
              <p className="text-muted-foreground">
                Full TypeScript support with comprehensive type definitions for 
                props, events, and return values.
              </p>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">🧩 Modular Plugins</h4>
              <p className="text-muted-foreground">
                Individual plugins that can be imported separately, with both 
                instance-based and standalone usage patterns.
              </p>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">⚡ Performance Optimized</h4>
              <p className="text-muted-foreground">
                Leverages wavesurfer.js performance optimizations with Vue-specific 
                enhancements for smooth audio playback.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Start */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Start</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Installation</h4>
            <div className="bg-muted p-4 rounded-lg">
              <code className="text-sm">
                npm install @meersagor/wavesurfer-vue
              </code>
            </div>
          </div>
          
                     <div>
             <h4 className="font-semibold mb-2">Basic Usage</h4>
             <div className="bg-muted p-4 rounded-lg">
               <pre className="text-sm overflow-x-auto">
 {`<script setup>
import { useWaveSurfer } from '@meersagor/wavesurfer-vue'
import { useWaveSurferTimeline } from '@meersagor/wavesurfer-vue'

const containerRef = ref<HTMLElement | null>(null)

const { waveSurfer, currentTime, totalDuration } = useWaveSurfer({
  containerRef,
  options: { height: 48, url: 'audio.mp3' }
})

const { timelinePlugin } = useWaveSurferTimeline({ waveSurfer })
</script>

<template>
  <div ref="containerRef"></div>
</template>`}
               </pre>
             </div>
           </div>
        </CardContent>
      </Card>

      {/* Package Info */}
      <Card>
        <CardHeader>
          <CardTitle>Package Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium">Version:</span> 1.0.0
            </div>
            <div>
              <span className="font-medium">License:</span> MIT
            </div>
            <div>
              <span className="font-medium">Dependencies:</span> Vue 3, wavesurfer.js
            </div>
            <div>
              <span className="font-medium">TypeScript:</span> Supported
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}