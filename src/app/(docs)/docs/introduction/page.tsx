import  IntroductionNavigationSection  from "@/features/introduction/IntroductionNavigationSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "wavesurfer-vue3 | introduction",
};
const IntroductionPage = () => {
  return (
    <section className="prose max-w-none">
      <h1 className="text-4xl font-bold  mb-6">
        Vue.js Waveform <span className="text-primary">Visualizer</span>
      </h1>
      <p className=" mb-6">
      A Vue 3 component for wavesurfer.js. This component simplifies the usage of wavesurfer.js in Vue.js, with all familiar wavesurfer options available as Vue props.
      </p>

      <p className=" mb-6">
      You can subscribe to various wavesurfer events via props. Simply prepend an event name with `on`, e.g., ready `{'>'}` @ready. Each event receives a wavesurfer instance as the first argument.
      </p>
      <div className="grid gap-6 md:grid-cols-2 my-8">
        <IntroductionNavigationSection/>
      </div>
    </section>
  )
}

export default IntroductionPage