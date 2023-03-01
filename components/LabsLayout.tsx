import Head from "next/head";
import { ThemeProvider } from "styled-components";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function LabsLayout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Ngeni Labs</title>
        <meta name="description" content="ngeni labs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
      </Head>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
