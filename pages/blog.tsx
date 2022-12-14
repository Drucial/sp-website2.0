import { styled } from "@stitches/react";
import Head from "next/head";

export default function Blog() {
  return (
    <>
      <Head></Head>
      <MainSection>
        <h1>Blog</h1>
      </MainSection>
    </>
  );
}

const MainSection = styled("section", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  backgroundColor: '$primary100'
});
