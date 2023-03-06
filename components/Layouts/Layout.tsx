import Head from "next/head";
import { FooterAcademy } from "../footer";
import { NavbarAcademy } from "../navbar";
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
      <NavbarAcademy />
      <main>{children}</main>
      <FooterAcademy />
    </>
  );
}
