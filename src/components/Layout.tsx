import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
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
    hidden: { opacity: 0, x: '100%', y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: '-100%', y: 0},
  };

  return (
    <div className="app">
      <NavBar />
        <motion.main
          variants={variants} // Pass the variant object into Framer Motion
          initial="hidden" // Set the initial state to variants.hidden
          animate="enter" // Animated state to variants.enter
          exit="exit" // Exit state (used later) to variants.exit
          transition={{ type: "linear" }}
        >
          {children}
        </motion.main>
      <Footer />
    </div>
  );
}
