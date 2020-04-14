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
import { LiveProvider, LiveEditor, LivePreview, LiveError } from "react-live";
import fs from "fs";
import path from "path";
import unified from "unified";
import parse from "remark-parse";

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

const Recipes = ({ recipes }) => (
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

export async function getStaticProps() {
  const recipesDirectory = path.join(
    process.cwd(),
    "./components/RecipesTemplatesMD"
  );
  const filenames = fs.readdirSync(recipesDirectory);

  const recipes = filenames.map((filename) => {
    const filePath = path.join(recipesDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const fileMdTree = unified().use(parse).parse(fileContents);

    return {
      title: fileMdTree.children[0].children[0].value,
      description: fileMdTree.children[1].children[0].value,
      playroomHash: fileMdTree.children[2].children[0].value,
      component: fileMdTree.children[3].value,
    };
  });

  return { props: { recipes } };
}

export default Recipes;
