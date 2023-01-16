import { styled } from "@stitches/react";
import Head from "next/head";
import Layout from "../src/components/Layout";

export default function Pricing() {
  return (
    <Layout>
      <Head>
        <title>Stashpad</title>
        <meta name="description" content="Notes Reimagined" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainSection>
        <h1>Pricing</h1>
      </MainSection>
    </Layout>
  );
}

const MainSection = styled("section", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  backgroundColor: '$primary100'
});
