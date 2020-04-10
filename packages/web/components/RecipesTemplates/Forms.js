const title = "Forms";
const description = "Forms with labels and error state.";
const playroomHash =
  "#?code=N4Igxg9gJgpiBcIA8BhCA7ALgQwJbpgCcACAW0wF4AdEAJhoD4r1jjVtComXW2BxQrijEAzgA8KwYMQDmgqACUIAdz7YADvGIBmYgF893XryQAZbACMYAGwYBRTAAsiMAK6liAQShRCMESJIAPTmVrbMxqxIAJLo6q6YDMGx8YkRkWaWNvZOLu5ePn4BwaHZ6cYxcQnEsABm2K7WmABq2NauMNQgACIw9Y2YxAAqMGKYjMlVaTwVpbYOzn753r7+gSFZ4TMmKdUAbhy42Fhd+KndxzJEE0G705FsI2OiElJkWgAM+nrEB4LHlBoIlIbWsF3QV0IjHKkTshEIEBIpDW2Cusgg-mIixgMKiQSe9xMQQEQiMbCCKA4XGYwTQWDwBEI3BAABoQLlkSIEABtEAAWWwAGsiL1+k0QABdNnKIROLnwbnaWgfFkAdgAbAAOCV6IA";

const component = `
<Container mt="2">
  <Card>
    <Grid sx={{ gridRowGap: 3 }}>
      <Label>Ethereum Address</Label>
      <Input></Input>
      <Label>Ethereum Address</Label>
      <Input defaultValue="Default Text"></Input>
      <Label>Ethereum Address</Label>
      <Input variant="inputDanger"></Input>
      <Text sx={{ m: 0 }} variant="smallDanger">
        Error message goes here
      </Text>
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
