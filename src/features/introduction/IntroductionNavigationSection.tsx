'use client'

import NavigationCard from "@/components/NavigationCard"

 const IntroductionNavigationSection = () => {
  return (
    <>
      <NavigationCard link={'/docs/component-usage'}>
          <NavigationCard.Title>
            <h3 className="text-xl font-semibold  mb-3">
            Component-Based
          </h3>
          </NavigationCard.Title>
          <NavigationCard.Description>
             <p className="">
            Use our pre-built components for quick integration into your Vue.js
            applications.
          </p>
          </NavigationCard.Description>
        </NavigationCard>

        <NavigationCard link={'/docs/composable-usage'}>
          <NavigationCard.Title>
          <h3 className="text-xl font-semibold  mb-3">
            Composable Functions
          </h3>
          </NavigationCard.Title>
          <NavigationCard.Description>
          <p className="">
            Leverage our composable functions for more flexibility and control
            over the audio visualization.
          </p>
          </NavigationCard.Description>
        </NavigationCard>
    </>
  )
}

export default IntroductionNavigationSection