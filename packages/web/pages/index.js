/** @jsx jsx */

import React from 'react';
import {
  jsx,
  Styled,
  useThemeUI,
  Grid,
  Card,
  Box,
  Heading,
  Container,
} from 'theme-ui';

import { parseTheme } from '../utils';
import { themeTemplateMapping } from '../components/StyleguideTemplates';

export default () => {
  const t = useThemeUI();

  const parsedTheme = parseTheme(t.theme, themeTemplateMapping);

  return (
    <Container
      sx={{
        maxWidth: 1140,
      }}
    >
      {Object.keys(parsedTheme).map((k) => {
        if (!Object.keys(themeTemplateMapping).includes(k)) return null;
        // if (k !== 'buttons') return null;
        return (
          <Box pb={6}>
            <Heading pb={4}>{k}</Heading>
            <Grid gap={2} columns={4}>
              {parsedTheme[k].map((el) => {
                return (
                  <Box
                    sx={{
                      variant: 'styles.roundedCard',
                    }}
                  >
                    {el}
                  </Box>
                );
              })}
            </Grid>
          </Box>
        );
      })}
    </Container>
  );
};
