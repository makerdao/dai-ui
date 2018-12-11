/**
 * Property Reducer
 * takes in a map of key: values and a css property
 * returns a map of key: {property:value}
 *
 * @param {any} [map={}]
 * @param {any} property
 */
module.exports = function() {
  var map = arguments[0] ? arguments[0] : {};
  var property = arguments[1];

  return Object.keys(map).reduce(function(obj, v) {
    obj[v] = {};
    obj[v][property] = map[v];

    return obj;
  }, {});
};
