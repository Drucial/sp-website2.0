import { styled } from "@stitches/react";
import { GradientSpan } from "../../../styles/commonStyles";
import { Downloader } from "../Downloader";

export const BottomCtaSection = () => {
  return (
    <Section>
      <Heading><GradientSpan>Notes shouldn&apos;t be a chore.</GradientSpan></Heading>
      <Subtext>Stashpad helps engineering-minded individuals jot down quick thoughts, compartmentalize, and jump to what they need - so they&apos;re ready for the next challenge.</Subtext>
      <BottomWrapper>
        <Downloader />
      </BottomWrapper>
    </Section>
  )
}

const Section = styled("section", {
  marginTop: "200px",
  marginBottom: "100px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const Heading = styled("h2", {
  fontSize: "clamp($large, 10vw, $extraLarge)",
  fontWeight: '$6',
  textAlign: "center",
})
const Subtext = styled("p", {
  fontSize: "clamp(16px, 3vw, $h4)",
  fontWeight: "$2",
  lineHeight: 1.5,
  textAlign: "center",
  marginTop: "$l",
  maxWidth: '45ch',
  color: '$light100'
})

const BottomWrapper = styled("div", {
  padding: "$xxxl 0",
})
