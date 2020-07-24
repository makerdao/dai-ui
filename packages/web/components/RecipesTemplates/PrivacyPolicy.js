const title = "Privacy Policy Thing";
const description =
  "Usually uses position:fixed, \n Remember to integrate the Link component properly.";
const playroomHash =
  "#?code=N4Igxg9gJgpiBcIA8AxANjAHgHQHYAJ8BnTAXmGD0MIAcIiBLAFwYl3n2xAEMAjIiGgCuTGFwA0VarwhMmEALYcADJILUA7gyhMAFhy4BGZcoCkEqYQBWQoiwBmATwDCbUbiYHwMDzABOFuq09Mys7JwgfjBo3CwAbmIgatT4NBwAzFIAvll4AHxSSM7cflCWxGQU5YQymADKutxQEBpeyviGNJj4AExd+H4A5rzcABQAnKr4k+LTU8oAdMoAbACUgSk1EKX+AEpNDLYc4yfjyZtdHAAs5yk0jhw95TlSBUH4qBjdJOTA+NxoBiDXAASVECiIXjAPlEARA+Byb02HwAKlgmNVqD8qu9kQo-I9MYQXrj8EjkfgAEKOfC2Bi4Qb4PQMIj4DQwfjMGD4RwQIT-QZRbnyfB8vyUeFcXKkwhIAAy9IA1kSsZVKDLNnESgxuB4vHZHBgiAtuBsKSkoCyaDEHhF6YDcIlbub8GAhH4BASInR6bCuCridLzeTzZAIIqGNy6ICwI4VUgAPQK3CKkPURNozBMNOykGQXCUkTyXA59N5tj4XDcBQwUhcMBoeiJV2CbZ1kBsOru+zcaFcPKJ8slzGD-OFuRsNOJ9BYcmJ4qlN7Tr5vJIgPQwGtEBAAbRAAFluIr-AARGA9oRoJggAC64hAWh0um38B3AHZlgAOG9ZIA";

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
        borderRadius: 9999,
        px: 4,
        py: 2
      }}
    >
      <Flex sx={{ alignItems: "center" }}>
        <Text
          sx={{
            mr: 2,
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
            cookie policy
          </Link>
        </Text>
        <IconButton>
          <Icon name="close" color="onSurface"></Icon>
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
