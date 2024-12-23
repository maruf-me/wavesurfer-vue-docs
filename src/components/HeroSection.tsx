import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center  p-6">
      <div className="container text-center animate-fade-up">
        <h1 className="text-5xl font-bold text-neutral-900 mb-6">
          Vue3 Waveform <span className="text-primary">Visualizer</span>
        </h1>
        <p className="text-xl text-neutral-800 mb-8">
          {/* A powerful Vue.js package for audio visualization built on WavesurferJS */}
          A Vue 3 component for wavesurfer.js. This component simplifies the usage of wavesurfer.js in Vue.js
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/docs/introduction"
            className="dark:bg-primary bg-secondary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all"
          >
            Get Started
          </Link>
          <Link
            href="/docs/installation"
            className="border  text-neutral-800 px-6 py-3 rounded-lg hover:bg-neutral-200 transition-all"
          >
            Installation
          </Link>
        </div>
      </div>
    </section>
  );
};