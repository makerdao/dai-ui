import { useState } from "react";
import {
  useThemeUI,
  Container,
  Heading,
  Grid,
  Text,
  Card,
  Box,
  Input,
  Flex,
} from "theme-ui";
import { Icon, icons as standardIcons } from "@makerdao/dai-ui-icons";
import { icons as brandingIcons } from "@makerdao/dai-ui-icons-branding";
import IconsGuide from "../text/iconsGuide.mdx";

const social = [
  "facebook",
  "medium",
  "rocketchat",
  "reddit",
  "telegram",
  "twitter",
  "youtube",
  "wechat",
];

const wallets = [
  "ledger",
  "trezor",
  "metamask_color",
  "wallet_connect_color",
  "coinbase_color",
];

const WrappedIcon = ({ name }) => {
  return (
    <Grid gap={2} columns={1} key={name} sx={{ border: "1px solid", py: 3 }}>
      <Icon name={name} color="onBackground" size={4} sx={{ margin: "auto" }} />
      <Text variant="boldBody" sx={{ margin: "auto" }}>
        {name}
      </Text>
    </Grid>
  );
};

const LogoDisplay = ({ name }) => {
  return (
    <Grid columns={3} gap={0} sx={{ border: "1px solid", py: 3 }}>
      <Icon
        name={`${name}_color`}
        color="onBackground"
        size={4}
        sx={{ margin: "auto" }}
      />
      <Icon name={name} color="onBackground" size={4} sx={{ margin: "auto" }} />
      <Flex
        sx={{
          alignItems: "center",
          justifyContent: "center",
          bg: "black",
          size: 4,
          borderRadius: 9999,
          margin: "auto",
        }}
      >
        <Icon name={name} color="white" size={3} />
      </Flex>
    </Grid>
  );
};

const Icons = () => {
  const [query, setQuery] = useState();

  const allBrandingIcons = Object.keys(brandingIcons);
  const allStandardIcons = Object.keys(standardIcons);

  const mainLogos = allBrandingIcons.filter(
    (name) => !name.includes("_") && !social.includes(name)
  );

  const queryFilter = (name) =>
    query === undefined ? name : name.includes(query);

  const colorVariantsFilter = (name) =>
    [name, `${name}_color`, `${name}_circle_color`].every((variant) =>
      allBrandingIcons.includes(variant)
    );

  const withColorVariants = mainLogos
    .filter(queryFilter)
    .filter(colorVariantsFilter);

  const withCircleColor = allBrandingIcons
    .filter(queryFilter)
    .filter((name) => name.includes("_circle_color"));

  return (
    <Container>
      <Grid columns={1}>
        <Grid columns={["1fr 2fr"]}>
          <Heading variant="largeHeading">Icons</Heading>
          <Card>
            <IconsGuide />
          </Card>
        </Grid>
        <Input
          sx={{ bg: "surface", p: 3, fontSize: 4 }}
          placeholder="Find icon by name..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <Card>
          <Heading variant="medHeading">Standard Icons</Heading>
          <Heading pb={3} variant="smallHeading">
            Colors and size can be customized
          </Heading>
          <Grid columns={6}>
            {[...allStandardIcons, ...social]
              .filter(queryFilter)
              .map((name) => {
                return <WrappedIcon key={name} name={name} />;
              })}
          </Grid>
        </Card>
        <Card>
          <Heading variant="medHeading">Brand Tokens</Heading>
          <Heading pb={3} variant="smallHeading">
            Comes in three flavors!
          </Heading>
          <Grid columns={4}>
            {withColorVariants.map((name) => (
              <LogoDisplay key={name} name={name} />
            ))}
          </Grid>
        </Card>
        <Card>
          <Heading variant="medHeading">Color Icons</Heading>
          <Heading pb={3} variant="smallHeading">
            Some color icons for you
          </Heading>
          <Grid columns={6}>
            {[...wallets, ...withCircleColor].map((name) => {
              return <WrappedIcon key={name} name={name} />;
            })}
          </Grid>
        </Card>
      </Grid>
    </Container>
  );
};

export default Icons;
