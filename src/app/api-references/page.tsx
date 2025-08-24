import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { ExternalLink, Code, Settings, Play, Volume2, BookOpen } from 'lucide-react';

export default function PlayerPropsPage() {
  return (
   <section className='container mx-auto pt-12'>
     <div className="space-y-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">WaveSurferPlayer Props</h1>
        <p className="text-xl text-muted-foreground">
          Complete reference for all available props and configuration options for the 
          <code className="bg-muted px-2 py-1 rounded text-sm">WaveSurferPlayer</code> component.
        </p>
        
        {/* WaveSurfer.js Documentation Link */}
        <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <BookOpen className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">
                Need More Information?
              </h4>
              <p className="text-blue-700 dark:text-blue-300 text-sm mb-3">
                This component is built on top of WaveSurfer.js. For detailed configuration options, 
                advanced features, and complete API documentation, visit the official WaveSurfer.js documentation.
              </p>
              <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                <a href="https://wavesurfer.xyz/docs" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  WaveSurfer.js Documentation
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Props Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Props Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Required Props</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-muted rounded">
                  <code className="text-sm">options</code>
                  <Badge variant="destructive" className="text-xs">Required</Badge>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Optional Props</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-muted rounded">
                  <code className="text-sm">plugins</code>
                  <Badge variant="outline" className="text-xs">Optional</Badge>
                </div>
                <div className="flex items-center justify-between p-2 bg-muted rounded">
                  <code className="text-sm">events</code>
                  <Badge variant="outline" className="text-xs">Optional</Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Options Configuration */}
      <Card>
        <CardHeader>
          <CardTitle>Configuration Options</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="visual" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
              <TabsTrigger 
                value="visual" 
                className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700 data-[state=active]:shadow-sm rounded-md transition-all"
              >
                <Settings className="h-4 w-4 mr-2" />
                Visual
              </TabsTrigger>
              <TabsTrigger 
                value="audio" 
                className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700 data-[state=active]:shadow-sm rounded-md transition-all"
              >
                <Volume2 className="h-4 w-4 mr-2" />
                Audio
              </TabsTrigger>
              <TabsTrigger 
                value="interaction" 
                className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700 data-[state=active]:shadow-sm rounded-md transition-all"
              >
                <Play className="h-4 w-4 mr-2" />
                Interaction
              </TabsTrigger>
              <TabsTrigger 
                value="advanced" 
                className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700 data-[state=active]:shadow-sm rounded-md transition-all"
              >
                <Code className="h-4 w-4 mr-2" />
                Advanced
              </TabsTrigger>
            </TabsList>

            {/* Visual Options */}
            <TabsContent value="visual" className="space-y-6 mt-6">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Waveform Styling</h4>
                    <div className="space-y-3">
                      <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                        <div className="flex justify-between items-center mb-2">
                          <code className="text-sm font-medium">height</code>
                          <Badge variant="outline" className="text-xs">number</Badge>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Height of the waveform in pixels</p>
                        <code className="text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/20 px-2 py-1 rounded">Default: 128</code>
                      </div>
                      
                      <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                        <div className="flex justify-between items-center mb-2">
                          <code className="text-sm font-medium">waveColor</code>
                          <Badge variant="outline" className="text-xs">string</Badge>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Color of the waveform bars</p>
                        <code className="text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/20 px-2 py-1 rounded">Default: &apos;#999&apos;</code>
                      </div>
                      
                      <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                        <div className="flex justify-between items-center mb-2">
                          <code className="text-sm font-medium">progressColor</code>
                          <Badge variant="outline" className="text-xs">string</Badge>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Color of the progress overlay</p>
                        <code className="text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/20 px-2 py-1 rounded">Default: &apos;#555&apos;</code>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Bar Configuration</h4>
                    <div className="space-y-3">
                      <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                        <div className="flex justify-between items-center mb-2">
                          <code className="text-sm font-medium">barWidth</code>
                          <Badge variant="outline" className="text-xs">number</Badge>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Width of each waveform bar</p>
                        <code className="text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/20 px-2 py-1 rounded">Default: 1</code>
                      </div>
                      
                      <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                        <div className="flex justify-between items-center mb-2">
                          <code className="text-sm font-medium">barGap</code>
                          <Badge variant="outline" className="text-xs">number</Badge>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Gap between waveform bars</p>
                        <code className="text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/20 px-2 py-1 rounded">Default: 0</code>
                      </div>
                      
                      <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                        <div className="flex justify-between items-center mb-2">
                          <code className="text-sm font-medium">barRadius</code>
                          <Badge variant="outline" className="text-xs">number</Badge>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Border radius of bars</p>
                        <code className="text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/20 px-2 py-1 rounded">Default: 0</code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Audio Options */}
            <TabsContent value="audio" className="space-y-6 mt-6">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Audio Source</h4>
                    <div className="space-y-3">
                      <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                        <div className="flex justify-between items-center mb-2">
                          <code className="text-sm font-medium">url</code>
                          <Badge variant="outline" className="text-xs">string</Badge>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">URL of the audio file to load</p>
                        <Badge variant="destructive" className="text-xs">Required</Badge>
                      </div>
                      
                      <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                        <div className="flex justify-between items-center mb-2">
                          <code className="text-sm font-medium">duration</code>
                          <Badge variant="outline" className="text-xs">number</Badge>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Duration of the audio in seconds</p>
                        <code className="text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/20 px-2 py-1 rounded">Auto-detected if not provided</code>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Playback Settings</h4>
                    <div className="space-y-3">
                      <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                        <div className="flex justify-between items-center mb-2">
                          <code className="text-sm font-medium">autoplay</code>
                          <Badge variant="outline" className="text-xs">boolean</Badge>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Auto-play when audio is loaded</p>
                        <code className="text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/20 px-2 py-1 rounded">Default: false</code>
                      </div>
                      
                      <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                        <div className="flex justify-between items-center mb-2">
                          <code className="text-sm font-medium">loop</code>
                          <Badge variant="outline" className="text-xs">boolean</Badge>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Loop the audio playback</p>
                        <code className="text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/20 px-2 py-1 rounded">Default: false</code>
                      </div>
                      
                      <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                        <div className="flex justify-between items-center mb-2">
                          <code className="text-sm font-medium">volume</code>
                          <Badge variant="outline" className="text-xs">number</Badge>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Initial volume (0-1)</p>
                        <code className="text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/20 px-2 py-1 rounded">Default: 1</code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Interaction Options */}
            <TabsContent value="interaction" className="space-y-6 mt-6">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Cursor & Selection</h4>
                    <div className="space-y-3">
                      <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                        <div className="flex justify-between items-center mb-2">
                          <code className="text-sm font-medium">cursorColor</code>
                          <Badge variant="outline" className="text-xs">string</Badge>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Color of the playback cursor</p>
                        <code className="text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/20 px-2 py-1 rounded">Default: &apos;#333&apos;</code>
                      </div>
                      
                      <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                        <div className="flex justify-between items-center mb-2">
                          <code className="text-sm font-medium">cursorWidth</code>
                          <Badge variant="outline" className="text-xs">number</Badge>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Width of the cursor line</p>
                        <code className="text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/20 px-2 py-1 rounded">Default: 1</code>
                      </div>
                      
                      <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                        <div className="flex justify-between items-center mb-2">
                          <code className="text-sm font-medium">interact</code>
                          <Badge variant="outline" className="text-xs">boolean</Badge>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Enable click-to-seek interaction</p>
                        <code className="text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/20 px-2 py-1 rounded">Default: true</code>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Responsive Behavior</h4>
                    <div className="space-y-3">
                      <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                        <div className="flex justify-between items-center mb-2">
                          <code className="text-sm font-medium">responsive</code>
                          <Badge variant="outline" className="text-xs">boolean</Badge>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Make waveform responsive to container size</p>
                        <code className="text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/20 px-2 py-1 rounded">Default: false</code>
                      </div>
                      
                      <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                        <div className="flex justify-between items-center mb-2">
                          <code className="text-sm font-medium">fillParent</code>
                          <Badge variant="outline" className="text-xs">boolean</Badge>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Fill the entire container width</p>
                        <code className="text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/20 px-2 py-1 rounded">Default: true</code>
                      </div>
                      
                      <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                        <div className="flex justify-between items-center mb-2">
                          <code className="text-sm font-medium">scrollParent</code>
                          <Badge variant="outline" className="text-xs">boolean</Badge>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Enable horizontal scrolling</p>
                        <code className="text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/20 px-2 py-1 rounded">Default: false</code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Advanced Options */}
            <TabsContent value="advanced" className="space-y-6 mt-6">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Performance</h4>
                    <div className="space-y-3">
                      <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                        <div className="flex justify-between items-center mb-2">
                          <code className="text-sm font-medium">pixelRatio</code>
                          <Badge variant="outline" className="text-xs">number</Badge>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Canvas pixel ratio for high DPI displays</p>
                        <code className="text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/20 px-2 py-1 rounded">Default: 1</code>
                      </div>
                      
                      <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                        <div className="flex justify-between items-center mb-2">
                          <code className="text-sm font-medium">backend</code>
                          <Badge variant="outline" className="text-xs">string</Badge>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Audio backend to use</p>
                        <code className="text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/20 px-2 py-1 rounded">Default: &apos;WebAudio&apos;</code>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Waveform Processing</h4>
                    <div className="space-y-3">
                      <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                        <div className="flex justify-between items-center mb-2">
                          <code className="text-sm font-medium">normalize</code>
                          <Badge variant="outline" className="text-xs">boolean</Badge>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Normalize waveform data</p>
                        <code className="text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/20 px-2 py-1 rounded">Default: false</code>
                      </div>
                      
                      <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                        <div className="flex justify-between items-center mb-2">
                          <code className="text-sm font-medium">minPxPerSec</code>
                          <Badge variant="outline" className="text-xs">number</Badge>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Minimum pixels per second</p>
                        <code className="text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/20 px-2 py-1 rounded">Default: 50</code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Complete Example */}
      <Card>
        <CardHeader>
          <CardTitle>Complete Configuration Example</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
            <pre className="text-sm overflow-x-auto text-slate-700 dark:text-slate-300">
{`const options = {
  // Visual Configuration
  height: 48,
  waveColor: '#4F4A85',
  progressColor: '#383351',
  barWidth: 3,
  barGap: 2,
  barRadius: 4,
  
  // Audio Configuration
  url: 'https://example.com/audio.mp3',
  autoplay: false,
  loop: false,
  volume: 0.8,
  
  // Interaction Configuration
  cursorColor: '#333',
  cursorWidth: 2,
  interact: true,
  responsive: true,
  fillParent: true,
  
  // Advanced Configuration
  pixelRatio: 1,
  backend: 'WebAudio',
  normalize: true,
  minPxPerSec: 50
}

<WaveSurferPlayer :options="options" />`}
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Events Reference */}
      <Card>
        <CardHeader>
          <CardTitle>Available Events</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Playback Events</h4>
              <div className="space-y-2">
                <div className="flex justify-between p-2 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700">
                  <code className="text-sm">@ready</code>
                  <Badge variant="outline" className="text-xs">WaveSurfer ready</Badge>
                </div>
                <div className="flex justify-between p-2 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700">
                  <code className="text-sm">@play</code>
                  <Badge variant="outline" className="text-xs">Playback started</Badge>
                </div>
                <div className="flex justify-between p-2 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700">
                  <code className="text-sm">@pause</code>
                  <Badge variant="outline" className="text-xs">Playback paused</Badge>
                </div>
                <div className="flex justify-between p-2 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700">
                  <code className="text-sm">@finish</code>
                  <Badge variant="outline" className="text-xs">Playback finished</Badge>
                </div>
                <div className="flex justify-between p-2 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700">
                  <code className="text-sm">@timeupdate</code>
                  <Badge variant="outline" className="text-xs">Time updated</Badge>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Interaction Events</h4>
              <div className="space-y-2">
                <div className="flex justify-between p-2 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700">
                  <code className="text-sm">@click</code>
                  <Badge variant="outline" className="text-xs">Waveform clicked</Badge>
                </div>
                <div className="flex justify-between p-2 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700">
                  <code className="text-sm">@dblclick</code>
                  <Badge variant="outline" className="text-xs">Waveform double-clicked</Badge>
                </div>
                <div className="flex justify-between p-2 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700">
                  <code className="text-sm">@scroll</code>
                  <Badge variant="outline" className="text-xs">Waveform scrolled</Badge>
                </div>
                <div className="flex justify-between p-2 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700">
                  <code className="text-sm">@zoom</code>
                  <Badge variant="outline" className="text-xs">Waveform zoomed</Badge>
                </div>
                <div className="flex justify-between p-2 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700">
                  <code className="text-sm">@waveSurfer</code>
                  <Badge variant="outline" className="text-xs">WaveSurfer instance</Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Related Links */}
      <Card>
        <CardHeader>
          <CardTitle>Related Documentation</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline" asChild>
              <a href="/playground">
                <Play className="h-4 w-4 mr-2" />
                Interactive Playground
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://wavesurfer.xyz/docs" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                WaveSurfer.js Docs
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://github.com/meer-sagor/wavesurfer-vue" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                GitHub Repository
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
   </section>
  );
}
