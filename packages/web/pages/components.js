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
        <NextLink href="/playroom">Edit This</NextLink>
      </Box>
      <PlayroomComponents />
    </Container>
  );
};

export default Components;
