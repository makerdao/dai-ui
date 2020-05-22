# Dai-UI Icons

**Note:** this package is for use with the [Dai-UI Design System][] and assumes this has already been set up in your project.

## Getting Started

1.  Install the icons package.

`yarn add @makerdao/dai-ui-icons`

2. Import the icons in the same file where you import your theme, and merge the icons with your theme.

```js
// app.js
import { ThemeProvider } from "theme-ui";
import theme from "./theme";
import { icons } from "@makerdao/dai-ui-icons";

const mergedTheme = { ...theme, icons };

export default (props) => (
  <ThemeProvider theme={mergedTheme}>{props.children}</ThemeProvider>
);
```

3. Import the `Icon` component into your project. Pass the `name` of the desired icon as a prop to the icon component.

```js
// index.js
import { Icon } from "@makerdao/dai-ui-icons";

<Icon name="dai_round_color" />;
```

4. Icons can also accept `color` and `size` props pulled from your theme, as well as theme-ui `sx` properties.

```js
<Icon name="maker" color="primary" size={3} sx={{ bg: "secondary" }} />
```

[theme-ui]: https://github.com/system-ui/theme-ui
[dai-ui design system]: https://github.com/makerdao/dai-ui

## Setting Up a Local Dev Environment

While developing a new icons package, you can link it to your frontend project with `yarn link`.

1. In the icons package directory, build the package with the "watch" option. This will watch your source files and rebuild on any change.

`yarn build:watch`

2. In a new terminal window, navigate to the `dist` folder created by microbundle and set up the link.

`yarn link`

3. Navigate to your frontend project and complete the link.

`yarn link "@makerdao/dai-ui-icons"`

You should now see updates to your icons package take effect immediately in your frontend project.

To break the link run `yarn unlink "@makerdao/dai-ui-icons"` in your frontend project, and reinstall the package from npm.

## Creating an Icons Package

1. Your package must export an `icons` object where each icon is keyed by its name, with `path` and `viewBox` keys nested inside.

2. The `path` must return a valid svg `<path>` element as JSX, since it will be wrapped in an `<svg>` element by the `Icon` component.

3. Change the `fill` attribute to `"currentColor"` so you can set the color with the `color` prop on the `Icon` component.

```js
// example icons package
export const icons {
  my_icon: {
    path: (<path fill="currentColor" />),
    viewBox: "0 0 24 24",
  },
};
```
