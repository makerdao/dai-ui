module.exports = {
  components: './src/components',
  outputPath: './dist',

  // Optional:
  title: 'Dai UI Style Playground',
  themes: './src/themes',
  snippets: './src/snippets/snippets.js',
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
