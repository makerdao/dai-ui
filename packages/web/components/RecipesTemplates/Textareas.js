const title = "Textareas";
const description = "Textareas with labels and error state.";
const playroomHash =
  "#?code=N4Igxg9gJgpiBcIA8BhAhgJygPgDoDsACQpAcQwEscDjjUJ8AXNC-GDPI2ugGTQCMYAG2wAJCAHdCUCIQCeEAK6EAZjGEB+JAHo+gkTW4kAKjAAezDDDTYdpi5muduOlA2at2z2vSYs2HIYuesJiktKyCspqmjohBlwu9pbW0jAqaIpCjABqaEKKMAC8uCAAIumZ2YTJpbbayY42QSTabn6egYkk7R4B3sECoeJSMvJKqupCWrpDCUYm5ilohABumBRoTCUgjEtNZVsA5ux1dvtWzd10yYQAzmZFwMCEALbwhAAMhAC+P2sbLaMHZ3V75ISHfAnDB1FrcACiGAwEAwbxgdzuaBOhCOEHRhAAFuwYHDWskBq1ev4vIYdOQqJxXJhqPgQAAaXZE17ohAAbRAAFk0ABrdgVDJZRggAC6HIkVEYBLufIAzAAmT5sgDsADYABzSn5AA";

const component = `
  <Card>
    <Grid>
      <Container>
        <Label>How do you feel?</Label>
        <Textarea></Textarea>
      </Container>
      <Container>
        <Label>How do you feel?</Label>
        <Textarea defaultValue="Default Text"></Textarea>
      </Container>
      <Container>
        <Label>How do you feel?</Label>
        <Textarea variant="textareaDanger"></Textarea>
        <Text sx={{ m: 0 }} variant="smallDanger">
          Error message goes here
        </Text>
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
