import { DesignLayout } from "@/components/Layouts";
import {
  AboutSection,
  DesignHome,
  MovingSection,
  ProjectSection,
} from "@/components/design";
import { ThemeProvider } from "styled-components";

export default function DesignPage() {
  const theme = {
    colors: {
      background: "#000000",
      primary: "#ffffff",
      text: "#ffffff",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <DesignLayout>
        <DesignHome />
        <AboutSection />
        <ProjectSection />
        <MovingSection />
      </DesignLayout>
    </ThemeProvider>
  );
}
