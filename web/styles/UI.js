export default ({ typography, spacingBase, colors, helpers }) => {
  const UI = {
    colors: {
      text: colors.black,
      link: {
        default: colors.grayDark,
        hover: colors.black
      },

      button: {
        default: colors.black,
        hover: colors.grayDark,
        text: colors.white
      }
    },

    layout: {
      exampleValue: spacingBase * 50 // 200
    }
  };

  UI.macros = {};

  return UI;
};
