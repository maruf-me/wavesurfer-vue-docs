'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Play, Pause, RotateCcw, Volume2, Settings, Code, Copy, Check,
  Clock, Search, Map, MousePointer, BarChart3, Mic, Layers
} from 'lucide-react';

export default function PlaygroundPage() {
  const [copied, setCopied] = useState<string | null>(null);
  const [activePlugins, setActivePlugins] = useState<string[]>(['timeline']);
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

  const updateConfig = (key: string, value: any) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };

  const generateCode = () => {
    const plugins = activePlugins.map(plugin => {
      switch (plugin) {
        case 'timeline':
          return `import { useWaveSurferTimeline } from '@meersagor/wavesurfer-vue'`;
        case 'zoom':
          return `import { useWaveSurferZoom } from '@meersagor/wavesurfer-vue'`;
        case 'minimap':
          return `import { useWaveSurferMinimap } from '@meersagor/wavesurfer-vue'`;
        case 'hover':
          return `import { useWaveSurferHover } from '@meersagor/wavesurfer-vue'`;
        case 'envelope':
          return `import { useWaveSurferEnvelope } from '@meersagor/wavesurfer-vue'`;
        case 'spectrogram':
          return `import { useWaveSurferSpectrogram } from '@meersagor/wavesurfer-vue'`;
        case 'regions':
          return `import { useWaveSurferRegions } from '@meersagor/wavesurfer-vue'`;
        default:
          return '';
      }
    }).filter(Boolean);

    const pluginImports = [...new Set(plugins)].join('\n');

    const pluginUsage = activePlugins.map(plugin => {
      switch (plugin) {
        case 'timeline':
          return `const { timelinePlugin } = useWaveSurferTimeline({ waveSurfer })`;
        case 'zoom':
          return `const { zoomPlugin } = useWaveSurferZoom({ waveSurfer })`;
        case 'minimap':
          return `const { minimapPlugin } = useWaveSurferMinimap({ waveSurfer })`;
        case 'hover':
          return `const { hoverPlugin } = useWaveSurferHover({ waveSurfer })`;
        case 'envelope':
          return `const { envelopePlugin } = useWaveSurferEnvelope({ waveSurfer })`;
        case 'spectrogram':
          return `const { spectrogramPlugin } = useWaveSurferSpectrogram({ waveSurfer })`;
        case 'regions':
          return `const { regionsPlugin } = useWaveSurferRegions({ waveSurfer })`;
        default:
          return '';
      }
    }).filter(Boolean);

    return `<script setup lang="ts">
import { ref } from 'vue'
import { useWaveSurfer } from '@meersagor/wavesurfer-vue'
${pluginImports}

const containerRef = ref<HTMLElement | null>(null)

const options = ${JSON.stringify(config, null, 2)}

const { waveSurfer, currentTime, totalDuration, isPlaying } = useWaveSurfer({
  containerRef,
  options
})

${pluginUsage.join('\n')}

const formatTime = (seconds: number): string => 
  [seconds / 60, seconds % 60]
    .map((v) => \`0\${Math.floor(v)}\`.slice(-2))
    .join(':')
</script>

<template>
  <div>
    <div ref="containerRef"></div>
    <div class="controls">
      <button @click="waveSurfer?.playPause()">
        {{ isPlaying ? 'Pause' : 'Play' }}
      </button>
    </div>
    <p>Current Time: {{ formatTime(currentTime) }}</p>
    <p>Duration: {{ formatTime(totalDuration) }}</p>
  </div>
</template>`;
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Interactive Playground</h1>
        <p className="text-xl text-muted-foreground">
          Experiment with different plugins and configurations. See live code generation 
          and test various WaveSurfer Vue features.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Configuration Panel */}
        <div className="space-y-6">
          {/* Plugin Selection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Layers className="h-5 w-5 text-primary" />
                Plugin Selection
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: 'timeline', name: 'Timeline', icon: Clock },
                  { id: 'zoom', name: 'Zoom', icon: Search },
                  { id: 'minimap', name: 'Minimap', icon: Map },
                  { id: 'hover', name: 'Hover', icon: MousePointer },
                  { id: 'envelope', name: 'Envelope', icon: BarChart3 },
                  { id: 'spectrogram', name: 'Spectrogram', icon: BarChart3 },
                  { id: 'regions', name: 'Regions', icon: Code }
                ].map(({ id, name, icon: Icon }) => (
                  <div key={id} className="flex items-center space-x-2">
                    <Switch
                      id={id}
                      checked={activePlugins.includes(id)}
                      onCheckedChange={() => togglePlugin(id)}
                    />
                    <Label htmlFor={id} className="flex items-center gap-2 cursor-pointer">
                      <Icon className="h-4 w-4" />
                      {name}
                    </Label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Visual Configuration */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-primary" />
                Visual Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Height: {config.height}px</Label>
                <Slider
                  value={[config.height]}
                  onValueChange={([value]) => updateConfig('height', value)}
                  min={20}
                  max={200}
                  step={1}
                />
              </div>

              <div className="space-y-2">
                <Label>Bar Width: {config.barWidth}px</Label>
                <Slider
                  value={[config.barWidth]}
                  onValueChange={([value]) => updateConfig('barWidth', value)}
                  min={1}
                  max={10}
                  step={1}
                />
              </div>

              <div className="space-y-2">
                <Label>Bar Gap: {config.barGap}px</Label>
                <Slider
                  value={[config.barGap]}
                  onValueChange={([value]) => updateConfig('barGap', value)}
                  min={0}
                  max={10}
                  step={1}
                />
              </div>

              <div className="space-y-2">
                <Label>Bar Radius: {config.barRadius}px</Label>
                <Slider
                  value={[config.barRadius]}
                  onValueChange={([value]) => updateConfig('barRadius', value)}
                  min={0}
                  max={10}
                  step={1}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Wave Color</Label>
                  <Input
                    type="color"
                    value={config.waveColor}
                    onChange={(e) => updateConfig('waveColor', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Progress Color</Label>
                  <Input
                    type="color"
                    value={config.progressColor}
                    onChange={(e) => updateConfig('progressColor', e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Audio Configuration */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Volume2 className="h-5 w-5 text-primary" />
                Audio Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Volume: {Math.round(config.volume * 100)}%</Label>
                <Slider
                  value={[config.volume]}
                  onValueChange={([value]) => updateConfig('volume', value)}
                  min={0}
                  max={1}
                  step={0.1}
                />
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="autoplay"
                  checked={config.autoplay}
                  onCheckedChange={(checked) => updateConfig('autoplay', checked)}
                />
                <Label htmlFor="autoplay">Auto-play</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="loop"
                  checked={config.loop}
                  onCheckedChange={(checked) => updateConfig('loop', checked)}
                />
                <Label htmlFor="loop">Loop</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="responsive"
                  checked={config.responsive}
                  onCheckedChange={(checked) => updateConfig('responsive', checked)}
                />
                <Label htmlFor="responsive">Responsive</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="fillParent"
                  checked={config.fillParent}
                  onCheckedChange={(checked) => updateConfig('fillParent', checked)}
                />
                <Label htmlFor="fillParent">Fill Parent</Label>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Live Demo & Code */}
        <div className="space-y-6">
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
                          className="rounded-sm"
                          style={{
                            width: `${config.barWidth}px`,
                            height: `${Math.random() * 40 + 8}px`,
                            backgroundColor: i < 15 ? config.progressColor : config.waveColor,
                            marginRight: `${config.barGap}px`,
                            borderRadius: `${config.barRadius}px`
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>00:15</span>
                    <span>02:45</span>
                  </div>

                  {/* Active Plugins */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {activePlugins.map(plugin => (
                      <Badge key={plugin} variant="secondary">
                        {plugin}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Generated Code */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" />
                  Generated Code
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard(generateCode())}
                >
                  {copied === 'config' ? (
                    <Check className="h-4 w-4 mr-2" />
                  ) : (
                    <Copy className="h-4 w-4 mr-2" />
                  )}
                  {copied === 'config' ? 'Copied!' : 'Copy Code'}
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto max-h-96 overflow-y-auto">
                  <code>{generateCode()}</code>
                </pre>
              </div>
            </CardContent>
          </Card>

          {/* Configuration Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Configuration Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold mb-2">Active Plugins ({activePlugins.length})</h4>
                  <div className="flex flex-wrap gap-2">
                    {activePlugins.map(plugin => (
                      <Badge key={plugin} variant="outline">
                        {plugin}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Visual Settings</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>Height: {config.height}px</div>
                    <div>Bar Width: {config.barWidth}px</div>
                    <div>Bar Gap: {config.barGap}px</div>
                    <div>Bar Radius: {config.barRadius}px</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Audio Settings</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>Volume: {Math.round(config.volume * 100)}%</div>
                    <div>Auto-play: {config.autoplay ? 'Yes' : 'No'}</div>
                    <div>Loop: {config.loop ? 'Yes' : 'No'}</div>
                    <div>Responsive: {config.responsive ? 'Yes' : 'No'}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline" onClick={() => setActivePlugins(['timeline', 'zoom'])}>
              Music Player Setup
            </Button>
            <Button variant="outline" onClick={() => setActivePlugins(['timeline', 'regions'])}>
              Audio Editor Setup
            </Button>
            <Button variant="outline" onClick={() => setActivePlugins(['minimap', 'hover'])}>
              Analysis Setup
            </Button>
            <Button variant="outline" onClick={() => setActivePlugins([])}>
              Core Only
            </Button>
            <Button variant="outline" onClick={() => setActivePlugins(['timeline', 'zoom', 'minimap', 'hover', 'envelope', 'spectrogram', 'regions'])}>
              All Plugins
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
