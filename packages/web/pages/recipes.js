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

const playroomHash =
  '#?code=N4Igxg9gJgpiBcIA8BhCA7ALgQwJbpgCcA+AHXQAIKkBxQ3KCgWwF5SQAmdigZwA8WwYBQDm9KACUIAdxrYADvAocKAX1VlKVagCEIfXgKEUAbtnrYsS9j0wBPADYweAOkIQArulhQU5qNzqmtraSAASMNhQ+CLEADLYdp6YPBSWjACy5gDWHvJIAPQRUTHBIdQAIrgmDETEhVU1sCTk5dQAYk58ZW1IAHLYJnH42cxsnOzEYRBMMIUDQyM95f2Dw+ijrOxcIMQ6DhAi82tLrW3UC+ub4zvEAIIARsnHixvLIauv19uTCw4jPBeV3e1AKnRg3TOHzuTkImHusMwSh4MxgaURzGcPGwIjmBRhRHhUNCxWi6FiABUABa4VK0tIUKmRMlHIrM0rEqhICkQ+EAZVRFB02B4uDAFB5fEwhUlRK0H2BAEkAORMBlXQrAznUBIPGAOe4UBzYPUOCgAMwghAomBpqUG2BwhHgmpN+pBSDuZidvEIYEE7CpmEwigKBWkEZc5twDgcTA8hEIiRckCYBQ4AAYM+ms+wNIUvY7zB7hVBccQAOq4W0M0u4wp1mAejJYnFNgWzTE8bG40QQZyMoh4lvdtvLBv6cd6Az8QTCMwWKwUGz2JyudxeHx+QgBEBqDTa8Ls8nERXoeQeFJpbxCy+YDCAtklE+Hxq1EgNarvj26913CW8hQdyEJErqmh6srmJE9QFJBIHYB6dAMCCXK-gaaEWlaFBnheKRge62pcjhl4wcRcrnNQZEULA5rYB4DiYAAatgDgeDA4wVDAtH0ZgFDMaxMCTIUZEoZUX7NDBb4SYROpuga7S4PqjDSNWVJGnJ16MDRdEMaYLFsfhBoyUgClKTJVDGqa4wAKJMHgDjsOZFDoNgszjDAdkxo58rnNpPH8Wx4x+bpZgCZh1oefZFqKQ4u4yQUolIGhxAVO48hQDIlB8vqMBgNKBTJcZ2VOHl1FcTpTH6ex7ARLGECTE5SAQPImC4BgUz6gchTNa17WNT1bXoFMuDdS1g2iVyA3tToMAwPkBRTUN-VjdNEDNaNvVLT5HwFMVuXkSsBRIVAHpSXUn5NHUh7JS26AeLewYYIZzYwHdOh3u1hS3R472PVtvTJYqkCUL996UCpNZ8oxNDPYeQMYKDfXbaEPAmCITl8EwDjoDw4xBiG8BhhG0guNIADMLhWiIOZZgUqPoyATkqVAto3AALN5FFUEyuAiEG7Oc1zNQwNI07jBmFASxwbPKBzjPIyE0axuM6AYIJ8tc7wmDuNk1XgAmIFYGgByEILFG2DrMAALTM6zPwa1zFsQLrVv-AQYAKOMG7eGb5xOy7bswAAVhA+Be54PsOxRYDGt24zmpEtpEBaidMoQVswHY6syRN1DyI6alQOMGQAIwUCXHA8GzVsABzlyXtf1xQdcl2XNdWzL7et83Vut7XvcNzXABeQkFPntq50gYC4H6TgUGAAjsBX3BgHY4zL3uhDjGTo-T7PTbGXTaMegU8PoIj-0rMlAAK9B2YQdgPWDsPI0gF97B96ANp-P5ycQADyl5A5PyegVP+h4L56UXJgcYyRA6TAvt-P6p1xLnQKGdFor9kooCZGAbITw+DOBfr0HBuV8GTkKKQvBBCPRUPIQYYKmA6EwCLsAbWbF8wFDoTQ66f8JAlAgCAnGxCVj8OiBAGCYi2oeikYIxhzDWHsJgJw2R44CjTinPoQwc4oG4EsEiZcIBbCOGcG4COW5-CBAPK-UkpQ+T-GaPaG8cQIBRCII+WxL4sF-z5PIfABBCAiI+L4-xaCQnoACb-cCFQMCXiCaEGJd14QNFiQdD4GDJKoMwQDHxDiiDxK5PY78hQinSW8eBW+hwQLdiFOYSWABSAp1BKliCxDBFp1SeBRPdB0rEtTrQAFYMyNLAeBQ8vSal2SMCXVQekBKCDLgUZQnCJldN4RU9wrSanCmtCXLMIzCqv1WcwbA0zZmhUCsAFQSyOArM2Z0tRGjiRvy0bOYwC49FLhXCY9c5iWHbl3PuWhliFbaKEE5KZVYWZUiUBwAZAA2AANE5fOUAWSwuRaCqgTwdxECkR4HgSg2aYs1gQvkVIogyGsCACWEsa7yAMIQEQDxsAAAoMyIslpyjlksXAVwGQASl9iEdQ2pEq2T1IwHgfo8bBnkISomkYkiXg8HqFMMwCgeUlUdPoKAoAAH1rISAAFomGNRkbgCVjKymIBKlhPhTC1EEfgBkHsdwyl5CfAFjzJxnEKMdTQlCMA4HwFddAIBEUgCTrMHgCAADaIAsi60IJxbiDEQAAF1I22ypLG+AcayaZkRQAdnhTXDNqggA';

