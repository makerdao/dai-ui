export default ({ typography, spacingBase, colors, helpers }) => {
  // Most style presets related to the project should go here!
  const UI = {
    colors: {
      text: colors.black,
      linkHover: colors.gray,
      top: colors.gray,
      headerText: colors.black,
      byline: colors.gray,

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
      topheight: spacingBase * 50, // 128
      pageWidthMax: spacingBase * 230, // 920
      gridHorizontalGutters: spacingBase * 10, // 16
      gridVerticalGutters: spacingBase * 10, // 16,
      interviewTileImageHeight: spacingBase * 60, // 120
      introTileWidth: spacingBase * 300,
      minTileWidth: spacingBase * 20
    }
  };

  UI.macros = {};

  return UI;
};
