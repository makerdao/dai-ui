var propertyReducer = require("../utils/propertyReducer");

module.exports = function() {
  var colors = arguments[0] ? arguments[0] : {};
  var bg = propertyReducer(colors, "backgroundColor");

  // background cover aye
  bg.cover = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  };

  bg.image = function(url) {
    return { backgroundImage: 'url("' + url + '")' };
  };

  return bg;
};
