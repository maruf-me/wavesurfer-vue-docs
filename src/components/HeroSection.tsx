import Link from "next/link";

export const HeroSection = () => {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 p-6">
        <div className="container text-center animate-fade-up">
          <h1 className="text-5xl font-bold text-neutral-900 mb-6">
            Vue.js Waveform Visualizer
          </h1>
          <p className="text-xl text-neutral-800 mb-8">
            A powerful Vue.js package for audio visualization built on WavesurferJS
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/docs/introduction"
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all"
            >
              Get Started
            </Link>
            <Link
              href="/installation"
              className="border  text-neutral-800 px-6 py-3 rounded-lg hover:bg-neutral-200  transition-all"
            >
              Installation
            </Link>
          </div>
        </div>
      </section>
    );
  };