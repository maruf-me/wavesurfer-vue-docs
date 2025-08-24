'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink, Download, Copy, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Badge } from './ui/badge';

interface PackageInfo {
  repoUrl: string;
  lastSynced: string;
  version: string;
  description: string;
  keywords: string[];
}

export default function PackageReadme() {
  const [readmeContent, setReadmeContent] = useState<string>('');
  const [packageInfo, setPackageInfo] = useState<PackageInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const loadContent = async () => {
      try {
        // Load package info
        const infoResponse = await fetch('/data/package-info.json');
        if (infoResponse.ok) {
          const info = await infoResponse.json();
          setPackageInfo(info);
        }

        // Load README content
        const readmeResponse = await fetch('/data/package-readme.md');
        if (readmeResponse.ok) {
          const content = await readmeResponse.text();
          setReadmeContent(content);
        } else {
          setReadmeContent('# Package README\n\nREADME content not available. Please run the sync script first.');
        }
      } catch (error) {
        console.error('Error loading content:', error);
        setReadmeContent('# Package README\n\nError loading content. Please check the sync script.');
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, []);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(readmeContent);
      setCopied(true);
      toast({
        title: "Copied!",
        description: "README content copied to clipboard",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast({
        title: "Error",
        description: "Failed to copy to clipboard",
        variant: "destructive",
      });
    }
  };

  const downloadReadme = () => {
    const blob = new Blob([readmeContent], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'README.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Downloaded!",
      description: "README.md downloaded successfully",
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Package Info Header */}
      {packageInfo && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  WaveSurfer Vue
                  <Badge variant="secondary">v{packageInfo.version}</Badge>
                </CardTitle>
                <p className="text-muted-foreground mt-1">
                  {packageInfo.description}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(packageInfo.repoUrl, '_blank')}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Repo
                </Button>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {packageInfo.keywords.map((keyword, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {keyword}
                </Badge>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Last synced: {new Date(packageInfo.lastSynced).toLocaleString()}
            </p>
          </CardHeader>
        </Card>
      )}

      {/* README Content */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Package README</CardTitle>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={copyToClipboard}
              >
                {copied ? (
                  <Check className="h-4 w-4 mr-2" />
                ) : (
                  <Copy className="h-4 w-4 mr-2" />
                )}
                {copied ? 'Copied' : 'Copy'}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={downloadReadme}
              >
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <pre className="whitespace-pre-wrap font-mono text-sm bg-muted p-4 rounded-lg overflow-x-auto">
              {readmeContent}
            </pre>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
