module.exports = {
  components: '@theme-ui/components',
  outputPath: './dist/playroom',

  // Optional:
  title: 'Theme-UI Starter Playground',
  themes: './src/themes',
  frameComponent: 'src/FrameComponent.jsx',
  widths: [320, 375, 768, 1024],
  port: 9000,
  openBrowser: true,
  exampleCode: `
    <Heading>
      Hello World!
    </Heading>
    <Button>
      Click Me!
    </Button>
  `,
};