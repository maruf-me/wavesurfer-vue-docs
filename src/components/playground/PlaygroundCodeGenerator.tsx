'use client';

interface PlaygroundCodeGeneratorProps {
  config: {
    height: number;
    waveColor: string;
    progressColor: string;
    barWidth: number;
    barGap: number;
    barRadius: number;
    volume: number;
    autoplay: boolean;
    loop: boolean;
    responsive: boolean;
    fillParent: boolean;
  };
  activePlugins: string[];
}

export function generateCode({ config, activePlugins }: PlaygroundCodeGeneratorProps) {
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
}
