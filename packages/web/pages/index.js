import React from 'react';
import { useThemeUI, Box, Container, Text } from 'theme-ui';

import { parseTheme } from '../utils';
import { themeTemplateMapping } from '../components/StyleguideTemplates';

export default () => {
  const t = useThemeUI();

  const parsedTheme = parseTheme(t.theme, themeTemplateMapping);
  const {
    colors,
    space,
    fontSizes,
    sizes,
    radii,
    shadows,
    badges,
    text,
    alerts,
    buttons,
    fonts,
    links,
    icons,
    forms,
  } = parsedTheme;
  const structure = [
    [
      'Theme Styleguide',
      [
        ['Colors', colors],
        ['Spacing', [space, sizes]],
        ['Typography', [fonts, fontSizes]],
        ['Shadows & Radii', [shadows, radii]],
      ],
    ],
    [
      'Component Variants',
      [
        ['Buttons', buttons],
        ['Icons', icons],
        ['Text And Links', [text, links]],
        ['Badges and Alerts', [badges, alerts]],
        ['Forms', forms],
      ],
    ],
  ];

  function walk(path, index) {
    const [, children] = path;

    if (!children) return null;

    return (
      <Box
        sx={{
          mb: 4,
        }}
      >
        {path.map((item) => {
          const isTitle = typeof item === 'string';
          return Array.isArray(item) ? (
            walk(item, index + 1)
          ) : isTitle ? (
            <Text
              variant="h1"
              sx={{
                fontSize: Math.max(10 - index, 7),
                mb: 3,
                mt: 0 + index,
              }}
            >
              {item}
            </Text>
          ) : (
            <Box
              sx={{
                mb: 5,
              }}
            >
              {item}
            </Box>
          );
        })}
      </Box>
    );
  }

  return (
    <Container>
      <Box
        sx={{
          px: 0,
        }}
      >
        {walk(structure, 1)}
      </Box>
    </Container>
  );
};
