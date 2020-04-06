export const parseTheme = (theme, themeTemplateMapping) => {
  const rootKeys = Object.keys(theme);
  return rootKeys.reduce((p, k) => {
    if (!Object.keys(themeTemplateMapping).includes(k)) return p;

    const template = themeTemplateMapping[k];
    if (!template) {
      p[k] = null;
    } else {
      const variants = theme[k];

      p[k] = Object.keys(variants).map((k) => {
        return template(k, variants);
      });
    }

    return p;
  }, {});
};
