import { styled } from "@stitches/react";
import { GradientSpan } from "../../../styles/commonStyles";

export const TitleSection = () => {
  return (
    <Section>
      <Title>
        Notes <GradientSpan>Reimagined</GradientSpan>
      </Title>
      <Subtitle>Stash now. Recover later. Enjoy the process.</Subtitle>
    </Section>
  );
};

const Section = styled("section", {
  marginTop: "$xxxl",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const Title = styled("h1", {
  fontSize: "clamp($h1, 10vw, 96px)",
  fontWeight: "$6",
  lineHeight: 1,
  textAlign: "center",
});

const Subtitle = styled("h2", {
  fontSize: "clamp(16px, 5vw, $h2)",
  fontWeight: "$2",
  lineHeight: 1.2,
  textAlign: "center",
  marginTop: "$l",
});
