const theme = {
  useBorderBox: true,
  useBodyStyles: true,

  breakpoints: ["40em", "52em", "64em"],
  colors: {
    primary: "#25273D",
    primaryAlt: "#D3D4D8",
    primaryEmphasis: "#626472",
    secondary: "#ECEFF9",

    background: "#F6F8F9",
    surface: "#FFF",
    text: "#25273D",
    onBackground: "#9FAFB9",
    onPrimary: "#FFFFFF",
    onSurface: "#708390",
    onSecondary: "#575CFE",

    muted: "#D8E0E3",
    mutedAlt: "#B0BCC0",

    error: "#FDEDE8",
    onError: "#F75524",

    success: "#E7FCFA",
    onSuccess: "#1AAB9B",

    warning: "#FFF1CF",
    onWarning: "#D8762D",

    dsrIcon: "#AD6E06",
    dsrBadge: "#E06B2A",

    spinnerWarning: "#FDC134",
    txManagerBg: "rgba(216, 224, 227, 0.43)",
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
    // to properly height buttons
    buttons: 2,
    secondaryButton: 0.8,
    smallButton: 1.9,
  },

  borders: {
    light: "1px solid",
  },

  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: [0, 4, 8, 16, 32, 64, 128, 256, 512],

  radii: {
    small: 3,
    medium: 12,
    roundish: 20,
    round: 32,
  },

  shadows: {
    medium: "0 2px 8px rgba(0, 0, 0, 0.17)",
    light: "0 2px 8px rgba(0, 0, 0, 0.13)",
    dsr: "inset 0px 1px 2px rgba(0, 0, 0, 0.03)",
    surface: "0px 2px 2px rgba(199, 199, 199, 0.25)",
    txManager: "inset 0px 2px 2px #DCE5E9",
  },

  gradients: {
    dsr: {
      background:
        "linear-gradient(161.42deg, #F8D247 1.31%, #FF8154 99.3%), radial-gradient(93.42% 100% at 6.31% 0%, #F2A19E 0%, #F7E189 100%);",
      "&:hover": {
        background:
          "linear-gradient(160.17deg, #F8D247 -18.03%, #FF8154 63.39%), radial-gradient(93.42% 100% at 6.31% 0%, #F2A19E 0%, #F7E189 100%)",
      },
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
    backgroundText: {
      variant: "text.backgroundHeading",
      fontSize: 4,
      fontWeight: "body",
    },
    surfaceText: {
      variant: "text.surfaceHeading",
      fontSize: 4,
      fontWeight: "body",
    },
    error: {
      variant: "text.smallHeading",
      color: "onError",
      fontSize: "body",
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
      fontSize: 2,
      fontWeight: "semiBold",
      borderRadius: "round",
      bg: "error",
      color: "onError",
      width: "100%",
      justifyContent: ["flex-start", "center"],
      lineHeight: "smallButton",
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
    dsr: {
      variant: "badges.primary",
      color: "surface",
      bg: "dsrBadge",
      boxShadow: "dsr",
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
      lineHeight: "buttons",
      "&:hover": {
        bg: "primaryEmphasis",
      },
      "&:disabled": {
        bg: "primaryAlt",
        pointerEvents: "none",
      },
    },
    outline: {
      variant: "buttons.primary",
      fontSize: 3,
      borderRadius: "round",
      fontWeight: "semiBold",
      border: "light",
      borderColor: "muted",
      bg: "surface",
      color: "primary",
      "&:hover": {
        borderColor: "mutedAlt",
        boxShadow: "surface",
      },
      "&:disabled": {
        color: "muted",
        pointerEvents: "none",
      },
    },
    primaryBig: {
      variant: "buttons.primary",
      fontSize: 5,
      boxShadow: "medium",
      lineHeight: "body",
      py: 3,
      px: 4,
      "&:disabled": {
        bg: "primaryAlt",
        pointerEvents: "none",
        boxShadow: "none",
      },
    },
    primarySquare: {
      variant: "buttons.primaryBig",
      borderRadius: "roundish",
      boxShadow: "light",
    },
    secondary: {
      variant: "buttons.primary",
      fontSize: 5,
      borderRadius: "small",
      fontWeight: "semiBold",
      bg: "secondary",
      color: "onSecondary",
      border: "light",
      borderColor: "secondary",
      lineHeight: "secondaryButton",
      "&:hover": {
        borderColor: "onSecondary",
      },
    },
    secondarySmall: {
      variant: "buttons.secondary",
      fontSize: 2,
      px: 2,
    },
    small: {
      variant: "buttons.primary",
      fontSize: 2,
      p: 2,
      px: 3,
      lineHeight: "smallButton",
    },
    textual: {
      color: "onSecondary",
      fontSize: 4,
      fontWeight: "semiBold",
      outline: "none",
      cursor: "pointer",
      background: "transparent",
    },
  },

  forms: {
    label: {
      fontSize: 4,
      fontWeight: "semiBold",
    },
    input: {
      outline: "none",
      borderRadius: "medium",
      border: "light",
      borderColor: "muted",
      color: "onSurface",
      fontWeight: "body",
      fontFamily: "body",
      p: 3,
      lineHeight: "tight",
      fontSize: 5,
      "&:focus": {
        borderColor: "primary",
        color: "primary",
      },
      "&:disabled": {
        bg: "background",
        pointerEvents: "none",
      },
    },
    inputError: {
      variant: "forms.input",
      borderColor: "onError",
      "&:focus": {
        borderColor: "onError",
      },
    },
    select: {
      variant: "forms.input",
    },
    textarea: { variant: "forms.input", lineHeight: "body" },
    textareaError: { variant: "forms.inputError" },
  },

  cards: {
    primary: {
      border: "1px solid",
      borderColor: "muted",
      p: 3,
      borderRadius: "roundish",
      bg: "surface",
    },
    primaryWithHover: {
      variant: "cards.primary",
      cursor: "pointer",
      "&:hover": {
        borderColor: "mutedAlt",
        boxShadow: "surface",
      },
    },
    secondary: {
      variant: "cards.primary",
      border: "none",
      bg: "background",
    },
    secondaryRounded: {
      variant: "cards.secondary",
      borderRadius: "medium",
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
    spinner: {
      default: {
        color: "primary",
        strokeWidth: 3,
        size: 16,
      },
      small: {
        variant: "styles.spinner.default",
        size: 12,
      },
      large: {
        variant: "styles.spinner.default",
        size: 25,
      },
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
      px: 3,
    },
    appContainer: {
      variant: "layout.container",
      maxWidth: "416px",
    },
    appContainerWide: {
      variant: "layout.container",
      maxWidth: "632px",
    },
  },
  metadata: {
    fontLinkHref: "https://rsms.me/inter/inter.css",
  },
};

theme.sizes.container = 1440;

export default theme;
