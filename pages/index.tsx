import { styled } from "@stitches/react";
import Head from "next/head";
import Image from "next/image";
import { GradientSpan } from "../styles/commonStyles";
import { DevLove } from "../src/components/DevLove";
import { Features } from "../src/components/Features";

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

      <HeroSection>
        <Image
          src="/img/home/macbook2.png"
          alt="Stashpad for Mac OS"
          width={1300}
          height={933}
          style={{
            display: "block",
            height: "clamp(200px, 50vw, 820px)",
            width: "auto",
            margin: "0 auto",
          }}
        />
      </HeroSection>
      <DevLove />
      <Features />
    </>
  );
}

const TitleSection = styled("section", {
  marginTop: '$xxxl',
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const Title = styled("h1", {
  fontSize: "clamp($h1, 10vw, 96px)",
  fontWeight: "$500",
  lineHeight: 1,
  textAlign: "center",
});

const Subtitle = styled("h2", {
  fontSize: "clamp(16px, 5vw, $h2)",
  fontWeight: "$200",
  lineHeight: 1.2,
  textAlign: "center",
  marginTop: "$l",
});

const HeroSection = styled("section", {
  position: "relative",
  "&::after": {
    content: "",
    position: "absolute",
    width: "15vw",
    height: "15vw",
    right: '25%',
    top: '20%',
    zIndex: -1,
    borderRadius: 150,
    boxShadow: "$bigPrimary",
    opacity: 0.5,
  },
  "&::before": {
    content: "",
    position: "absolute",
    width: "10vw",
    height: "10vw",
    left: '30%',
    bottom: '40%',
    zIndex: -1,
    borderRadius: 150,
    boxShadow: "$bigPrimary200",
    opacity: 0.5,
  },
});
