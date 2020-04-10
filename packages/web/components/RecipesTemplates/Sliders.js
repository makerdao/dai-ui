const title = "Sliders";
const description = "Sliders with labels and error state.";
const playroomHash =
  "#?code=N4Igxg9gJgpiBcIA8BhAhgJygPgDoDsACQpAcQwEspCBnADwF5hhCBzSqAJQgHdS0ADvEIAWQgF9xeIsRIoI+AC5oK+GBmmzZSADJoARjAA22AMpGq6wkYPGkAej2GTBLcSTnLGh59gbX2vbySipq-jLuwcqq6ppuurYmvlZoYIoUAG4wDk7GcVoeFn6EGZgUaEoMuCA0ReoAgmmZMNXYPnXhBUEK0WFxDuRU0g7oWNIgADQgigAWMAC2MDQIANogALJoANbqACIwAGZoAK5GiiAAulM8VLPL8CsAzABMAAwTAOwAbAAcF+JAA";

const component = `
  <Card>
    <Grid sx={{ gridRowGap: 4 }}>
      <Container>
        <Label>Slider label</Label>
        <Slider></Slider>
      </Container>
      <Container>
        <Label>Slider active</Label>
        <Slider variant="sliderActive"></Slider>
      </Container>
    </Grid>
  </Card>
`;

export default {
  component,
  title,
  description,
  playroomHash,
};
