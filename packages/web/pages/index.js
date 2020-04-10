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
      {Object.keys(parsedTheme).map((k, key) => {
        if (!Object.keys(themeTemplateMapping).includes(k)) return null;
        // if (k !== 'buttons') return null;
        const isStyleguide = [
          'colors',
          'space',
          'fontSizes',
          'sizes',
          'radii',
          'shadows',
          'badges',
          'alerts',
          'fonts',
        ].includes(k);
        const isTextVariants = k === 'text';
        const isFontSizesVariants = k === 'fontSizes';
        const isSizesVariants = k === 'sizes';
        const isFonts = k === 'fonts';

        return (
          <Box pb={6} key={key}>
            <Heading
              variant="h2"
              pb={4}
              sx={{
                textTransform: 'capitalize',
              }}
            >
              {k}
            </Heading>
            <Grid
              gap={2}
              columns={
                isTextVariants
                  ? 2
                  : isFontSizesVariants
                  ? 'repeat(12,auto)'
                  : isSizesVariants
                  ? 'repeat(9,auto)'
                  : isFonts
                  ? 1
                  : 4
              }
              sx={{
                overflow: 'hidden',
              }}
            >
              {parsedTheme[k].map((el, key) => {
                const Wrapper = isStyleguide ? Box : Card;

                return <Wrapper key={key}>{el}</Wrapper>;
              })}
            </Grid>
          </Box>
        );
      })}
    </Container>
  );
};
