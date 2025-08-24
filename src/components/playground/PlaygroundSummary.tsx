'use client';

interface PlaygroundSummaryProps {
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

export function PlaygroundSummary({ config, activePlugins }: PlaygroundSummaryProps) {
  return (
    <div className="space-y-4">
      <div>
        <h4 className="font-semibold mb-2 text-slate-900 dark:text-white">
          Active Plugins ({activePlugins.length})
        </h4>
        <div className="flex flex-wrap gap-2">
          {activePlugins.map(plugin => (
            <span 
              key={plugin} 
              className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs rounded-full border"
            >
              {plugin}
            </span>
          ))}
        </div>
      </div>
      
      <div>
        <h4 className="font-semibold mb-2 text-slate-900 dark:text-white">Visual Settings</h4>
        <div className="grid grid-cols-2 gap-2 text-sm text-slate-600 dark:text-slate-400">
          <div>Height: {config.height}px</div>
          <div>Bar Width: {config.barWidth}px</div>
          <div>Bar Gap: {config.barGap}px</div>
          <div>Bar Radius: {config.barRadius}px</div>
        </div>
      </div>

      <div>
        <h4 className="font-semibold mb-2 text-slate-900 dark:text-white">Audio Settings</h4>
        <div className="grid grid-cols-2 gap-2 text-sm text-slate-600 dark:text-slate-400">
          <div>Volume: {Math.round(config.volume * 100)}%</div>
          <div>Auto-play: {config.autoplay ? 'Yes' : 'No'}</div>
          <div>Loop: {config.loop ? 'Yes' : 'No'}</div>
          <div>Responsive: {config.responsive ? 'Yes' : 'No'}</div>
        </div>
      </div>
    </div>
  );
}
