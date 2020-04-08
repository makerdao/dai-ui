/** @jsx jsx */
import React from 'react';
import { default as NextLink } from 'next/link';
import {
  jsx,
  Styled,
  Box,
  Flex,
  Grid,
  Button,
  Link,
  Text,
  Heading,
  Image,
  Card,
  Label,
  Input,
  Select,
  Textarea,
  Radio,
  Checkbox,
  Slider,
  Field,
  Progress,
  Donut,
  Spinner,
  Avatar,
  Badge,
  Close,
  Alert,
  Divider,
  Embed,
  AspectRatio,
  AspectImage,
  Container,
  NavLink,
  Message,
  IconButton,
  MenuButton,
} from 'theme-ui';
import * as themeUI from 'theme-ui';
import recipes from '../components/RecipesTemplates';
import { LiveProvider, LiveEditor, LivePreview, LiveError } from 'react-live';

const everythingPlayroomHash =
  '#?code=N4Igxg9gJgpiBcIA8BhCA7ALgQwJbpgCcA+AHXQAIKkBxQ3KCgWwF5SQAmdigZwA8WwYBQDm9KACUIAdxrYADvAocKAX1VlKVagCEIfXgKEUAbtnrYsS9j0wBPADYweAOkIQArulhQU5qNzqmtraSAASMNhQ+CLEADLYdp6YPBSWjACy5gDWHvJIAPQRUTHBIdQAIrgmDETEhVU1sCTk5dQAYk58ZW1IAHLYJnH42cxsnOzEYRBMMIUDQyM95f2Dw+ijrOxcIMQ6DhAi82tLrW3UC+ub4zvEAIIARsnHixvLIauv19uTCw4jPBeV3e1AKnRg3TOHzuTkImHusMwSh4MxgaURzGcPGwIjmBRhRHhUNCxWi6FiABUABa4VK0tIUKmRMlHIrM0rEqhICkQ+EAZVRFB02B4uDAFB5fEwhUlRK0H2BAEkAORMBlXQrAznUBIPGAOe4UBzYPUOCgAMwghAomBpqUG2BwhHgmpN+pBSDuZidvEIYEE7CpmEwigKBWkEZc5twDgcTA8hEIiRckCYBQ4AAYM+ms+wNIUvY7zB7hVBccQAOq4W0M0u4wp1mAejJYnFNgWzTE8bG40QQZyMoh4lvdtvLBv6cd6Az8QTCMwWKwUGz2JyudxeHx+QgBEBqDTa8Ls8nERXoeQeFJpbxCy+YDCAtklE+Hxq1EgNarvj26913CW8hQdyEJErqmh6srmJE9QFJBIHYB6dAMCCXK-gaaEWlaFBnheKRge62pcjhl4wcRcrnNQZEULA5rYB4DiYAAatgDgeDA4wVDAtH0ZgFDMaxMCTIUZEoZUX7NDBb4SYROpuga7S4PqjDSNWVJGnJ16MDRdEMaYLFsfhBoyUgClKTJVDGqa4wAKJMHgDjsOZFDoNgszjDAdkxo58rnNpPH8Wx4x+bpZgCZh1oefZFqKQ4u4yQUolIGhxAVO48hQDIlB8vqMBgNKBTJcZ2VOHl1FcTpTH6ex7ARLGECTE5SAQPImC4BgUz6gchTNa17WNT1bXoFMuDdS1g2iVyA3tToMAwPkBRTUN-VjdNEDNaNvVLT5HwFMVuXkSsBRIVAHpSXUn5NHUh7JS26AeLewYYIZzYwHdOh3u1hS3R472PVtvTJYqkCUL996UCpNZ8oxNDPYeQMYKDfXbaEPAmCITl8EwDjoDw4xBiG8BhhG0guNIADMLhWiIOZZgUqPoyATkqVAto3AALN5FFUEyuAiEG7Oc1zNQwNI07jBmFASxwbPKBzjPIyE0axuM6AYIJ8tc7wmDuNk1XgAmIFYGgByEILFG2DrMAALTM6zPwa1zFsQLrVv-AQYAKOMG7eGb5xOy7bswAAVhA+Be54PsOxRYDGt24zmpEtpEBaidMoQVswHY6syRN1DyI6alQOMGQAIwUCXHA8GzVsABzlyXtf1xQdcl2XNdWzL7et83Vut7XvcNzXABeQkFPntq50gYC4H6TgUGAAjsBX3BgHY4zL3uhDjGTo-T7PTbGXTaMegU8PoIj-0rMlAAK9B2YQdgPWDsPI0gF97B96ANp-P5ycQADyl5A5PyegVP+h4L56UXJgcYyRA6TAvt-P6p1xLnQKGdFor9kooCZGAbITw+DOBfr0HBuV8GTkKKQvBBCPRUPIQYYKmA6EwCLsAbWbF8wFDoTQ66f8JAlAgCAnGxCVj8OiBAGCYi2oeikYIxhzDWHsJgJw2R44CjTinPoQwc4oG4EsEiZcIBbCOGcG4COW5-CBAPK-UkpQ+T-GaPaG8cQIBRCII+WxL4sF-z5PIfABBCAiI+L4-xaCQnoACb-cCFQMCXiCaEGJd14QNFiQdD4GDJKoMwQDHxDiiDxK5PY78hQinSW8eBW+hwQLdiFOYSWABSAp1BKliCxDBFp1SeBRPdB0rEtTrQAFYMyNLAeBQ8vSal2SMCXVQekBKCDLgUZQnCJldN4RU9wrSanCmtCXLMIzCqv1WcwbA0zZmhUCsAFQSyOArM2Z0tRGjiRvy0bOYwC49FLhXCY9c5iWHbl3PuWhliFbaKEE5KZVYWZUiUBwAZAA2AANE5fOUAWSwuRaCqgTwdxECkR4HgSg2aYs1gQvkVIogyGsCACWEsa7yAMIQEQDxsAAAoMyIslpyjlksXAVwGQASl9iEdQ2pEq2T1IwHgfo8bBnkISomkYkiXg8HqFMMwCgeUlUdPoKAoAAH1rISAAFomGNRkbgCVjKymIBKlhPhTC1EEfgBkHsdwyl5CfAFjzJxnEKMdTQlCMA4HwFddAIBEUgCTrMHgCAADaIAsi60IJxbiDEQAAF1I22ypLG+AcayaZkRQAdnhTXDNqggA';

const scope = {
  ...themeUI,
  Link: (props) => {
    if (props.activeClassName)
      return <span className={props.activeClassName} {...props} />;
    return <span {...props} sx={{ cursor: 'pointer' }} />;
  },
  // posts,
  // images,
};

const transformCode = (src) => `/** @jsx jsx */\n<>${src}</>`;

const liveTheme = { styles: [] };

const Components = () => {
  return (
    <Container>
      <Box m="2"></Box>
      <Heading variant="h2" pb={4}>
        Recipes
      </Heading>

      <Grid columns={2}>
        {recipes.map(([title, playroomHash, component]) => {
          return (
            <Box
              sx={{
                variant: 'styles.roundedCard',
              }}
            >
              <Box sx={{
                maxHeight: 6,
                height: 6,
                overflow: 'scroll',
                mb: 4
              }}>
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

              <Text variant="boldBody" pb="2">
                {title}
              </Text>

              <NextLink href={`/playroom/${playroomHash}`} passHref>
                <Link
                  target="_blank"
                  sx={{
                    cursor: 'pointer',
                    textDecoration: 'underline',
                  }}
                >
                  {' '}
                  <Button variant="outline">Edit This</Button>
                </Link>
              </NextLink>
            </Box>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Components;
