'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Play, Pause, RotateCcw, Volume2, Settings, Code, Copy, Check } from 'lucide-react';
import { useState } from 'react';

export default function BasicPlayerExample() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = async (code: string, section: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(section);
      setTimeout(() => setCopied(null), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const basicPlayerCode = `<script setup lang="ts">
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
  duration: 80,
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
    <h1>Basic WaveSurfer Player</h1>
    <WaveSurferPlayer 
      :options="options" 
      @timeupdate="timeUpdateHandler"
      @ready="readyHandler" 
      @waveSurfer="readyWaveSurferHandler" 
    />
    <p>Current Time: {{ currentTime }}</p>
    <p>Total Duration: {{ totalDuration }}</p>
    <button @click="waveSurfer?.playPause()">
      {{ waveSurfer?.isPlaying() ? 'Pause' : 'Play' }}
    </button>
  </main>
</template>`;

  const composableCode = `<script setup lang="ts">
import { ref } from 'vue'
import { useWaveSurfer } from '@meersagor/wavesurfer-vue'

const containerRef = ref<HTMLElement | null>(null)
const options = ref({
  height: 48,
  waveColor: 'gray',
  progressColor: 'red',
  barGap: 5,
  barWidth: 5,
  barRadius: 8,
  duration: 80,
  url: "https://example.com/audio.mp3",
})

const { waveSurfer, currentTime, totalDuration } = useWaveSurfer({
  containerRef, 
  options: options.value
})

const formatTime = (seconds: number): string => 
  [seconds / 60, seconds % 60]
    .map((v) => \`0\${Math.floor(v)}\`.slice(-2))
    .join(':')
</script>

<template>
  <main>
    <h1>Basic WaveSurfer Player (Composable)</h1>
    <div ref="containerRef"></div>
    <p>Current Time: {{ formatTime(currentTime) }}</p>
    <p>Total Duration: {{ formatTime(totalDuration) }}</p>
    <button @click="waveSurfer?.playPause()">
      {{ waveSurfer?.isPlaying() ? 'Pause' : 'Play' }}
    </button>
  </main>
</template>`;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Basic Player Example</h1>
        <p className="text-xl text-muted-foreground">
          Learn how to create a simple audio player with waveform visualization using 
          WaveSurfer Vue components and composables.
        </p>
      </div>

      {/* Live Demo */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Play className="h-5 w-5 text-primary" />
            Live Demo
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-muted p-6 rounded-lg text-center">
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-4">
                <Button size="lg" variant="outline">
                  <Play className="h-4 w-4 mr-2" />
                  Play Demo
                </Button>
                <Button size="lg" variant="outline">
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Reset
                </Button>
                <Button size="lg" variant="outline">
                  <Volume2 className="h-4 w-4 mr-2" />
                  Volume
                </Button>
              </div>
              
              {/* Mock Waveform */}
              <div className="bg-white rounded-lg p-4">
                <div className="flex items-center justify-center gap-1 h-12">
                  {Array.from({ length: 50 }, (_, i) => (
                    <div
                      key={i}
                      className="bg-gray-300 rounded-sm"
                      style={{
                        width: '3px',
                        height: `${Math.random() * 40 + 8}px`,
                        backgroundColor: i < 15 ? '#ef4444' : '#d1d5db'
                      }}
                    />
                  ))}
                </div>
              </div>
              
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>00:15</span>
                <span>02:45</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Implementation Options */}
      <Tabs defaultValue="component" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="component">Component Approach</TabsTrigger>
          <TabsTrigger value="composable">Composable Approach</TabsTrigger>
        </TabsList>

        <TabsContent value="component" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>WaveSurferPlayer Component</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard(basicPlayerCode, 'component')}
                >
                  {copied === 'component' ? (
                    <Check className="h-4 w-4 mr-2" />
                  ) : (
                    <Copy className="h-4 w-4 mr-2" />
                  )}
                  {copied === 'component' ? 'Copied!' : 'Copy Code'}
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
                  <code>{basicPlayerCode}</code>
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="composable" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>useWaveSurfer Composable</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard(composableCode, 'composable')}
                >
                  {copied === 'composable' ? (
                    <Check className="h-4 w-4 mr-2" />
                  ) : (
                    <Copy className="h-4 w-4 mr-2" />
                  )}
                  {copied === 'composable' ? 'Copied!' : 'Copy Code'}
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
                  <code>{composableCode}</code>
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Key Features */}
      <Card>
        <CardHeader>
          <CardTitle>Key Features</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold">🎵 Audio Playback</h4>
              <p className="text-sm text-muted-foreground">
                Play, pause, and control audio files with simple API calls.
              </p>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold">📊 Waveform Visualization</h4>
              <p className="text-sm text-muted-foreground">
                Beautiful waveform display with customizable colors and styling.
              </p>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold">⏱️ Time Tracking</h4>
              <p className="text-sm text-muted-foreground">
                Real-time current time and total duration display.
              </p>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold">🎛️ Event Handling</h4>
              <p className="text-sm text-muted-foreground">
                Listen to playback events like ready, timeupdate, and more.
              </p>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold">🔧 Customizable Options</h4>
              <p className="text-sm text-muted-foreground">
                Configure height, colors, bar width, and other visual properties.
              </p>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold">📱 Responsive Design</h4>
              <p className="text-sm text-muted-foreground">
                Automatically adapts to different screen sizes and orientations.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Configuration Options */}
      <Card>
        <CardHeader>
          <CardTitle>Configuration Options</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Visual Options</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <code>height</code>
                  <span className="text-muted-foreground">Waveform height in pixels</span>
                </div>
                <div className="flex justify-between">
                  <code>waveColor</code>
                  <span className="text-muted-foreground">Color of the waveform bars</span>
                </div>
                <div className="flex justify-between">
                  <code>progressColor</code>
                  <span className="text-muted-foreground">Color of the progress overlay</span>
                </div>
                <div className="flex justify-between">
                  <code>barWidth</code>
                  <span className="text-muted-foreground">Width of each waveform bar</span>
                </div>
                <div className="flex justify-between">
                  <code>barGap</code>
                  <span className="text-muted-foreground">Gap between waveform bars</span>
                </div>
                <div className="flex justify-between">
                  <code>barRadius</code>
                  <span className="text-muted-foreground">Border radius of bars</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Audio Options</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <code>url</code>
                  <span className="text-muted-foreground">Audio file URL</span>
                </div>
                <div className="flex justify-between">
                  <code>duration</code>
                  <span className="text-muted-foreground">Audio duration in seconds</span>
                </div>
                <div className="flex justify-between">
                  <code>autoplay</code>
                  <span className="text-muted-foreground">Auto-play on load</span>
                </div>
                <div className="flex justify-between">
                  <code>loop</code>
                  <span className="text-muted-foreground">Loop playback</span>
                </div>
                <div className="flex justify-between">
                  <code>volume</code>
                  <span className="text-muted-foreground">Initial volume (0-1)</span>
                </div>
                <div className="flex justify-between">
                  <code>muted</code>
                  <span className="text-muted-foreground">Start muted</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card>
        <CardHeader>
          <CardTitle>Next Steps</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Now that you have a basic player working, explore these advanced features:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold">🎯 Advanced Player</h4>
                <p className="text-sm text-muted-foreground">
                  Add volume controls, seeking, and more advanced features.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="/docs/examples/advanced-player">View Example</a>
                </Button>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold">🎙️ Audio Recorder</h4>
                <p className="text-sm text-muted-foreground">
                  Implement audio recording with real-time waveform display.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="/docs/examples/audio-recorder">View Example</a>
                </Button>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold">🔌 Plugin Integration</h4>
                <p className="text-sm text-muted-foreground">
                  Add timeline, regions, and other plugins for enhanced functionality.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="/docs/examples/with-plugins">View Example</a>
                </Button>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold">📚 API Reference</h4>
                <p className="text-sm text-muted-foreground">
                  Explore the complete API documentation for all available options.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="/docs/api/player-props">View API</a>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
