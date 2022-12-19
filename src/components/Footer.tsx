import { styled } from "@stitches/react";
import { useRecoilState, useRecoilValue } from "recoil";
import { IsMobileState, ShowContactFormState } from "../../state/atoms";
import { FOOTER_HEIGHT, MAX_WIDTH } from "../../styles/constants";
import { SubscribeIcon } from "../icons/SubscribeIcon";
import { ContactForm } from "./ContactForm";
import { SocialLinks } from "./SocialLinks";

export const Footer = () => {
  const isMobile = useRecoilValue(IsMobileState);
  const [showContact, setShowContact] = useRecoilState(ShowContactFormState);
  const handleShowEmail = () => {
    setShowContact((prev) => !prev);
  };

  return (
    <MainFooter mobile={isMobile}>
      <FooterWrapper mobile={isMobile}>
        <IconsWrapper mobile={isMobile}>
          <SubscribeWrapper onClick={handleShowEmail} active={showContact}>
            <SubscribeIcon />
          </SubscribeWrapper>
          <SocialLinks width={24} fill={"white"} opacity={0.5} />
        </IconsWrapper>
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
  minHeight: FOOTER_HEIGHT,
  zIndex: 10,
  variants: {
    mobile: {
      true: {
        minHeight: "auto",
        backdropFilter: "blur(8px)",
      },
    },
  },
});

const FooterWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "flex-end",
  width: "100%",
  maxWidth: MAX_WIDTH,
  margin: "0 $l",
  paddingBottom: "$l",
  variants: {
    mobile: {
      true: {
        alignItems: "center",
        padding: "$l",
      },
    },
  },
});

const IconsWrapper = styled("div", {
  display: "flex",
  justifyContent: "flex-end",
  variants: {
    mobile: {
      true: {
        justifyContent: "center",
      },
    },
  },
});

const SubscribeWrapper = styled("div", {
  width: "24px",
  height: "24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  opacity: 0.5,
  background: "$light200",
  borderRadius: "4px",
  color: "$black",
  "&:hover": {
    opacity: 1,
    background: "$primary100",
  },
  variants: {
    active: {
      true: {
        background: "$primary100",
        opacity: 1,
      },
    },
  },
});
