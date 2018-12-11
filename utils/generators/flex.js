module.exports = function() {
  var properties = [
    ["align", "alignItems"],
    ["self", "alignSelf"],
    ["justify", "justifyContent"]
  ];

  var values = [
    ["Start", "flex-start"],
    ["End", "flex-end"],
    ["Center", "center"],
    ["Stretch", "stretch"],
    ["Between", "space-between"],
    ["Around", "space-around"]
  ];

  var flex = properties.reduce(function(o, p) {
    var obj = o;

    values.map(function(v) {
      var key = "" + p[0] + v[0];
      obj[key] = {};
      obj[key][p[1]] = v[1];
      return true;
    });
    return obj;
  }, {});

  flex.wrap = {
    flexWrap: "wrap"
  };

  flex.center = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };

  flex.column = {
    display: "flex",
    flexDirection: "column"
  };

  flex.row = {
    display: "flex",
    flexDirection: "row"
  };

  flex.noShrink = {
    flexShrink: 0
  };

  flex.noWrap = {
    flexWrap: "nowrap"
  };

  flex.grow = {
    flexGrow: 1
  };

  flex.shrink = {
    flexShrink: 1
  };

  flex.noGrow = {
    flexGrow: 0
  };

  return flex;
};
