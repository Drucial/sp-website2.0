import Image from "next/image";
import { styled } from "@stitches/react";
import { useRecoilValue } from "recoil";
import { IsMobileState } from "../../state/atoms";
import { theme } from "../../styles/stitches.config";

export const FastSection = () => {
  const isMobile = useRecoilValue(IsMobileState);
  return (
    <Section>
      <Title>A ridiculously fast notes experience</Title>
      <FeatureWrapper>
        <Feature>
          <Gif>
            <GifBorder>
              <Image
                alt="Stashpad focus command"
                src="/gif/fast/focus.gif"
                width={1000}
                height={749}
                style={{ display: "block", height: 300, width: "auto" }}
              />
            </GifBorder>
          </Gif>
          <Content alignRight={isMobile ? false : true}>
            <Heading>Dedicated focus command</Heading>
            <Description>
              Bring Stashpad front and center with a customizeable, dedicated
              focus command. Don&apos;t lose that thought.
            </Description>
          </Content>
        </Feature>
        <Feature>
          <Content>
            <Heading>Sub 100ms actions</Heading>
            <Description>
              Create, edit, move, search, delete, select and mark as done...All
              in under 100ms. Stashpad wont slow you down.
            </Description>
          </Content>
          <Gif alignRight={isMobile ? false : true}>
            <GifBorder>
              <Image
                alt="Stashpad focus command"
                src="/gif/fast/focus.gif"
                width={1000}
                height={749}
                style={{ display: "block", height: 300, width: "auto" }}
              />
            </GifBorder>
          </Gif>
        </Feature>
        <Feature>
          <Gif>
            <GifBorder>
              <Image
                alt="Stashpad focus command"
                src="/gif/fast/focus.gif"
                width={1000}
                height={749}
                style={{ display: "block", height: 300, width: "auto" }}
              />
            </GifBorder>
          </Gif>
          <Content alignRight={isMobile ? false : true}>
            <Heading>Tiny/Sticky mode</Heading>
            <Description>
              Quickly engage Tiny mode for a post-it size version of the app.
              Engage sticky mode to keep it on top of the pile for quick
              capture.
            </Description>
          </Content>
        </Feature>
      </FeatureWrapper>
    </Section>
  );
};

const Section = styled("section", {
  padding: "$xxxl $l",
});

const Title = styled("h2", {
  textAlign: "center",
  marginBottom: "$xxxl",
});

const FeatureWrapper = styled("div", {
  maxWidth: 1000,
  margin: "0 auto",
});

const Feature = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "$xl",
  padding: "$xxxl 0",
});

const Gif = styled("div", {
  display: "flex",
  variants: {
    alignRight: {
      true: {
        justifyContent: "flex-end",
      },
    },
  },
});

const GifBorder = styled("div", {
  borderRadius: 8,
  position: "relative",

  "& img": {
    borderRadius: 8,
  },

  "&::before": {
    content: "",
    position: "absolute",
    top: -2,
    bottom: -2,
    left: -2,
    right: -2,
    zIndex: -1,
    borderRadius: "$radL",
    background: "$primaryGradient",
  },
  "&::after": {
    content: "",
    position: "absolute",
    top: -2,
    bottom: -2,
    left: -2,
    right: -2,
    boxShadow: `0px 0px 100px ${theme.colors.primary100}`,
    opacity: 0.3,
  },
});

const Content = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  variants: {
    alignRight: {
      true: {
        textAlign: "right",
        alignItems: "flex-end",
      },
    },
  },
});

const Heading = styled("h3", {});
const Description = styled("p", {
  maxWidth: "35ch",
});
