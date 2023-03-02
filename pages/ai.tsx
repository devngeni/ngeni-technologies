import { AILayout } from "@/components";
import AIHomeSection from "@/components/ai/AI.Home";
import { ThemeProvider } from "styled-components";

export default function AIPage() {
  const theme = {
    colors: {
      main: "#000000",
      text: "#ffffff",
    },
    fonts: {
      body: "Inter, sans-serif",
    },
    fontSizes: {
      title: "80px",
      header: "60px",
      nav: "24px",
      text: "20px",
      mobileTitle: "42px",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <AILayout>
        <AIHomeSection />
      </AILayout>
    </ThemeProvider>
  );
}
