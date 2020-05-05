const title = "Privacy Policy Thing";
const description =
  "Usually uses position:fixed, \n Remember to integrate the Link component properly.";
const playroomHash =
  "#?code=N4Igxg9gJgpiBcIA8AxANjAHgHQHYAJ8BnTAXmGD0MIAcIiBLAFwYl3n2xAEMAjIiGgCuTGFwA0VarwhMmEALYcADJILUA7gyhMAFhy4BGZcoCkEqYQBWQoiwBmATwDCbUbiYHwMDzABOFuq09Mys7JwgfjBo3CwAbmIgatT4NBwAzFIAvll4AHxSSM7cflCWxGQU5YQymADKutxQEBpeyviGNJj4AExd+H4A5rzcABQAnKr4k+LTU8oAdMoAbACUgSk1EKX+AEpNDLZefhBCuGUg5TlSBUH4qBjdJOTA+NxoDIO4AJKiCkReMA+UQBED4HK3Tb3AAqWCY1WozyqdyhCj8HB6ySh1DiJQY3A8XlEmCYCwYuBoIlhJK4CMI1xR+Eh2IAQo58LZyYN8HoGER8BoYPxmDB8I5Tm9BlFRfJ8Kc-JQwVxcozCEgADLkgDWdMRlUoqs2uL8+MJETsjgwRAW3A22JSUD5NBiji85I+uESWPthDAQj8AnRETo5JBtMN9JV9uZ9poJtxYHZdA+id1SAA9JrcFqY9QM9SmLm1d9ILgWSJ5Lgi3mS2x8LhuAoYKQuGA0PREvhIO2-C2QGw6jBS1ASo4uHkM7WqwjJ6Xy3I2LmM+gsMyM8VSrdl49bkkQHoYE2iAgANogACy3C1-gAIjB7NwhGgmCAALriEBaHS6Y-wE8AdmWAAOV8siAA";

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
        <IconButton>
          <Icon name="close" color="onSecondary"></Icon>
        </IconButton>
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
