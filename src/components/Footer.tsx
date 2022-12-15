import { styled } from "@stitches/react";
import { useRecoilState } from "recoil";
import { ShowContactFormState } from "../../state/atoms";
import { FOOTER_HEIGHT, MAX_WIDTH } from "../../styles/constants";
import { SubscribeIcon } from "../icons/SubscribeIcon";
import { ContactForm } from "./ContactForm";
import { SocialLinks } from "./SocialLinks";

export const Footer = () => {
  const [showContactForm, setShowContactForm] =
    useRecoilState(ShowContactFormState);
  const handleShowEmail = () => {

  };

  return (
    <MainFooter>
      <FooterWrapper>
        <ContactWrapper>
          <SubscribeWrapper onClick={handleShowEmail}>
            <SubscribeIcon />
          </SubscribeWrapper>
          {/* <ContactForm /> */}
        </ContactWrapper>
        <SocialLinks width={24} fill={"white"} opacity={0.5} />
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
  zIndex: 10,
});

const FooterWrapper = styled("div", {
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-end",
  width: "100%",
  maxWidth: MAX_WIDTH,
  margin: "0 $l",
  paddingBottom: "$l",
});

const ContactWrapper = styled("div", {});

const SubscribeWrapper = styled("div", {
  width: '24px',
  height: '24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  opacity: .5,
  background: '$light200',
  borderRadius: '4px',
  color: "$black",
  "&:hover": {
    opacity: 1,
    background: "$primary100",
  },
});
