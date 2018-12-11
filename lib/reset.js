module.exports = `
  *, *:before, *:after {
    box-sizing:border-box;
    position:relative;
  }

  body > div:first-child,
  #__next,
  #__next > div,
  #__next > div > div {
    height: 100%;
  }

  html, body {
    height: 100%;
  }
`;
