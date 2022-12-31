import { createStitches } from "@stitches/react";
import {
  FOOTER_HEIGHT,
  MAX_WIDTH,
  NAV_HEIGHT,
  MOBILE_WIDTH,
  TABLET_WIDTH,
  DESKTOP_WIDTH,
} from "./constants";

export const { styled, css, globalCss, theme } = createStitches({
  theme: {
    colors: {
      black: "hsl(0,0%,1%)",
      dark100: "hsl(0,0%,10%)",
      dark200: "hsl(0, 0%, 18%)",
      lighter100: "hsl(0,0%,65%)",
      light100: "hsl(0,0%,85%)",
      light200: "hsl(0,0%,100%)",
      primary100: "hsl(249, 64%, 56%)",
      primary200: "hsl(249, 96%, 57%)",
      accent100: "hsl(278, 52%, 45%)",
      accent200: "hsl(300, 90%, 49%)",
      primaryGradient:
        "linear-gradient(338deg, rgba(131,55,174,1) 0%, rgba(93,71,215,1) 100%)",
      accentGradient:
        "linear-gradient(-338deg, hsl(77, 95%, 61%) 0%, hsl(126, 74%, 69%) 100%)",
      grayGradient:
        "linear-gradient(338deg, hsl(0, 0%, 18%) 0%, hsl(0, 0%, 25%) 100%)",
      whiteGradient:
        "linear-gradient(338deg, hsl(0, 0%, 55%) 0%, hsl(0, 0%, 63%) 100%)",
      glassGradientLeft:
        "linear-gradient(124.21deg, rgba(255, 255, 255, 0.1) 30.09%, rgba(255, 255, 255, 0.05) 89.04%)",
      glassGradientMiddle:
        "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 29.61%, rgba(255, 255, 255, 0.05) 89.01%)",
      glassGradientRight:
        "linear-gradient(236.85deg, rgba(255, 255, 255, 0.1) 29.73%, rgba(255, 255, 255, 0.05) 87.79%)",
    },
    space: {
      s: "8px",
      m: "12px",
      l: "16px",
      xl: "24px",
      xxl: "32px",
      xxxl: "72px",
    },
    fontSizes: {
      smallest: "12px",
      small: "14px",
      regular: "16px",
      medium: "18px",
      large: "32px",
      extraLarge: "64px",
      h4: "20px",
      h3: "28px",
      h2: "34px",
      h1: "48px",
    },
    fonts: {
      heading: "Inter Tight, apple-system, sans-serif",
      text: "Noto Sans, Helvetica, sans-serif",
      mono: "Söhne Mono, menlo, monospace",
    },
    fontWeights: {
      1: 200,
      2: 300,
      3: 400,
      4: 500,
      5: 700,
      6: 900,
    },
    sizes: {},
    radii: {
      radS: "4px",
      radL: "8px",
      radF: "999px",
    },
    shadows: {
      bigPrimary: "0 0 20vw 15vw hsl(249, 64%, 56%)",
      bigPrimary200: "0 0 20vw 15vw hsl(249, 96%, 57%)",
    },
    zIndices: {},
    transitions: {
      short: "150ms ease-in",
      medium: "250ms ease-in-out",
      long: "350ms ease-in",
    },
  },
  media: {
    bp1: `(max-width: ${MOBILE_WIDTH})`,
    bp2: `(max-width: ${TABLET_WIDTH})`,
    bp3: `(max-width: ${DESKTOP_WIDTH})`,
  },
});

export const globalStyles = globalCss({
  "*": {
    padding: 0,
    margin: 0,
    boxSizing: "border-box",
  },

  body: {
    backgroundColor: "$black",
  },

  main: {
    paddingTop: NAV_HEIGHT,
    paddingBottom: FOOTER_HEIGHT,
    paddingLeft: '$l',
    paddingRight: '$l',
  },

  section: {
    width: '100%',
    maxWidth: MAX_WIDTH,
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  "h1, h2, h3, h4": {
    fontFamily: "$heading",
    fontWeight: 500,
  },

  h1: {
    fontSize: "$h1",
    lineHeight: 1,
  },

  h2: {
    fontSize: "clamp($h3, 5vw, $h2)",
    lineHeight: 1.2,
  },

  h3: {
    fontSize: "$h3",
    lineHeight: 1.25,
  },

  h4: {
    fontSize: "$h4",
    lineHeight: 1.3,
  },

  p: {
    fontSize: "$regular",
    lineHeight: 1.4,
  },

  "p + p": {
    marginTop: "$l",
  },

  a: {
    color: "$light200",
    fontWeight: "$4",
    transition: "$short",
    "&:hover": {
      color: "$primary100",
    },
  },
});
