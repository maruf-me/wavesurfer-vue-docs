'use client'
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { 
  Github, 
  Heart, 
  Star, 
  GitBranch, 
  Bug, 
  Lightbulb, 
  FileText, 
  Code,
  ExternalLink,
  Users,
  Globe
} from 'lucide-react';
import Link from 'next/link';
import type { NpmPackageInfo } from '@/@types/packageInfo';

export const ContributionsSection = ({ packageInfo }: { packageInfo: NpmPackageInfo | null }) => {
  return (
    <section className="bg-gradient-section dark:bg-gradient-section-dark py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Heart className="h-4 w-4" />
              Open Source
            </div>
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Contribute to the Ecosystem
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join our community and help improve both the WaveSurfer Vue package and this documentation site. 
              Every contribution, big or small, makes a difference.
            </p>
          </div>

          {/* Contribution Cards */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Package Contributions */}
            <Card className="bg-gradient-card dark:bg-gradient-card-dark border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold">Package Contributions</CardTitle>
                <p className="text-muted-foreground">
                  Help improve the @meersagor/wavesurfer-vue package
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Contribution Types */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <Bug className="h-6 w-6 text-red-500 mx-auto mb-2" />
                    <h4 className="font-semibold text-sm mb-1">Bug Reports</h4>
                    <p className="text-xs text-muted-foreground">Report issues</p>
                  </div>
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <Lightbulb className="h-6 w-6 text-yellow-500 mx-auto mb-2" />
                    <h4 className="font-semibold text-sm mb-1">Feature Requests</h4>
                    <p className="text-xs text-muted-foreground">Suggest improvements</p>
                  </div>
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <GitBranch className="h-6 w-6 text-green-500 mx-auto mb-2" />
                    <h4 className="font-semibold text-sm mb-1">Code Changes</h4>
                    <p className="text-xs text-muted-foreground">Submit PRs</p>
                  </div>
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <FileText className="h-6 w-6 text-blue-500 mx-auto mb-2" />
                    <h4 className="font-semibold text-sm mb-1">Documentation</h4>
                    <p className="text-xs text-muted-foreground">Improve docs</p>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="flex items-center justify-center gap-6 py-4 border-t border-border">
                  <div className="text-center">
                    <div className="flex items-center gap-1 text-lg font-bold text-primary">
                      <Star className="h-4 w-4" />
                      <span>{packageInfo?.stars}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Stars</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center gap-1 text-lg font-bold text-primary">
                      <GitBranch className="h-4 w-4" />
                      <span>{packageInfo?.forks}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Forks</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center gap-1 text-lg font-bold text-primary">
                      <Users className="h-4 w-4" />
                      <span>2+</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Contributors</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3">
                  <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                    <Link href="https://github.com/meer-sagor/wavesurfer-vue" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Contribute to Package
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="https://github.com/meer-sagor/wavesurfer-vue/issues" target="_blank" rel="noopener noreferrer">
                      <Bug className="h-4 w-4 mr-2" />
                      Report Issues
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Documentation Site Contributions */}
            <Card className="bg-gradient-card dark:bg-gradient-card-dark border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold">Documentation Site</CardTitle>
                <p className="text-muted-foreground">
                  Help improve this documentation website
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Contribution Types */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <FileText className="h-6 w-6 text-blue-500 mx-auto mb-2" />
                    <h4 className="font-semibold text-sm mb-1">Content Updates</h4>
                    <p className="text-xs text-muted-foreground">Improve docs</p>
                  </div>
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <Code className="h-6 w-6 text-green-500 mx-auto mb-2" />
                    <h4 className="font-semibold text-sm mb-1">Code Examples</h4>
                    <p className="text-xs text-muted-foreground">Add examples</p>
                  </div>
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <Lightbulb className="h-6 w-6 text-yellow-500 mx-auto mb-2" />
                    <h4 className="font-semibold text-sm mb-1">UI/UX Improvements</h4>
                    <p className="text-xs text-muted-foreground">Enhance design</p>
                  </div>
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <Bug className="h-6 w-6 text-red-500 mx-auto mb-2" />
                    <h4 className="font-semibold text-sm mb-1">Bug Fixes</h4>
                    <p className="text-xs text-muted-foreground">Fix issues</p>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="flex items-center justify-center gap-6 py-4 border-t border-border">
                  <div className="text-center">
                    <div className="flex items-center gap-1 text-lg font-bold text-primary">
                      <FileText className="h-4 w-4" />
                      <span>2+</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Pages</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center gap-1 text-lg font-bold text-primary">
                      <Code className="h-4 w-4" />
                      <span>10+</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Examples</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center gap-1 text-lg font-bold text-primary">
                      <Users className="h-4 w-4" />
                      <span>2+</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Contributors</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3">
                  <Button asChild className="w-full bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white">
                    <Link href="https://github.com/meer-sagor/wavesurfer-vue-docs" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Contribute to Docs
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="https://github.com/meer-sagor/wavesurfer-vue-docs/issues" target="_blank" rel="noopener noreferrer">
                      <Bug className="h-4 w-4 mr-2" />
                      Report Issues
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Community Section */}
          <Card className="bg-gradient-card dark:bg-gradient-card-dark border-0 shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">Join Our Community</CardTitle>
              <p className="text-muted-foreground">
                Connect with other developers and stay updated with the latest features
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Github className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">GitHub</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Star, fork, and contribute to our repositories
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="https://github.com/meer-sagor" target="_blank" rel="noopener noreferrer">
                      Follow @meer-sagor
                    </Link>
                  </Button>
                </div>
                
                <div className="text-center p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">Discussions</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Join discussions and ask questions
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="https://github.com/meer-sagor/wavesurfer-vue/discussions" target="_blank" rel="noopener noreferrer">
                      Start Discussion
                    </Link>
                  </Button>
                </div>
                
                <div className="text-center p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">Support</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Show your support by starring our projects
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="https://github.com/meer-sagor/wavesurfer-vue" target="_blank" rel="noopener noreferrer">
                      <Star className="h-4 w-4 mr-2" />
                      Star Project
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
