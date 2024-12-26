'use client';
import { CodeBlock } from '@/components/CodeBlock';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { Copy, Terminal } from 'lucide-react';
const InstallationPage = () => {
  const { toast } = useToast();

  const copyCommand = (command: string) => {
    navigator.clipboard.writeText(command);
    toast({
      title: 'Copied to clipboard',
      description: 'The command has been copied to your clipboard.',
    });
  };
  const codeSnippet = `<script setup lang="ts">
  import { ref } from 'vue';
  import type WaveSurfer from 'wavesurfer.js';
  import { WaveSurferPlayer } from '@meersagor/wavesurfer-vue';
  
  const options = ref({
    height: 48,
    waveColor: 'gray',
    progressColor: 'red',
    barGap: 5,
    barWidth: 5,
    barRadius: 8,
    duration: 80,
    url: "https://revews-bucket.s3.ap-southeast-1.amazonaws.com/a06mmMU3sgnzuUkH4OiHvyuUgCFdLSnJaDLBao7y.webm",
  });
  
  const currentTime = ref<string>('00:00');
  const totalDuration = ref<string>('00:00');
  const waveSurfer = ref<WaveSurfer | null>(null);
  
  const formatTime = (seconds: number): string => 
    [seconds / 60, seconds % 60]
      .map((v) => \`0\${Math.floor(v)}\`.slice(-2))
      .join(':');
  
  const timeUpdateHandler = (time: number) => {
    currentTime.value = formatTime(time);
  };
  
  const readyHandler = (duration: any) => {
    totalDuration.value = formatTime(duration);
  };
  
  const readyWaveSurferHandler = (ws: WaveSurfer) => {
    waveSurfer.value = ws;
  };
  </script>
  
  <template>
    <main>
      <h1>WaveSurferPlayer Using Components</h1>
      <WaveSurferPlayer 
        :options="options" 
        @timeupdate="(time: number) => timeUpdateHandler(time)"
        @ready="(duration: number) => readyHandler(duration)" 
        @waveSurfer="(ws: WaveSurfer) => readyWaveSurferHandler(ws)" 
      />
      <p>currentTime: {{ currentTime }}</p>
      <p>totalDuration: {{ totalDuration }}</p>
      <button 
        @click="waveSurfer?.playPause()" 
        :style="{ minWidth: '5em' }"
      >
        Play
      </button>
    </main>
  </template>`;
  return (
    <div className="p-8">
      <h1 className={cn('text-4xl font-bold text-docblue mb-6')}>
        Installation
      </h1>
      <div className={cn('prose max-w-none')}>
        <p className={cn('mb-6')}>
          Get started with Vue Waveform Visualizer in your project by following
          these steps:
        </p>
        <div className="bg-gray-900 rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Terminal className="w-5 h-5 text-gray-400 mr-2" />
              <span className="text-gray-400">npm</span>
            </div>
            <button
              onClick={() =>
                copyCommand('npm install @meersagor/wavesurfer-vue')
              }
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Copy className="w-5 h-5" />
            </button>
          </div>
          <pre className="text-white">
            <code>npm install @meersagor/wavesurfer-vue</code>
          </pre>
        </div>

        <h2 className="text-2xl font-semibold text-docblue mt-8 mb-4">
          Basic Setup
        </h2>
        <p className="text-docgray mb-4">
          After installation, import and use the component in your Vue.js
          application:
        </p>
        <div className="bg-gray-900 rounded-lg p-4">
          <CodeBlock codeSnippet={codeSnippet} />
        </div>
      </div>
    </div>
  );
};

export default InstallationPage;
