const title = "Select Dropdown";
const description = "Select dropdown with labels.";
const playroomHash =
  "#?code=N4Igxg9gJgpiBcIA8BhAhgJygPgDoDsACQpAcQwEscDjjUJ8AXNC-GDPI2ugGTQCMYAG2wBRRgAt2MAK4BbQgEEoUDDADO6pAHo+gkTW4kAysJhhGhWADM0MoYwBqaITJgBeXCAASwoRC9OI1okCAAHRgoGbF8hfx1wyOjDYNCIqPxsAEl1QgpLORgE9OSuVMSM7ABNCBkAcjVCfwgAa1YAc0JrCAwAfmKkzJSQ7VMhc0YgkZQGZlZ2KboZphY2DmHeAWExSWl5JRU1TR09bY2TMwsrGFt7Jxc3Tx8-AJBFozTBmJeByvO6CrRHJ5ApFbSAoZlD4Q6q1BowJoQVodLo9frgkqQ1KjS6TYY6ZZzNZTHTkKicAmYaj4EAAGhAu0K6gQAG0QABZNAtdgAERudgcIAAuvSAO5USTM+AsgDMACYAAy0gDsADYABxCgC+QA";

const component = `
  <Card>
    <Grid>
      <Container>
        <Label>Ethereum Address</Label>
        <Select defaultValue="Hello">
          <option>Hello</option>
          <option>Is it me</option>
          <option>You're looking for?</option>
        </Select>
      </Container>
      <Container>
        <Label>Ethereum Address</Label>
        <Select defaultValue="Hello">
          <option>Hello</option>
          <option>Is it me</option>
          <option>You're looking for?</option>
        </Select>
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
