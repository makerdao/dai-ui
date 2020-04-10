const title = "Alerts";
const description = "Alerts for success, warning, and danger.";
const playroomHash =
  "#?code=N4Igxg9gJgpiBcIA8BhCA7ALgQwJbpgCcACAW0wF4AdEAJhoD4r1jjVtComXW2BxQri7NevJAEEANkUzEAbh1zYs1EFGUBzIowASRGMVwBnYtmLr0WktmmFMSAPRSZ3Uawm3ZCwcso0ADoKkHACeuvqGJmZGAK5gYDBGUZ6Oznaubh4y8oq+qgDuHOj4GuGEBsamxIWExZamKU6eGe4OAkIZjigcwuhdGDj4RNwgADQgmAAWMKSJCADaIACy2ADWRAAiMABm2DGSmCAAuuP5QlNGCwDMtAAMowDsAGwAHEcAvkA";

const component = `
  <Container mt="2">
    <Card>
      <Grid>
        <Alert variant="danger">Here is a danger alert</Alert>
        <Alert variant="primary">Here is a success alert</Alert>
        <Alert variant="warning">Here is a warning alert</Alert>
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
