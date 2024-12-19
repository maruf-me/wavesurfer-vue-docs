export const DemoSection = () => {
    return (
      <section id="demo" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-docblue text-center mb-16">
            Interactive Demo
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-center text-docgray mb-8">
              Interactive demo coming soon. This section will showcase a live example
              of the waveform visualization.
            </p>
            <div className="h-40 bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-docgray">Waveform Visualization Demo</span>
            </div>
          </div>
        </div>
      </section>
    );
  };