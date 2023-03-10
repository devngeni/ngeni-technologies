import Head from "next/head";
import { FooterLabs } from "../footer";
import { Navbar } from "../navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function LabsLayout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>NGENI Technologies</title>
        <meta name="description" content="ngeni labs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <FooterLabs />
    </>
  );
}
