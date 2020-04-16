const title = "Scrollable Table";
const description = "Scrollable Table for grouped content";
const playroomHash =
  "#?code=N4Igxg9gJgpiBcIA8BhAhgJygAgM4A8BeYYbAWwE95sAmAGnP2oG17sAdENAVwBcJOAXQYAHagAZRAI2oBmBmTT4A6gEsovABbVOAVnHiR+TtgC+pgHzsAdtjvYkAMQA2MfHiIlsY7POxpnVQBzawBJXhgyXB1wGGsIjE4GACtuXF5VADMKFAh4uN4Y3BE0MBgAWikYXgB3GDiTcytbezskABU3Xg9iUky83mUYYM1CjhApCGcoJOx++IBlVQAvGGoAFjNLBYgyGGx2tClXA9VeVyQAek78XmbWtoAhPn5rCxRAsABrK+feV-u9iuLjcgLaAHEMOobA9sJBnNwyNZcMRZKYYQ8CL0MbDJlgYBhHhB-rsYgBGIx4KbQkB0HEPPGwDDtCA+TgU9y4akzWn01qMgm5ZwQDAxIIYGAUGhJPn2IzUeiyuwiKjYMl0lqtcz0sH2YDMTjtTQwNBQMmzQ3G03S2njI0mqCyIQAOkUIgAFO7NABKbCECzYd1Khw3bpYrzzQbDIKjGKTaaNSzATSmK6h3V2b3e9GahyXSHqXVIInGXN2cPAYOKfAACWjsfGAA5DMZeWX7BAAG4EzLCmoxHj8GXtuwCwnE-hkcmUrmBHka2GjkVMoUisUSqXDxfeJi0BeLlXUdXBzgAMng8HKdSkXzO5VwYAwU2cUkwnGolZH9hq6i0MV0Rhbtu5CqNYagaNo4wAa2+6wqYsEPGeF5XjAN53g+T7OC+mDlLwGClF877YJ+wHYK+3zihA3DWFAq6iuMNSaGcMBAduY4AEqmqoaRFIoWGsQ88EniA56Xtet68Pej7Pq+GC4ZoiJSERJHAeRXyUdRtFTGu4zipKNoIbiy4EpxUDcdE4y4HxzgCVqhlbDqsr6sGBogE+NTmra7IWiAECESAwguZw7kGeMnkMJwflCPZdiue5TpeSA4XjFFAUxdgcUQDU6w+clkX+YFX6ZTUui5T5qWFduxUAGxlYlFX2YIrpoB67rub6-qBsGSAFjg8KIsiqKWMGdjAO5zWtWUWEdQGQZfq0HRdBYwBTc4qbXEtI3YFmObblcvUZtt2b0r8ED4ICVzoFgFi0iAWiRDAuAIMwIAALJoF8BIACIwJkPDOLwaUgD+EFPfAzCyDQkgAOzVY2gimEAA";

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
      {["Thead1", "Thead2", "Thead3"].map((h) => (
        <Text sx={{ fontWeight: "bold" }}>{h}</Text>
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
      ].map((row) => (
        <Grid columns={3}>
          {row.map((cell) => (
            <Text>{cell}</Text>
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
