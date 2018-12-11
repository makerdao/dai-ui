var properties = ["a", "v", "h", "t", "l", "b", "r"];
var declarations = [["m", "margin"], ["p", "padding"]];

module.exports = function() {
  var sizes = arguments[0] ? arguments[0] : null;

  if (!sizes) return {};

  var spacing = properties.reduce(function(o, p) {
    var obj = o;
    declarations.map(function(d) {
      var key = "" + d[0] + p;
      obj[key] = {};
      Object.keys(sizes).map(function(s) {
        obj[key][s] = (function() {
          // eslint-disable-line
          var style = {};

          if (!!~["a", "v", "t"].indexOf(p)) style[d[1] + "Top"] = sizes[s]; // eslint-disable-line
          if (!!~["a", "v", "b"].indexOf(p)) style[d[1] + "Bottom"] = sizes[s]; // eslint-disable-line
          if (!!~["a", "h", "l"].indexOf(p)) style[d[1] + "Left"] = sizes[s]; // eslint-disable-line
          if (!!~["a", "h", "r"].indexOf(p)) style[d[1] + "Right"] = sizes[s]; // eslint-disable-line
          return style;
        })();
        return true;
      });
      return true;
    });
    return obj;
  }, {});

  spacing.height = {
    full: {
      height: "100%"
    }
  };

  spacing.width = {
    full: {
      width: "100%"
    }
  };

  return spacing;
};
