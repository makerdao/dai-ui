const title = "Forms";
const description = "Forms with labels and error state.";
const playroomHash =
  "#?code=N4Igxg9gJgpiBcIA8BhCA7ALgQwJbpgCcACAW0wF4AdEAJhoD4r1jjVtComXW2BxQri7NevJACEIAD26jRSADLYARjAA2DAKKYAFkRgBXUsQCCUKIRgBnK0gD0S1RpFzWSAJLoADgcwN7nj5+LvJ2kjIhYuGyrmyO6lq6+kam5pY29vHOPK4e3r7EsABm2AZqmABq2GoGMNQgACIwJWWYxAAqMFKYjAH5wTliYdIx8tGR8lmJepYpZhbWtg4qCRNigQUAbhy42Fj1+EGahIQQhL12GwOxbJ3dxFZSFMDAZPDEAAzEAL7fxNuCPaUGhWUjVNTHU7nECjWKQs5kRbYADmMGIyIg1mIMxgazcdju1zk9nGg3sAiEMXsKA4wnQ1IwOHwRG4IAANCAkqRrAgANogACy2AA1kQmi1yiAALrfIA";

const component = `
<Container mt="2">
  <Card>
    <Grid>
      <Box>
        <Label>Ethereum Address</Label>
        <Input></Input>
      </Box>
      <Box>
        <Label>Ethereum Address</Label>
        <Input defaultValue="Default Text"></Input>
      </Box>
      <Box>
        <Label>Ethereum Address</Label>
        <Input variant="inputError"></Input>
        <Text sx={{ m: 0 }} variant="smallError">
          Error message goes here
        </Text>
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
