import { createStitches } from "@stitches/react";
import { FOOTER_HEIGHT, MAX_WIDTH, NAV_HEIGHT } from "./constants";

export const { styled, css, globalCss, theme } = createStitches({
  theme: {
    colors: {
      black: "hsl(0,0%,1%)",
      dark100: "hsl(0,0%,10%)",
      dark200: "hsl(0, 0%, 18%)",
      light100: "hsl(0,0%,95%)",
      light200: "hsl(0,0%,100%)",
      primary100: "hsl(249, 64%, 56%)",
      primary200: "hsl(249, 96%, 57%)",
      accent100: "hsl(336, 100%, 42%)",
      accent200: "hsl(336, 100%, 56%)",
      primaryGradient:
        "linear-gradient(338deg, rgba(131,55,174,1) 0%, rgba(93,71,215,1) 100%)",
      accentGradient:
        "linear-gradient(338deg, rgba(72,40,251,1) 0%, rgba(255,31,120,1) 0%, rgba(142,37,201,1) 100%)",
      grayGradient:
        "linear-gradient(338deg, hsl(0, 0%, 18%) 0%, hsl(0, 0%, 25%) 100%)",
      whiteGradient:
        "linear-gradient(338deg, hsl(0, 0%, 55%) 0%, hsl(0, 0%, 63%) 100%)",
    },
    space: {
      s: "8px",
      m: "12px",
      l: "16px",
      xl: "24px",
      xxl: "32px",
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
      heading: "Poppins, apple-system, sans-serif",
      text: "Noto Sans, Helvetica, sans-serif",
      mono: "Söhne Mono, menlo, monospace",
    },
    fontWeights: {
      100: 100,
      200: 300,
      300: 400,
      400: 500,
      500: 900,
    },
    sizes: {},
    radii: {
      radS: "4px",
      radL: "8px",
      radF: "999px",
    },
    shadows: {
      bigPrimary: "0 0 300px 200px hsl(249, 64%, 56%)",
      bigPrimary200: "0 0 300px 200px hsl(249, 96%, 57%)",
    },
    zIndices: {},
    transitions: {
      short: "150ms ease-in",
      long: "350ms ease-in",
    },
  },
  media: {
    bp1: "(max-width: 640px)",
    bp2: "(max-width: 768px)",
    bp3: "(max-width: 1024px)",
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
  },

  section: {
    maxWidth: MAX_WIDTH,
    margin: "0 auto",
    padding: "0 16px",
  },

  "h1, h2, h3, h4": {
    fontFamily: "$heading",
  },

  h1: {
    fontSize: "$h1",
  },

  h2: {
    fontSize: "$h2",
  },

  h3: {
    fontSize: "$h3",
  },

  h4: {
    fontSize: "$h4",
  },

  p: {
    fontSize: "$regular",
  },

  a: {
    color: "$accent100",
    fontWeight: "$400",
    transition: "$short",
    "&:hover": {
      color: "$accent200",
    },
  },
});