const PlayroomComponents = () => (
  <Container>
    <Grid m="2" sx={{ gridRowGap: 2 }}>
      <Box sx={{ variant: 'styles.roundedCard' }}>
        <Heading>Layouts and Markup</Heading>
        <Divider></Divider>
        <Flex>
          <NavLink m="2">Home</NavLink>
          <NavLink m="2">Blog</NavLink>
          <NavLink m="2">About</NavLink>
          <NavLink m="2">Navlinks</NavLink>
        </Flex>
        <Alert>Alert: some alert message</Alert>
        <Heading>This is a heading</Heading>
        <Text>Some Basic Text</Text>
        <Link>I'm a Link</Link>
        <Label>A label for this avatar:</Label>
        <Avatar src={'http://www.fillmurray.com/200/200'}></Avatar>
        <Badge>With a Badge</Badge>
        <Message>Some message goes here</Message>
      </Box>
      <Box sx={{ variant: 'styles.roundedCard' }}>
        <Heading>Inputs and Buttons</Heading>
        <Divider></Divider>
        <Label>A Text Area</Label>
        <Textarea></Textarea>
        <Grid>
          <Label>Label for Inputs</Label>
          <Input></Input>
          <Input defaultValue="Default Value"></Input>
          <Divider></Divider>
          <Label>Field with label and default value</Label>
          <Field
            label="Email"
            name="email"
            defaultValue="default value for email field"
          />
          <Label>Dropdown Select</Label>
          <Select defaultValue="Hello">
            <option>Hello</option>
            <option>Hi</option>
            <option>Beep</option>
            <option>Boop</option>
          </Select>
        </Grid>
        <Divider></Divider>
        <Label>Menu Button</Label>
        <MenuButton></MenuButton>
        <Label>Icon Button with SVG</Label>
        <IconButton>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-eye"
          >
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
        </IconButton>
        <Label>Primary Button</Label>
        <Button>Button</Button>
        <Label>Outline Button</Label>
        <Button variant="outline">Button</Button>
        <Divider></Divider>
        <Label>Checkboxes</Label>
        <Checkbox></Checkbox>
        <Checkbox defaultChecked={true}></Checkbox>
        <Label>Radio Buttons</Label>
        <Radio></Radio>
        <Radio defaultChecked={true}></Radio>
      </Box>
      <Box sx={{ variant: 'styles.roundedCard' }}>
        <Heading>Sliders and Loaders</Heading>
        <Label>Spinner</Label>
        <Spinner></Spinner>
        <Label>Donut</Label>
        <Donut></Donut>
        <Divider></Divider>
        <Label>Slider</Label>
        <Slider></Slider>
        <Label>Progress Bar 0%</Label>
        <Progress></Progress>
        <Label>Progress Bar 50%</Label>
        <Progress max={1} value={1 / 2}></Progress>
        <Label>Progress Bar 100%</Label>
        <Progress max={1} value={2 / 2}></Progress>
      </Box>
      <Box sx={{ variant: 'styles.roundedCard' }}>
        <Card
          sx={{
            maxWidth: 256,
            padding: 2,
            borderRadius: 4,
            boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
          }}
        >
          <Embed src="https://www.youtube.com/embed/GNCd_ERZvZM" />
          <Text>Embedded video in a card</Text>
        </Card>
      </Box>
    </Grid>
  </Container>
);

const Components = () => {
  return (
    <Container>
      <Box m="2">
        <NextLink href={`/playroom/${playroomHash}`} passHref>
          <Link
            target="_blank"
            sx={{
              cursor: 'pointer',
              textDecoration: 'underline',
            }}
          >
            Edit This
          </Link>
        </NextLink>
      </Box>
      <PlayroomComponents />
    </Container>
  );
};

export default Components;
