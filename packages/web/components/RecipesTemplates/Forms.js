const title = "Forms";
const description = "Forms with labels and error state.";
const playroomHash =
  "#?code=N4Igxg9gJgpiBcIA8BhAhgJygPgDoDsACQpAcQwEspCBnADwF5hhCBzSqAJQgHdS0ADvEIBmQgF9xeIsRIoI+AC5oK+GBmmzZSADJoARjAA22AKKKAFupgBXALaEAglCgYYNGkgD0ewyYJaxEgAkvgCNorY3qHhkQHaXvJKKmoa8UFJyqrqmoG6BsZmltb2Ti5uHt6+henaMRGEsABmaDZGigBqaEY2MAy4IAAiMC1tioQAKjB0igNRXvVxMkGJClmpuRlrKTm1QdUm5lZupc6u7p4+Bf7LdWENAG6YFGhK-SCqsYOvrOpz0fcloESFMZrRGMxCHZhAAGCTiQhPSivRTvGh2bpGb74X4YOZ7WSmDAYCAYKEXNC-NgQdyEY4wAneUFAhKZHZpGTechUaTedBYaQgAA0IGKdncCAA2iAALJoADW6mGo3aIAAuiKeFRLDQpSIAEwwoUAdgAbAAONXiIA";

const component = `
  <Card>
    <Grid sx={{ gridRowGap: 3 }}>
      <Container>
        <Label>Ethereum Address</Label>
        <Input></Input>
      </Container>
      <Container>
        <Label>Ethereum Address</Label>
        <Input defaultValue="Default Text"></Input>
      </Container>
      <Container>
        <Label>Ethereum Address</Label>
        <Input variant="inputDanger"></Input>
        <Text sx={{ m: 0 }} variant="smallDanger">
          Error message goes here
        </Text>
      </Container>
    </Grid>
  </Card>
`;

export default {
  component,
  title,
  description,
  playroomHash,
};
