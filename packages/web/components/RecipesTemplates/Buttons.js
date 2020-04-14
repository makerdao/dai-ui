const title = "Buttons";
const description =
  "Primary and outline buttons with active and disabled styles.";
const playroomHash =
  "#?code=N4Igxg9gJgpiBcIA8BhCA7ALgQwJbpgCcACAZwA8BeYYYgW03mICZiBfNgPgB11jjU2QlB59+AgOKFcUYgHNsAB2rM2xSABsArnXSlqAbWYAaYtxABGAGYlrhcwF0uvceKQAxDTHJkqNYlZe5AAiuIQwYJi4GEzmmjro5uzOYq78SAAy2ABGMBqcAArSdEIAnkgA9Fm5+S5p6QBCWpiYGJwAylrZdLiYlU0tbXWulZ7eovUeQb7UtIHeoeGR0eix4BDaukkcE-UC1XmcoaQ5XlCVB7WpaUgDrXxQuCfZZx1dPX0Vd0PX6RVj5F2IwBM388xCYQiURiZnWm0SIGSQJul04AHlmhp8DALjlDsMbt8+AA3IS4bBYSjmCCY7HmN7dXr9Zr3ZF-AFsgQgiizAJBRZQlZreJbRE7AkjVHHU4wc5VPFXPYCInEUnSCmYKkgGmYLEEJKPZ6vCVpTqMzAmv5EzmjILIypSGS7SooIQiXgujA4bGEUQgYwgTAACxgdBgpAQBhAAFlsABrIjBGBWbBaDSYEAOAMAdxkwYj8AMAGZmAAGYwAdgAbAAOJxAA";

const component = `
<Container sx={{ mt: 2 }}>
  <Card>
    <Grid gap={2} columns={[2, "1fr 1fr"]}>
      <Flex sx={{ flexDirection: "column" }}>
        <Label>Primary</Label>
        <Button>Submit</Button>
      </Flex>
      <Flex sx={{ flexDirection: "column" }}>
        <Label>Disabled</Label>
        <Button disabled>Submit</Button>
      </Flex>
      <Flex sx={{ flexDirection: "column" }}>
        <Label>Outline</Label>
        <Button variant="outline">Submit</Button>
      </Flex>
      <Flex sx={{ flexDirection: "column" }}>
        <Label>Disabled</Label>
        <Button variant="outline" disabled>
          Submit
        </Button>
      </Flex>
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
