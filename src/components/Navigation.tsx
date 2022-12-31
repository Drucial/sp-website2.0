import { styled } from "@stitches/react";
import Link from "next/link";
import { useRecoilState, useRecoilValue } from "recoil";
import { IsMobileState, MobileNavShowState } from "../../state/atoms";
import { theme } from "../../styles/stitches.config";

const links = [
  {
    name: "Docs",
    href: "",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Team",
    href: "/about",
  },
  {
    name: "Pricing",
    href: "/pricing",
  },
];

export const Navigation = () => {
  const isMobile = useRecoilValue(IsMobileState);
  const [mobileNavShow, setMobileNavShow] = useRecoilState(MobileNavShowState);

  const handleShowNav = () => {
    setMobileNavShow((prev) => !prev);
  };
  return (
    <>
      {isMobile ? (
        <MobileNav>
          <MobileNavToggle open={mobileNavShow} onClick={handleShowNav}>
            <ToggleBar open={mobileNavShow} />
          </MobileNavToggle>
          <MobileNavList open={mobileNavShow}>
            {links.map((item, i) => (
              <Link key={i} href={item.href} onClick={handleShowNav}>
                <NavItem>{item.name}</NavItem>
              </Link>
            ))}
            <Link href="" onClick={handleShowNav}>
              <NavItem>Download</NavItem>
            </Link>
          </MobileNavList>
        </MobileNav>
      ) : (
        <MainNav>
          <NavList>
            {links.map((item, i) => (
              <Link key={i} href={item.href} onClick={handleShowNav}>
                <NavItem>{item.name}</NavItem>
              </Link>
            ))}
            <Link href="" onClick={handleShowNav}>
              <NavItem>Download</NavItem>
            </Link>
          </NavList>
        </MainNav>
      )}
    </>
  );
};

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
  "& a": {
    display: "flex",
    alignItems: "center",
    padding: "$s 0",
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
  right: "-$l",
  top: "-$l",
  display: "grid",
  gap: "$l",
  padding: "$xxxl $l $l",
  background: "$primaryGradient",
  borderRadius: "$radS 0 0 $radS",
  textAlign: "right",
  fontSize: "$small",
  zIndex: -1,
  transformOrigin: "top right",
  transition: "$medium",
  variants: {
    open: {
      false: { transform: "translateX(100%) scale(0)" },
    },
  },

  "&::after": {
    content: "",
    position: "absolute",
    top: -2,
    bottom: -2,
    left: -2,
    right: -2,
    zIndex: -1,
    boxShadow: `0px 0px 100px ${theme.colors.primary100}`,
    opacity: 0.4,
  },
});
