var propertyReducer = require("../utils/propertyReducer");

module.exports = function() {
  var zValues = arguments[0] ? arguments[0] : {};
  var z = propertyReducer(zValues, "zIndex");

  return z;
};
