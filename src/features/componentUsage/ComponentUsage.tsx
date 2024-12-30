'use client';

import { ComponentUsageCode } from "@/components/ComponentUsageCode";
import NavigationCard from "@/components/NavigationCard";

export const ComponentUsage = () => {
  return (
    <>
      <ComponentUsageCode />

      <div className="grid gap-6 md:grid-cols-2 my-8">
        <div></div>
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
      </div>
    </>
  );
};
