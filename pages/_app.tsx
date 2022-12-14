import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { globalStyles } from "../styles/stitches.config";
import "../styles/globals.css";
import { RecoilRoot } from "recoil";
import Layout from "../src/components/Layout";
import { AnimatePresence } from "framer-motion";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  globalStyles();
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(
    <RecoilRoot>
      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AnimatePresence>
    </RecoilRoot>
  );
}
