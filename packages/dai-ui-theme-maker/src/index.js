
export default {
  useBorderBox: true,
  useBodyStyles: true,

  breakpoints: ['40em', '52em', '64em'],

  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body:
      '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu',
    heading:
      '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu',
    monospace: 'monospace'
  },

  fontSizes: [10, 12, 14, 16, 18, 20, 24, 32, 48, 64, 96],

  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
    semiBold: 500
  },

  lineHeights: {
    body: 1.5,
    heading: 1.125,
    tight: 1.05,
    loose: 1.2
  },
  colors: {
    text: '#231536',
    background: '#F6F8F9',
    primary: '#1AAB9B',
    primaryHover: '#139D8D',
    primaryActive: '#098C7D',
    lightGreen: '#B6EDE7',
    lightCyan: '#E7FCFA',
    darkCyan: '#2DC1B1',
    graphite: '#48495F',
    lightGraphite: '#7E7E88',
    purple: '#447AFB',
    blackThree: '#333',
    border: '#D4D9E1',
    white: '#fff',
    grayishBlue: '#9FAFB9',
    darkGrayishBlue: '#708390',
    yellow: '#FFF1CF',
    orange: '#E67002',
    lightOrange: '#FFF9ED',
    borderOrange: '#FBCC5F'

    // text: '#000',
    // background: '#fff',
    // primary: '#07c',
    // secondary: '#30c',
    // muted: '#f6f6f6',
  },

  borders: {
    light: '1px solid'
  },

  buttons: {
    primary: {
      outline: 'none',
      fontFamily: 'body',
      fontSize: 2,
      px: 4,
      py: 2,
      color: 'white',
      fontWeight: 'semiBold',
      letterSpacing: '0.03em',
      bg: 'primary',
      '&:hover': {
        bg: 'primaryHover'
      },
      '&:active': {
        bg: 'primaryActive'
      },
      '&:disabled': {
        bg: 'lightGreen',
        pointerEvents: 'none',
        cursor: 'not-allowed'
      }
    },
    outline: {
      variant: 'buttons.primary',
      bg: 'transparent',
      color: 'graphite',
      border: '1px solid',
      cursor: 'pointer',
      borderColor: 'border',
      '&:hover': {
        bg: 'transparent',
        color: 'lightGraphite',
        borderColor: 'lightGraphite'
      },
      '&:active': {
        borderColor: 'text',
        color: 'text'
      }
    },

    pill: {
      outline: 'none',
      variant: 'text.caps',
      letterSpacing: '0.05em',
      cursor: 'pointer',
      py: 1,
      px: 3,
      color: 'white',
      bg: 'primary',
      border: '1px solid',
      borderColor: 'primary',
      '&:hover': {
        bg: 'primaryHover'
      },
      '&:active': {
        bg: 'primaryActive'
      },
      '&:disabled': {
        opacity: 0.5,
        // bg: 'lightGreen',
        pointerEvents: 'none',
        cursor: 'not-allowed'
      }
    },
    pillInactive: {
      variant: 'buttons.pill',
      bg: 'transparent',
      color: 'lightGraphite',
      border: '1px solid',
      borderColor: 'border',
      '&:hover': {
        bg: 'transparent',
        color: 'graphite',
        borderColor: 'lightGraphite'
      },
      '&:active': {
        bg: 'transparent',
        borderColor: 'text',
        color: 'text'
      }
    },
    clear: {
      bg: 'transparent',
      p: 1
      // p: 0
    },

    textual: {
      background: 'transparent',
      color: 'purple',
      outline: 'none',
      cursor: 'pointer',
      fontSize: 1
    }
  },

  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading'
    },

    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      color: 'graphite',
      fontSize: 0,
      fontWeight: 'bold'
    },

    h1: {
      fontSize: 8,
      letterSpacing: '0.3px',
      fontWeight: 'semiBold'
    },

    h2: {
      fontSize: 6,
      lineHeight: 'loose',
      fontWeight: 'semiBold',
      letterSpacing: '0.4px'
    },

    bigText: {
      fontSize: 8
    },
    boldBody: {
      fontSize: 3,
      fontWeight: 'semiBold',
      letterSpacing: '0.3px'
    },
    small: {
      fontSize: 1
    },
    inputText: {
      fontSize: 3,
      fontWeight: 'normal'
    },
    smallDanger: {
      fontSize: 1,
      color: 'red'
    },
    muted: {
      color: 'grayishBlue',
      fontSize: 4,
      lineHeight: 'body'
    }
  },
  links: {
    nav: {
      fontSize: 5,
      fontWeight: 'body',
      letterSpacing: '0.4px',
      color: 'blackThree',
      cursor: 'pointer',
      '&:hover': {
        color: 'primary',
        cursor: 'pointer'
      }
    },

    footer: {
      fontSize: 4,
      fontWeight: 'semiBold',
      letterSpacing: '0.4px',
      color: 'blackThree',
      cursor: 'pointer'
    }
  },
  styles: {
    time: {
      display: 'inline',
      major: {
        fontSize: 4,
        fontWeight: 'semiBold'
      },
      minor: {
        fontSize: 1,
        fontWeight: 'body',
        color: 'darkGrayishBlue'
      }
    },
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body'
    },
    roundedCard: {
      border: '1px solid',
      borderColor: 'border',
      p: 3,
      borderRadius: 6,
      bg: 'white'
    },
    statusBox: {
      layout: {
        border: '1px solid',
        borderRadius: 6,
        fontSize: 2,
        fontWeight: 'bold',
        py: 3,
        px: 4,
        mt: 7,
        lineHeight: 'body',
        width: '100%'
      },
      warning: {
        variant: 'styles.statusBox.layout',
        bg: 'lightOrange',
        borderColor: 'orangeBorder',
        color: 'orange'
      },
      success: {
        variant: 'styles.statusBox.layout',
        bg: 'lightCyan',
        borderColor: 'darkCyan',
        color: 'primaryActive'
      }
    },
    h1: {
      variant: 'text.heading',
      fontSize: 7
    },
    h2: {
      variant: 'text.heading',
      fontSize: 6,
      fontWeight: 'body'
    },
    h3: {
      variant: 'text.heading',
      fontSize: 4,
      py: 4,
      pb: 3,
      fontWeight: 500
    },
    h4: {
      variant: 'text.heading',
      fontSize: 4
    },
    h5: {
      variant: 'text.heading',
      fontSize: 3
    },
    a: {
      color: 'purple',
      textDecoration: 'none'
    }
    // h6: {
    //   variant: 'text.heading',
    //   fontSize: 2,
    // },
    // pre: {
    //   fontFamily: 'monospace',
    //   overflowX: 'auto',
    //   code: {
    //     color: 'inherit',
    //   },
    // },
    // code: {
    //   fontFamily: 'monospace',
    //   fontSize: 'inherit',
    // },
    // table: {
    //   width: '100%',
    //   borderCollapse: 'separate',
    //   borderSpacing: 0,
    // },
    // th: {
    //   textAlign: 'left',
    //   borderBottomStyle: 'solid',
    // },
    // td: {
    //   textAlign: 'left',
    //   borderBottomStyle: 'solid',
    // },
  }
};
