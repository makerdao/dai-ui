const withMDX = require("@next/mdx")();
module.exports = withMDX({
  pageExtensions: ["js", "mdx"],
  webpack: (config) => {
    config.module.rules.push({
      test: /\.recipe.md$/,
      use: "raw-loader",
    });

    return config;
  },
});
