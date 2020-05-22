const withMDX = require("@next/mdx")({
  options: {
    remarkPlugins: [],
  },
});
module.exports = withMDX({
  pageExtensions: ["js", "jsx", "mdx"],
});
