import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { ExternalLink, Code, Settings, Play, Volume2 } from 'lucide-react';

export default function PlayerPropsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">WaveSurferPlayer Props</h1>
        <p className="text-xl text-muted-foreground">
          Complete reference for all available props and configuration options for the 
          <code className="bg-muted px-2 py-1 rounded text-sm">WaveSurferPlayer</code> component.
        </p>
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
      <Tabs defaultValue="visual" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="visual">Visual</TabsTrigger>
          <TabsTrigger value="audio">Audio</TabsTrigger>
          <TabsTrigger value="interaction">Interaction</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>

        {/* Visual Options */}
        <TabsContent value="visual" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-primary" />
                Visual Configuration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Waveform Styling</h4>
                    <div className="space-y-3">
                      <div className="bg-muted p-3 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <code className="text-sm">height</code>
                          <Badge variant="outline" className="text-xs">number</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">Height of the waveform in pixels</p>
                        <code className="text-xs text-primary">Default: 128</code>
                      </div>
                      
                      <div className="bg-muted p-3 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <code className="text-sm">waveColor</code>
                          <Badge variant="outline" className="text-xs">string</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">Color of the waveform bars</p>
                        <code className="text-xs text-primary">Default: '#999'</code>
                      </div>
                      
                      <div className="bg-muted p-3 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <code className="text-sm">progressColor</code>
                          <Badge variant="outline" className="text-xs">string</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">Color of the progress overlay</p>
                        <code className="text-xs text-primary">Default: '#555'</code>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Bar Configuration</h4>
                    <div className="space-y-3">
                      <div className="bg-muted p-3 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <code className="text-sm">barWidth</code>
                          <Badge variant="outline" className="text-xs">number</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">Width of each waveform bar</p>
                        <code className="text-xs text-primary">Default: 1</code>
                      </div>
                      
                      <div className="bg-muted p-3 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <code className="text-sm">barGap</code>
                          <Badge variant="outline" className="text-xs">number</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">Gap between waveform bars</p>
                        <code className="text-xs text-primary">Default: 0</code>
                      </div>
                      
                      <div className="bg-muted p-3 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <code className="text-sm">barRadius</code>
                          <Badge variant="outline" className="text-xs">number</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">Border radius of bars</p>
                        <code className="text-xs text-primary">Default: 0</code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Audio Options */}
        <TabsContent value="audio" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Volume2 className="h-5 w-5 text-primary" />
                Audio Configuration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Audio Source</h4>
                    <div className="space-y-3">
                      <div className="bg-muted p-3 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <code className="text-sm">url</code>
                          <Badge variant="outline" className="text-xs">string</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">URL of the audio file to load</p>
                        <Badge variant="destructive" className="text-xs">Required</Badge>
                      </div>
                      
                      <div className="bg-muted p-3 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <code className="text-sm">duration</code>
                          <Badge variant="outline" className="text-xs">number</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">Duration of the audio in seconds</p>
                        <code className="text-xs text-primary">Auto-detected if not provided</code>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Playback Settings</h4>
                    <div className="space-y-3">
                      <div className="bg-muted p-3 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <code className="text-sm">autoplay</code>
                          <Badge variant="outline" className="text-xs">boolean</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">Auto-play when audio is loaded</p>
                        <code className="text-xs text-primary">Default: false</code>
                      </div>
                      
                      <div className="bg-muted p-3 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <code className="text-sm">loop</code>
                          <Badge variant="outline" className="text-xs">boolean</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">Loop the audio playback</p>
                        <code className="text-xs text-primary">Default: false</code>
                      </div>
                      
                      <div className="bg-muted p-3 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <code className="text-sm">volume</code>
                          <Badge variant="outline" className="text-xs">number</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">Initial volume (0-1)</p>
                        <code className="text-xs text-primary">Default: 1</code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Interaction Options */}
        <TabsContent value="interaction" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Play className="h-5 w-5 text-primary" />
                Interaction Configuration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Cursor & Selection</h4>
                    <div className="space-y-3">
                      <div className="bg-muted p-3 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <code className="text-sm">cursorColor</code>
                          <Badge variant="outline" className="text-xs">string</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">Color of the playback cursor</p>
                        <code className="text-xs text-primary">Default: '#333'</code>
                      </div>
                      
                      <div className="bg-muted p-3 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <code className="text-sm">cursorWidth</code>
                          <Badge variant="outline" className="text-xs">number</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">Width of the cursor line</p>
                        <code className="text-xs text-primary">Default: 1</code>
                      </div>
                      
                      <div className="bg-muted p-3 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <code className="text-sm">interact</code>
                          <Badge variant="outline" className="text-xs">boolean</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">Enable click-to-seek interaction</p>
                        <code className="text-xs text-primary">Default: true</code>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Responsive Behavior</h4>
                    <div className="space-y-3">
                      <div className="bg-muted p-3 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <code className="text-sm">responsive</code>
                          <Badge variant="outline" className="text-xs">boolean</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">Make waveform responsive to container size</p>
                        <code className="text-xs text-primary">Default: false</code>
                      </div>
                      
                      <div className="bg-muted p-3 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <code className="text-sm">fillParent</code>
                          <Badge variant="outline" className="text-xs">boolean</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">Fill the entire container width</p>
                        <code className="text-xs text-primary">Default: true</code>
                      </div>
                      
                      <div className="bg-muted p-3 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <code className="text-sm">scrollParent</code>
                          <Badge variant="outline" className="text-xs">boolean</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">Enable horizontal scrolling</p>
                        <code className="text-xs text-primary">Default: false</code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Advanced Options */}
        <TabsContent value="advanced" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" />
                Advanced Configuration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Performance</h4>
                    <div className="space-y-3">
                      <div className="bg-muted p-3 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <code className="text-sm">pixelRatio</code>
                          <Badge variant="outline" className="text-xs">number</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">Canvas pixel ratio for high DPI displays</p>
                        <code className="text-xs text-primary">Default: 1</code>
                      </div>
                      
                      <div className="bg-muted p-3 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <code className="text-sm">backend</code>
                          <Badge variant="outline" className="text-xs">string</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">Audio backend to use</p>
                        <code className="text-xs text-primary">Default: 'WebAudio'</code>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Waveform Processing</h4>
                    <div className="space-y-3">
                      <div className="bg-muted p-3 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <code className="text-sm">normalize</code>
                          <Badge variant="outline" className="text-xs">boolean</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">Normalize waveform data</p>
                        <code className="text-xs text-primary">Default: false</code>
                      </div>
                      
                      <div className="bg-muted p-3 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <code className="text-sm">minPxPerSec</code>
                          <Badge variant="outline" className="text-xs">number</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">Minimum pixels per second</p>
                        <code className="text-xs text-primary">Default: 50</code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Complete Example */}
      <Card>
        <CardHeader>
          <CardTitle>Complete Configuration Example</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-muted p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto">
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
                <div className="flex justify-between">
                  <code className="text-sm">@ready</code>
                  <Badge variant="outline" className="text-xs">WaveSurfer ready</Badge>
                </div>
                <div className="flex justify-between">
                  <code className="text-sm">@play</code>
                  <Badge variant="outline" className="text-xs">Playback started</Badge>
                </div>
                <div className="flex justify-between">
                  <code className="text-sm">@pause</code>
                  <Badge variant="outline" className="text-xs">Playback paused</Badge>
                </div>
                <div className="flex justify-between">
                  <code className="text-sm">@finish</code>
                  <Badge variant="outline" className="text-xs">Playback finished</Badge>
                </div>
                <div className="flex justify-between">
                  <code className="text-sm">@timeupdate</code>
                  <Badge variant="outline" className="text-xs">Time updated</Badge>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Interaction Events</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <code className="text-sm">@click</code>
                  <Badge variant="outline" className="text-xs">Waveform clicked</Badge>
                </div>
                <div className="flex justify-between">
                  <code className="text-sm">@dblclick</code>
                  <Badge variant="outline" className="text-xs">Waveform double-clicked</Badge>
                </div>
                <div className="flex justify-between">
                  <code className="text-sm">@scroll</code>
                  <Badge variant="outline" className="text-xs">Waveform scrolled</Badge>
                </div>
                <div className="flex justify-between">
                  <code className="text-sm">@zoom</code>
                  <Badge variant="outline" className="text-xs">Waveform zoomed</Badge>
                </div>
                <div className="flex justify-between">
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
              <a href="/docs/api/use-wavesurfer">useWaveSurfer API</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/docs/api/events">Events Reference</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/docs/examples/basic-player">Basic Player Example</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://wavesurfer.xyz/docs" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                WaveSurfer.js Docs
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
