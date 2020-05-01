import React from 'react';
import Link from 'next/link';

import {
  Container,
  Flex,
  Heading,
  NavLink,
  Select,
  Box,
  Label,
} from 'theme-ui';

import useSystemStore, { themes } from '../stores/system';

const Header = () => {
  const { setCurrentTheme, currentTheme } = useSystemStore((state) => state);

  return (
    <Container mb={5} mt={4}>
      <Flex
        sx={{
          justifyContent: 'flex-end',
        }}
      >
        <Label
          sx={{
            display: 'flex',
            width: 'auto',
            alignItems: 'center',
          }}
        >
          Theme
          <Box
            sx={{
              width: '200px',
              ml: 2,
            }}
          >
            <Select
              defaultValue={currentTheme}
              value={currentTheme}
              onChange={(e) => setCurrentTheme(e.target.value)}
            >
              {Object.keys(themes).map((theme) => (
                <option key={theme} value={theme}>
                  {theme}
                </option>
              ))}
            </Select>
          </Box>
        </Label>
      </Flex>
    </Container>
  );
};

export default Header;
