const title = "Select Dropdown";
const description = "Select dropdown with labels.";
const playroomHash =
  "#?code=N4Igxg9gJgpiBcIA8BhCA7ALgQwJbpgCcACAW0wF4AdEAJhoD4r1jjVtComXW2BxQri7NevJACEIAD26jRSADLYARjAA2DAKKYAFkRgBXUsQCCUKIRgBnK0gD0S1RpFzWSAMrqYYTMVgAzbAM1TAA1bDUDGGoQAAl1NQhGF1c3CAAHTFwMBni1RPsMrJyU1KQi7PQGAEkrYlxfUhhCzMrZVLTWnIBNCAMAcktiRIgAa3wAc2J-CEIAfhbiqtL5O081b0x21ckZFbZd7blFFXUtXX0jU3NLG3tHM-23dc2-GEDgsIiomLzE5J4HXKXSqfwgizaTzEFRytXqjWadhhy0BZWRDF6AyGI3G6CmM3mEJKqNWLx8RzcdkOpXsAiE7XsKA4wnQjIwOHwRAYIAANCALk0rAgANogACy2FGRAAIu8giEQABdPkAdyEuiF8GFAGZaAAGHkAdgAbAAORUAXyAA";

const component = `
<Container mt="2">
  <Card>
    <Grid>
      <Box>
        <Label>Ethereum Address</Label>
        <Select defaultValue="Hello">
          <option>Hello</option>
          <option>Is it me</option>
          <option>You're looking for?</option>
        </Select>
      </Box>
      <Box>
        <Label>Ethereum Address</Label>
        <Select defaultValue="Hello">
          <option>Hello</option>
          <option>Is it me</option>
          <option>You're looking for?</option>
        </Select>
      </Box>
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
