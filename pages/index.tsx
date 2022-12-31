import Head from "next/head";
import { TestimonialSection } from "../src/components/sections/TestimonialSection";
import { useRecoilValue } from "recoil";
import { IsMobileState } from "../state/atoms";
import Layout from "../src/components/Layout";
import { HeroSection } from "../src/components/sections/HeroSection";
import { TitleSection } from "../src/components/sections/TitleSection";
import { FastSection } from "../src/components/sections/FastSection";
import { DownloadSection } from "../src/components/sections/DownloadSection";
import { KeyboardSection } from "../src/components/sections/KeyboardSection";
import { BottomCtaSection } from "../src/components/sections/BottomCtaSection";

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
      {isMobile ? (
        <>
          <HeroSection />
          <DownloadSection />
        </>
      ) : (
        <>
          <DownloadSection />
          <HeroSection />
        </>
      )}
      <TestimonialSection />
      <FastSection />
      <KeyboardSection />
      <BottomCtaSection />
    </Layout>
  );
}
