var propertyReducer = require("../utils/propertyReducer");

module.exports = function() {
  var colors = arguments[0] ? arguments[0] : {};
  var svg = propertyReducer(colors, "fill");

  return svg;
};
