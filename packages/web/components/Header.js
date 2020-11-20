import React from 'react';
import Link from 'next/link';
import { Icon } from '@makerdao/dai-ui-icons';

// import { Container, Flex, Heading, NavLink } from "theme-ui";
import {
  Container,
  jsx,
  Link as ThemeLink,
  NavLink,
  Flex,
  Heading,
  Text,
  Card,
  Grid,
  useColorMode,
  Button,
  IconButton,
  Input,
  Box,
} from 'theme-ui';

const ColorModeToggle = (props) => {
  const [mode, setMode] = useColorMode();
  return (
    <Icon
      name={'moon'}
      color="text"
      size={3}
      onClick={(e) => {
        const next = mode === 'dark' ? 'light' : 'dark';
        setMode(next);
      }}
    />
  );
};
const Header = () => {
  return (
    <Container mb={5} mt={4}>
      <Flex
        sx={{
          alignItems: 'center',
        }}
      >
        <Heading variant="mediumHeading">Dai UI</Heading>
        <Flex
          as="nav"
          sx={{
            ml: [0, 'auto'],
            alignItems: 'center',
          }}
        >
          <Link href="/">
            <NavLink
              href="/"
              sx={{
                cursor: 'default',
              }}
            >
              Styleguide
            </NavLink>
          </Link>
          <Link href="/icons">
            <NavLink
              href="/icons"
              sx={{
                cursor: 'default',
              }}
            >
              Icons
            </NavLink>
          </Link>
          <Link href="/recipes">
            <NavLink
              href="/recipes"
              sx={{
                cursor: 'default',
              }}
            >
              Recipes
            </NavLink>
          </Link>
          <Link href="/playroom">
            <NavLink
              target="_blank"
              href="/playroom"
              sx={{
                cursor: 'default',
              }}
            >
              Playroom
            </NavLink>
          </Link>
          <NavLink
            href="https://github.com/makerdao/dai-ui"
            target="_blank"
            sx={{
              pr: 0,
            }}
          >
            GitHub
          </NavLink>
          <Box ml={3}>
            <ColorModeToggle />
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Header;
