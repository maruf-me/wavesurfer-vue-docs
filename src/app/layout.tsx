import { DefaultLayout } from '@/layouts/DefaultLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'wavesurfer-vue3 by Meer Sagor',
  description:
    'A Vue 3 component for wavesurfer.js. This component simplifies the usage of wavesurfer.js in Vue.js',
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <DefaultLayout>{children}</DefaultLayout>
);

export default RootLayout;
