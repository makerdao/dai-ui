import React from 'react';
import Link from 'next/link';

import { useColorMode, Container, Flex, Heading, NavLink } from 'theme-ui';

export default function Header() {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <Container mb={5} mt={4}>
      <Flex
        sx={{
          alignItems: 'center',
        }}
      >
        <Heading variant="h2">Dai UI</Heading>

        <Flex
          as="nav"
          sx={{
            ml: [0, 'auto'],
            mr: [null, 6],
          }}
        >
          <Link href="/">
            <NavLink
              href="/"
              sx={{
                cursor: 'default',
                // px: [4, 6]
              }}
            >
              Styleguide
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
                // px: [4, 6]
              }}
            >
              Playroom
            </NavLink>
          </Link>
        </Flex>
      </Flex>
    </Container>
  );
}
