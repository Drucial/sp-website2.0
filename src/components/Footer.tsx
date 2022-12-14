import { styled } from "@stitches/react";
import { FOOTER_HEIGHT, MAX_WIDTH } from "../../styles/constants";
import { ContactForm } from "./ContactForm";
import { SocialLinks } from "./SocialLinks";

export const Footer = () => {
  return (
  <MainFooter>
    <FooterWrapper>
      <SocialLinks width={24} fill={'white'} opacity={0.5}/>
      <ContactForm />
    </FooterWrapper>
  </MainFooter>
  );
};

const MainFooter = styled("footer", {
  position: "absolute",
  bottom: 0,
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: FOOTER_HEIGHT,
  backdropFilter: "blur(8px)",
  zIndex: 10,
});

const FooterWrapper = styled('div', {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
  width: "100%",
  maxWidth: MAX_WIDTH,
  margin: '0 $l',
  paddingBottom: '$l',
})
