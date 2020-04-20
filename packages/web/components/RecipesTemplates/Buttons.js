const title = "Buttons";
const description =
  "Primary and outline buttons with active and disabled styles.";
const playroomHash =
  "#?code=N4Igxg9gJgpiBcIA8BhCA7ALgQwJbpgCcACAZwA8BeYYYgW03mICZiBfNgPgB11jjU2QlB59+AgOKFcUYgHNsAB2rM2xSABsArnXSkVXXuPFIAQhHKjjxpABlsAIxgbOABWl0hATyQB6e04uRtb8ZlqYmBicKBq4YADWxACyMH6m4ZHoVtZpFtk25pbBIXaOzpwAIrikjhowUH4B5cU56REYxFDVtfXRsQnJqb5tmfkmw3ktoYVjNk0uAPLhsQSNZUFiJSMdAG5CuNhYlNwgEMv4MCd9cYkpaRlRUwITRZsmM0+h85XdDnUN-nWs3eDz4e2kh0wx1O5wIJ06v3+wOMMRug0+z22WSeuVeW0mbzmQIAyp4NBo1oFkQIscRwQcjidSGSNFdUQM7sNQcDcTyPoSTN8qjU-vVKc0BdNQXT9pDoczsOT4V0RUiMfx2bdLpLMdycS8+QSQl8SSziEtMCsht8MWF2mDZYyQAryRarWz+lr7vaeQacfzjQIhYixYCqbbafS5UyWW6LsqQyJ1cRNeidd7RvqA+MpDJsn4UEIk+gCxgcBdCKIQAAaECYAAWMDoMFICAA2iAkth4kQKjAAGbYLQaTAgAC6tYA7jIG634G2AMzMAAM1YA7AA2AAcY7YQA";

const component = `
<Container sx={{ mt: 2 }}>
  <Card>
    <Grid gap={2} columns={2}>
      <Box>
        <Label>Primary</Label>
        <Button>Click Me</Button>
      </Box>
      <Box>
        <Label>Disabled</Label>
        <Button disabled>Click Me</Button>
      </Box>
      <Box>
        <Label>Outline</Label>
        <Button variant="outline">Click Me</Button>
      </Box>
      <Box>
        <Label>Disabled</Label>
        <Button variant="outline" disabled>
          Click Me
        </Button>
      </Box>
      <Box>
        <Label>Small</Label>
        <Button variant="small">Click Me</Button>
      </Box>
      <Box>
        <Label>Disabled</Label>
        <Button variant="small" disabled>
          Click Me
        </Button>
      </Box>
      <Box>
        <Label>Small Outline</Label>
        <Button variant="smallOutline">Click Me</Button>
      </Box>
      <Box>
        <Label>Disabled</Label>
        <Button variant="smallOutline" disabled>
          Click Me
        </Button>
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
