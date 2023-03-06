import { HomeSection, OnbordingSection, WhatWeDoSection } from "@/components/engineering";
import { DevsLayout } from "@/components/Layouts";

export default function Engineering() {
  return (
    <DevsLayout>
      <HomeSection />
      <WhatWeDoSection />
      <OnbordingSection />
    </DevsLayout>
  );
}
