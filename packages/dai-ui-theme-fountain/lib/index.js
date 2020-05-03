const theme = {
  useBorderBox: true,
  useBodyStyles: true,

  breakpoints: ['40em', '52em', '64em'],

  colors: {
    primary: '#4C76DA',
    primaryEmphasis: '#2C52AB',
    // primaryAlt: '#098C7D',
    noticePrimary: '#87A3E6',
    noticePrimaryAlt: '#9BB3EA',
    background: '#FAFBFD',
    surface: '#FFF',
    muted: '#DFE0E2',
    mutedAlt: '#F8F9FC',
    error: '#BC2F48',

    warning: '#F1768B',
    warningAlt: '#F59DAC',

    notice: '#FAD383',
    noticeAlt: ' #FBDB98',

    success: '#79D8A6',
    successAlt: '#8FDFB5',

    bull: '#79D8A5',
    bullAlt: '#E8F5F0',
    bear: '#EB3B5A',
    bearAlt: '#F8E7EC',

    text: '#273444',
    onMuted: '#636A74',
    onPrimary: '#F9FAFC',
    onNoticePrimary: '#1B336A',
    onSuccess: '#0F5F35',
    onNotice: '#7B5B18',
    onWarning: '#751D2C',
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
      border: '1px solid',
      width: '100%',
      textAlign: 'center',
      fontSize: 1,
      fontWeight: 'bold',
      borderColor: 'noticePrimary',
      borderRadius: 'small',
      bg: 'noticePrimaryAlt',
      color: 'onNoticePrimary',
    },
    success: {
      variant: 'alerts.primary',
      borderColor: 'success',
      bg: 'successAlt',
      color: 'onSuccess',
    },
    notice: {
      variant: 'alerts.primary',
      borderColor: 'notice',
      bg: 'noticeAlt',
      color: 'onNotice',
    },
    warning: {
      variant: 'alerts.primary',
      borderColor: 'warning',
      bg: 'warningAlt',
      color: 'onWarning',
    },
  },

  badges: {
    primary: {
      py: 1,
      px: 4,
      borderRadius: 'roundish',
      variant: 'text.caps',
      color: 'primary',
      bg: 'surface',
      border: '1px solid',
      borderColor: 'primary',
    },
    success: {
      variant: 'badges.primary',
      borderColor: 'success',
      color: 'success',
    },
    notice: {
      variant: 'badges.primary',
      borderColor: 'notice',
      color: 'onNotice',
    },
    warning: {
      variant: 'badges.primary',
      borderColor: 'warning',
      color: 'warning',
    },
  },

  buttons: {
    primary: {
      borderRadius: 'small',
      cursor: 'pointer',
      outline: 'none',
      fontFamily: 'body',
      fontSize: 2,
      p: 3,
      py: 2,
      color: 'onPrimary',
      fontWeight: 'semiBold',
      bg: 'primary',
      '&:hover': {
        bg: 'primaryEmphasis',
      },
      '&:active': {
        bg: 'primaryAlt',
      },
      '&:disabled': {
        opacity: 0.8,
        // bg: 'primaryMuted',
        pointerEvents: 'none',
        cursor: 'not-allowed',
      },
    },
    round: {
      variant: 'buttons.primary',
      borderRadius: 'round',
    },
    outline: {
      variant: 'buttons.primary',
      bg: 'surface',
      color: 'onMuted',
      border: '1px solid',
      borderColor: 'muted',
      '&:hover': {
        bg: 'mutedAlt',
      },
      '&:active': {
        borderColor: 'muted',
      },
      '&:disabled': {
        bg: 'background',
        pointerEvents: 'none',
        cursor: 'not-allowed',
        opacity: 0.5,
      },
    },

    small: {
      variant: 'buttons.primary',
      textTransform: 'uppercase',
      outline: 'none',
      fontSize: 1,
      fontWeight: 'bold',
      cursor: 'pointer',
      borderRadius: 'xs',
      p: 2,
      py: 1,
      color: 'onPrimary',
      bg: 'primary',
      '&:hover': {
        bg: 'primaryEmphasis',
      },
      '&:active': {
        bg: 'primaryAlt',
      },
      '&:disabled': {
        opacity: 0.8,
        // bg: 'primaryMuted',
        pointerEvents: 'none',
        cursor: 'not-allowed',
      },
    },
    smallOutline: {
      variant: 'buttons.small',
      bg: 'surface',
      color: 'onMuted',
      border: '1px solid',
      borderColor: 'muted',
      '&:hover': {
        bg: 'mutedAlt',
      },
      '&:active': {
        borderColor: 'muted',
      },
      '&:disabled': {
        pointerEvents: 'none',
        cursor: 'not-allowed',
        opacity: 0.5,
      },
    },
    textual: {
      background: 'transparent',
      color: 'primary',
      outline: 'none',
      cursor: 'pointer',
      fontSize: 1,
    },
  },

  forms: {
    label: {
      fontSize: 2,
      fontWeight: 'body',
      py: 2,
    },
    input: {
      outline: 'none',
      borderRadius: 'small',
      background: 'surface',
      borderColor: 'muted',
      color: 'text',
      p: 2,
      '&:focus': {
        color: 'text',
      },
    },
    inputDanger: {
      variant: 'forms.input',
      borderColor: 'warning',
      color: 'text',
      '&:focus': {
        borderColor: 'warning',
        color: 'text',
      },
    },
    textarea: { variant: 'forms.input' },
    textareaDanger: { variant: 'forms.inputDanger' },
    select: { variant: 'forms.input' },
    slider: {
      height: '2px',
      borderRadius: 'small',
      color: 'text',
      '&:active, &:hover, &:focus': {
        color: 'primary',
        bg: 'primary',
        '&::-webkit-slider-thumb': {
          boxShadow: (theme) => theme.shadows.lightPrimary,
        },
      },
    },
    sliderActive: {
      variant: 'forms.slider',
      color: 'primary',
      bg: 'primary',
    },
    radio: {
      color: 'muted',
      'input:checked ~ &': {
        color: 'primary',
      },
      'input:focus ~ &': {
        bg: 'success',
      },
    },
    checkbox: {
      color: 'muted',
      'input:checked ~ &': {
        color: 'primary',
      },
      'input:focus ~ &': {
        color: 'primary',
        bg: 'success',
      },
    },
  },
  cards: {
    primary: {
      border: '1px solid',
      borderColor: 'muted',
      p: 3,
      borderRadius: 'medium',
      bg: 'surface',
    },
  },
  messages: {}, // Defaults to "primary" & "highlight"
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },

    caps: {
      textTransform: 'uppercase',
      color: 'onMuted',
      fontSize: 0,
      fontWeight: 'bold',
    },

    h1: {
      fontSize: 8,
      fontWeight: 'semiBold',
    },

    h2: {
      fontSize: 6,
      lineHeight: 'loose',
      fontWeight: 'semiBold',
    },

    h3: {
      fontSize: 5,
      lineHeight: 'loose',
      fontWeight: 'semiBold',
    },

    bigText: {
      fontSize: 7,
    },
    boldBody: {
      fontSize: 3,
      fontWeight: 'semiBold',
    },
    small: {
      fontSize: 1,
    },
    inputText: {
      fontSize: 3,
      fontWeight: 'normal',
    },
    smallDanger: {
      fontSize: 2,
      color: 'error',
    },
    muted: {
      color: 'onMuted',
      fontSize: 4,
      lineHeight: 'body',
    },
  },
  links: {
    nav: {
      p: 2,
      fontSize: 5,
      fontWeight: 'body',
      color: 'text',
      cursor: 'pointer',
      '&:hover': {
        color: 'primary',
        cursor: 'pointer',
      },
    },

    footer: {
      fontSize: 4,
      fontWeight: 'semiBold',
      color: 'text',
      cursor: 'pointer',
    },
  },
  images: {
    avatar: {},
  },
  styles: {
    spinner: {
      color: 'primary',
      strokeWidth: 3,
      size: 4,
    },
    donut: {
      color: 'primary',
      strokeWidth: 3,
      size: 6,
    },
    time: {
      display: 'inline',
      major: {
        fontSize: 4,
        fontWeight: 'semiBold',
      },
      minor: {
        fontSize: 1,
        fontWeight: 'body',
        color: 'onMuted',
      },
    },
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    statusBox: {
      layout: {
        border: '1px solid',
        borderRadius: 'medium',
        fontSize: 2,
        fontWeight: 'bold',
        py: 3,
        px: 4,
        mt: 7,
        lineHeight: 'body',
        width: '100%',
      },
      warning: {
        variant: 'styles.statusBox.layout',
        bg: 'warningAlt',
        borderColor: 'warning',
        color: 'onWarning',
      },
      success: {
        variant: 'styles.statusBox.layout',
        bg: 'successAlt',
        borderColor: 'success',
        color: 'onSuccess',
      },
    },
    h1: {
      variant: 'text.heading',
      fontSize: 7,
    },
    h2: {
      variant: 'text.heading',
      fontSize: 6,
      fontWeight: 'body',
    },
    h3: {
      variant: 'text.heading',
      fontSize: 5,
    },
    h4: {
      variant: 'text.heading',
      fontSize: 4,
    },
    h5: {
      variant: 'text.heading',
      fontSize: 3,
      py: 2,
      fontWeight: 500,
    },
    a: {
      color: 'accentBlue',
      textDecoration: 'none',
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
