import { NavigationCard, NavigationCardDescription, NavigationCardTitle } from "@/components/NavigationCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "wavesurfer-vue3 | introduction",
};
const Introduction = () => {
  return (
    <div className="prose max-w-none">
      <h1 className="text-4xl font-bold text-docblue mb-6">
        Vue.js Waveform <span className="text-primary">Visualizer</span>
      </h1>
      <p className="text-docgray mb-6">
      A Vue 3 component for wavesurfer.js. This component simplifies the usage of wavesurfer.js in Vue.js, with all familiar wavesurfer options available as Vue props.
      </p>

      <p className="text-docgray mb-6">
      You can subscribe to various wavesurfer events via props. Simply prepend an event name with `on`, e.g., ready `{'>'}` @ready. Each event receives a wavesurfer instance as the first argument.
      </p>
      <div className="grid gap-6 md:grid-cols-2 my-8">
        <NavigationCard link={'/docs/component-usage'}>
          <NavigationCardTitle>
            <h3 className="text-xl font-semibold text-docblue mb-3">
            Component-Based
          </h3>
          </NavigationCardTitle>
          <NavigationCardDescription>
             <p className="text-docgray">
            Use our pre-built components for quick integration into your Vue.js
            applications.
          </p>
          </NavigationCardDescription>
        </NavigationCard>

        <NavigationCard link={'/docs/composable-usage'}>
          <NavigationCardTitle>
          <h3 className="text-xl font-semibold text-docblue mb-3">
            Composable Functions
          </h3>
          </NavigationCardTitle>
          <NavigationCardDescription>
          <p className="text-docgray">
            Leverage our composable functions for more flexibility and control
            over the audio visualization.
          </p>
          </NavigationCardDescription>
        </NavigationCard>
      </div>
    </div>
  )
}

export default Introduction