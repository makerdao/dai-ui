# Dai-UI Maker Theme

## Table of Contents

1. [Getting Started](#getting-started)
1. [Color Tokens Glossary](#color-tokens-glossary)
1. [Typography Tokens Glossary](#typography-tokens-glossary)
1. [Setting Up a Local Dev Environment](#setting-up-a-local-dev-environment)

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
    primary: '#1AAB9B',
    secondary: '#F4B731',
  },
  // ...add your design tokens here
};
```

4. Import the theme provider from theme-ui and wrap your app, passing the theme object as prop to the provider.

```js
// app.js
import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from './theme';

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
[default theme]: https://github.com/makerdao/dai-ui/blob/master/packages/dai-ui-theme-maker/lib/index.js

## Color Tokens Glossary

### Modifiers

These terms can be used to extend the main tokens. Modifiers should remain agnostic from color information or UI specificity, allowing for color mode variations and re-use.

| Name      | Description                                                                                                                                                          | Example Use                                                                                                             |
| :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------- |
| -Alt      | Generic alternative color shade from the referenced color.                                                                                                           | Hover state                                                                                                             |
| -Emphasis | Used in combination with the referenced color with a high contrast differential to convey emphasis, "make it pop".                                                   | Active or "clicked" state                                                                                               |
| -Muted    | A Lower contrast color variation, closer to the background color diff                                                                                                | Disabled state                                                                                                          |
| On-       | A high contrast color to be applied "on" the referenced token.                                                                                                       | Button text                                                                                                             |
| Accent-   | One-off colors which don't have a first-class purpose and are used sparingly. This is the only place where it can be acceptable to have a color called by it's name. | User configurable color selection UIs such as label systems, or when assigning colors to days of the week in a calendar |

### Main Tokens

The core colors for the app, these tokens should be included in every theme.

| Name       | Description                                                                                     | Example Use                                                                         |
| :--------- | :---------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| Primary    | The primary brand color. Used in high user focus areas of the application.                      | Primary buttons                                                                     |
| Secondary  | A secondary color.                                                                              | Secondary buttons                                                                   |
| Text       | Primary text color.                                                                             | Main color for typography                                                           |
| Muted      | The primary muted color for the app, closer to the background color but a bit more contrasting. | Borders                                                                             |
| Background | The app background color.                                                                       | Main background for the app                                                         |
| Surface    | Background color of foreground elements.                                                        | Cards, inputs                                                                       |
| Error      | A color for indicating error states.                                                            | Error text, invalid input border                                                    |
| Notice     | The color used to represent a neutral action or outcome.                                        | Generic notice banners, medium risk numbers, form states, icons.                    |
| Success    | The color used to represent a successful action or outcome.                                     | Success banners, no risk numbers, input success / good validation states, icons.    |
| Warning    | The color used to represent a negative action or outcome.                                       | Alert banners, high risk numbers, input error states, danger action buttons, icons. |

### Other Tokens

Unique tokens that are context-specific, but with high a probability for reuse within the application.

| Name | Description                                                                       | Example Use                                                                                    |
| :--- | :-------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------- |
| Bull | The color representing profits, "buying", etc. General positive financial meaning | Profit percentage, price chart candles and volume, order book, long/short order profit amount. |
| Bear | The color representing losses, "selling", etc. General negative financial meaning | Loss percentage, price chart candles and volume, order book long/short order loss amount.      |

## Typography Tokens Glossary

### Font Scales

Dai UI adheres to the [theme-ui](https://theme-ui.com/theming#typography) spec for handling typography. This is accomplished by defining a set of scales, keys, and variants.

These scales can be used to compose defaults and variants of other tokens such as buttons or text variants. In order to ensure interoperability, the following keys should always be defined.

#### Font Sizes

Store a scale of font sizes in an array keyed by the `fontSizes` token. The sizes can then be referenced by their index in theme variants. For example, if the smallest font size in your scale is `11`, its index would be `0`, and would be applied to a text variant like this: `fontSize: 0`

#### Fonts

Fonts are defined in the `fonts` token block. They can then be referenced by their name in theme variants, for example `fontFamily: "body"`. This theme uses the following `font` variant groups in compliance with the theme-ui spec. Additional keys can be included for more complex styling.

- body
- heading
- monospace

#### Font Weights

Font Weights are defined in the `fontWeights` token block. They can then be referenced by their name in theme variants, for example `fontWeight: "body"`. This theme uses the following `fontWeight` variants.

- body
- heading
- bold
- semiBold

#### Line Heights

Line Heights are defined in the `lineHeights` token block. They can then be referenced by their name in theme variants, for example `lineHeight: "body"`. This theme uses the following `lineHeights` variants.

- body
- heading
- tight
- loose

### Text Tokens

The tokens in the text block define typography variants that can be applied to the `Heading` and `Text` components. The tokens can also take advantage of the responsive array format to change text size automatically at different breakpoints. For example, to create a heading that will shrink slightly on smaller screens, you could approach it like this:

```js
//theme.js
text: {
  heading: {
    fontSize: [5, 6]; // Size 5 for mobile screens, and 6 for desktop.
  }
}

// App.js
<Heading>This text will automatically adjust to screen size!</Heading>;
```

#### Heading

We've opted for a more semantical approach when defining our `heading` tokens. Rather than creating variants analgous to HTML elements like `h1`, `h2`, etc, we refer to them with keys such as `smallHeading`, or `mediumHeading`. This way the intended purpose of the token variant is more clear. It also emphasizes the difference between a dynamic web page and a static document. For document creation, we recommend using Markdown/MDX syntax.

Markdown excels at creating documentation-style pages that resemble print and early-web plain-text structure. It is intended primarily for ["writing on the web"](https://daringfireball.net/projects/markdown/syntax#philosophy).

A quick note on the `styles` token: MDX files using markdown syntax are rendered using tokens inside the `styles` block. For example a markdown heading written as `# My Heading` would render using the style from the `styles.h1` block. A potential "gotcha" would be using a `<Heading />` component in your app, and expecting styles defined in the `styles.h1` block to be applied.

The default token variant for a heading is `heading`. When you use a `<Heading />` component without specifying a variant, the values in this token will be applied. In most cases your default variant should not be the largest size in the spec. This theme also includes the following additional text variants:

- largeHeading
- mediumHeading
- smallHeading
- microHeading

#### Text

The default token variant for Text is `default`. When you use a `<Text />` component without specifying a variant, the values in this token will be applied. We also include the following additional text variants:

- smallText
- microText
- caps

## Setting Up a Local Dev Environment

While developing a new theme, you can link it to your frontend project with `yarn link`.

1. In the theme directory, build the package with the "watch" option. This will watch your source files and rebuild on any change.

`yarn build:watch`

2. In a new terminal window navigate to the `dist` folder created by microbundle and set up the link.

`yarn link`

3. Navigate to your frontend project and complete the link. In this example we'll use the maker default theme.

`yarn link "@makerdao/dai-ui-theme-maker"`

You should now see updates to your theme file take effect immediately in your frontend project as you develop your theme.

To break the link run `yarn unlink "@makerdao/dai-ui-theme-maker"` in your frontend project, and reinstall the package from npm.
