var scale = 4;

var sizes = {
  auto: 'auto',
  nil: 0,
  s: scale,
  m: scale * 2,
  ml: scale * 2.5,
  l: scale * 3,
  xl: scale * 4,
  xxl: scale * 6,
  xxxl: scale * 9,
  xxxxl: scale * 12
};

module.exports = {
  base: scale,
  values: sizes
};
