import Head from "next/head";
import { TestimonialSection } from "../src/components/TestimonialSection";
import { useRecoilValue } from "recoil";
import { IsMobileState } from "../state/atoms";
import Layout from "../src/components/Layout";
import { HeroSection } from "../src/components/HeroSection";
import { TitleSection } from "../src/components/TitleSection";
import { FastSection } from "../src/components/FastSection";
import { DownloadSection } from "../src/components/DownloadSection";

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
    </Layout>
  );
}
