import { DefaultLayout } from '@/layouts/DefaultLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Wavesurfer for Vue 3 by Meer Sagor',
    template: '%s | Wavesurfer for Vue 3'
  },
  description: 'A Vue 3 component for wavesurfer.js. This component simplifies the usage of wavesurfer.js in Vue.js applications with TypeScript support.',
  keywords: [
    'wavesurfer',
    'vue3',
    'vue.js',
    'audio',
    'waveform',
    'music player',
    'audio visualization',
    'typescript',
    'component',
    'javascript',
    'web audio',
    'audio player',
    'waveform visualization',
    'vue component',
    'audio editor',
    'wavesurfer vue3',
    'audio visualization',
    'vue component',
    'typescript audio',
    'music player',
    'waveform display',
    'audio player vue',
    'web audio api',
    'vue3 audio component',
    'wavesurfer.js vue',
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
  authors: [{ name: 'Meer Sagor' }],
  creator: 'Meer Sagor',
  publisher: 'Meer Sagor',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://docs-wavesurfer.meersagor.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/icon', type: 'image/png' },
      { url: '/icon.svg', type: 'image/svg+xml' }
    ],
    apple: '/apple-icon',
    shortcut: '/favicon.ico'
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Wavesurfer for Vue 3 by Meer Sagor',
    description: 'A Vue 3 component for wavesurfer.js. This component simplifies the usage of wavesurfer.js in Vue.js applications with TypeScript support.',
    siteName: 'Wavesurfer for Vue 3',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'WaveSurfer for Vue 3 - Audio Visualization Component',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wavesurfer for Vue 3 by Meer Sagor',
    description: 'A Vue 3 component for wavesurfer.js. This component simplifies the usage of wavesurfer.js in Vue.js applications with TypeScript support.', 
    creator: '@meersagor',
    images: ['/twitter-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <DefaultLayout>{children}</DefaultLayout>
);

export default RootLayout;
