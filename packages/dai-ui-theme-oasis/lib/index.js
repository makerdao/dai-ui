const theme = {
  useBorderBox: true,
  useBodyStyles: true,

  breakpoints: ["40em", "52em", "64em"],

  colors: {
    background: "#122229",
    text: "#CCD7DC",
    surface: "#0B171D",
    primary: "#08D95C",
    onBackground: "#FFF",
    onBackgroundAlt: "#6C8088",
    onSurface: "#FFF",
    onSurfaceAlt: "#6D7477",
    modes: {
      light: {
        background: "#E5E5E5",
        text: "#1E404A",
        // surface: "#0B171D",
        primary: "#DB1B60",
        onBackground: "#122229",
        // onBackgroundAlt: "#6C8088",
        // onSurface: "#FFF",
        // onSurfaceAlt: "#6D7477",
      },
    },
  },

  fonts: {
    body: '"Rubik", sans-serif',
    heading: '"Space Mono", monospace',
    monospace: "monospace",
  },

  fontSizes: [10, 12, 14, 16, 18, 20, 24, 32, 48, 64, 96],

  fontWeights: {
    body: 400,
    heading: 400,
    bold: 700,
  },

  lineHeights: {
    body: 1.7,
    heading: 1.45,
    loose: 1.8,
  },

  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: [0, 4, 8, 16, 32, 64, 128, 256, 512],

  buttons: {
    textual: {
      fontFamily: "heading",
      color: "primary",
      background: "transparent",
      fontSize: 5,
      lineHeight: "loose",
      cursor: "pointer",
    },
  },
  links: {
    nav: {
      p: 2,
      px: 4,
      fontSize: 4,
      fontWeight: "body",
      letterSpacing: "0.4px",
      fontFamily: "heading",
      color: "onBackground",
      cursor: "pointer",
      "&:hover": {
        color: "primary",
      },
    },
    footer: {
      variant: "links.nav",
    },
  },
  text: {
    heading: {
      fontFamily: "heading",
      fontWeight: "body",
      color: "onBackground",
      fontSize: 8,
    },
    h1: {
      variant: "text.heading",
    },
    h2: {
      variant: "text.heading",
      fontSize: 7,
    },
    h3: {
      variant: "text.heading",
      fontSize: 6,
    },
    body: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      color: "text",
      fontSize: 3,
    },
    bodyMedium: {
      variant: "text.body",
      fontSize: 4,
    },
    bodyLarge: {
      variant: "text.body",
      fontSize: 5,
    },
  },
  cards: {
    primary: {
      p: 3,
      bg: "surface",
    },
  },
  layout: {
    landingContainer: {
      maxWidth: "860px",
    },
  },
  icons: {},
  styles: {
    h1: {
      variant: "text.heading",
    },
    h2: {
      variant: "text.h2",
    },
    h3: {
      variant: "text.h3",
    },
    a: {
      color: "primary",
      textDecoration: "none",
      cursor: "pointer",
    },
    root: {
      variant: "text.body",
    },
    code: {
      p: 3,
      fontSize: 3,
      bg: "surface",
      ".comment,.prolog,.doctype,.cdata,.punctuation,.operator,.entity,.url": {
        color: "onBackground", // comments and characters like <, =>, (), etc
      },
      ".comment": {
        fontStyle: "italic",
      },
      ".property, .tag, .boolean, .number, .constant, .symbol, .deleted, .function, .class-name, .maybe-class-name, .regex, .important, .variable": {
        color: "primaryMuted", // class names, functions and numbers
      },
      ".atrule, .attr-value, .keyword": {
        color: "primary", // keywords like const, return
      },
      ".selector, .attr-name, .string, .char, .builtin, .inserted": {
        color: "primaryAlt", // strings
      },
    },
  },
};

theme.sizes.container = 960;

export default theme;
