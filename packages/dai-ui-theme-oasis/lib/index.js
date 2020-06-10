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
    onBackgroundEmphasis: "#31434A",
    onSurfaceEmphasis: "#364C56",
    syntaxEmphasis: "#DB1B60",
    syntaxAlt: "#D7F714",
    syntaxMuted: "#6D7477",
    modes: {
      light: {
        background: "#E5E5E5",
        text: "#1E404A",
        primary: "#DB1B60",
        onBackground: "#122229",
        surface: "#D8D8D8",
        syntaxEmphasis: "#000",
        syntaxAlt: "#DB1B60",
        syntaxMuted: "#6C8088",
        onSurface: "#122229",
        onSurfaceAlt: "#1E404A",
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

  borders: {
    light: "1px solid",
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
      lineHeight: "heading",
      fontWeight: "body",
      color: "onBackground",
      letterSpacing: "-0.04em",
      fontSize: [6, 7],
    },
    largeHeading: {
      variant: "text.heading",
      fontSize: [7, 8],
    },
    mediumHeading: {
      variant: "text.heading",
      fontSize: [6, 7],
    },
    smallHeading: {
      variant: "text.heading",
      fontSize: [5, 6],
    },
    microHeading: {
      variant: "text.heading",
      fontSize: [4, 5],
    },
    caps: {
      textTransform: "uppercase",
      color: "onBackgroundAlt",
      letterSpacing: "1px",
      fontSize: [2, 3],
      fontWeight: "bold",
    },
    sectionTitle: {
      variant: "text.caps",
      fontSize: 3,
      letterSpacing: "0.2em",
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
      fontSize: [4, 5],
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
      variant: "text.largeHeading",
    },
    h2: {
      variant: "text.mediumHeading",
    },
    h3: {
      variant: "text.smallHeading",
    },
    h4: {
      variant: "text.microHeading",
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
      overflow: "auto",
      p: 3,
      fontSize: 3,
      bg: "surface",

      // punctuation, characters like <, =>, (), etc
      ".prolog,.doctype,.cdata,.punctuation,.operator,.entity,.url": {
        color: "onSurface",
      },

      // comments
      ".comment": {
        fontStyle: "italic",
        color: "syntaxMuted",
      },

      // class names, functions and numbers
      ".property, .tag, .boolean, .number, .constant, .symbol, .deleted, .function, .class-name, .maybe-class-name, .regex, .important, .variable": {
        color: "primary",
      },

      // keywords like const, return
      ".atrule, .attr-value, .keyword": {
        color: "syntaxEmphasis",
      },

      // strings, types
      ".selector, .attr-name, .string, .char, .builtin, .inserted": {
        color: "syntaxAlt",
      },
    },
  },
};

theme.sizes.container = 960;

export default theme;
