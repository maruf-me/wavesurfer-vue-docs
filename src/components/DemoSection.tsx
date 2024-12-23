export const DemoSection = () => {
  return (
    <section id="demo" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-docblue text-center mb-16">
          Interactive Demo
        </h2>
        <div className="bg-gray-200 dark:bg-gray-900 rounded-lg shadow-lg p-8">
          <p className="text-center text-docgray mb-8">
            Interactive demo coming soon. This section will showcase a live example
            of the waveform visualization.
          </p>
          <div className="h-40 bg-gray-300 dark:bg-gray-950 rounded-lg flex items-center justify-center">
            <span className="text-docgray">Waveform Visualization Demo</span>
          </div>
        </div>
      </div>
    </section>
  );
};