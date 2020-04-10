const title = "Select Dropdown";
const description = "Select dropdown with labels.";
const playroomHash =
  "#?code=N4Igxg9gJgpiBcIA8BhCA7ALgQwJbpgCcACAW0wF4AdEAJhoD4r1jjVtComXW2BxQri7NevJABlsAIxgAbBgFFMACyIwArqWIBBKFEIwAzoaQB6STPkjRbAMpyYYTMVgAzbOtmYAatlnqYahAACTlZCEZrGzYIAAdMXAwGUNlwsziEpKibJAzE9AYASUNiXGdSGHT4-O5o1lzqpIBNCHUAcgNicIgAa3wAc2JXCEIAfirMguz603tZR0xanIs5RRU1TR09A2MzFaseUSQ5hZcYd08fPwCglPDIw5y8pLuICZrpsWeC4tLyytM3yW0QakwYLXanW6fXQg2GY3eWUeMxOTmBbFMAiESzMKA4wnQuIwOHwRG4IAANCB1hVDAgANogACy2B6RAAIucPF4QABdKkAdyEKjp8HpAGZaAAGCkAdgAbAAOXkAXyAA";

const component = `
<Container mt="2">
<Card>
  <Grid>
    <Label>Ethereum Address</Label>
    <Select defaultValue="Hello">
      <option>Hello</option>
      <option>Is it me</option>
      <option>You're looking for?</option>
    </Select>
    <Label>Ethereum Address</Label>
    <Select defaultValue="Hello">
      <option>Hello</option>
      <option>Is it me</option>
      <option>You're looking for?</option>
    </Select>
  </Grid>
</Card>
</Container>
`;

export default {
  component,
  title,
  description,
  playroomHash,
};
