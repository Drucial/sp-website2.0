import { styled } from "@stitches/react";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head></Head>
      <MainSection>
        <h1>About</h1>
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
