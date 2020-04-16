const title = "Checkbox and Radio";
const description = "Checkbox and radio buttons with labels.";
const playroomHash =
  "#?code=N4Igxg9gJgpiBcIA8BhCA7ALgQwJbpgCcACAZwA8BeYYYgW03mICZiBfNgPgB11jjU2QlB59+AgGIAbGOTJUaxAGYzyAdULYADk24gA7pq172XXuPFIAMtgBGMKaIsWkAJWxRcEYriiU99jDGIMTo2HQw-iCBwcQAbthSAK6RATBBJrBK2ElSmCgAFjBgANYwUMQA9E7O-ABC6cZiLpU29o7mztZ2DjW1bh5ePn4BEBCxYRFRtmOxCcmp0bMm1Z21dcvNlq09HVv83e19XYXFJTNyvlGEMBF09oQmk4s3dw8rxxaut7cPxACyMDW2zavWBB1Be1qB1OpQuw2uP3uRCe4ReSPeIVW+3EAEEwGAgphiAAVIh0UjEbDoCpoGm4TBedCkcECHZHYFISrSWQ1LkoIQiXj8jA4fBEUQgAA0IEwRQipAQAG0QP9sGVCAARGDZXKYEAAXRl+l8csV8CVAGZmAAGKUAdgAbAAOA1sIA";

const component = `
<Container sx={{ mt: 2 }}>
  <Card>
    <Flex sx={{ flexWrap: "wrap" }}>
      <Label>
        <Radio id="beep" name="beep" value="beep" defaultChecked />
        Beep
      </Label>
      <Label>
        <Radio id="boop" name="boop" value="boop" />
        Boop
      </Label>
      <Label>
        <Checkbox id="remember" name="remember" />
        Remember Me
      </Label>
      <Label>
        <Checkbox id="remember" name="remember" />
        Accept Terms and Conditions
      </Label>
    </Flex>
  </Card>
</Container>
`;

export default {
  component,
  title,
  description,
  playroomHash,
};
