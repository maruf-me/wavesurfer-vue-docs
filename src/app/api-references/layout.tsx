import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'API References',
  description: 'Complete reference for all available props and configuration options for the WaveSurferPlayer component. Learn about visual, audio, interaction, and advanced configuration options.',
  keywords: [
    'wavesurfer api',
    'wavesurfer props',
    'wavesurfer configuration',
    'vue3 wavesurfer',
    'audio player api',
    'waveform configuration',
    'wavesurfer options',
    'vue component props',
    'audio visualization api',
    'wavesurfer documentation'
  ],
  openGraph: {
    title: 'API References - Wavesurfer for Vue 3',
    description: 'Complete reference for all available props and configuration options for the WaveSurferPlayer component.',
    url: '/api-references',
  },
  twitter: {
    title: 'API References - Wavesurfer for Vue 3',
    description: 'Complete reference for all available props and configuration options for the WaveSurferPlayer component.',
  },
};

export default function ApiReferencesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}