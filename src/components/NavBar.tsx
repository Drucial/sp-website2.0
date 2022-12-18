import { styled } from "@stitches/react";
import Link from "next/link";
import { useRecoilState, useRecoilValue } from "recoil";
import { IsMobileState, MobileNavShowState } from "../../state/atoms";
import { MAX_WIDTH, NAV_HEIGHT } from "../../styles/constants";
import { downloadLinks } from "../data/data";
import { LoginIcon } from "../icons/LoginIcon";
import { SpLogo } from "../svg/SpLogo";

export const NavBar = () => {
  const isMobile = useRecoilValue(IsMobileState);
  const [mobileNavShow, setMobileNavShow] = useRecoilState(MobileNavShowState);

  const handleShowNav = () => {
    setMobileNavShow((prev) => !prev);
  };

  return (
    <MainHeader>
      <NavWrapper>
        <Link href="/">
          <SpLogo height={50}></SpLogo>
        </Link>
        {isMobile ? (
          <MobileNav>
            <MobileNavToggle open={mobileNavShow} onClick={handleShowNav}>
              <ToggleBar open={mobileNavShow} />
            </MobileNavToggle>
            <MobileNavList open={mobileNavShow}>
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
            </MobileNavList>
          </MobileNav>
        ) : (
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
        )}
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
      height: "max-content",
      maxHeight: 200,
    },
  },
});

const NavItemList = styled("ul", {
  position: "absolute",
  top: "100%",
  left: 0,
  width: "max-content",
  height: 0,
  maxHeight: 0,
  overflow: "hidden",
  transition: "$long",
  "& li": {
    marginTop: "$m",
  },
  "& a": {
    display: "flex",
    alignItems: "center",
  },
  "& svg": {
    marginRight: "$s",
  },
});

const LoginWrapper = styled("div", {
  color: "$light100",
  "&:hover": {
    color: "$primary100",
  },
});

const MobileNav = styled("nav", {
  position: "relative",
});
const MobileNavToggle = styled("div", {
  // border: "1px solid white",
  width: 30,
  height: 30,
  position: "relative",

  "&::before": {
    content: "",
    position: "absolute",
    width: "100%",
    height: 2,
    top: 5,
    right: 0,
    background: "$light200",
    transition: "$medium",
  },
  "&::after": {
    content: "",
    position: "absolute",
    width: "100%",
    height: 2,
    bottom: 5,
    right: 0,
    background: "$light200",
    transition: "$medium",
  },
  variants: {
    open: {
      true: {
        "&::before": {
          width: "80%",
          transform: "rotate(45deg)",
          top: "calc(50% - 1px)",
        },
        "&::after": {
          width: "80%",
          transform: "rotate(-45deg) ",
          bottom: "calc(50% - 1px)",
        },
      },
    },
  },
});

const ToggleBar = styled("div", {
  position: "absolute",
  width: "80%",
  height: 2,
  top: "50%",
  right: "0",
  transform: "translateY(-50%)",
  background: "$light200",
  transition: "$medium",
  variants: {
    open: {
      true: { transform: "translateY(-50%) scale(0)" },
    },
  },
});

const MobileNavList = styled("ul", {
  position: "absolute",
  right: 0,
  top: '$xxxl',
  display: 'grid',
  gap: '$s',
  textAlign: 'right',
  fontSize: "$small",
  transition: "$medium",
  variants: {
    open: {
      false: { transform: "translateX(100%) scale(0)" },
    },
  },
});
