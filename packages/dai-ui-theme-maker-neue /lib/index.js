import { transparentize } from "@theme-ui/color";

const theme = {
  useBorderBox: true,
  useBodyStyles: true,

  breakpoints: ["40em", "52em", "64em"],

  colors: {
    // textMuted: "#7E7E88",

    primary: "#1AAB9B",
    primaryEmphasis: "#008E7B",
    primaryAlt: "#087C6D",
    primaryMuted: "#EEFFFD",
    onPrimary: "#FFF",

    secondary: "#D5D9E0",
    secondaryEmphasis: "#7E7E87",
    secondaryAlt: "#231536",
    secondaryMuted: "#D4D9E1",
    onSecondary: "#7E7E88",

    background: "#F7F8F9",
    surface: "#FFF",
    text: "#434358",
    onBackground: "#434358",
    onBackgroundAlt: "#231536",
    onSurface: "#708390",

    muted: "#D5D9E0",
    mutedAlt: "#7E7E87",
    error: "#AE3C4B",

    success: "#087C6D",
    successAlt: "#E7FCFA",
    onSuccess: "#087C6D",

    notice: "#EB7720",
    noticeAlt: "#FFFBEF",
    onNotice: "#EB7720", // TODO: make this a little darker

    warning: "#CB532D",
    warningAlt: "#FFF6F3",
    onWarning: "#CB532D",

    accentBlue: "#447AFB",
    accentPurple: "#9055AF",
  },

  fonts: {
    body:
      '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu',
    heading:
      '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu',
    monospace: "monospace",
  },

  fontSizes: [10, 12, 14, 16, 18, 20, 24, 32, 48, 64, 96],

  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
    semiBold: 500,
  },

  lineHeights: {
    body: 1.5,
    heading: 1.125,
    tight: 1.05,
    loose: 1.2,
  },

  borders: {
    light: "1px solid",
  },

  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: [0, 4, 8, 16, 32, 64, 128, 256, 512],

  radii: {
    xs: 2,
    small: 4,
    medium: 6,
    roundish: 12,
    round: 24,
  },

  shadows: {
    floater: "0 0 8px rgba(0, 0, 0, 0.125)",
    lightPrimary: (theme) =>
      `0 0 1px 5px ${transparentize("primary", 0.8)(theme)}`,
  },

  text: {
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 6,
      color: "onBackgroundAlt",
    },
    text: {
      fontSize: 3,
      color: "text",
    },

    largeHeading: {
      variant: "text.heading",
      fontSize: 8,
    },
    medHeading: {
      variant: "text.heading",
      fontSize: 7,
    },
    smallHeading: {
      variant: "text.heading",
      fontSize: 6,
    },
    microHeading: {
      variant: "text.heading",
      fontSize: 5,
    },
    smallText: {
      fontSize: 2,
      color: "text",
    },
    caps: {
      textTransform: "uppercase",
      letterSpacing: "1px",
      color: "onBackgroundAlt",
      fontSize: 0,
      fontWeight: "bold",
    },
  },

  alerts: {
    primary: {
      fontSize: 2,
      borderRadius: "small",
      border: "1px solid",
      borderColor: "primary",
      bg: "primary",
      color: "onPrimary",
      width: "100%",
      justifyContent: ["flex-start", "center"],
    },
    success: {
      variant: "alerts.primary",
      borderColor: "success",
      bg: "successAlt",
      color: "onSuccess",
    },
    notice: {
      variant: "alerts.primary",
      borderColor: "notice",
      bg: "noticeAlt",
      color: "onNotice",
    },
    warning: {
      variant: "alerts.primary",
      borderColor: "warning",
      bg: "warningAlt",
      color: "onWarning",
    },
  },

  badges: {
    primary: {
      py: 1,
      px: 4,
      borderRadius: "roundish",
      variant: "text.smallText",
      color: "primary",
      bg: "surface",
      border: "1px solid",
      borderColor: "primary",
    },
    success: {
      variant: "badges.primary",
      borderColor: "success",
      color: "success",
    },
    notice: {
      variant: "badges.primary",
      borderColor: "notice",
      color: "notice",
    },
    warning: {
      variant: "badges.primary",
      borderColor: "warning",
      color: "warning",
    },
  },

  buttons: {
    primary: {
      borderRadius: "xs",
      cursor: "pointer",
      outline: "none",
      fontFamily: "body",
      fontSize: 2,
      p: 3,
      py: 2,
      color: "onPrimary",
      fontWeight: "semiBold",
      letterSpacing: "0.03em",
      bg: "primary",
      "&:hover": {
        bg: "primaryEmphasis",
      },
      "&:active": {
        bg: "primaryAlt",
      },
      "&:disabled": {
        bg: "primaryMuted",
        pointerEvents: "none",
        cursor: "not-allowed",
      },
    },
    outline: {
      variant: "buttons.primary",
      bg: "surface",
      color: "onSecondary",
      border: "1px solid",
      borderColor: "secondary",
      "&:hover": {
        bg: "surface",
        color: "secondaryEmphasis",
        borderColor: "secondaryEmphasis",
      },
      "&:active": {
        borderColor: "secondaryAlt",
        color: "secondaryAlt",
      },
      "&:disabled": {
        bg: "background",
        pointerEvents: "none",
        cursor: "not-allowed",
        borderColor: "secondaryMuted",
        opacity: 0.5,
      },
    },

    small: {
      variant: "buttons.primary",
      textTransform: "uppercase",
      outline: "none",
      letterSpacing: "0.05em",
      fontSize: 0,
      fontWeight: "bold",
      cursor: "pointer",
      p: 2,
      color: "textAlt",
      bg: "primary",
      "&:hover": {
        bg: "primaryEmphasis",
      },
      "&:active": {
        bg: "primaryAlt",
      },
      "&:disabled": {
        bg: "primaryMuted",
        pointerEvents: "none",
        cursor: "not-allowed",
      },
    },
    smallOutline: {
      variant: "buttons.small",
      bg: "surface",
      color: "onSecondary",
      border: "1px solid",
      borderColor: "secondary",
      "&:hover": {
        bg: "surface",
        color: "secondaryEmphasis",
        borderColor: "secondaryEmphasis",
      },
      "&:active": {
        bg: "surface",
        borderColor: "secondaryAlt",
        color: "secondaryAlt",
      },
      "&:disabled": {
        bg: "background",
        pointerEvents: "none",
        cursor: "not-allowed",
        borderColor: "secondaryMuted",
        opacity: 0.5,
      },
    },
    textual: {
      background: "transparent",
      color: "accentBlue",
      outline: "none",
      cursor: "pointer",
      fontSize: 1,
    },
  },

  forms: {
    label: {
      fontSize: 3,
      fontWeight: "semiBold",
      py: 2,
    },
    input: {
      outline: "none",
      borderRadius: "small",
      borderColor: "muted",
      color: "text",
      p: 2,
      "&:focus": {
        borderColor: "mutedAlt",
        color: "text",
      },
    },
    inputError: {
      variant: "forms.input",
      borderColor: "error",
      color: "text",
      "&:focus": {
        borderColor: "error",
        color: "text",
      },
    },
    textarea: { variant: "forms.input" },
    textareaError: { variant: "forms.inputError" },
    select: { variant: "forms.input" },
    slider: {
      height: "2px",
      borderRadius: "small",
      color: "text",
      "&:active, &:hover, &:focus": {
        color: "primary",
        bg: "primary",
        "&::-webkit-slider-thumb": {
          boxShadow: (theme) => theme.shadows.lightPrimary,
        },
      },
    },
    sliderActive: {
      variant: "forms.slider",
      color: "primary",
      bg: "primary",
    },
    radio: {
      color: "muted",
      "input:checked ~ &": {
        color: "primary",
      },
      "input:focus ~ &": {
        bg: "successMuted",
      },
    },
    checkbox: {
      color: "muted",
      "input:checked ~ &": {
        color: "primary",
      },
      "input:focus ~ &": {
        color: "primary",
        bg: "successMuted",
      },
    },
  },
  cards: {
    primary: {
      border: "1px solid",
      borderColor: "muted",
      p: 3,
      borderRadius: "medium",
      bg: "surface",
    },
  },
  messages: {}, // Defaults to "primary" & "highlight"

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
  images: {
    avatar: {},
  },
  styles: {
    spinner: {
      color: "primary",
      strokeWidth: 3,
      size: 4,
    },
    donut: {
      color: "primary",
      strokeWidth: 3,
      size: 6,
    },
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    h1: {
      variant: "text.heading",
      fontSize: 7,
    },
    h2: {
      variant: "text.heading",
      fontSize: 6,
      fontWeight: "body",
    },
    h3: {
      variant: "text.heading",
      fontSize: 5,
    },
    h4: {
      variant: "text.heading",
      fontSize: 4,
    },
    h5: {
      variant: "text.heading",
      fontSize: 3,
      py: 2,
      fontWeight: 500,
    },
    a: {
      color: "accentBlue",
      textDecoration: "none",
    },
    hr: {},
  },
  layout: {
    container: {
      px: 2,
    },
  },
};

theme.sizes.container = 1140;

export default theme;
