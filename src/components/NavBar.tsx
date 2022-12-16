import { styled } from "@stitches/react";
import Link from "next/link";
import { relative } from "node:path/win32";
import { MAX_WIDTH, NAV_HEIGHT } from "../../styles/constants";
import { downloadLinks } from "../data/data";
import { LoginIcon } from "../icons/LoginIcon";
import { SpLogo } from "../svg/SpLogo";

export const NavBar = () => {
  return (
    <MainHeader>
      <NavWrapper>
        <Link href="/">
          <SpLogo height={50}></SpLogo>
        </Link>
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
              <NavItemList>
                {downloadLinks.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <li key={i}>
                      <Link href={item.link}>
                        <Icon /> {item.version} {item.os}
                      </Link>
                    </li>
                  );
                })}
              </NavItemList>
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
  // background: '$black',
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
  position: "relative",
  marginLeft: "$xl",
  "& a": {
    color: "$light100",
    "&:hover": {
      color: "$primary100",
    },
  },

  "&:hover": {
    "& ul": {
      height: 'max-content',
      maxHeight: 200,
    }
  },
});

const NavItemList = styled("ul", {
  position: "absolute",
  top: "100%",
  left: 0,
  width: "max-content",
  height: 0,
  maxHeight: 0,
  overflow: 'hidden',
  transition: '$long',
  "& li": {
    marginTop: "$m",
  },
});

const LoginWrapper = styled("div", {
  color: "$light100",
  "&:hover": {
    color: "$primary100",
  },
});
