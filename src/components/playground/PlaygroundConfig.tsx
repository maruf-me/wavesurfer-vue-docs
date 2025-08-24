'use client';

import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Clock, Search, Map, MousePointer, BarChart3, Code } from 'lucide-react';

interface PlaygroundConfigProps {
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
  onConfigChange: (key: string, value: number | string | boolean) => void;
  onPluginToggle: (plugin: string) => void;
}

export function PlaygroundConfig({ 
  config, 
  activePlugins, 
  onConfigChange, 
  onPluginToggle 
}: PlaygroundConfigProps) {
  const plugins = [
    { id: 'timeline', name: 'Timeline', icon: Clock },
    { id: 'zoom', name: 'Zoom', icon: Search },
    { id: 'minimap', name: 'Minimap', icon: Map },
    { id: 'hover', name: 'Hover', icon: MousePointer },
    { id: 'envelope', name: 'Envelope', icon: BarChart3 },
    { id: 'spectrogram', name: 'Spectrogram', icon: BarChart3 },
    { id: 'regions', name: 'Regions', icon: Code }
  ];

  return (
    <div className="space-y-6">
      {/* Plugin Selection */}
      <div className="space-y-4">
        <h4 className="font-semibold text-slate-900 dark:text-white">Plugin Selection</h4>
        <div className="grid grid-cols-2 gap-3">
          {plugins.map(({ id, name, icon: Icon }) => (
            <div key={id} className="flex items-center space-x-2">
              <Switch
                id={id}
                checked={activePlugins.includes(id)}
                onCheckedChange={() => onPluginToggle(id)}
              />
              <Label htmlFor={id} className="flex items-center gap-2 cursor-pointer">
                <Icon className="h-4 w-4" />
                {name}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Visual Configuration */}
      <div className="space-y-4">
        <h4 className="font-semibold text-slate-900 dark:text-white">Visual Configuration</h4>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Height: {config.height}px</Label>
            <Slider
              value={[config.height]}
              onValueChange={([value]) => onConfigChange('height', value)}
              min={20}
              max={200}
              step={1}
            />
          </div>

          <div className="space-y-2">
            <Label>Bar Width: {config.barWidth}px</Label>
            <Slider
              value={[config.barWidth]}
              onValueChange={([value]) => onConfigChange('barWidth', value)}
              min={1}
              max={10}
              step={1}
            />
          </div>

          <div className="space-y-2">
            <Label>Bar Gap: {config.barGap}px</Label>
            <Slider
              value={[config.barGap]}
              onValueChange={([value]) => onConfigChange('barGap', value)}
              min={0}
              max={10}
              step={1}
            />
          </div>

          <div className="space-y-2">
            <Label>Bar Radius: {config.barRadius}px</Label>
            <Slider
              value={[config.barRadius]}
              onValueChange={([value]) => onConfigChange('barRadius', value)}
              min={0}
              max={10}
              step={1}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Wave Color</Label>
              <Input
                type="color"
                value={config.waveColor}
                onChange={(e) => onConfigChange('waveColor', e.target.value as string)}
              />
            </div>
            <div className="space-y-2">
              <Label>Progress Color</Label>
              <Input
                type="color"
                value={config.progressColor}
                onChange={(e) => onConfigChange('progressColor', e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Audio Configuration */}
      <div className="space-y-4">
        <h4 className="font-semibold text-slate-900 dark:text-white">Audio Configuration</h4>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Volume: {Math.round(config.volume * 100)}%</Label>
            <Slider
              value={[config.volume]}
              onValueChange={([value]) => onConfigChange('volume', value)}
              min={0}
              max={1}
              step={0.1}
            />
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="autoplay"
              checked={config.autoplay}
              onCheckedChange={(checked) => onConfigChange('autoplay', checked as boolean)}
            />
            <Label htmlFor="autoplay">Auto-play</Label>
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="loop"
              checked={config.loop}
              onCheckedChange={(checked) => onConfigChange('loop', checked as boolean)}
            />
            <Label htmlFor="loop">Loop</Label>
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="responsive"
              checked={config.responsive}
              onCheckedChange={(checked) => onConfigChange('responsive', checked as boolean)}
            />
            <Label htmlFor="responsive">Responsive</Label>
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="fillParent"
              checked={config.fillParent}
              onCheckedChange={(checked) => onConfigChange('fillParent', checked as boolean)}
            />
            <Label htmlFor="fillParent">Fill Parent</Label>
          </div>
        </div>
      </div>
    </div>
  );
}
