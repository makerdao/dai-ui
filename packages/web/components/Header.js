import React from "react";
import Link from "next/link";

import { Container, Flex, Heading, NavLink } from "theme-ui";

const Header = () => {
  return (
    <Container mb={5} mt={4}>
      <Flex
        sx={{
          alignItems: "center",
        }}
      >
        <Heading variant="h2">Dai UI</Heading>
        <Flex
          as="nav"
          sx={{
            ml: [0, "auto"],
            mr: [null, 6],
          }}
        >
          <Link href="/">
            <NavLink
              href="/"
              sx={{
                cursor: "default",
              }}
            >
              Styleguide
            </NavLink>
          </Link>
          <Link href="/recipes">
            <NavLink
              href="/recipes"
              sx={{
                cursor: "default",
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
                cursor: "default",
              }}
            >
              Playroom
            </NavLink>
          </Link>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Header;
