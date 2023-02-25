import { Inter } from "next/font/google";
import { LandingSection, Layout, ServiceSection } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <LandingSection />
      <ServiceSection />
    </Layout>
  );
}
