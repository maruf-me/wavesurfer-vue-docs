import { ComponentUsage } from '@/features/componentUsage/ComponentUsage';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'wavesurfer-vue3 by Meer Sagor',
};
const ComponentUsagePage = () => {
  return (
    <section>
      <p className="mb-6">
        A Vue 3 component for wavesurfer.js. This component simplifies the usage
        of wavesurfer.js in Vue.js, with all familiar wavesurfer options
        available as Vue props.
      </p>
      <ComponentUsage/>
    </section>
  );
};

export default ComponentUsagePage;
