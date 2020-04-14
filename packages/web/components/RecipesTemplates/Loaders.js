const title = "Loaders";
const description = "Spinner and donut loader.";
const playroomHash =
  "#?code=N4Igxg9gJgpiBcIA8BhCA7ALgQwJbpgCcACAZwA8BeYYYgW03mICZiBfNgPgB11jjU2QlB59+AgGIAbGOTJUaxAGYzyAEVyEYYTLgxNu4CFICuddIfZde48UgAy2AEYwpnexGxR8Ac2IBlAAd8AkIkAHpHFzcbWwEgkKJiADchXGwsSkNSTABPGVIAOlJg9FDLXUwZLJApT290H0NOCISyolE4gSjXTjUME0xiDy8k7CGANgmAUgiemLFbJH70QZS0jMwanPyYIqgBzArcKpgag9WjkHXTM+BWcOIAZi4IlcHOu3DpWU+IlCEIl4-wwOHwHV4IAANCBMAALGB0PYIADaIAAstgANZENQwJTYExSTAgAC6MIA7rgoPDSKinswAAxQgDsEwAHKS2EA";

const component = `
<Container sx={{ mt: 2 }}>
  <Card>
    <Flex sx={{ flexDirection: "column" }}>
      <Label>Loading Spinner</Label>
      <Spinner variant="styles.spinner" title="loading"></Spinner>
      <Label>Donut Loader at 66%</Label>
      <Donut variant="styles.donut" title="donut" value={2 / 3}></Donut>
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
