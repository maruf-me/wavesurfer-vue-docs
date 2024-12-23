'use client'
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { Copy, Terminal } from "lucide-react";

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
    <div className="p-8">
      <h1 className={cn("text-4xl font-bold text-docblue mb-6")}>Installation</h1>
      <div className={cn("prose max-w-none")}>
        <p className={cn("mb-6")}>
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

        <h2 className="text-2xl font-semibold text-docblue mt-8 mb-4">
          Basic Setup
        </h2>
        <p className="text-docgray mb-4">
          After installation, import and use the component in your Vue.js
          application:
        </p>
        <div className="bg-gray-900 rounded-lg p-4">
          <pre className="text-white">
            <code>{`import { WaveSurferPlayer } from '@meersagor/wavesurfer-vue'

export default {
  components: {
    WaveSurferPlayer
  }
}`}</code>
          </pre>
        </div>
      </div>
    </div>
  )
}

export default InstallationPage
