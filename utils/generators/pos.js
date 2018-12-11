module.exports = function() {
  var pos = ["static", "absolute", "fixed", "relative"].reduce(function(p, v) {
    var obj = p;

    obj[v] = { position: v };
    return obj;
  }, {});

  pos.cover = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  };

  return pos;
};
