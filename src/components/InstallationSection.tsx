'use client';
import { useToast } from '@/hooks/use-toast';
import { Copy, Terminal } from 'lucide-react';

export const InstallationSection = () => {
  const { toast } = useToast();

  const copyCommand = (command: string) => {
    navigator.clipboard.writeText(command);
    toast({
      title: 'Copied to clipboard',
      description: 'The command has been copied to your clipboard.',
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-docblue text-center mb-16">
          Installation
        </h2>
        <div className="bg-gray-900 rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Terminal className="w-5 h-5 text-gray-400 mr-2" />
              <span className="text-gray-400">npm</span>
            </div>
            <button
              onClick={() => copyCommand('npm install @meersagor/wavesurfer-vue')}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Copy className="w-5 h-5" />
            </button>
          </div>
          <pre className="text-white">
            <code>npm install @meersagor/wavesurfer-vue</code>
          </pre>
        </div>
        <div className="prose max-w-none">
          <h3 className="text-2xl font-semibold text-docblue mb-4">
            Quick Start
          </h3>
          <p className="text-docgray mb-4">
            Import and use the component in your Vue.js application:
          </p>
          <pre className="bg-gray-900 text-white p-6 rounded-lg">
            <code>{`import { WaveSurferPlayer } from '@meersagor/wavesurfer-vue'
  export default {
    components: {
      WaveSurferPlayer
    }
  }`}</code>
          </pre>
        </div>
      </div>
    </section>
  );
};
