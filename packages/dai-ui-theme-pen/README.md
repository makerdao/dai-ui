# Dai-UI Pen Theme

## Setting Up a Local Dev Environment

While developing a new theme, you can link it to your frontend project with `yarn link`.

1. In the theme directory, build the package with the "watch" option.

`yarn build:watch`

2. In a new terminal window navigate to the `dist` folder and set up the link.

`yarn link`

3. Navigate to your frontend project and complete the link. In this example we'll use the pen theme.

`yarn link "@makerdao/dai-ui-theme-pen"`

You should now see updates to your theme file take effect immediately in your frontend project as you develop your theme.

To break the link run `yarn unlink "@makerdao/dai-ui-theme-pen"` in your frontend project, and reinstall the package from npm.
