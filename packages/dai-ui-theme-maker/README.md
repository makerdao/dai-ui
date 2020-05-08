# Dai-UI Maker Theme

## Table of Contents

1. [Getting Started](#getting-started)
2. [Tokens Glossary](#tokens-glossary)
3. [Setting Up a Local Dev Environment](#setting-up-a-local-dev-environment)

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

## Tokens Glossary

### Modifiers

| Name      | Description                                                                                                                                                          | Example Use                                                                                                             |
| :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------- |
| -Alt      | Generic alternative color shade from the referenced color.                                                                                                           | Hover state                                                                                                             |
| -Emphasis | Used in combination with the referenced color with a high contrast differential to convey emphasis, "make it pop".                                                   | Active or "clicked" state                                                                                               |
| -Muted    | A Lower contrast color variation, closer to the background color diff                                                                                                | Disabled state                                                                                                          |
| On-       | A high contrast color to be applied "on" the referenced token.                                                                                                       | Button text                                                                                                             |
| Accent-   | One-off colors which don't have a first-class purpose and are used sparingly. This is the only place where it can be acceptable to have a color called by it's name. | User configurable color selection UIs such as label systems, or when assigning colors to days of the week in a calendar |

### Principal Tokens

| Name      | Description                                                                                     | Example Use       |
| :-------- | :---------------------------------------------------------------------------------------------- | :---------------- |
| Primary   | The primary brand color. Used in high user focus areas of the application                       | Primary buttons   |
| Secondary | A secondary color                                                                               | Secondary buttons |
| Muted     | The primary muted color for the app, closer to the background color but a bit more contrasting. | Borders           |

### Specific Tokens

| Name       | Description                              | Example Use                      |
| :--------- | :--------------------------------------- | :------------------------------- |
| Text       | Primary text color                       |                                  |
| Background | The app background color                 |                                  |
| Surface    | Background color of foreground elements. | Cards, inputs                    |
| Error      | git status                               | Error text, invalid input border |

### Descriptive Tokens

| Name    | Description                                                                       | Example Use                                                                                    |
| :------ | :-------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------- |
| Notice  | The color used to represent a neutral action or outcome                           | Generic notice banners, medium risk numbers, form states, icons.                               |
| Success | The color used to represent a successful action or outcome                        | Success banners, no risk numbers, input success / good validation states, icons.               |
| Warning | The color used to represent a negative action or outcome                          | Alert banners, high risk numbers, input error states, danger action buttons, icons.            |
| Bull    | The color representing profits, "buying", etc. General positive financial meaning | Profit percentage, price chart candles and volume, order book, long/short order profit amount. |
| Bear    | The color representing losses, "selling", etc. General negative financial meaning | Loss percentage, price chart candles and volume, order book long/short order loss amount.      |

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
