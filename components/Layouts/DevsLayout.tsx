import Head from "next/head";
import { FooterDevs } from "../footer";
import { NstarNavbar } from "../navbar";
interface Props {
  children: React.ReactNode;
}
export default function DevsLayout({ children }: Props) {
  return (
    <>
      <Head>
        <title>NGENI Developers</title>
        <meta name="description" content="ngeni developers" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NstarNavbar />
      <main>{children}</main>
      <FooterDevs />
    </>
  );
}
