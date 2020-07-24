const title = "Search Input";
const description = "Search input with icon";
const playroomHash =
  "#?code=N4Igxg9gJgpiBcIAESA8AhCAPJBnLAvMMEgA4S4CWALpRAHbxIA6IATjADYCGtAbjFZIAvsIB8zeihSoAkpHqTp0-EWBLl08lVoMmrbgCNcETgFdqgkABoNmpNQil9IAKwAGAKStbU+w7ZuelwAMwg2AFsXakDgnksATQAKAFoPTwBKHztNThgQ6iYAZl97URyUem4ImAJWXBhuNjAAC1YKvEoAL1rgIuEOvkoYAHdMQlZ3JCmARgA2JHn2vxQAegkVtFl6UgsO1WIkQwBzF1wzNhDuMCtrMmK7sPpqAGVumCYAFjuIwyYAJjupE4TFcIgGmxQwOuMBaplgbDqIBejWaLSQLRgHAAdLjlsp1hpUKtxmIbCBqJiargEABtEAABRg9BAAF1hEA";

const component = `
  <Box sx={{ position: "relative" }}>
    <Icon
      sx={{
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        left: 3,
      }}
      name="search"
      size={3}
      viewBox="0 0 16 16"
    />
    <Input
      sx={{ bg: "surface", p: 3, fontSize: 4, mb: 2, pl: 5 }}
      placeholder="Search here..."
    />
  </Box>
`;

export default {
  component,
  title,
  description,
  playroomHash,
};
