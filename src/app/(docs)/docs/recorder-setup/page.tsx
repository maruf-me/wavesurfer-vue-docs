import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Mic, Play, Pause, Square, Settings, Code } from 'lucide-react';

export default function RecorderSetupPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Audio Recorder Setup</h1>
        <p className="text-xl text-muted-foreground">
          Learn how to implement audio recording functionality using the 
          <code className="bg-muted px-2 py-1 rounded text-sm">useWaveSurferRecorder</code> composable.
        </p>
      </div>

      {/* Basic Setup */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mic className="h-5 w-5 text-primary" />
            Basic Recorder Setup
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">1. Import the Composable</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`import { useWaveSurferRecorder } from '@meersagor/wavesurfer-vue'`}
                </pre>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">2. Setup Container Reference</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`const containerRef = ref<HTMLDivElement | null>(null)`}
                </pre>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">3. Configure Options</h4>
            <div className="bg-muted p-4 rounded-lg">
              <pre className="text-sm overflow-x-auto">
{`const options = computed(() => ({
  height: 48,
  waveColor: "#66667D",
  progressColor: "#6A24FF",
  barGap: 5,
  barWidth: 5,
  barRadius: 8,
  cursorWidth: 0,
  url: "your-audio-file.mp3" // Optional: for preview
}))`}
              </pre>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">4. Initialize the Recorder</h4>
            <div className="bg-muted p-4 rounded-lg">
              <pre className="text-sm overflow-x-auto">
{`const { 
  waveSurfer, 
  waveSurferRecorder,
  currentTime, 
  isPaused, 
  isRecording,
  startRecording, 
  stopRecording, 
  pauseRecording 
} = useWaveSurferRecorder({
  containerRef,
  options: options.value,
  recordPluginOptions: {
    continuousWaveform: true
  }
})`}
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Complete Example */}
      <Card>
        <CardHeader>
          <CardTitle>Complete Example</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="vue" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="vue">Vue Template</TabsTrigger>
              <TabsTrigger value="script">Script Setup</TabsTrigger>
            </TabsList>

            <TabsContent value="vue" className="mt-4">
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`<template>
  <div>
    <h2>Audio Recorder</h2>
    
    <!-- Waveform Container -->
    <div ref="containerRef" class="waveform-container"></div>
    
    <!-- Recording Time -->
    <p class="recording-time">Recording: {{ currentTime }}</p>
    
    <!-- Control Buttons -->
    <div class="controls">
      <button 
        v-if="showRecordButton" 
        @click="startRecording"
        class="btn btn-primary"
      >
        <Mic class="icon" />
        Start Recording
      </button>
      
      <div v-else class="recording-controls">
        <button @click="pauseRecording" class="btn btn-secondary">
          <Pause v-if="!isPaused" class="icon" />
          <Play v-else class="icon" />
          {{ isPaused ? 'Resume' : 'Pause' }}
        </button>
        
        <button @click="stopRecording" class="btn btn-danger">
          <Square class="icon" />
          Stop Recording
        </button>
      </div>
    </div>
  </div>
</template>`}
                </pre>
              </div>
            </TabsContent>

            <TabsContent value="script" className="mt-4">
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`<script setup lang="ts">
import { computed, ref } from 'vue'
import { useWaveSurferRecorder } from '@meersagor/wavesurfer-vue'

// Container reference
const containerRef = ref<HTMLDivElement | null>(null)

// Show/hide record button
const showRecordButton = ref<boolean>(true)

// WaveSurfer options
const options = computed(() => ({
  height: 48,
  waveColor: "#66667D",
  progressColor: "#6A24FF",
  barGap: 5,
  barWidth: 5,
  barRadius: 8,
  cursorWidth: 0,
  url: "https://example.com/audio.mp3" // Optional preview
}))

// Initialize recorder
const { 
  waveSurfer, 
  waveSurferRecorder,
  currentTime, 
  isPaused, 
  isRecording,
  startRecording, 
  stopRecording, 
  pauseRecording 
} = useWaveSurferRecorder({
  containerRef,
  options: options.value,
  recordPluginOptions: {
    continuousWaveform: true,
    mimeType: 'audio/webm'
  }
})

// Start recording handler
const startRecordingHandler = () => {
  startRecording()
  showRecordButton.value = false
}

// Stop recording handler
const stopRecordingHandler = async () => {
  const blob = await stopRecording()
  console.log('Recording blob:', blob)
  showRecordButton.value = true
  
  // Handle the recorded audio blob
  // e.g., upload to server, play back, etc.
}
</script>`}
                </pre>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Recording Options */}
      <Card>
        <CardHeader>
          <CardTitle>Recording Configuration Options</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">WaveSurfer Options</h4>
              <div className="space-y-3">
                <div className="bg-muted p-3 rounded-lg">
                  <code className="text-sm">
                    {`height: 48              // Waveform height
waveColor: "#66667D"    // Wave color
progressColor: "#6A24FF" // Progress color
barGap: 5               // Gap between bars
barWidth: 5             // Bar width
barRadius: 8            // Bar corner radius
cursorWidth: 0          // Cursor width (0 to hide)`}
                  </code>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Record Plugin Options</h4>
              <div className="space-y-3">
                <div className="bg-muted p-3 rounded-lg">
                  <code className="text-sm">
                    {`continuousWaveform: true  // Show waveform while recording
mimeType: 'audio/webm'  // Audio format
encoderPath: '/path'    // Encoder path
recordingGain: 1        // Recording gain
numberOfChannels: 1     // Audio channels`}
                  </code>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Return Values */}
      <Card>
        <CardHeader>
          <CardTitle>Composable Return Values</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-semibold">Reactive Values</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <code className="text-sm">waveSurfer</code>
                    <Badge variant="outline" className="text-xs">Ref&lt;WaveSurfer&gt;</Badge>
                  </div>
                  <div className="flex justify-between">
                    <code className="text-sm">waveSurferRecorder</code>
                    <Badge variant="outline" className="text-xs">Ref&lt;RecordPlugin&gt;</Badge>
                  </div>
                  <div className="flex justify-between">
                    <code className="text-sm">currentTime</code>
                    <Badge variant="outline" className="text-xs">ComputedRef&lt;string&gt;</Badge>
                  </div>
                  <div className="flex justify-between">
                    <code className="text-sm">isPaused</code>
                    <Badge variant="outline" className="text-xs">ComputedRef&lt;boolean&gt;</Badge>
                  </div>
                  <div className="flex justify-between">
                    <code className="text-sm">isRecording</code>
                    <Badge variant="outline" className="text-xs">ComputedRef&lt;boolean&gt;</Badge>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">Methods</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <code className="text-sm">startRecording()</code>
                    <Badge variant="outline" className="text-xs">() => void</Badge>
                  </div>
                  <div className="flex justify-between">
                    <code className="text-sm">stopRecording()</code>
                    <Badge variant="outline" className="text-xs">() => Promise&lt;Blob&gt;</Badge>
                  </div>
                  <div className="flex justify-between">
                    <code className="text-sm">pauseRecording()</code>
                    <Badge variant="outline" className="text-xs">() => void</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Use Cases */}
      <Card>
        <CardHeader>
          <CardTitle>Common Use Cases</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold">🎙️ Voice Notes</h4>
              <p className="text-sm text-muted-foreground">
                Record voice memos with pause/resume functionality and real-time visualization.
              </p>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold">🎵 Music Recording</h4>
              <p className="text-sm text-muted-foreground">
                Capture musical performances with high-quality audio and waveform display.
              </p>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold">📞 Call Recording</h4>
              <p className="text-sm text-muted-foreground">
                Record phone calls or video conferences with timestamp tracking.
              </p>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold">🎤 Podcast Recording</h4>
              <p className="text-sm text-muted-foreground">
                Professional podcast recording with multiple format support.
              </p>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold">🎼 Audio Interviews</h4>
              <p className="text-sm text-muted-foreground">
                Conduct interviews with pause/resume and quality monitoring.
              </p>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold">🔊 Sound Effects</h4>
              <p className="text-sm text-muted-foreground">
                Record sound effects for games, videos, or multimedia projects.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle>Best Practices</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">✅ Do's</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Request microphone permissions early</li>
                  <li>• Handle recording errors gracefully</li>
                  <li>• Provide clear user feedback</li>
                  <li>• Use appropriate audio formats</li>
                  <li>• Implement proper cleanup</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">❌ Don'ts</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Don't start recording without permission</li>
                  <li>• Don't ignore browser compatibility</li>
                  <li>• Don't forget to handle large files</li>
                  <li>• Don't skip error handling</li>
                  <li>• Don't use unsupported formats</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
