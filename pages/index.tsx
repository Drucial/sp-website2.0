import { styled } from "@stitches/react";
import Head from "next/head";
import Link from "next/link";
import { GradientSpan } from "../styles/commonStyles";

export default function Home() {
  return (
    <>
      <Head>
        <title>Stashpad</title>
        <meta name="description" content="Notes Reimagined" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TitleSection>
        <Title>
          Notes <GradientSpan>Reimagined</GradientSpan>
        </Title>
        <Subtitle>Stash now. Recover later. Enjoy the process.</Subtitle>
      </TitleSection>

      <HeroSection />
    </>
  );
}

const TitleSection = styled("section", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const Title = styled("h1", {
  fontSize: "96px",
  fontWeight: "$500",
  lineHeight: 1,
  textAlign: 'center',
});

const Subtitle = styled("h2", {
  fontWeight: "$200",
  textAlign: "center",
  marginTop: '$l',
});

const HeroSection = styled("section", {
  maxWidth: '1000px',
  height: '80vw',
  maxHeight: "700px",
  backgroundImage: "url(/img/home/macbook2.png)",
  backgroundSize: "130%",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  position: "relative",
  "&::after": {
    content: "",
    position: "absolute",
    width: '30vw',
    height: '15vw',
    right: 200,
    top: 200,
    zIndex: -1,
    borderRadius: 150,
    boxShadow: "$bigPrimary",
    opacity: 0.5,
    '@bp1': {
      display: 'none',
    },
  },
  "&::before": {
    content: "",
    position: "absolute",
    width: '20vw',
    height: '10vw',
    left: 200,
    top: 300,
    zIndex: -1,
    borderRadius: 150,
    boxShadow: "$bigPrimary200",
    opacity: 0.5,
    '@bp1': {
      display: 'none',
    },
  },
});
