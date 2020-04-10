const title = "Privacy Policy Thing";
const description =
  "Usually uses position:fixed, \n Remember to integrate the Link component properly, \n The X should be an icon (TODO).";
const playroomHash =
  "#?code=N4Igxg9gJgpiBcIAEKkB4BiAbGAPAOgHaqoDOuAvMMESSQA4SkCWALsxIfEgOQCGAI1IQsAV1YweAGlp0UAiK1YQAttwAMM4nKQB3ZlFYALbjwCM69QFJpsuQCtRpdgDMAngGFOEwq1NgYXxgAJ1ttOUYWdk5TF2ZcGCgwnSR6bgBmO1QAX2ysgD4slEwcAnC6cioacrkANz5g5j5fU2c3HFIAOmCIUUJYKA8GpK0UlHo3DNGxvixmAHNCAEkJFVJ-QIlQ6ZSFXABlIz4oCF1TdSQzelwkACZrpGD5gT4ACgBOTSRPqW+v9U66gAbABKZJjBTBWDBABKx2YTm4twALEUcnkakhCpjigAVPCsNEkSrUIl0FTBJE7Mb1RrNPy8CS4VidZiEejifHMnhklC5MnYsZIABCbiQTjZ8yQxmYpD0MCEbBgSDcvSQfHmwRgyuUSF6wWAPF4GN5qDQABk2QBrU3EyiknE0hpNFq8NodTp8cFCkhQWX0LB8Sa8NlzQiSak+pBgUTBYSU3iMNlbHmOuT8tOoQVR1KNepgMWMOYF23oAD0lsIVuxZLQZa5rHyZRSteF4mUhFNJOA0dj8dMSaCoSQGaFtJdrAo+HAOAa06JAtNJTwpe7pZQjmczHcXiCrp4ASH3p9swWy1W614h5TpdHY2zQqXZeweAfOlrZbbSk4b+Kz9Kb51i+uD5CAUggMYMAqDApAIAA2iAACyfBWiEAAiMAuHwohYKwIAALrgfohhGLB8BwektyaAA7ECAAc+HZEAA";

const component = `
  <Flex
    sx={{
      position: "absolute",
      bottom: 0,
      width: "100%",
      justifyContent: "center",
      position: "relative",
      p: 3,
    }}
  >
    <Card
      sx={{
        boxShadow: "0 1px 2px rgba(90, 90, 90, 0.06)",
        borderRadius: "round",
      }}
    >
      <Flex sx={{ alignItems: "center" }}>
        <Text
          sx={{
            mr: 2,
            variant: "text.inputText",
          }}
        >
          By using this website you agree to our{" "}
          <Link
            sx={{
              variant: "styles.a",
              display: "inline",
              cursor: "pointer",
            }}
          >
            privacy policy
          </Link>
        </Text>
        x
        <Button sx={{ cursor: "pointer" }} variant="clear">
          <Flex
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          ></Flex>
        </Button>
      </Flex>
    </Card>
  </Flex>
`;

export default {
  component,
  title,
  description,
  playroomHash,
};
