import { styled } from "@stitches/react";
import { GradientSpan } from "../../styles/commonStyles";
import { AlgoliaLogo } from "../svg/AlgoliaLogo";
import { CloudinaryLogo } from "../svg/CloudinaryLogo";
import { LoomLogo } from "../svg/LoomLogo";
import { TwilioLogo } from "../svg/TwilioLogo";
import { Testimonials } from "./Testimonials";

export const DevLove = () => {
  return (
    <Section>
      <Title>Loved by engineers at</Title>
      <MooseHeadsWrapper>
        <TwilioLogo />
        <AlgoliaLogo />
        <CloudinaryLogo />
        <LoomLogo />
      </MooseHeadsWrapper>
      <Testimonials />
    </Section>
  );
};

const Section = styled("section", {
  padding: "$xxl $l",
  marginTop: '$xxxl'
});

const Title = styled("h2", {
  textAlign: "center",
});

const MooseHeadsWrapper = styled("div", {
  display: "flex",
  justifyContent: "center",

  "& svg": {
    opacity: 0.5,
    margin: "$s $l",
  },
});
