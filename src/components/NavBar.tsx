import { styled } from "@stitches/react";
import Link from "next/link";
import { useRecoilState, useRecoilValue } from "recoil";
import { IsMobileState, MobileNavShowState } from "../../state/atoms";
import { MAX_WIDTH, NAV_HEIGHT } from "../../styles/constants";
import { theme } from "../../styles/stitches.config";
import { downloadLinks } from "../data/downloads";
import { LoginIcon } from "../icons/LoginIcon";
import { SpLogo } from "../svg/SpLogo";
import { Navigation } from "./Navigation";

export const NavBar = () => {
  const [mobileNavShow, setMobileNavShow] = useRecoilState(MobileNavShowState);

  const handleNavBlur = () => {
    if (!mobileNavShow) return
    setMobileNavShow(false);
  };

  return (
    <MainHeader>
      <NavWrapper>
        <Link href="/" onClick={handleNavBlur}>
          <SpLogo height={50}></SpLogo>
        </Link>
        <Navigation />
      </NavWrapper>
    </MainHeader>
  );
};

const MainHeader = styled("header", {
  position: "absolute",
  top: 0,
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: NAV_HEIGHT,
  backdropFilter: "blur(8px)",
  zIndex: 10,
});

const NavWrapper = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  maxWidth: MAX_WIDTH,
  margin: "0 $l",
});
