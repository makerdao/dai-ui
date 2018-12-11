module.exports = function(options) {
  var fontSizes = options.fontSizes;
  var colors = options.colors;
  var lineHeights = options.lineHeights;
  var fontWeights = options.fontWeights;

  var text = ["left", "right", "center"].reduce(function(p, v) {
    var obj = p;
    obj[v] = { textAlign: v };
    return p;
  }, {});

  if (fontWeights) {
    Object.keys(fontWeights).map(function(s) {
      text[s] = { fontWeight: fontWeights[s] };
      return true;
    });
  }

  if (fontSizes) {
    Object.keys(fontSizes).map(function(s) {
      text[s] = { fontSize: fontSizes[s] };
      text[s + "Double"] = { fontSize: fontSizes[s] * 2 + "px" };
      return true;
    });
  }

  if (colors) {
    Object.keys(colors).map(function(c) {
      text[c] = { color: colors[c] };
      return true;
    });
  }

  if (lineHeights) {
    Object.keys(lineHeights).map(function(s) {
      text[s] = { lineHeight: lineHeights[s] };
      return true;
    });
  }

  text.truncate = {
    maxWidth: "100%",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  };

  text.linkDecorated = {
    textDecoration: "underline"
  };

  return text;
};
