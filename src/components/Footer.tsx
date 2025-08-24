import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import { 
  Github, 
  ExternalLink, 
  Heart, 
  Code, 
  BookOpen, 
  Play,
  Mail
} from "lucide-react"

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const navigationSections = [
    {
      title: "Documentation",
      links: [
        { name: "Overview", href: "/", external: false },
        { name: "API Reference", href: "/api-references", external: false },
        { name: "Interactive Playground", href: "/playground", external: false },
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "GitHub Repository", href: "https://github.com/meer-sagor/wavesurfer-vue", external: true },
        { name: "NPM Package", href: "https://www.npmjs.com/package/@meersagor/wavesurfer-vue", external: true },
        { name: "WaveSurfer.js Docs", href: "https://wavesurfer.xyz/docs", external: true },
      ]
    },
    {
      title: "Community",
      links: [
        { name: "GitHub Issues", href: "https://github.com/meer-sagor/wavesurfer-vue/issues", external: true },
        { name: "Discussions", href: "https://github.com/meer-sagor/wavesurfer-vue/discussions", external: true },
        { name: "Contributing", href: "https://github.com/meer-sagor/wavesurfer-vue/blob/main/CONTRIBUTING.md", external: true },
      ]
    }
  ];

  return (
    <footer className="bg-gradient-section dark:bg-gradient-section-dark border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Code className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-bold text-xl text-primary">wavesurfer-vue</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                A modular Vue 3 package for wavesurfer.js with individual plugins. 
                Import only what you need for optimal bundle sizes.
              </p>
              
              {/* Social Links */}
              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm" asChild className="h-8 w-8 p-0">
                  <Link href="https://github.com/meer-sagor/wavesurfer-vue" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild className="h-8 w-8 p-0">
                  <Link href="https://www.npmjs.com/package/@meersagor/wavesurfer-vue" target="_blank" rel="noopener noreferrer">
                    <Code className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild className="h-8 w-8 p-0">
                  <Link href="mailto:meersagor.contact@gmail.com" target="_blank" rel="noopener noreferrer">
                    <Mail className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Navigation Sections */}
          {navigationSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h4 className="font-semibold text-gray-900 dark:text-white">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group"
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                    >
                      {link.name}
                      {link.external && (
                        <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Author Section */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 bg-white/80 dark:bg-slate-800/80 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                <Image
                  src="https://avatars.githubusercontent.com/u/78520766?v=4"
                  alt="Meer Sagor - Lead Developer"
                  width={48}
                  height={48}
                  className="rounded-full border-2 border-primary/20"
                />
                <div className="space-y-1">
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Made with <Heart className="h-4 w-4 inline text-red-500 fill-red-500" /> by{' '}
                    <Link
                      href="https://meersagor.com"
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Meer Sagor
                    </Link>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Lead developer and maintainer of @meersagor/wavesurfer-vue
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span>Documentation</span>
              </div>
              <div className="flex items-center gap-2">
                <Play className="h-4 w-4" />
                <span>Playground</span>
              </div>
              <div className="flex items-center gap-2">
                <Code className="h-4 w-4" />
                <span>API Reference</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              © {currentYear} Meer Sagor. All rights reserved. Licensed under the{' '}
              <Link 
                href="https://github.com/meer-sagor/wavesurfer-vue/blob/main/LICENSE" 
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                MIT License
              </Link>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Built with Next.js & TypeScript</span>
              <span>•</span>
              <span>Powered by WaveSurfer.js</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};