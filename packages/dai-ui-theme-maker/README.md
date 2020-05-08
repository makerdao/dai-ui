# Dai-UI Maker Theme

## Getting Started

1. Install [theme-ui][]

`yarn add theme-ui`

2.  Install our [default theme][]

`yarn add @makerdao/dai-ui-theme-maker`

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

## Setting Up a Local Dev Environment

While developing a new theme, you can link it to your frontend project with `yarn link`.

1. In the theme directory, build the package with the "watch" option.

`yarn build:watch`

2. In a new terminal window navigate to the `dist` folder and set up the link.

`yarn link`

3. Navigate to your frontend project and complete the link. In this example we'll use the maker default theme.

`yarn link "@makerdao/dai-ui-theme-maker"`

You should now see updates to your theme file take effect immediately in your frontend project as you develop your theme.

To break the link run `yarn unlink "@makerdao/dai-ui-theme-maker"` in your frontend project, and reinstall the package from npm.
