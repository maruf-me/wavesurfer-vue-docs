import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Interactive Playground',
  description: 'Experiment with different plugins and configurations for wavesurfer.js. See live code generation and test various WaveSurfer features in real-time.',
  keywords: [
    'wavesurfer playground',
    'interactive demo',
    'wavesurfer configuration',
    'vue3 audio demo',
    'waveform playground',
    'audio player demo',
    'wavesurfer plugins',
    'live code generation',
    'audio visualization demo',
    'wavesurfer testing'
  ],
  openGraph: {
    title: 'Interactive Playground - Wavesurfer for Vue 3',
    description: 'Experiment with different plugins and configurations for wavesurfer.js. See live code generation and test various WaveSurfer features in real-time.',
    url: '/playground',
  },
  twitter: {
    title: 'Interactive Playground - Wavesurfer for Vue 3',
    description: 'Experiment with different plugins and configurations for wavesurfer.js. See live code generation and test various WaveSurfer features in real-time.',
  },
};

export default function PlaygroundLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}