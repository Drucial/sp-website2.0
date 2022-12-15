import { styled } from "@stitches/react";
import Link from "next/link";
import { MAX_WIDTH, NAV_HEIGHT } from "../../styles/constants";
import { LoginIcon } from "../icons/LoginIcon";
import { SpLogo } from "../svg/SpLogo";

export const NavBar = () => {
  return (
    <MainHeader>
      <NavWrapper>
        <Link href="/"><SpLogo height={50}></SpLogo></Link>
        <MainNav>
          <NavList>
            <NavItem>
              <Link href="">Docs</Link>
            </NavItem>
            <NavItem>
              <Link href="/blog">Blog</Link>
            </NavItem>
            <NavItem>
              <Link href="/about">Team</Link>
            </NavItem>
            <NavItem>
              <Link href="/pricing">Pricing</Link>
            </NavItem>
            <NavItem>
              <Link href="/download">Download</Link>
            </NavItem>
          </NavList>
          <LoginWrapper>
            <LoginIcon />
          </LoginWrapper>
        </MainNav>
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
  margin: '0 $l',
});

const MainNav = styled("nav", {
  display: "flex",
});

const NavList = styled("ul", {
  display: "flex",
  listStyle: "none",
  fontSize: "$small",
  marginRight: "$xl",
});

const NavItem = styled("li", {
  marginLeft: "$xl",
  "& a": {
    color: "$light100",
  },
  "&:hover": {
    "& a": {
      color: "$primary100",
    },
  },
});

const LoginWrapper = styled("div", {
  color: "$light100",
  "&:hover": {
    color: "$primary100",
  },
});
