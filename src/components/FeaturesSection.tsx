import { Code } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      title: "Easy Integration",
      description: "Simple to integrate with any Vue.js project",
      code: `npm install @meersagor/wavesurfer-vue`,
    },
    {
      title: "Customizable",
      description: "Fully customizable appearance and behavior",
      code: `<template>
  <vue-waveform
    :audio-url="audioUrl"
    :options="options"
  />
</template>`,
    },
    {
      title: "Responsive",
      description: "Automatically adapts to container size",
      code: `const options = {
  responsive: true,
  waveColor: '#4a90e2',
  progressColor: '#2c5282'
}`,
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto py-6">
        <h2 className="text-4xl font-bold text-neutral-900 text-center mb-16">
          Key Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <Code className="w-6 h-6 text-docblue mr-2" />
                <h3 className="text-xl font-semibold text-docblue">
                  {feature.title}
                </h3>
              </div>
              <p className="text-neutral-900 mb-4">{feature.description}</p>
              <pre className="bg-gray-900 text-white p-4 rounded-md text-sm overflow-x-auto">
                <code>{feature.code}</code>
              </pre>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};