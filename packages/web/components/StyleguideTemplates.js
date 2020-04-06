import {
  jsx,
  Styled,
  useThemeUI,
  Button,
  Text,
  Textarea,
  Box,
  Card,
  Grid,
  Link,
} from 'theme-ui';

const WrappedButton = ({ variant }) => {
  return (
    <Grid gap={2} columns={1}>
      <Text variant="boldBody" pb={2}>
        {variant}
      </Text>
      <Textarea rows={1}>{`<Button variant="${variant}" />`}</Textarea>
      <Box>
      <Button variant={variant}>Click Me! </Button>
      </Box>
    </Grid>
  );
};

const WrappedText = ({ variant }) => {
  return (
    <Grid gap={2} columns={1}>
      <Text variant="boldBody" pb={2}>
        {variant}
      </Text>
      <Textarea rows={1}>{`<Text variant="${variant}" />`}</Textarea>
      <Text variant={variant}>Hello World</Text>
    </Grid>
  );
};

const WrappedLinks = ({ variant }) => {
  return (
    <Grid gap={2} columns={1}>
      <Text variant="boldBody" pb={2}>
        {variant}
      </Text>
      <Textarea rows={1}>{`<Link variant="${variant}" />`}</Textarea>
      <Link variant={variant}>Anchors are a page's best friend</Link>
    </Grid>
  );
};

const WrappedColor = ({ variant, variants }) => {
  return (
    <Grid gap={2} columns={1}>
      <Text variant="boldBody" pb={1}>
        {variant}
      </Text>
      <Text>{variants[variant]}</Text>
      <Box
        sx={{
          width: 6,
          height: 6,
          bg: variant,
        }}
      ></Box>
    </Grid>
  );
};

export const themeVariants = ['buttons', 'text', 'links'];

export const themeTemplateMapping = {
  buttons: (variant) => <WrappedButton variant={variant} />,
  text: (variant) => <WrappedText variant={variant} />,
  links: (variant) => <WrappedLinks variant={variant} />,
  colors: (variant, variants) => (
    <WrappedColor variant={variant} variants={variants} />
  ),
};
