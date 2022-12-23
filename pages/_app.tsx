import type { AppProps } from "next/app";
import { globalStyles } from "../styles/stitches.config";
import "../styles/globals.css";
import { RecoilRoot } from "recoil";
import { NavBar } from "../src/components/NavBar";
import { Footer } from "../src/components/Footer";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps, router }: AppProps) {
  const url = `https://wallis.dev${router.route}`

  globalStyles();

  return (
    <RecoilRoot>
      <div className="app">
        <NavBar />
        <AnimatePresence initial={false} mode="wait">
          <Component {...pageProps} key={url}/>
        </AnimatePresence>
        <Footer />
      </div>
    </RecoilRoot>
  );
}
