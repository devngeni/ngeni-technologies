import {
  HomeSection,
  OnbordingSection,
  ProjectsSection,
  QuestionsSection,
  ReviewsSection,
  WhatWeDoSection,
} from "@/components/engineering";
import { DevsLayout } from "@/components/Layouts";

export default function Engineering() {
  return (
    <DevsLayout>
      <HomeSection />
      <WhatWeDoSection />
      <OnbordingSection />
      <ProjectsSection />
      <ReviewsSection />
      <QuestionsSection />
    </DevsLayout>
  );
}
