module.exports = {
  components: '@theme-ui/components',
  outputPath: './dist',

  // Optional:
  title: 'Maker Style Playground',
  themes: './src/themes',
  frameComponent: './src/FrameComponent.jsx',
  widths: [320, 375, 768, 1024],
  port: 9000,
  openBrowser: true,
  baseUrl: '/packages/playroom/',
  exampleCode: `
    <Heading>
      Hello World!
    </Heading>
    <Button>
      Click Me!
    </Button>
  `,
};
