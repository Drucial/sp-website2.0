import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { useEffect } from "react";
import { MOBILE_WIDTH } from "../../styles/constants";
import { useSetRecoilState } from "recoil";
import { IsMobileState } from "../../state/atoms";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const setIsMobile = useSetRecoilState(IsMobileState);
  const updateIsMobile = () => {
    window.innerWidth <= MOBILE_WIDTH ? setIsMobile(true) : setIsMobile(false);
  };

  useEffect(() => {
    window.addEventListener("resize", updateIsMobile);
    return () => {
      window.removeEventListener("resize", updateIsMobile);
    };
  });

  useEffect(() => {
    updateIsMobile();
  });
  const setViewportHeight = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  useEffect(() => {
    window.addEventListener("resize", setViewportHeight);

    return () => {
      window.removeEventListener("resize", setViewportHeight);
    };
  });

  return (
    <div className="app">
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
