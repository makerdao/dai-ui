module.exports = function() {
  var disp = [
    ["inline", "inline"],
    ["inlineBlock", "inline-block"],
    ["inlineFlex", "inline-flex"],
    ["block", "block"],
    ["flex", "flex"],
    ["none", "none"]
  ].reduce(function(p, v) {
    var obj = p;
    obj[v[0]] = { display: v[1] };
    return obj;
  }, {});

  return disp;
};
