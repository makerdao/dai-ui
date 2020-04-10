const title = "Sliders";
const description = "Sliders with labels and error state.";
const playroomHash =
  "#?code=N4Igxg9gJgpiBcIA8BhCA7ALgQwJbpgCcACAW0wF4AdEAJhoD4r1jjVtComXW2BxQrijEAzgA8KwYMQDmgqACUIAdz7YADvGIAWYgF893XryQAZbACMYAGwYBla0KLFrlm0gD05q7ebHWSA5OhAyeQbAhfv5mbrbhzthgmLgAbjCe3jZG0fEkKRy42FjUICKOEQCCSakwjGHlRNkBHgJC2Z4oHFzMHRg4+I3MIAA0IJgAFjCkMCIIANogALLYANZEACIwAGbYAK7WmCAAuqPKQhOz8HMAzLQADMMA7ABsABxHekA";

const component = `
<Container mt="2">
  <Card>
    <Grid sx={{ gridRowGap: 4 }}>
      <Label>Slider label</Label>
      <Slider></Slider>
      <Label>Slider active</Label>
      <Slider variant="sliderActive"></Slider>
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
