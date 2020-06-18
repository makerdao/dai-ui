const theme = {
  useBorderBox: true,
  useBodyStyles: true,

  breakpoints: ["40em", "52em", "64em"],
  colors: {
    primary: "#25273D",
    primaryAlt: "#D3D4D8",
    secondary: "#ECEFF9",

    background: "#F6F8F9",
    surface: "#FFF",
    text: "#25273D",
    onBackground: "#9FAFB9",
    onPrimary: "#FFFFFF",
    onSurface: "#708390",
    onSecondary: "#575CFE",

    muted: "#D8E0E3",

    error: "#FDEDE8",
    onError: "#E67002",

    success: "#E7FCFA",
    onSuccess: "#1AAB9B",

    warning: "#FFF1CF",
    onWarning: "#F08B04",
  },

  fonts: {
    body: '"Inter", "Helvetica Neue", sans-serif',
    heading: '"Inter", "Helvetica Neue", sans-serif',
    monospace: "monospace",
  },

  fontSizes: [10, 12, 14, 16, 18, 20, 24, 32, 48, 64, 96],

  fontWeights: {
    body: 400,
    semiBold: 500,
    heading: 500,
    bold: 700,
  },

  lineHeights: {
    body: 1.5,
    heading: 1.2,
    tight: 1.05,
    loose: 1.35,
    squareButton: 2.25,
  },

  borders: {
    light: "1px solid",
  },

  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: [0, 4, 8, 16, 32, 64, 128, 256, 512],

  radii: {
    small: 4,
    medium: 12,
    roundish: 20,
    round: 32,
  },

  shadows: {
    medium: "0 2px 8px rgba(0, 0, 0, 0.17)",
    light: "0 2px 8px rgba(0, 0, 0, 0.13)",
    dai: "inset 0px 1px 2px rgba(0, 0, 0, 0.03)",
  },

  gradients: {
    dai: {
      background:
        "linear-gradient(161.42deg, #F8D247 1.31%, #FF8154 99.3%), radial-gradient(93.42% 100% at 6.31% 0%, #F2A19E 0%, #F7E189 100%);",
    },
  },

  text: {
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 6,
      color: "primary",
    },
    text: {
      fontSize: 3,
      color: "text",
    },

    largeHeading: {
      variant: "text.heading",
      fontSize: 7,
    },
    mediumHeading: {
      variant: "text.heading",
      fontSize: 5,
    },
    smallHeading: {
      variant: "text.heading",
      fontSize: 4,
    },
    microHeading: {
      variant: "text.heading",
      fontSize: 3,
    },
    backgroundHeading: {
      variant: "text.mediumHeading",
      color: "onBackground",
    },
    surfaceHeading: {
      variant: "text.mediumHeading",
      color: "onSurface",
    },
    error: {
      variant: "text.smallHeading",
      color: "onError",
    },
    boldBody: {
      fontSize: 3,
      fontWeight: "semiBold",
    },
    small: {
      fontSize: 2,
      color: "text",
    },
  },

  alerts: {
    error: {
      fontSize: 3,
      borderRadius: "round",
      bg: "error",
      color: "onError",
      width: "100%",
      justifyContent: ["flex-start", "center"],
    },
    success: {
      variant: "alerts.error",
      bg: "success",
      color: "onSuccess",
    },
    warning: {
      variant: "alerts.error",
      bg: "warning",
      color: "onWarning",
    },
  },

  badges: {
    primary: {
      p: 3,
      py: 2,
      borderRadius: "roundish",
      color: "primary",
      bg: "background",
      fontSize: 2,
      fontWeight: "body",
      lineHeight: "heading",
    },
    dai: {
      variant: "badges.primary",
      color: "surface",
      bg: "#E06B2A",
      boxShadow: "dai",
    },
  },

  buttons: {
    primary: {
      borderRadius: "round",
      cursor: "pointer",
      outline: "none",
      p: 3,
      py: 2,
      fontFamily: "body",
      fontWeight: "semiBold",
      bg: "primary",
      "&:hover": {
        bg: "primaryEmphasis",
      },
      "&:active": {
        bg: "primaryAlt",
      },
      "&:disabled": {
        bg: "muted",
        pointerEvents: "none",
        cursor: "not-allowed",
      },
    },
    primaryAlt: {
      variant: "buttons.primary",
      bg: "primaryAlt",
    },
    primaryBig: {
      variant: "buttons.primary",
      fontSize: 5,
      boxShadow: "medium",
    },
    primaryAltBig: {
      variant: "buttons.primaryBig",
      bg: "primaryAlt",
    },
    primarySquare: {
      variant: "buttons.primaryBig",
      borderRadius: "roundish",
      boxShadow: "light",
      lineHeight: "squareButton",
    },
    primaryAltSquare: {
      variant: "buttons.primarySquare",
      bg: "primaryAlt",
    },
    secondary: {
      variant: "buttons.primary",
      fontSize: 2,
      borderRadius: "small",
      fontWeight: "semiBold",
      bg: "secondary",
      color: "onSecondary",
    },
    outline: {
      variant: "buttons.primary",
      fontSize: 2,
      borderRadius: "small",
      fontWeight: "semiBold",
      border: "light",
      borderColor: "onSurface",
      bg: "surface",
      color: "onSurface",
    },
    small: {
      variant: "buttons.primary",
      lineHeight: "loose",
      fontSize: 2,
      p: 2,
    },
  },

  forms: {
    label: {
      fontSize: 4,
      fontWeight: "semiBold",
      lineHeight: "loose",
    },
    input: {
      outline: "none",
      borderRadius: "medium",
      border: "light",
      borderColor: "muted",
      color: "onSurface",
      fontWeight: "semiBold",
      p: 3,
      py: 2,
      fontSize: 5,
      "&:focus": {
        borderColor: "secondary",
      },
    },
    inputError: {
      variant: "forms.input",
      borderColor: "onError",
      "&:focus": {
        color: "text",
      },
    },
    textarea: { variant: "forms.input", fontFamily: "body" },
    textareaError: { variant: "forms.inputError", fontFamily: "body" },
  },

  cards: {
    primary: {
      border: "1px solid",
      borderColor: "muted",
      p: 3,
      borderRadius: "roundish",
      bg: "surface",
    },
    secondary: {
      variants: "cards.primary",
      border: "none",
      bg: "background",
    },
  },

  links: {
    nav: {
      p: 2,
      fontSize: 3,
      fontWeight: "body",
      letterSpacing: "0.4px",
      color: "text",
      cursor: "pointer",
      "&:hover": {
        color: "primary",
        cursor: "pointer",
      },
    },
  },

  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      fontSize: 3,
    },
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
      color: "onSecondary",
      textDecoration: "none",
    },
  },
  layout: {
    container: {
      px: 2,
    },
  },
  metadata: {
    fontLinkHref: "https://rsms.me/inter/inter.css",
  },
};

theme.sizes.container = 1140;

export default theme;
