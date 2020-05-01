
const theme = {
  useBorderBox: true,
  useBodyStyles: true,

  breakpoints: ['40em', '52em', '64em'],

  colors: {
    primary: '#4C76DA',
    primaryEmphasis: '#2C52AB',
    // primaryAlt: '#098C7D',
    primaryMuted: '#F9FAFC',
    "": "",
    secondary: '#D4D9E1',
    secondaryEmphasis: '#DFE0E2',
    secondaryAlt: '#636A74',
    secondaryMuted: '#F8F9FC',

    text: '#273444',
    textMuted: '#636A74',
    textAlt: '#FFF',
    "  ": "",

    background: '#FAFBFD',
    foreground: '#FFF',
    muted: '#DFE0E2',
    "   ": "",

    // notice: '#7B5B18',
    // noticeAlt: '#87A3E6',
    warning: '#751D2C',
    warningAlt: '#F59DAC',
    warningMuted: '#F1768B',
    "    ": "",

    notice: '#7B5B18',
    noticeAlt:' #FBDB98',
    noticeMuted: '#FAD383',

    "       ": "",

    success: '#0F5F35',
    successAlt: '#8FDFB5',
    successMuted: '#79D8A6',
    // accentBlue: '#447AFB',
    "     ": "",


    bull: '#79D8A5',
    bullAlt: '#E8F5F0',
    bear: '#EB3B5A',
    bearAlt: '#F8E7EC',
  },

  fonts: {
    body: '"Inter", "Helvetica Neue", sans-serif',
    heading: '"Inter", "Helvetica Neue", sans-serif',
    monospace: 'monospace',
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
    light: '1px solid',
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
    floater: '0 0 8px rgba(0, 0, 0, 0.125)',
  },

  alerts: {
    primary: {
      borderRadius: "xs",
      border: "1px solid",
      borderColor: "primaryMuted", // todo opacity trick?
      borderRadius: 'roundish',
      bg: "primary",
      color: "textAlt",
    },
    success: {
      variant: "alerts.primary",
      borderColor: "successMuted",
      bg: "successAlt",
      color: "success",
    },
    notice: {
      variant: "alerts.primary",
      borderColor: "noticeMuted",
      bg: "noticeAlt",
      color: "notice",
    },
    warning: {
      variant: "alerts.primary",
      borderColor: "warningMuted",
      bg: "warningAlt",
      color: "warning",
    },
  },

  badges: {
    primary: {
      py: 1,
      px: 4,
      borderRadius: "roundish",
      variant: "text.caps",
      color: "primary",
      bg: "foreground",
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
      color: "textAlt",
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
      bg: "foreground",
      color: "textMuted",
      border: "1px solid",
      borderColor: "secondary",
      "&:hover": {
        bg: "secondaryMuted",
        // color: "secondaryEmphasis",
        // borderColor: "secondaryEmphasis",
      },
      "&:active": {
        borderColor: "secondaryEmphasis",
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
        // opacity: 0.5,
        bg: "primaryMuted",
        pointerEvents: "none",
        cursor: "not-allowed",
      },
    },
    smallOutline: {
      variant: "buttons.small",
      bg: "foreground",
      color: "secondary",
      border: "1px solid",
      borderColor: "secondary",
      "&:hover": {
        bg: "foreground",
        color: "secondaryEmphasis",
        borderColor: "secondaryEmphasis",
      },
      "&:active": {
        bg: "foreground",
        borderColor: "secondaryAlt",
        color: "secondaryAlt",
      },
      "&:disabled": {
        bg: "foreground",
        pointerEvents: "none",
        cursor: "not-allowed",
        borderColor: "secondaryMuted",
        opacity: 0.5,
      },
    },
    clear: {
      bg: "transparent",
      p: 1,
    },
    close: {
      color: "text",
    },
    menu: {
      color: "text",
    },
    icon: {},
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
      borderColor: "secondary",
      color: "text",
      p: 2,
      "&:focus": {
        borderColor: "secondaryEmphasis",
        color: "text",
      },
    },
    inputDanger: {
      variant: "forms.input",
      borderColor: "warning",
      color: "text",
      "&:focus": {
        borderColor: "warning",
        color: "text",
      },
    },
    textarea: { variant: "forms.input" },
    textareaDanger: { variant: "forms.inputDanger" },
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
      bg: "foreground",
    },
  },
  messages: {}, // Defaults to "primary" & "highlight"
  text: {
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
    },

    caps: {
      textTransform: "uppercase",
      letterSpacing: "0.05em",
      color: "textMuted",
      fontSize: 0,
      fontWeight: "bold",
    },

    h1: {
      fontSize: 8,
      letterSpacing: "0.3px",
      fontWeight: "semiBold",
    },

    h2: {
      fontSize: 6,
      lineHeight: "loose",
      fontWeight: "semiBold",
      letterSpacing: "0.4px",
    },

    h3: {
      fontSize: 5,
      lineHeight: "loose",
      fontWeight: "semiBold",
      letterSpacing: "0.4px",
    },

    bigText: {
      fontSize: 7,
    },
    boldBody: {
      fontSize: 3,
      fontWeight: "semiBold",
      letterSpacing: "0.3px",
    },
    small: {
      fontSize: 1,
    },
    inputText: {
      fontSize: 3,
      fontWeight: "normal",
    },
    smallDanger: {
      fontSize: 2,
      color: "warning",
    },
    muted: {
      color: "textMuted",
      fontSize: 4,
      lineHeight: "body",
    },
  },
  links: {
    nav: {
      p: 2,
      fontSize: 5,
      fontWeight: "body",
      letterSpacing: "0.4px",
      color: "text",
      cursor: "pointer",
      "&:hover": {
        color: "primary",
        cursor: "pointer",
      },
    },

    footer: {
      fontSize: 4,
      fontWeight: "semiBold",
      letterSpacing: "0.4px",
      color: "text",
      cursor: "pointer",
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
    time: {
      display: "inline",
      major: {
        fontSize: 4,
        fontWeight: "semiBold",
      },
      minor: {
        fontSize: 1,
        fontWeight: "body",
        color: "textMuted",
      },
    },
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    statusBox: {
      layout: {
        border: "1px solid",
        borderRadius: "medium",
        fontSize: 2,
        fontWeight: "bold",
        py: 3,
        px: 4,
        mt: 7,
        lineHeight: "body",
        width: "100%",
      },
      warning: {
        variant: "styles.statusBox.layout",
        bg: "warningMuted",
        borderColor: "warning",
        color: "warningEmphasis",
      },
      success: {
        variant: "styles.statusBox.layout",
        bg: "primaryMuted",
        borderColor: "primaryEmphasis",
        color: "primaryAlt",
      },
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
