import Head from "next/head";
import { ThemeProps } from "styled-components";
import { Footer } from "./footer";
import Navbar from "./NavbarAcademy";
interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Ngeni Academy</title>
        <meta name="description" content="ngeni idensity program" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
