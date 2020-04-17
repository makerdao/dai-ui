const title = "Scrollable Table";
const description = "Scrollable Table for grouped content";
const playroomHash =
  "#?code=N4Igxg9gJgpiBcIAESA8BhAhgJykgzgB4C8wwSAtgJ7xIBMANJYbQNqNIA6ImArgC4RuAXSYAHWgAZxAI1oBmJhUyEA6gEso-ABa1uAVkmSxhbkgC+5gHycAdihSoAYgBsYhAiTJIJSRUkwXdQBzWwBJfhgKfD1wGFtI7G4mACtefH51ADMqdAgE+P5Y-DFMMBgAWhkYfgB3GHizSxt7B0cAFXd+T1JyLPz+VRgQ7SKuEBkIFyhkpH6EgGV1AC8YWgAWC2sFiAoYJHbMGTcD9X43VAB6TsJ+FrbHACEBQVsrdCCwAGsr5-5X+4OK6udyAxwAcWwmjsDyQkBcvAotnwpHk5hhDyIvQxsMmuBg2EeEH+u1iAEYTAQptCQAwcQ88bBsO0IL5uBSPPhqTNafS2oyCXkXBBsLFgtgYFQ6Mk+Q4TLRGLKUGIaEgyXTWm1LPSwQ5gKxuO1tDBMFAybNDcbTdLaeMjSaoPIRAA6ZRiAAU7u0TC+koAlEhiFYkO6lWgbt0sd55oNhsFRrFJtMmuYkL6qKR09ZgNpzFcI7qUH6-ejNWhLpDNLrUETTGWUFHgGHlIQABJxhPjAAcxlMvPrDggADcCVlhbVYnxBDKBygBYTiYIKOTKVygjyNbC5yKmUKRWKJVKZ1ufCx6JutyraOqw9wAGTweAVeoyL5nCr4MDYKYuGQ4bi0E2s4OLUmg6LE+gmMeJ6UOotgaFoujjJBfYXrC5hoQ896Ps+MCvu+n7fi4v44BU-DYGUXwAUgQEwUgf7fOKEC8LYUB7qK4y1NoZwwNBJ7zgASqa6jpMUyjEXxDwYbeIAPk+L5vvwH5fj+f7YGR2iIjI1G0TBDFfExLFsVM+7jOKko2phuI7gSQlQCJMTjPg4kuJJWpWVsOqyvqYYGiA361OatrshaIAQFRICiL53ABZZ4xBUw3DhSIHkoH5AVOsFIAJeMyWRalSDpRAtTrKFOVJRFUXAUVtT6GVoV5VVJ41QAbPVWWNR5wiupgHrugFPr+oGwahsBqCVng8KIsiqKpummaStYYYoMAAU9X15TEYNVABkGIbLUCEZppKC1UNmm0uHm1xdIWDzFqWJ5XBNt33fSvwQIQgJXFguBWLSIA6FEMD4AgrAgAAspgvrYAAIjAWR8C4-D5SAoGISD8CsPIdDSAA7C1XbCOYQA";

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
        borderColor: "grey2",
        px: 2,
        py: 1,
      }}
    >
      {["Thead1", "Thead2", "Thead3"].map((h, key) => (
        <Text sx={{ fontWeight: "bold" }} key={key}>{h}</Text>
      ))}
    </Grid>
    <Box
      sx={{
        maxHeight: "80px",
        overflow: "auto",
        borderBottom: "1px solid",
        borderColor: "grey2",
        px: 2,
        py: 1,
        "&::-webkit-scrollbar": {
          width: "5px",
          minWidth: "5px",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "white",
          borderRadius: "small",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "grey2",
          borderRadius: "small",
        },
      }}
    >
      {[
        ["row1", "1", "ok"],
        ["row2", "1", "ok"],
        ["row3", "1", "ok"],
        ["row4", "1", "ok"],
        ["row5", "1", "ok"],
        ["row6", "1", "ok"],
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
