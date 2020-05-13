import makerTheme from '@makerdao/dai-ui-theme-maker';

const theme = {
  ...makerTheme,
  colors: {
    ...makerTheme.colors,
    background: '#122229',
    text: '#CCD7DC',
    surface: '#122229',
    primary: '#00FF66',
    primaryEmphasis: '#D7F614',
    primaryAlt: '#DB1B60',
    onPrimary: '#122229',
    onBackground: '#fff'
  },
  fonts: {
    body: '"Rubik", sans-serif',
    heading: '"Space Mono", monospace',
    monospace: 'monospace',
  },

  buttons: {
    ...makerTheme.buttons,
    primary: {
      borderRadius: 0,
      cursor: 'pointer',
      outline: 'none',
      fontFamily: 'heading',
      fontSize: 2,
      p: 3,
      py: 2,
      color: 'onPrimary',
      fontWeight: 'bold',
      bg: 'primary',
      '&:hover': {
        bg: 'primaryEmphasis',
      },
      '&:active': {
        bg: 'primaryAlt',
      },
      '&:disabled': {
        bg: 'primaryMuted',
        pointerEvents: 'none',
        cursor: 'not-allowed',
      },
    },
  },
  links: {
    nav: {
      p: 2,
      px: 4,
      fontSize: 4,
      fontWeight: 'body',
      letterSpacing: '0.4px',
      fontFamily: 'heading',
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
      fontFamily: 'heading',
      letterSpacing: '0.4px',
      color: 'text',
      cursor: 'pointer',
    },
  },

  text: {
    ...makerTheme.text,
    heading: {
      fontWeight: 'body',
      color: 'onBackground',
      fontSize: 8
    },
    heading2: {
      variant: 'text.heading',
      fontSize: 7
    },
    body: {
      color: 'text',
      fontSize: 3
    },

    largerBody: {
      fontSize: 5,
      color: 'text'
    }
  },

  styles: {
    ...makerTheme.styles,
  },

  icons: {
 
  
  },
};

export default theme;
