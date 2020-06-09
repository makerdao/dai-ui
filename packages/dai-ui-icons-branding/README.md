# Dai-UI Icons

**Note:** this package is for use with the [Dai-UI Design System][] and assumes this has already been set up in your project.

To use the icons you must have the `Icon` component imported in your project from the `@makerdao/dai-ui-icons` package. See more info on how to use the `Icon` component [here].

## Getting Started

1.  Install the branding icons package.

`yarn add @makerdao/dai-ui-icons-branding`

2. Import the icons in the same file where you import your theme, and merge the icons with your theme.

```js
// app.js
import { ThemeProvider } from "theme-ui";
import theme from "./theme";
import { icons as standardIcons } from "@makerdao/dai-ui-icons";
import { icons as brandingIcons } from "@makerdao/dai-ui-icons-branding";

const icons = { ...standardIcons, ...brandIcons };

const mergedTheme = { ...theme, icons };

export default (props) => (
  <ThemeProvider theme={mergedTheme}>{props.children}</ThemeProvider>
);
```

[theme-ui]: https://github.com/system-ui/theme-ui
[dai-ui design system]: https://github.com/makerdao/dai-ui
[here]: https://github.com/makerdao/dai-ui/tree/master/packages/dai-ui-icons#getting-started

## Setting Up a Local Dev Environment

While developing a new icons package, you can link it to your frontend project with `yarn link`.

1. In the icons package directory, build the package with the "watch" option. This will watch your source files and rebuild on any change.

`yarn build:watch`

2. In a new terminal window, navigate to the `dist` folder created by microbundle and set up the link.

`yarn link`

3. Navigate to your frontend project and complete the link.

`yarn link "@makerdao/dai-ui-icons-branding"`

You should now see updates to your icons package take effect immediately in your frontend project.

To break the link run `yarn unlink "@makerdao/dai-ui-icons-branding"` in your frontend project, and reinstall the package from npm.
