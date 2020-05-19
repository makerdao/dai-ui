const theme = {
  useBorderBox: true,
  useBodyStyles: true,

  breakpoints: ["40em", "52em", "64em"],

  colors: {
    primary: "#4C76DA",
    primaryEmphasis: "#2C52AB",
    noticePrimary: "#87A3E6",
    noticePrimaryAlt: "#9BB3EA",
    background: "#FAFBFD",
    surface: "#FFF",
    muted: "#DFE0E2",
    mutedAlt: "#F8F9FC",
    error: "#BC2F48",

    warning: "#F1768B",
    warningAlt: "#F59DAC",

    notice: "#FAD383",
    noticeAlt: " #FBDB98",

    success: "#79D8A6",
    successAlt: "#8FDFB5",

    bull: "#79D8A5",
    bullAlt: "#E8F5F0",
    bear: "#EB3B5A",
    bearAlt: "#F8E7EC",

    text: "#636A74",
    onBackground: "#273444",
    onSurface: "#273444",
    onMuted: "#273444",
    onPrimary: "#F9FAFC",
    onNoticePrimary: "#1B336A",
    onSuccess: "#0F5F35",
    onNotice: "#7B5B18",
    onWarning: "#751D2C",
    icons: "#2D3436",
    iconsAlt: "#6E7898",
  },

  fonts: {
    body: '"Inter", "Helvetica Neue", sans-serif',
    heading: '"Inter", "Helvetica Neue", sans-serif',
    monospace: "monospace",
  },

  fontSizes: [10, 12, 14, 16, 18, 20, 24, 32, 48, 64, 96],

  fontWeights: {
    body: 400,
    semiBold: 600,
    heading: 600,
    bold: 700,
  },

  lineHeights: {
    body: 1.5,
    heading: 1.375,
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
    round: 20,
  },

  shadows: {
    floater: "0 0 8px rgba(0, 0, 0, 0.125)",
  },

  alerts: {
    primary: {
      border: "light",
      width: "100%",
      fontSize: 1,
      fontWeight: "bold",
      borderColor: "noticePrimary",
      borderRadius: "small",
      bg: "noticePrimaryAlt",
      color: "onNoticePrimary",
      textTransform: "uppercase",
      justifyContent: ["flex-start", "center"],
      py: 2,
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
      variant: "text.caps",
      color: "primary",
      bg: "surface",
      border: "light",
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
      color: "onNotice",
    },
    warning: {
      variant: "badges.primary",
      borderColor: "warning",
      color: "warning",
    },
  },

  buttons: {
    primary: {
      borderRadius: "small",
      cursor: "pointer",
      outline: "none",
      fontFamily: "body",
      fontSize: 2,
      px: 3,
      py: 2,
      color: "onPrimary",
      fontWeight: "body",
      bg: "primary",
      border: "light",
      borderColor: "primary",
      "&:hover": {
        bg: "primaryEmphasis",
        borderColor: "primaryEmphasis",
      },
      "&:active": {
        bg: "primaryAlt",
        borderColor: "primaryAlt",
      },
      "&:disabled": {
        opacity: 0.8,
        pointerEvents: "none",
        cursor: "not-allowed",
      },
    },
    primaryBig: {
      variant: "buttons.primary",
      fontSize: 3,
    },
    round: {
      variant: "buttons.primary",
      borderRadius: "round",
    },
    outline: {
      variant: "buttons.primary",
      color: "text",
      bg: "surface",
      border: "light",
      borderColor: "muted",
      "&:hover": {
        bg: "mutedAlt",
      },
      "&:active": {
        borderColor: "muted",
      },
      "&:disabled": {
        bg: "background",
        pointerEvents: "none",
        cursor: "not-allowed",
        opacity: 0.5,
      },
    },
    outlineBig: {
      variant: "buttons.outline",
      fontSize: 3,
    },

    small: {
      variant: "buttons.primary",
      textTransform: "uppercase",
      outline: "none",
      fontSize: 1,
      fontWeight: "semiBold",
      borderRadius: "xs",
      p: 2,
      py: 1,
      bg: "primary",
      "&:hover": {
        bg: "primaryEmphasis",
      },
      "&:active": {
        bg: "primaryAlt",
      },
      "&:disabled": {
        opacity: 0.8,
        pointerEvents: "none",
        cursor: "not-allowed",
      },
    },
    smallOutline: {
      variant: "buttons.small",
      bg: "surface",
      border: "light",
      borderColor: "muted",
      color: "text",
      "&:hover": {
        bg: "mutedAlt",
      },
      "&:active": {
        borderColor: "muted",
      },
      "&:disabled": {
        pointerEvents: "none",
        cursor: "not-allowed",
        opacity: 0.5,
      },
    },
    textual: {
      background: "transparent",
      color: "primary",
      outline: "none",
      cursor: "pointer",
      fontSize: 1,
    },
  },

  forms: {
    label: {
      fontSize: 2,
      fontWeight: "body",
      py: 1,
    },
    input: {
      outline: "none",
      borderRadius: "small",
      background: "surface",
      borderColor: "muted",
      color: "onSurface",
      p: 3,
      "&:disabled": {
        bg: "onPrimary",
      },
      "&::placeholder": {
        color: "inherit",
      },
    },
    inputError: {
      variant: "forms.input",
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
        bg: "success",
      },
    },
    checkbox: {
      color: "muted",
      "input:checked ~ &": {
        color: "primary",
      },
      "input:focus ~ &": {
        color: "primary",
        bg: "success",
      },
    },
  },
  cards: {
    primary: {
      border: "light",
      borderColor: "muted",
      p: 3,
      bg: "surface",
      borderRadius: "small",
    },
    secondary: {
      variant: "cards.primary",
      bg: "onPrimary",
    },
  },
  messages: {}, // Defaults to "primary" & "highlight"
  text: {
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "semiBold",
      color: "onBackground",
    },
    h1: {
      variant: "text.heading",
      fontSize: 8,
    },
    h2: {
      variant: "text.heading",
      fontSize: 7,
    },
    h3: {
      variant: "text.heading",
      fontSize: 6,
    },
    h4: {
      variant: "text.heading",
      fontSize: 5,
    },
    h6: {
      variant: "text.heading",
      fontSize: 4,
    },
    boldBody: {
      color: "onBackground",
      fontWeight: "semiBold",
    },
    small: {
      fontSize: 2,
    },
    smallOnSurface: {
      variant: "text.small",
      color: "onSurface",
    },
    tiny: {
      fontSize: 1,
      color: "text",
    },
    processing: {
      variant: "text.small",
      color: "primary",
    },
    confirmed: {
      variant: "text.small",
      color: "onSuccess",
    },
    error: {
      variant: "text.small",
      color: "error",
    },
    muted: {
      fontSize: 4,
      lineHeight: "body",
    },
    ellipsis: {
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    bull: {
      color: "bull",
    },
    bear: {
      color: "bear",
    },
  },
  links: {
    nav: {
      px: 4,
      py: 3,
      fontWeight: "semiBold",
      fontSize: 2,
      display: "flex",
      alignItems: "center",
      textTransform: "uppercase",
      border: "none",
      borderBottomWidth: "2px",
      borderBottomStyle: "solid",
      borderBottomColor: "transparent",
      textDecoration: "none",
      color: "text",
      cursor: "pointer",
      "&:hover": {
        color: "primary",
        cursor: "pointer",
        borderBottomColor: "primary",
      },
    },

    footer: {
      fontSize: 4,
      fontWeight: "semiBold",
      color: "text",
      cursor: "pointer",
    },
  },
  images: {
    avatar: {
      width: 32,
      height: 32,
      borderRadius: 99999,
    },
  },
  grids: {
    table: {
      header: {
        px: 3,
        py: 2,
        fontSize: 2,
        color: "onMuted",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "muted",
        borderTopLeftRadius: "small",
        borderTopRightRadius: "small",
        variant: "grids.table.layout",
      },
      data: {
        px: 3,
        py: 3,
        fontSize: 3,
        color: "text",
        alignItems: "center",
      },
    },
    tabsRound: {
      nav: {
        width: "100%",
        bg: "surface",
        borderRadius: "round",
        border: "light",
        borderColor: "muted",
        mb: 3,
        gap: 0,
      },
      navItem: {
        variant: "buttons.outline",
        fontWeight: "semiBold",
        borderRadius: "round",
        border: "none",
        textTransform: "uppercase",
      },
      navItemActive: {
        variant: "buttons.primary",
        fontWeight: "semiBold",
        borderRadius: "round",
        border: "none",
        textTransform: "uppercase",
      },
    },
  },
  styles: {
    spinner: {
      default: {
        color: "muted",
        strokeWidth: 3,
        size: 16,
      },
      small: {
        variant: "styles.spinner.default",
        size: 12,
      },
      large: {
        variant: "styles.spinner.default",
        size: 26,
      },
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
      fontSize: 3,
    },
    h1: {
      variant: "text.h1",
    },
    h2: {
      variant: "text.h2",
    },
    h3: {
      variant: "text.h3",
    },
    h4: {
      variant: "text.h4",
    },
    h5: {
      variant: "text.h5",
    },
    a: {
      color: "primary",
      textDecoration: "none",
      cursor: "pointer",
    },
    hr: {},
    row: {
      clickable: {
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "muted",
        },
      },
    },
    withScrollbar: {
      overflow: "auto",
      "&::-webkit-scrollbar": {
        width: 1,
        minWidth: 1,
      },
      "&::-webkit-scrollbar-track": {
        backgroundColor: "transparent",
        borderRadius: "small",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "muted",
        borderRadius: "small",
      },
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
