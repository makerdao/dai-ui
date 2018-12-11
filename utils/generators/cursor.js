module.exports = function() {
  var cursor = ["default", "pointer", "auto", "text"].reduce(function(p, v) {
    var obj = p;

    obj[v] = { cursor: v };
    return obj;
  }, {});

  return cursor;
};
