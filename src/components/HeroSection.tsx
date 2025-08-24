import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Layers, Zap, Code, Settings, ArrowRight, Play, Star, Download, Github } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero dark:bg-gradient-hero-dark">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>

      <div className="container relative z-10 text-center px-4">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8 animate-fade-in">
          <Badge variant="secondary" className="px-4 py-2 text-sm bg-white/80 backdrop-blur-sm border border-blue-200 dark:bg-slate-800/80 dark:border-slate-700">
            <Layers className="h-4 w-4 mr-2 text-blue-600" />
            Modular Architecture
          </Badge>
          <Badge variant="outline" className="px-4 py-2 text-sm bg-white/80 backdrop-blur-sm border-green-200 dark:bg-slate-800/80 dark:border-green-700">
            <Star className="h-4 w-4 mr-2 text-green-600" />
            New Release
          </Badge>
        </div>
        
        {/* Main Heading */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 animate-fade-in-up">
          <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent dark:from-white dark:via-blue-200 dark:to-indigo-200">
            Vue3 Waveform
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Visualizer
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-200">
          A modular Vue 3 package for wavesurfer.js with individual plugins. Import only what you need 
          for optimal bundle sizes, complete with TypeScript support and modern Vue 3 patterns.
        </p>
        
        {/* Feature Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto animate-fade-in-up delay-300">
          <div className="group p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-blue-200/50 hover:bg-white/90 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 dark:bg-slate-800/80 dark:border-slate-700/50">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mb-4 mx-auto group-hover:scale-110 transition-transform">
              <Layers className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Modular Plugins</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">Import only what you need</p>
          </div>
          <div className="group p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-purple-200/50 hover:bg-white/90 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 dark:bg-slate-800/80 dark:border-slate-700/50">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl mb-4 mx-auto group-hover:scale-110 transition-transform">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Tree-shaking</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">Smaller bundle sizes</p>
          </div>
          <div className="group p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-indigo-200/50 hover:bg-white/90 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 dark:bg-slate-800/80 dark:border-slate-700/50">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl mb-4 mx-auto group-hover:scale-110 transition-transform">
              <Code className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">TypeScript</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">Full type safety</p>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center flex-wrap mb-12 animate-fade-in-up delay-400">
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <Link href="/docs/introduction">
              Get Started
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </Button>
          <Button variant="outline" asChild size="lg" className="px-8 py-4 text-lg font-semibold border-2 border-slate-300 hover:border-slate-400 bg-white/80 backdrop-blur-sm hover:bg-white dark:bg-slate-800/80 dark:border-slate-600 dark:hover:border-slate-500 transition-all duration-300 hover:-translate-y-1">
            <Link href="/docs/playground">
              <Play className="h-5 w-5 mr-2" />
              Try Playground
            </Link>
          </Button>
          <Button variant="outline" asChild size="lg" className="px-8 py-4 text-lg font-semibold border-2 border-slate-300 hover:border-slate-400 bg-white/80 backdrop-blur-sm hover:bg-white dark:bg-slate-800/80 dark:border-slate-600 dark:hover:border-slate-500 transition-all duration-300 hover:-translate-y-1">
            <Link href="/docs/installation">
              <Settings className="h-5 w-5 mr-2" />
              Installation
            </Link>
          </Button>
        </div>
        
        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in-up delay-500">
          <div className="text-center group">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">8</div>
            <div className="text-slate-600 dark:text-slate-400 font-medium">Available Plugins</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">4</div>
            <div className="text-slate-600 dark:text-slate-400 font-medium">Usage Patterns</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">100%</div>
            <div className="text-slate-600 dark:text-slate-400 font-medium">TypeScript</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">Vue 3</div>
            <div className="text-slate-600 dark:text-slate-400 font-medium">Composition API</div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-16 flex items-center justify-center gap-8 text-slate-500 dark:text-slate-400 animate-fade-in delay-700">
          <div className="flex items-center gap-2">
            <Github className="h-5 w-5" />
            <span className="text-sm">Open Source</span>
          </div>
          <div className="flex items-center gap-2">
            <Download className="h-5 w-5" />
            <span className="text-sm">1.2k+ Downloads</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5" />
            <span className="text-sm">50+ Stars</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};