import { styled } from "@stitches/react";
import Head from "next/head";
import Layout from "../src/components/Layout";

export default function Blog() {
  return (
    <Layout>
      <Head></Head>
      <MainSection>
        <h1>Blog</h1>
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
