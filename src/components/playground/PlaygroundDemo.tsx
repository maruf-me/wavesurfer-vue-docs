'use client';

import { Button } from '@/components/ui/button';
import { Play, RotateCcw, Volume2 } from 'lucide-react';

interface PlaygroundDemoProps {
  config: {
    height: number;
    waveColor: string;
    progressColor: string;
    barWidth: number;
    barGap: number;
    barRadius: number;
  };
  activePlugins: string[];
}

export function PlaygroundDemo({ config, activePlugins }: PlaygroundDemoProps) {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg text-center">
      <div className="space-y-4">
        <div className="flex items-center justify-center gap-4">
          <Button size="lg" variant="outline">
            <Play className="h-4 w-4 mr-2" />
            Play Demo
          </Button>
          <Button size="lg" variant="outline">
            <RotateCcw className="h-4 w-4 mr-2" />
            Reset
          </Button>
          <Button size="lg" variant="outline">
            <Volume2 className="h-4 w-4 mr-2" />
            Volume
          </Button>
        </div>
        
        {/* Mock Waveform */}
        <div className="bg-white rounded-lg p-4">
          <div className="flex items-center justify-center gap-1 h-12">
            {Array.from({ length: 50 }, (_, i) => (
              <div
                key={i}
                className="rounded-sm"
                style={{
                  width: `${config.barWidth}px`,
                  height: `${Math.random() * 40 + 8}px`,
                  backgroundColor: i < 15 ? config.progressColor : config.waveColor,
                  marginRight: `${config.barGap}px`,
                  borderRadius: `${config.barRadius}px`
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="flex justify-between text-sm text-slate-500 dark:text-slate-400">
          <span>00:15</span>
          <span>02:45</span>
        </div>

        {/* Active Plugins */}
        <div className="flex flex-wrap gap-2 justify-center">
          {activePlugins.map(plugin => (
            <span key={plugin} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">
              {plugin}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
