const Introduction = () => {
  return (
    <div className="prose max-w-none">
      <h1 className="text-4xl font-bold text-docblue mb-6">
        Vue.js Waveform <span className="text-secondary">Visualizer</span>
      </h1>
      <p className="text-docgray mb-6">
        A powerful Vue.js package for audio visualization built on WavesurferJS.
        This package provides an easy-to-use interface for creating beautiful
        audio waveform visualizations in your Vue.js applications.
      </p>
      <div className="grid gap-6 md:grid-cols-2 my-8">
        <div className="bg-white/5 p-6 rounded-lg shadow-sm border border-gray-100 hover:border-docblue transition-colors">
          <h3 className="text-xl font-semibold text-docblue mb-3">
            Component-Based
          </h3>
          <p className="text-docgray">
            Use our pre-built components for quick integration into your Vue.js
            applications.
          </p>
        </div>
        <div className="bg-white/5 p-6 rounded-lg shadow-sm border border-gray-100 hover:border-docblue transition-colors">
          <h3 className="text-xl font-semibold text-docblue mb-3">
            Composable Functions
          </h3>
          <p className="text-docgray">
            Leverage our composable functions for more flexibility and control
            over the audio visualization.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Introduction