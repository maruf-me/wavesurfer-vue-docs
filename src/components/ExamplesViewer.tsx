'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { FileText, Code, Download, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ExampleFile {
  name: string;
  content: string;
  type: 'html' | 'js' | 'vue' | 'css' | 'json' | 'md' | 'txt';
}

interface Example {
  name: string;
  description?: string;
  files: ExampleFile[];
}

export default function ExamplesViewer() {
  const [examples, setExamples] = useState<Example[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedExample, setSelectedExample] = useState<string>('');
  const { toast } = useToast();

  useEffect(() => {
    const loadExamples = async () => {
      try {
        // Try to load examples from the data directory
        const response = await fetch('/api/examples');
        if (response.ok) {
          const data = await response.json();
          setExamples(data.examples);
          if (data.examples.length > 0) {
            setSelectedExample(data.examples[0].name);
          }
        } else {
          // Fallback: create a placeholder example
          setExamples([{
            name: 'Basic Example',
            description: 'A basic WaveSurfer Vue example',
            files: [{
              name: 'index.html',
              content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WaveSurfer Vue Example</title>
</head>
<body>
    <div id="app">
        <h1>WaveSurfer Vue Example</h1>
        <div id="waveform"></div>
    </div>
    <script type="module">
        import { createApp } from 'vue'
        import WaveSurfer from 'wavesurfer-vue'
        
        const app = createApp({
            components: { WaveSurfer },
            template: \`
                <div>
                    <h2>Audio Waveform</h2>
                    <WaveSurfer 
                        :src="audioUrl"
                        :options="options"
                    />
                </div>
            \`,
            data() {
                return {
                    audioUrl: '/path/to/audio.mp3',
                    options: {
                        height: 100,
                        waveColor: '#4F4A85',
                        progressColor: '#383351'
                    }
                }
            }
        })
        
        app.mount('#app')
    </script>
</body>
</html>`,
              type: 'html'
            }]
          }]);
          setSelectedExample('Basic Example');
        }
      } catch (error) {
        console.error('Error loading examples:', error);
        toast({
          title: "Error",
          description: "Failed to load examples. Please run the sync script first.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    loadExamples();
  }, [toast]);

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'html':
        return <FileText className="h-4 w-4" />;
      case 'js':
      case 'vue':
        return <Code className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  const getFileLanguage = (type: string) => {
    switch (type) {
      case 'html':
        return 'html';
      case 'js':
        return 'javascript';
      case 'vue':
        return 'vue';
      case 'css':
        return 'css';
      case 'json':
        return 'json';
      case 'md':
        return 'markdown';
      default:
        return 'text';
    }
  };

  const downloadExample = (example: Example) => {
    // Create a zip-like structure for download
    const content = example.files.map(file => 
      `=== ${file.name} ===\n${file.content}\n\n`
    ).join('');
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${example.name.toLowerCase().replace(/\s+/g, '-')}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Downloaded!",
      description: `${example.name} example downloaded`,
    });
  };

  const copyFileContent = async (content: string, fileName: string) => {
    try {
      await navigator.clipboard.writeText(content);
      toast({
        title: "Copied!",
        description: `${fileName} copied to clipboard`,
      });
    } catch {
      toast({
        title: "Error",
        description: "Failed to copy to clipboard",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  const currentExample = examples.find(ex => ex.name === selectedExample);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Package Examples</CardTitle>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open('https://github.com/meer-sagor/wavesurfer-vue', '_blank')}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                View Examples
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {examples.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No examples found. Please run the sync script first.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Example Selector */}
              <div className="flex flex-wrap gap-2">
                {examples.map((example) => (
                  <Button
                    key={example.name}
                    variant={selectedExample === example.name ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedExample(example.name)}
                  >
                    {example.name}
                  </Button>
                ))}
              </div>

              {/* Selected Example */}
              {currentExample && (
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg">{currentExample.name}</CardTitle>
                        {currentExample.description && (
                          <p className="text-muted-foreground mt-1">
                            {currentExample.description}
                          </p>
                        )}
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => downloadExample(currentExample)}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue={currentExample.files[0]?.name || ''} className="w-full">
                      <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
                        {currentExample.files.map((file) => (
                          <TabsTrigger key={file.name} value={file.name} className="flex items-center gap-2">
                            {getFileIcon(file.type)}
                            {file.name}
                          </TabsTrigger>
                        ))}
                      </TabsList>
                      {currentExample.files.map((file) => (
                        <TabsContent key={file.name} value={file.name} className="mt-4">
                          <div className="relative">
                            <div className="absolute top-2 right-2 z-10">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => copyFileContent(file.content, file.name)}
                              >
                                <Code className="h-4 w-4" />
                              </Button>
                            </div>
                            <pre className="whitespace-pre-wrap font-mono text-sm bg-muted p-4 rounded-lg overflow-x-auto max-h-96 overflow-y-auto">
                              <code className={`language-${getFileLanguage(file.type)}`}>
                                {file.content}
                              </code>
                            </pre>
                          </div>
                        </TabsContent>
                      ))}
                    </Tabs>
                  </CardContent>
                </Card>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
