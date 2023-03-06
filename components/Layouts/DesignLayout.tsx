import Head from "next/head";
import { FooterDesign } from "../footer";
import NavbarDesign from "../navbar/NavbarDesign";

interface LayoutProps {
  children: React.ReactNode;
}

export default function DesignLayout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>NGENI Design</title>
        <meta name="description" content="ngeni design program" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavbarDesign />
      <main>{children}</main>
      <FooterDesign />
    </>
  );
}
