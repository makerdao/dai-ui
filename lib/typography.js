var typography = {
  fontFamily: {
    brand:
      '"Helvetica Neue", "Neue Helvetica W02", Helvetica, Arial, sans-serif',
    system:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif'
  },

  // based on a scale ratio of 1.333
  // http://www.modularscale.com/?16&px&1.333
  fontSizes: {
    xs: 9,
    s: 12,
    sm: 14,
    m: 16,
    ml: 21,
    l: 28,
    xl: 37,
    xxl: 50
  },

  letterSpacing: {
    tight: 0.03
  },

  fontWeights: {
    normal: 400,
    bold: 700
  }
};

module.exports = {
  values: typography
};
