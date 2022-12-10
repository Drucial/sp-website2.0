import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { useEffect } from "react";

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

  return (
    <div className="app">
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
