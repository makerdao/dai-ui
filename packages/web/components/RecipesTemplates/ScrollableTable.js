const title = "Scrollable Table";
const description = "Scrollable Table for grouped content";
const playroomHash =
  "#?code=N4Igxg9gJgpiBcIA8BhAhgJygAgM4A8BeYYbAWwE95sAmAGnP2oG17sAdENAVwBcJOAXQYAHagAZRAI2oBmBmTT4A6gEsovABbVOAVnHiR+TtgC+pgHzsAdtmxIAYgBsY+PERLYx2edjRPVAHNrAEleGDJcHXAYa3CMTgYAK25cXlUAMwoUCDjY3mjcETQwGABaKRheAHcYWJNzK1s7ewAVV153YlIM3N5lGCDNAo4QKQgnKETsXriAZVUALxhqABYzSzmIMhhsVrQpFz3VXhckAHp2-F4mlvsAIT5+awsUALAAawvH3mfb+3Ozlc-yQAHEMOobHdIE5uGRrLhiLJTFCWgRuqi7uMsDAMPcIL9ttEAIxGPATSEgOiYlrY2AYVoQbycUluXAUqZUml2Om4nJOCAYaJkPgwTnU5p3IzUejcrxUbDEmnmVH-OzAZicVqaGBoKBKqmjbW6qA0aZanV62RCAB0ihEAAoHZoGB8YBQAJTYQgWbAOuVIK6ddGeWb9QaBYbRcaTBqmbBuijEROWOXqzQoyUtC5BtXYD0ezN2C7g9Qg-HGLMh4ByxT4AASEajowAHIZjFys3YIAA3XEZAXVaI8fiJOW8vEE-hkElk9kBcXjwX0-mC4WixddrxMWgSu52EQK4l7-ecABk8HgZVqUg+JzKuDAGAmTikmE41BrW7s1XUWmiuhGGO37kKo1hqBo2ijIBHZyqYJ53Oel7XjAt73o+z5OK+mBlLwGAlB8H7YF++60gRgTPtw1hQKuQqjL0GAwBREBUZupE8suuIAEp6qoqSFIoWGcHBCEtEhV43nevAPk+L5vhguGaHCUhESR7Fvp8zGsbR67hGx6mcRgPFQHxUSjLgglOMJW5Fi0KrNHmGpypqIDPtUBoMCy5ogBAhEgMIzmcG5ZqGl5oU+X5AVbi5bnWuFHmjL5QiiXYMUQNUqzeQlnBJf5KXYGl1S6Fl3m5VFpGFQAbCV4VlTSgh2mgjoOm5rrul6Pp+gGpY4DCcIIki8aJsm7qpiBwBuY1zWlFhbWet6vr+iBxZBgm7ojRQljADNTimDmHR5ncBa2XcJYQlAebHai3wQPgTQXOgWBNFSIBaBEMC4AgzAgAAsmgboYAAIjAGQ8E4vB5SAv6QZ98DMLINCSAA7JVLaCKYQA";

const component = `
<Card sx={{ my: 2, mx: [2, "auto"], p: 0, pb: 3, maxWidth: "500px" }}>
<Flex sx={{ p: 3, alignItems: "center", justifyContent: "space-between" }}>
  <Text sx={{ fontWeight: "bold", fontSize: 4 }}>Some Table Title</Text>
  <Button>Click</Button>
</Flex>
<Grid
  columns={3}
  sx={{
    borderBottom: "1px solid",
    borderTop: "1px solid",
    borderColor: "muted",
    px: 2,
    py: 1
  }}
>
  {["Thead1", "Thead2", "Thead3"].map((h, key) => (
    <Text sx={{ fontWeight: "bold" }} key={key}>
      {h}
    </Text>
  ))}
</Grid>
<Box
  sx={{
    maxHeight: "80px",
    overflow: "auto",
    borderBottom: "1px solid",
    borderColor: "muted",
    px: 2,
    py: 1,
    "&::-webkit-scrollbar": {
      width: "5px",
      minWidth: "5px"
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "foreground",
      borderRadius: "small"
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "muted",
      borderRadius: "small"
    }
  }}
>
  {[
    ["row1", "1", "ok"],
    ["row2", "1", "ok"],
    ["row3", "1", "ok"],
    ["row4", "1", "ok"],
    ["row5", "1", "ok"],
    ["row6", "1", "ok"]
  ].map((row, key) => (
    <Grid columns={3} key={key}>
      {row.map((cell, key) => (
        <Text key={key}>{cell}</Text>
      ))}
    </Grid>
  ))}
</Box>
</Card>
`;

export default {
  component,
  title,
  description,
  playroomHash,
};
