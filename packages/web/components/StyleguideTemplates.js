import React from "react";
import { Button, Badge, Alert, Text, Box, Flex, Grid, Link } from "theme-ui";

const WrappedButton = ({ variant }) => {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Flex
        sx={{
          mb: "auto",
        }}
      >
        <Button variant={variant}>Click Me! </Button>
      </Flex>
      <Box mt={3}>
        <Text variant="boldBody">{variant}</Text>
        <Text variant="small">{`<Button variant="${variant}" />`}</Text>
      </Box>
    </Flex>
  );
};

const WrappedBadge = ({ variant }) => {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Flex
        sx={{
          mb: "auto",
        }}
      >
        <Badge variant={variant}> Winning Proposal </Badge>
      </Flex>
      <Box mt={3}>
        <Text variant="boldBody">{variant}</Text>
        <Text variant="small">{`<Badge variant="${variant}" />`}</Text>
      </Box>
    </Flex>
  );
};

const WrappedAlert = ({ variant }) => {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Flex
        sx={{
          mb: "auto",
        }}
      >
        <Alert variant={variant}> This is an alert message </Alert>
      </Flex>
      <Box mt={3}>
        <Text variant="boldBody">{variant}</Text>
        <Text variant="small">{`<Alert variant="${variant}" />`}</Text>
      </Box>
    </Flex>
  );
};

const WrappedText = ({ variant }) => {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Text variant={variant} mb="auto">
        Hello World
      </Text>

      <Box mt={3}>
        <Text variant="boldBody">{variant}</Text>
        <Text variant="small">{`<Text variant="${variant}" />`}</Text>
      </Box>
    </Flex>
  );
};

const WrappedLinks = ({ variant }) => {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Link variant={variant}>Anchors are a page's best friend</Link>

      <Box>
        <Text variant="boldBody">{variant}</Text>
        <Text variant="small">{`<Link variant="${variant}" />`}</Text>
      </Box>
    </Flex>
  );
};

const WrappedColor = ({ variant, variants }) => {
  return (
    <Grid gap={2} columns={1} p={2}>
      <Box
        sx={{
          width: 6,
          height: 4,
          bg: variant,
        }}
      ></Box>
      <Box>
        <Text sx={{ textTransform: "capitalize" }} variant="boldBody">
          {variant}
        </Text>
        <Text variant="boldBody">{variants[variant]}</Text>
      </Box>
    </Grid>
  );
};

const WrappedSizes = ({ variant, variants }) => {
  return (
    <Grid gap={2} columns={1} p={2}>
      <Box
        sx={{
          width: 6,
          height: 4,
          width: variant,
          height: 3,
          bg: "primary",
        }}
      ></Box>
      <Box>
        <Text variant="boldBody">{variant}</Text>
        <Text variant="boldBody">{variants[variant]}px</Text>
      </Box>
    </Grid>
  );
};

const WrappedRadii = ({ variant, variants }) => {
  return (
    <Grid gap={2} columns={1} p={2}>
      <Box
        sx={{
          width: 5,
          height: 4,
          borderRadius: variant,
          bg: "primary",
        }}
      ></Box>
      <Box>
        <Text variant="boldBody">{variant}</Text>
        <Text variant="boldBody">{variants[variant]}px</Text>
      </Box>
    </Grid>
  );
};

const WrappedShadows = ({ variant, variants }) => {
  return (
    <Grid gap={2} columns={1} p={2}>
      <Box
        sx={{
          width: 5,
          height: 4,
          boxShadow: variant,
          bg: "primary",
        }}
      ></Box>
      <Box>
        <Text variant="boldBody">{variant}</Text>
        <Text variant="boldBody">{variants[variant]}</Text>
      </Box>
    </Grid>
  );
};

const WrappedFontSizes = ({ variant, variants }) => {
  return (
    <Grid gap={2} columns={1} p={2}>
      <Box>
        <Text variant="boldBody">{variant}</Text>
        <Text
          variant="boldBody"
          sx={{
            fontSize: variant,
          }}
        >
          {variants[variant]}px
        </Text>
      </Box>
    </Grid>
  );
};

const WrappedFonts = ({ variant, variants }) => {
  return (
    <Grid gap={2} columns={1} p={2}>
      <Box>
        <Text variant="boldBody">{variant}</Text>
        <Text
          variant="boldBody"
          sx={{
            fontSize: 6,
            fontFamily: variant,
          }}
        >
          {variants[variant]}
        </Text>
      </Box>
    </Grid>
  );
};

export const themeVariants = ["buttons", "text", "links"];

export const themeTemplateMapping = {
  buttons: (variant) => <WrappedButton variant={variant} />,
  badges: (variant) => <WrappedBadge variant={variant} />,
  alerts: (variant) => <WrappedAlert variant={variant} />,
  text: (variant) => <WrappedText variant={variant} />,
  links: (variant) => <WrappedLinks variant={variant} />,
  colors: (variant, variants) => (
    <WrappedColor variant={variant} variants={variants} />
  ),
  radii: (variant, variants) => (
    <WrappedRadii variant={variant} variants={variants} />
  ),
  fontSizes: (variant, variants) => (
    <WrappedFontSizes variant={variant} variants={variants} />
  ),
  fonts: (variant, variants) => (
    <WrappedFonts variant={variant} variants={variants} />
  ),
  shadows: (variant, variants) => (
    <WrappedShadows variant={variant} variants={variants} />
  ),
  sizes: (variant, variants) => (
    <WrappedSizes variant={variant} variants={variants} />
  ),
};
