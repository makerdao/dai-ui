const title = "Textareas";
const description = "Textareas with labels and error state.";
const playroomHash =
  "#?code=N4Igxg9gJgpiBcIA8BhAhgJygPgDoDsACQpAcQwEscDjjUJ8AXNC-GDPI2ugGTQCMYAG2wAJCAHdCUCIQCeEAK6EAZjGEB+JAHo+gkTW4kAKjAAezDDDTYdpi5muduOlA2at2z2vSYs2HIYuesJiktKyCspqmjohBlwu9pbW0jAqaIpCjABqaEKKMAC8uCAAIumZ2YTJpbbayY42QSTabn6egYkk7R4B3sECoeJSMvJKqupCWrpDCUYm5ilohABumBRoTCUgrAAOioxlWwDm7HV2S00DPsmEAM5mRcDAhAC28IQADIQAvr9rDZbRg7e5vfJCY74M4YOotbgAUQwGAgGHeMHu9zQZ0IJwgGMIAAt2DB4a1kjdXO5-F5DDpyFROK5MNR8CAADQgRjEt4YhAAbRAAFk0ABrdgVDJZRggAC6nIkVG59wFAGYAExfdkAdgAbAAOWW-IA";

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
        <Textarea variant="inputDanger"></Textarea>
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
