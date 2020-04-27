# Dai-UI Styleguide

## Getting Started

1. Install [theme-ui][]

`yarn add theme-ui`

2.  Install our [default theme][]

`yarn add dai-ui-theme-maker`

3.  Or create your own

```js
// theme.js
export default {
  sizes: [0, 4, 8, 16, 32],
  colors: {
    primary: "#1AAB9B",
    secondary: "#F4B731",
  },
  // ...add your design tokens here
};
```

4. Import the theme provider from theme-ui and wrap your app, passing the theme object as prop to the provider.

```js
// app.js
import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "./theme";

export default (props) => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
);
```

5. Use the component primitives provided by theme-ui to build your frontend.

```js
// Form.js
<Card>
  <Box>
    <Label>Ethereum Address</Label>
    <Input defaultValue="Default Text"></Input>
    <Button>Submit</Button>
  </Box>
</Card>
```

6. See our [recipes page][] for more examples and inspiration!

[recipes page]: https://design-system.mkr-js-prod.now.sh/recipes
[theme-ui]: https://github.com/system-ui/theme-ui
[default theme]: https://github.com/makerdao/dai-ui/blob/initial-documentation/packages/dai-ui-theme-maker/lib/index.js

## How to Contribute a Recipe

1. Open the Dai UI [sandbox] and create your recipe using the component library.

2. Create a new file in the recipes folder of our [github repo] and copy in the template below.

3. Copy your recipe from the sandbox editor into the template below. Don't forget to include the query string from the URL.

```js
// MyRecipe.js
const title = "My Recipe";
const description = "Add a detailed description.";
const playroomHash = "#?code="; // Add the entire query string from the URL.

// Be sure to wrap your recipe in backticks like the example.
const component = `
<MyComponent />
`;

export default {
  component,
  title,
  description,
  playroomHash,
};
```

[sandbox]: https://design-system.mkr-js-prod.now.sh/playroom
[github repo]: https://github.com/makerdao/dai-ui/new/master/packages/web/components/RecipesTemplates
