export default [
  {
    group: 'Layouts',
    name: 'Basic PageLayout',
    code: `
  <Container
  sx={{
    display: "flex",
    flexDirection: "column",
    px: 2,
    minHeight: "100vh",
    justifyContent: "space-between"
  }}
>
</Container>
  `,
  },
  {
    group: 'Layouts',
    name: 'Responsive Header Nav',
    code: `
    <Flex
    as="header"
    sx={{ justifyContent: "space-between", alignItems: "center", pb: 2 }}
  >
    <Link>
      <Icon name="maker" size={4} color="primary"></Icon>
    </Link>
    <Flex as="nav">
      {["Home", "About"].map(name => (
        <NavLink sx={{ display: ["none", "block"] }}>{name}</NavLink>
      ))}
      <Icon
        name="menu"
        width="40"
        height="25"
        size="auto"
        sx={{ display: ["block", "none"] }}
      ></Icon>
    </Flex>
  </Flex>
  `,
  },
  {
    group: 'Layouts',
    name: 'Basic Footer',
    code: `
    <Flex sx={{ ml: "auto" }}>
    {["FAQ", "Terms"].map(name => (
      <NavLink sx={{}}>{name}</NavLink>
    ))}
  </Flex>
    `,
  },
  {
    group: 'Forms',
    name: 'Basic Form',
    code: `
    <Grid columns="1">
    <Input placeholder="Email" sx={{ width: 7 }}></Input>
    <Input placeholder="Password" sx={{ width: 7 }}></Input>
    <Button sx={{ width: 6, mr: 2 }}>Submit</Button>
  </Grid>
    `,
  },
  {
    group: 'Tables',
    name: '3 Column Scrollable',
    code: `
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
    `,
  },
];
