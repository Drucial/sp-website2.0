import { ReactElement, ReactNode, useEffect } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { globalStyles } from "../styles/stitches.config";
import "../styles/globals.css";
import { RecoilRoot, useSetRecoilState } from "recoil";
import Layout from "../src/components/Layout";
import { AnimatePresence } from "framer-motion";
import { IsMobileState } from "../state/atoms";
import { MOBILE_WIDTH } from "../styles/constants";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  globalStyles();

  return getLayout(
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}
