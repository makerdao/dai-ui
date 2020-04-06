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
    <Container>
      {Object.keys(parsedTheme).map((k) => {
        if (!Object.keys(themeTemplateMapping).includes(k)) return null;
        // if (k !== 'buttons') return null;
        const isStyleguide = ['colors', 'space'].includes(k);
        const isTextVariants = k === 'text';
        return (
          <Box pb={6}>
            <Heading
              variant="h2"
              pb={4}
              sx={{
                textTransform: 'capitalize',
              }}
            >
              {k}
            </Heading>
            <Grid gap={2} columns={isTextVariants ? 2 : 4}>
              {parsedTheme[k].map((el) => {
                return (
                  <Box
                    sx={{
                      variant: isStyleguide ? '' : 'styles.roundedCard',
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
