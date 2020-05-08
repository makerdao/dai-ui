export const parseTheme = (theme, themeTemplateMapping) => {
  const rootKeys = Object.keys(theme);
  console.log(rootKeys, themeTemplateMapping);
  return rootKeys.reduce((p, k) => {
    if (!Object.keys(themeTemplateMapping).includes(k)) return p;

    const template = themeTemplateMapping[k];
    if (!template) {
      p[k] = null;
    } else {
      console.log(k, template);
      const variants = theme[k];

      p[k] = template(k, variants);
    }

    return p;
  }, {});
};
