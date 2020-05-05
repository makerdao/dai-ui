const title = "Textareas";
const description = "Textareas with labels and error state.";
const playroomHash =
  "#?code=N4Igxg9gJgpiBcIA8BhCA7ALgQwJbpgCcACAW0wF4AdEAJhoD4r1jjVtComXW2BxQri7NevJACEIAD26jRSADLYARjAA2DABIQA7sSgRiATwgBXYgDMY6gPxIA9EtUaRc1kgAqMKTkIxsDA5ePhz+snIOkjKu8lHhbooq6lq6+oYm5la2Dk7JMRHBvv76MBbYpmqYAGrYaqYw1CAAIqXllcSFjEHeRQH57vZx-WxDPAm5Gtp6BsZmltZqdo5JLmMFPaHYxABuHLjYWI2YG37YAKKEhBCEXfaFm-HrPsQAzlIUwMBk8MQADMQAXwBOz2B0oNBepFqaguVxuIEeblh1zIMBeL2wAHMYMRMRA0cQABZEGDDAaFRFsQbSR4OARCcIOFAcYToJkYHD4IjcEAAGhAmGJpDRCAA2iAALLYADWRBaZQqmBAAF0AUA";

const component = `
<Container mt="2">
  <Card>
    <Grid>
      <Box>
        <Label>How do you feel?</Label>
        <Textarea></Textarea>
      </Box>
      <Box>
        <Label>How do you feel?</Label>
        <Textarea defaultValue="Default Text"></Textarea>
      </Box>
      <Box>
        <Label>How do you feel?</Label>
        <Textarea variant="textareaError"></Textarea>
        <Text sx={{ m: 0 }} variant="smallError">
          Error message goes here
        </Text>
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
