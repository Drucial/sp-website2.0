import { styled } from "@stitches/react";
import { useRecoilValue } from "recoil";
import { IsMobileState } from "../../../state/atoms";
import { theme } from "../../../styles/stitches.config";
import { AppImage } from "../../svg/AppImage";
import { NarrowApp } from "../../svg/NarrowApp";
import { CommandCenter } from "../CommandCenter";

export const KeyboardSection = () => {
  const isMobile = useRecoilValue(IsMobileState);

  return (
    <Section>
      <TitleWrapper>
        <Title>Stashpad Command</Title>
        <Subtitle>Never leave your keyboard</Subtitle>
      </TitleWrapper>
      <AppWrapper>
        {/* this doesnt work... */}
        {isMobile ? (
          <NarrowApp width={"100%"} opacity={0.2} index={1} blur={0.5} />
        ) : (
          <AppImage width={"100%"} opacity={0.2} index={1} blur={0.5} />
        )}
        <ContentWrapper>
          <CommandCenter />
        </ContentWrapper>
      </AppWrapper>
    </Section>
  );
};

const Section = styled("section", {
  padding: "$xxxl 0",
});

const TitleWrapper = styled('div', {
  marginBottom: '$xxxl'
})

const AppWrapper = styled("div", {
  position: "relative",

  "&::after": {
    content: "",
    position: "absolute",
    top: -2,
    bottom: -2,
    left: -2,
    right: -2,
    borderRadius: 10,
    boxShadow: `0px 0px 100px ${theme.colors.primary100}`,
    opacity: 0.25,
  },
});

const ContentWrapper = styled("div", {
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  zIndex: 2,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: "$xl",
});
const Title = styled("h2", {
  fontSize: "clamp($h2, 5vw, $extraLarge)",
  fontWeight: "$6",
  textAlign: "center",
});
const Subtitle = styled("h3", {
  fontSize: "clamp(16px, 5vw, $h2)",
  fontWeight: "$2",
  lineHeight: 1.2,
  textAlign: "center",
  marginTop: "$l",
});
