const title = "Navigation Header";
const description = "Header with navigation links.";
const playroomHash =
  "#?code=N4Igxg9gJgpiBcIA8BhCA7ALgQwJbpgCcA+AHXQAIKkAxAGxgA8KA3bQ3bLAXlJADMGjAHQALGNliE+ZSlWoAJCVHwBzYgBE8FAKoBJJAHolktbPnV6TCtgDOvEOmwsZ5C1SQA5ZwBl8AawpRQhh+BwBiGQUIAFsYI28WP3R-c3cvXwCgkLC+SJBiACUYMFwABxhbBMyUtIsMpKzg0IiZAGVMAE8GVQBXXFhqxtq3eSMrRjTxoVkjNCw8AhJyEAAaEExxONsEAG0QAFlsfyINUOxeukwQAF11gHcBzZ34XYBmACYABlWAdgA2AAcNwAvkA";

const component = `
<Container>
  <Flex variant="flex.header">
    <Heading>Dai UI</Heading>
    <Flex as="nav">
      <NavLink href="#">Home</NavLink>
      <NavLink href="#">Recipes</NavLink>
      <NavLink href="#">Styleguide</NavLink>
    </Flex>
  </Flex>
</Container>
`;

export default {
  component,
  title,
  description,
  playroomHash,
};
