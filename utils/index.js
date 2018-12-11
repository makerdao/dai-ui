var bg = require("./generators/bg");
var cursor = require("./generators/cursor");
var disp = require("./generators/disp");
var flex = require("./generators/flex");
var pos = require("./generators/pos");
var spacing = require("./generators/spacing");
var svg = require("./generators/svg");
var text = require("./generators/text");
var z = require("./generators/z");

var generate = function(typography, spacingScale, colors) {
  var fontSizes = typography.fontSizes;
  var lineHeights = typography.lineHeights;
  var fontWeights = typography.fontWeights;

  return {
    disp: disp(),
    bg: bg(colors),
    cursor: cursor(),
    flex: flex(),
    pos: pos(),
    spacing: spacing(spacingScale),
    svg: svg(colors),
    text: text({ fontSizes: fontSizes, lineHeights: lineHeights, fontWeights: fontWeights, colors: colors }),
    z: z()
  };
};

/**
 * List of namespaces which generates style helpers / utility classes
 */
module.exports = {
  bg: bg,
  cursor: cursor,
  disp: disp,
  flex: flex,
  pos: pos,
  spacing: spacing,
  svg: svg,
  text: text,
  z: z,
  generate: generate
};
