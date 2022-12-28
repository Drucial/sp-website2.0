import Image from "next/image";
import { styled } from "@stitches/react";
import { useRecoilValue } from "recoil";
import { IsTabletState } from "../../../state/atoms";
import { theme } from "../../../styles/stitches.config";
import { GradientSpan } from "../../../styles/commonStyles";

export const FastSection = () => {
  const isTablet = useRecoilValue(IsTabletState);

  return (
    <Section>
      <Title>The fastest notes <br/><GradientSpan>experience</GradientSpan></Title>
      <FeatureWrapper>
        <Feature stack={isTablet}>
          <Gif stack={isTablet}>
            <GifBorder>
              <Image
                alt="Stashpad focus command"
                src="/gif/fast/focus.gif"
                width={1000}
                height={749}
              />
            </GifBorder>
          </Gif>
          <Content alignRight={!isTablet}>
            <Tag>Don&apos;t lose your flow</Tag>
            <Heading>Dedicated focus command</Heading>
            <Description>
              Bring Stashpad front and center with a customizeable focus
              command.
            </Description>
          </Content>
        </Feature>
        <Feature stack={isTablet}>
          <Content stack={isTablet}>
            <Tag>Stashpad won&apos;t slow you down</Tag>
            <Heading>Sub 100ms actions</Heading>
            <Description>
              Create, edit, move, search, delete, select and mark as done...All
              in under 100ms.
            </Description>
          </Content>
          <Gif alignRight={!isTablet} stack={isTablet}>
            <GifBorder>
              <Image
                alt="Stashpad focus command"
                src="/gif/fast/actions.gif"
                width={1000}
                height={749}
              />
            </GifBorder>
          </Gif>
        </Feature>
        <Feature stack={isTablet}>
          <Gif stack={isTablet}>
            <GifBorder>
              <Image
                alt="Stashpad focus command"
                src="/gif/fast/sticky.gif"
                width={1000}
                height={749}
              />
            </GifBorder>
          </Gif>
          <Content alignRight={!isTablet}>
            <Tag>Super convenient capture</Tag>
            <Heading>Tiny/Sticky mode</Heading>
            <Description>
              Quickly engage Tiny mode for a post-it sized version of the app.
              Engage sticky mode to keep it on top of the pile.
            </Description>
          </Content>
        </Feature>
      </FeatureWrapper>
    </Section>
  );
};

const Section = styled("section", {
  padding: "$xxxl 0",
});

const Title = styled("h2", {
  fontSize: "clamp($h2, 5vw, $extraLarge)",
  fontWeight: '$6',
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
  variants: {
    stack: {
      true: {
        gridTemplateColumns: "1fr",
        gridTemplateAreas: `"top"
                            "bottom"`,
        width: "100%",
        maxWidth: 500,
        margin: "0 auto",
      },
    },
  },
});

const Gif = styled("div", {
  display: "flex",

  "& img": {
    display: "block",
    height: 350,
    width: "auto",
    borderRadius: 8,
  },
  variants: {
    alignRight: {
      true: {
        justifyContent: "flex-end",
      },
    },
    stack: {
      true: {
        gridArea: "top",
        justifyContent: "center",

        "& img": {
          height: "auto",
          width: "100%",
        },
      },
    },
  },
});

const GifBorder = styled("div", {
  borderRadius: 8,
  position: "relative",

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
    opacity: 0.4,
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
    stack: {
      true: {
        gridArea: "bottom",
      },
    },
  },
});

const Tag = styled("p", {
  fontWeight: "$1",
  marginBottom: "$s",
});

const Heading = styled("h3", {
  marginBottom: "$l",
});

const Description = styled("p", {
  maxWidth: "35ch",
});
