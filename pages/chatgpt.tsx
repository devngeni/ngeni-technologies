import { AILayout, Chat } from "@/components/Layouts";
import { ThemeProvider } from "styled-components";

export default function ChatPage() {
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
        <Chat />
      </AILayout>
    </ThemeProvider>
  );
}
