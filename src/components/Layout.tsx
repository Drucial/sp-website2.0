import { useEffect } from "react";
import {
  DESKTOP_WIDTH,
  MOBILE_WIDTH,
  TABLET_WIDTH,
} from "../../styles/constants";
import { useSetRecoilState } from "recoil";
import {
  IsDesktopState,
  IsMobileState,
  IsTabletState,
} from "../../state/atoms";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props): JSX.Element {
  const setIsMobile = useSetRecoilState(IsMobileState);
  const setIsTablet = useSetRecoilState(IsTabletState);
  const setIsDesktop = useSetRecoilState(IsDesktopState);

  const updateIsMobile = () => {
    window.innerWidth <= MOBILE_WIDTH ? setIsMobile(true) : setIsMobile(false);
  };

  const updateIsTablet = () => {
    window.innerWidth <= TABLET_WIDTH ? setIsTablet(true) : setIsTablet(false);
  };

  const updateIsDesktop = () => {
    window.innerWidth <= DESKTOP_WIDTH
      ? setIsDesktop(true)
      : setIsDesktop(false);
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      updateIsMobile();
      updateIsTablet();
      updateIsDesktop();
    });
    return () => {
      window.removeEventListener("resize", () => {
        updateIsMobile();
        updateIsTablet();
        updateIsDesktop();
      });
    };
  });

  useEffect(() => {
    updateIsMobile();
    updateIsTablet();
    updateIsDesktop();
    setViewportHeight()
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

  const variants = {
    hidden: { opacity: 0, x: "20%", y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: "-20%", y: 0 },
  };

  return (
    <motion.main
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      // transition={{ type: "spring" }}
    >
      {children}
    </motion.main>
  );
}
