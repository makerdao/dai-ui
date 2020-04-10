import React from "react";
import { default as NextLink } from "next/link";
import {
  jsx,
  Box,
  Card,
  Grid,
  Button,
  Link,
  Text,
  Flex,
  Heading,
  Container,
} from "theme-ui";
import * as themeUI from "theme-ui";
import recipes from "../components/RecipesTemplates";
import { LiveProvider, LiveEditor, LivePreview, LiveError } from "react-live";

const scope = {
  ...themeUI,
  Link: (props) => {
    if (props.activeClassName)
      return <span className={props.activeClassName} {...props} />;
    return <span {...props} sx={{ cursor: "pointer" }} />;
  },
  // posts,
  // images,
};

const transformCode = (src) => `/** @jsx jsx */\n<>${src}</>`;

const liveTheme = { styles: [] };

const Components = () => (
  <Container>
    <Box m="2"></Box>
    <Heading variant="h2" pb={4}>
      Recipes
    </Heading>
    <Grid columns={2}>
      {recipes.map(({ title, description, playroomHash, component }, key) => (
        <Card key={key}>
          <Box
            sx={{
              maxHeight: 6,
              height: 6,
              overflow: "auto",
              zoom: 1 / 2,
              mb: 5,
            }}
          >
            <LiveProvider
              theme={liveTheme}
              code={component}
              scope={scope}
              transformCode={transformCode}
            >
              <LivePreview />
            </LiveProvider>
          </Box>
          {/* <Box
              sx={{
                height: 7,
                width: 7,
                overflow: 'hidden',
              }}
            >
              {component}
            </Box> */}
          <Flex
            sx={{
              alignItems: "flex-start",
            }}
          >
            <Box mr="4">
              <Text variant="boldBody">{title}</Text>
              <Text variant="small" pb="2">
                {description}
              </Text>
            </Box>
            <Box
              ml="auto"
              sx={{
                flexShrink: 0,
              }}
            >
              <NextLink href={`/playroom/${playroomHash}`} passHref>
                <Link
                  target="_blank"
                  sx={{
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                >
                  <Button variant="outline">Edit This</Button>
                </Link>
              </NextLink>
            </Box>
          </Flex>
        </Card>
      ))}
    </Grid>
  </Container>
);

export default Components;
