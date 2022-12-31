import { styled } from "@stitches/react";
import { useRecoilValue } from "recoil";
import { IsMobileState } from "../../../state/atoms";
import { AlgoliaLogo } from "../../svg/AlgoliaLogo";
import { CloudinaryLogo } from "../../svg/CloudinaryLogo";
import { LoomLogo } from "../../svg/LoomLogo";
import { TwilioLogo } from "../../svg/TwilioLogo";
import { Testimonials } from "../Testimonials";

export const TestimonialSection = () => {
  const isMobile = useRecoilValue(IsMobileState)
  return (
    <Section>
      <Heading>
        <Title>Loved by engineers at</Title>
        <LogosWrapper mobile={isMobile}>
          <TwilioLogo />
          <AlgoliaLogo />
          <CloudinaryLogo />
          <LoomLogo />
        </LogosWrapper>
      </Heading>
      <Testimonials />
    </Section>
  );
};

const Section = styled("section", {
  padding: "$xxxl 0",
  margin: "$xxxl 0",
  maxWidth: "100%",
});

const Heading = styled("div", {
  padding: "0 $l",
});

const Title = styled("h2", {
  textAlign: "center",
  padding: "$l 0"
});

const LogosWrapper = styled("div", {
  display: "flex",
  justifyContent: "center",
  "& svg": {
    opacity: 0.5,
    margin: "$s $l",
  },
  variants: {
    mobile: {
      true: {
        "& svg": {
          margin: "$s 0",
        },
        "& svg + svg": {
          marginLeft: "$l",
        },
      },
    },
  },
});