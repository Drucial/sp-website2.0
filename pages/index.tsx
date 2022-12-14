import { styled } from "@stitches/react";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Stashpad</title>
        <meta name="description" content="Notes Reimagined" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroSection>
        {/* <Intro>Welcome to</Intro> */}
        <Title>
          Notes <span>Reimagined</span>
        </Title>
        <Subtitle>Stash now. Recover later. Enjoy the process.</Subtitle>
      </HeroSection>
    </>
  );
}

const HeroSection = styled("section", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  // justifyContent: "center",
  minHeight: "100%",
  backgroundImage: "url(/img/home/macbook2.png)",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom center",
  position: "relative",
  "&::after": {
    content: "",
    position: "absolute",
    width: 300,
    height: 150,
    right: 300,
    top: 200,
    zIndex: -1,
    borderRadius: 150,
    boxShadow: "$bigPrimary",
    opacity: 0.5,
  },
  "&::before": {
    content: "",
    position: "absolute",
    width: 300,
    height: 250,
    left: 300,
    bottom: 200,
    zIndex: -1,
    borderRadius: 150,
    boxShadow: "$bigPrimary200",
    opacity: 0.5,
  },
});

const Intro = styled("div", {
  marginTop: "calc($xl + $xl + $l)",
  padding: "$s $l",
  background: "$primary100",
  borderRadius: "$radS",
  fontSize: "$medium",
  fontWeight: "$400",
  boxShadow: "0px 0px 35px rgba(0,0,0,.9)",
});

const Title = styled("h1", {
  fontSize: "96px",
  fontWeight: "$500",
  textShadow: "0px 0px 15px rgba(0,0,0,1)",
  background: "$black",
  width: "100%",
  textAlign: "center",
});
const Subtitle = styled("h2", {
  fontWeight: '$200',
  width: '100%',
  textAlign: 'center',
  background: '$dark200',
});
