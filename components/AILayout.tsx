import Head from "next/head";
import AiNavbar from "./AiNavbar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function AILayout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>NGENI AI</title>
        <meta name="description" content="ngeni AI program" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AiNavbar />
      <main>{children}</main>
    </>
  );
}
