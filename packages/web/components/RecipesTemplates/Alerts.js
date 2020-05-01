const title = "Alerts";
const description = "Alerts for primary, success, notice, and warning.";
const playroomHash =
  "#?code=N4Igxg9gJgpiBcIA8BhCA7ALgQwJbpgCcACAW0wF4AdEAJhoD4r1jjVtComXW2BxQri7NevJAEEANkUzEAbh1zYs1EAAdBpDgE9GACSIxiuAM7FsxDbi2Ft56YUxIA9FJndRrCQ9kLByyhoTAFcwMBgTE31DYzMLELCIuJ8XN0cPT28ZeUUA1XQITFxw6MIjU3NiAqLw+xlUnwzRLMcc-xUaAHcOdHwAc1LyuOJuwl70PrrHBvcRMWcBIQyXFA5hdBWMHHwibhAAXyA";

const component = `
  <Container mt="2">
    <Card>
      <Grid>
        <Alert variant="primary">Here is a primary alert</Alert>
        <Alert variant="success">Here is a success alert</Alert>
        <Alert variant="notice">Here is a notice alert</Alert>
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
