import Head from "next/head";
import { TestimonialSection } from "../src/components/TestimonialSection";
import { Features } from "../src/components/Features";
import { useRecoilValue } from "recoil";
import { IsMobileState } from "../state/atoms";
import Layout from "../src/components/Layout";
import { HeroSection } from "../src/components/HeroSection";
import { TitleSection } from "../src/components/TitleSection";
import { FastSection } from "../src/components/FastSection";

export default function Home() {
  const isMobile = useRecoilValue(IsMobileState);
  return (
    <Layout>
      <Head>
        <title>Stashpad</title>
        <meta name="description" content="Notes Reimagined" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TitleSection />
      <HeroSection />
      <TestimonialSection />
      <FastSection />
    </Layout>
  );
}
