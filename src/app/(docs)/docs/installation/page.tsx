'use client';
import { ComponentUsageCode } from '@/components/ComponentUsageCode';
import NavigationCard from '@/components/NavigationCard';
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
  return (
    <section className="p-8">
      <h1 className={cn('text-4xl font-bold  mb-6')}>Installation</h1>
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

        <h2 className="text-2xl font-semibold  mt-8 mb-4">Basic Setup</h2>
        <p className=" mb-4">
          After installation, import and use the component in your Vue.js
          application:
        </p>
        <ComponentUsageCode />

        <div className="grid gap-6 md:grid-cols-2 my-8">
          <div></div>
          <NavigationCard link={'/docs/component-usage'}>
            <NavigationCard.Title>
              <h3 className="text-xl font-semibold mb-3">Component-Based</h3>
            </NavigationCard.Title>
            <NavigationCard.Description>
              <p>
                Use our pre-built components for quick integration into your
                Vue.js applications.
              </p>
            </NavigationCard.Description>
          </NavigationCard>
        </div>
      </div>
    </section>
  );
};

export default InstallationPage;
