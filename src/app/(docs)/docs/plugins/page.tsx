import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { ExternalLink, Mic, Settings, Code, Zap, Layers, Clock, Search, Map, MousePointer, BarChart3 } from 'lucide-react';

export default function PluginsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Plugins & Architecture</h1>
        <p className="text-xl text-muted-foreground">
          Explore the modular plugin system with individual plugins for enhanced audio functionality. 
          Import only what you need for optimal bundle sizes.
        </p>
      </div>

      {/* Architecture Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Layers className="h-5 w-5 text-primary" />
            Modular Architecture
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-muted rounded-lg">
              <Layers className="h-8 w-8 mx-auto mb-2 text-primary" />
              <h4 className="font-semibold">Modular Design</h4>
              <p className="text-sm text-muted-foreground">Core functionality separated from plugins</p>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <Code className="h-8 w-8 mx-auto mb-2 text-primary" />
              <h4 className="font-semibold">Individual Plugins</h4>
              <p className="text-sm text-muted-foreground">Import only the plugins you need</p>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <Zap className="h-8 w-8 mx-auto mb-2 text-primary" />
              <h4 className="font-semibold">Tree-shaking</h4>
              <p className="text-sm text-muted-foreground">Smaller bundle sizes</p>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <Settings className="h-8 w-8 mx-auto mb-2 text-primary" />
              <h4 className="font-semibold">TypeScript</h4>
              <p className="text-sm text-muted-foreground">Full type safety</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Usage Patterns */}
      <Tabs defaultValue="core-plugins" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="core-plugins">Core + Plugins</TabsTrigger>
          <TabsTrigger value="standalone">Standalone</TabsTrigger>
          <TabsTrigger value="core-only">Core Only</TabsTrigger>
          <TabsTrigger value="component">Component</TabsTrigger>
        </TabsList>

        {/* Core + Individual Plugins */}
        <TabsContent value="core-plugins" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Pattern 1: Core + Individual Plugins (Recommended)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`<script setup lang="ts">
import { ref } from 'vue'
import { useWaveSurfer } from '@meersagor/wavesurfer-vue'
import { useWaveSurferTimeline, useWaveSurferZoom } from '@meersagor/wavesurfer-vue'

const containerRef = ref<HTMLElement | null>(null)
const timelineContainer = ref<HTMLElement | null>(null)

const options = {
  height: 48,
  waveColor: 'gray',
  progressColor: 'red',
  barGap: 5,
  barWidth: 5,
  barRadius: 8,
  url: "https://example.com/audio.mp3",
}

// Core WaveSurfer functionality
const { waveSurfer, currentTime, totalDuration, isPlaying } = useWaveSurfer({
  containerRef,
  options
})

// Timeline plugin
const { timelinePlugin } = useWaveSurferTimeline({
  waveSurfer,
  timelineOptions: {
    container: timelineContainer
  }
})

// Zoom plugin
const { zoomPlugin } = useWaveSurferZoom({
  waveSurfer,
  zoomOptions: {
    minZoom: 1,
    maxZoom: 50
  }
})

const formatTime = (seconds: number): string => 
  [seconds / 60, seconds % 60]
    .map((v) => \`0\${Math.floor(v)}\`.slice(-2))
    .join(':')
</script>

<template>
  <div>
    <div ref="containerRef"></div>
    <div ref="timelineContainer"></div>
    
    <div class="controls">
      <button @click="waveSurfer?.playPause()">
        {{ isPlaying ? 'Pause' : 'Play' }}
      </button>
      <button @click="zoomPlugin?.zoomIn()">Zoom In</button>
      <button @click="zoomPlugin?.zoomOut()">Zoom Out</button>
    </div>
    
    <p>Current Time: {{ formatTime(currentTime) }}</p>
    <p>Duration: {{ formatTime(totalDuration) }}</p>
  </div>
</template>`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Standalone Plugins */}
        <TabsContent value="standalone" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Pattern 2: Standalone Plugins</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`<script setup lang="ts">
import { ref } from 'vue'
import { useWaveSurferTimelineStandalone } from '@meersagor/wavesurfer-vue'

const containerRef = ref<HTMLElement | null>(null)
const timelineContainer = ref<HTMLElement | null>(null)

const options = {
  height: 48,
  waveColor: 'gray',
  progressColor: 'red',
  url: "https://example.com/audio.mp3",
}

// Standalone timeline plugin (creates its own WaveSurfer instance)
const { waveSurfer, timelinePlugin } = useWaveSurferTimelineStandalone({
  containerRef,
  options,
  timelineOptions: {
    container: timelineContainer
  }
})
</script>

<template>
  <div>
    <div ref="containerRef"></div>
    <div ref="timelineContainer"></div>
    
    <div class="controls">
      <button @click="waveSurfer?.playPause()">Play/Pause</button>
      <button @click="timelinePlugin?.zoomIn()">Zoom In</button>
      <button @click="timelinePlugin?.zoomOut()">Zoom Out</button>
    </div>
  </div>
</template>`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Core Only */}
        <TabsContent value="core-only" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Pattern 3: Core Functionality Only</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`<script setup lang="ts">
import { ref } from 'vue'
import { useWaveSurfer } from '@meersagor/wavesurfer-vue'

const containerRef = ref<HTMLElement | null>(null)

const options = {
  height: 48,
  waveColor: 'gray',
  progressColor: 'red',
  url: "https://example.com/audio.mp3",
}

// Core WaveSurfer functionality only
const { waveSurfer, currentTime, totalDuration, isPlaying } = useWaveSurfer({
  containerRef,
  options
})
</script>

<template>
  <div>
    <div ref="containerRef"></div>
    <button @click="waveSurfer?.playPause()">
      {{ isPlaying ? 'Pause' : 'Play' }}
    </button>
  </div>
</template>`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Component Usage */}
        <TabsContent value="component" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Pattern 4: Component Usage (Legacy)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`<script setup lang="ts">
import { ref } from 'vue'
import type WaveSurfer from 'wavesurfer.js'
import { WaveSurferPlayer } from '@meersagor/wavesurfer-vue'

const options = ref({
  height: 48,
  waveColor: 'gray',
  progressColor: 'red',
  barGap: 5,
  barWidth: 5,
  barRadius: 8,
  url: "https://example.com/audio.mp3",
})

const currentTime = ref<string>('00:00')
const totalDuration = ref<string>('00:00')
const waveSurfer = ref<WaveSurfer | null>(null)

const formatTime = (seconds: number): string => 
  [seconds / 60, seconds % 60]
    .map((v) => \`0\${Math.floor(v)}\`.slice(-2))
    .join(':')

const timeUpdateHandler = (time: number) => {
  currentTime.value = formatTime(time)
}

const readyHandler = (duration: number) => {
  totalDuration.value = formatTime(duration)
}

const readyWaveSurferHandler = (ws: WaveSurfer) => {
  waveSurfer.value = ws
}
</script>

<template>
  <main>
    <h1>WaveSurferPlayer Using Components</h1>
    <WaveSurferPlayer 
      :options="options" 
      @timeupdate="timeUpdateHandler"
      @ready="readyHandler" 
      @waveSurfer="readyWaveSurferHandler" 
    />
    <p>currentTime: {{ currentTime }}</p>
    <p>totalDuration: {{ totalDuration }}</p>
    <button @click="waveSurfer?.playPause()">Play</button>
  </main>
</template>`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Available Plugins */}
      <Card>
        <CardHeader>
          <CardTitle>Available Plugins</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Timeline Plugin */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <CardTitle>Timeline</CardTitle>
                  <Badge variant="secondary">Core</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Adds a timeline display with time markers and navigation.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <code>useWaveSurferTimeline</code>
                    <Badge variant="outline" className="text-xs">With Instance</Badge>
                  </div>
                  <div className="flex justify-between">
                    <code>useWaveSurferTimelineStandalone</code>
                    <Badge variant="outline" className="text-xs">Standalone</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Zoom Plugin */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Search className="h-5 w-5 text-primary" />
                  <CardTitle>Zoom</CardTitle>
                  <Badge variant="secondary">Core</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Provides zoom functionality with zoom in/out methods.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <code>useWaveSurferZoom</code>
                    <Badge variant="outline" className="text-xs">With Instance</Badge>
                  </div>
                  <div className="flex justify-between">
                    <code>useWaveSurferZoomStandalone</code>
                    <Badge variant="outline" className="text-xs">Standalone</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Minimap Plugin */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Map className="h-5 w-5 text-primary" />
                  <CardTitle>Minimap</CardTitle>
                  <Badge variant="secondary">Core</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Shows a minimap overview of the entire waveform.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <code>useWaveSurferMinimap</code>
                    <Badge variant="outline" className="text-xs">With Instance</Badge>
                  </div>
                  <div className="flex justify-between">
                    <code>useWaveSurferMinimapStandalone</code>
                    <Badge variant="outline" className="text-xs">Standalone</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hover Plugin */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <MousePointer className="h-5 w-5 text-primary" />
                  <CardTitle>Hover</CardTitle>
                  <Badge variant="secondary">Core</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Adds hover effects and cursor interactions.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <code>useWaveSurferHover</code>
                    <Badge variant="outline" className="text-xs">With Instance</Badge>
                  </div>
                  <div className="flex justify-between">
                    <code>useWaveSurferHoverStandalone</code>
                    <Badge variant="outline" className="text-xs">Standalone</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Envelope Plugin */}
            <Card>
              <CardHeader>
                                 <div className="flex items-center gap-2">
                   <BarChart3 className="h-5 w-5 text-primary" />
                   <CardTitle>Envelope</CardTitle>
                  <Badge variant="secondary">Core</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Audio envelope visualization and control.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <code>useWaveSurferEnvelope</code>
                    <Badge variant="outline" className="text-xs">With Instance</Badge>
                  </div>
                  <div className="flex justify-between">
                    <code>useWaveSurferEnvelopeStandalone</code>
                    <Badge variant="outline" className="text-xs">Standalone</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Spectrogram Plugin */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  <CardTitle>Spectrogram</CardTitle>
                  <Badge variant="secondary">Core</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Frequency spectrum visualization.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <code>useWaveSurferSpectrogram</code>
                    <Badge variant="outline" className="text-xs">With Instance</Badge>
                  </div>
                  <div className="flex justify-between">
                    <code>useWaveSurferSpectrogramStandalone</code>
                    <Badge variant="outline" className="text-xs">Standalone</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Regions Plugin */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" />
                  <CardTitle>Regions</CardTitle>
                  <Badge variant="default">Advanced</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Audio region management and selection.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <code>useWaveSurferRegions</code>
                    <Badge variant="outline" className="text-xs">With Instance</Badge>
                  </div>
                  <div className="flex justify-between">
                    <code>useWaveSurferRegionsStandalone</code>
                    <Badge variant="outline" className="text-xs">Standalone</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recorder Plugin */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Mic className="h-5 w-5 text-primary" />
                  <CardTitle>Recorder</CardTitle>
                  <Badge variant="default">Recording</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Audio recording functionality with controls.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <code>useWaveSurferRecorder</code>
                    <Badge variant="outline" className="text-xs">Recording</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Plugin Usage Examples */}
      <Card>
        <CardHeader>
          <CardTitle>Plugin Usage Examples</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="with-instance" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="with-instance">With Existing Instance</TabsTrigger>
              <TabsTrigger value="standalone-plugin">Standalone Plugin</TabsTrigger>
            </TabsList>

            <TabsContent value="with-instance" className="mt-4">
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`// With existing WaveSurfer instance
import { useWaveSurferTimeline } from '@meersagor/wavesurfer-vue'

const { timelinePlugin } = useWaveSurferTimeline({
  waveSurfer, // Existing WaveSurfer instance
  timelineOptions: {
    container: timelineContainer
  }
})`}
                </pre>
              </div>
            </TabsContent>

            <TabsContent value="standalone-plugin" className="mt-4">
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`// Standalone (creates own instance)
import { useWaveSurferTimelineStandalone } from '@meersagor/wavesurfer-vue'

const { waveSurfer, timelinePlugin } = useWaveSurferTimelineStandalone({
  containerRef, // Container reference
  options, // WaveSurfer options
  timelineOptions: {
    container: timelineContainer
  }
})`}
                </pre>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Architecture Diagram */}
      <Card>
        <CardHeader>
          <CardTitle>Architecture Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Core Functionality</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between p-2 bg-muted rounded">
                  <code>useWaveSurferInstance</code>
                  <Badge variant="outline" className="text-xs">Internal</Badge>
                </div>
                <div className="flex justify-between p-2 bg-muted rounded">
                  <code>useWaveSurferState</code>
                  <Badge variant="outline" className="text-xs">Internal</Badge>
                </div>
                <div className="flex justify-between p-2 bg-muted rounded">
                  <code>useWaveSurfer</code>
                  <Badge variant="default" className="text-xs">Recommended</Badge>
                </div>
                <div className="flex justify-between p-2 bg-muted rounded">
                  <code>useWaveSurferPlugin</code>
                  <Badge variant="outline" className="text-xs">Internal</Badge>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Plugin System</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between p-2 bg-muted rounded">
                  <code>Individual plugins</code>
                  <Badge variant="outline" className="text-xs">Import only needed</Badge>
                </div>
                <div className="flex justify-between p-2 bg-muted rounded">
                  <code>Standalone versions</code>
                  <Badge variant="outline" className="text-xs">Own instances</Badge>
                </div>
                <div className="flex justify-between p-2 bg-muted rounded">
                  <code>Tree-shaking friendly</code>
                  <Badge variant="outline" className="text-xs">Smaller bundles</Badge>
                </div>
                <div className="flex justify-between p-2 bg-muted rounded">
                  <code>Type-safe</code>
                  <Badge variant="outline" className="text-xs">Full TypeScript</Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* External Resources */}
      <Card>
        <CardHeader>
          <CardTitle>Additional Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline" asChild>
              <a href="https://wavesurfer.xyz" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                WaveSurfer.js Documentation
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/docs/examples/with-plugins">Plugin Examples</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/docs/architecture">Architecture Guide</a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
