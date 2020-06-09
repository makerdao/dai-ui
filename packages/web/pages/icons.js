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
    <Grid gap={2} columns={1} p={2} key={name}>
      <Icon name={name} color="onBackground" size={4} />
      <Text variant="boldBody">{name}</Text>
      <Text variant="small">{`<Icon name="${name}" color="onBackground" />`}</Text>
    </Grid>
  );
};

const LogoDisplay = ({ name }) => {
  return (
    <Grid columns={4} gap={0}>
      <Icon name={`${name}_color`} color="onBackground" size={4} />
      <Icon name={name} color="onBackground" size={4} />
      <Flex
        sx={{
          alignItems: "center",
          justifyContent: "center",
          bg: "black",
          size: 4,
          borderRadius: 9999,
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
          <LogoDisplay name="dai" />
          <Card>
            <IconsGuide />
          </Card>
        </Grid>
        <Input
          sx={{ bg: "surface", p: 3, fontSize: 4 }}
          placeholder="Find icon by name..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <Card sx={{ bg: "surface" }}>
          <Heading variant="medHeading">Brand Icons</Heading>
          <Heading pb={3} variant="smallHeading">
            Comes in three flavors!
          </Heading>
          <Grid columns={4} gap={5}>
            {withColorVariants.map((name) => (
              <LogoDisplay key={name} name={name} />
            ))}
          </Grid>
        </Card>
        <Card>
          <Heading variant="medHeading">Part II</Heading>
          <Heading pb={3} variant="smallHeading">
            Somethind
          </Heading>
          <Grid columns={4}>
            {[...wallets, ...withCircleColor].map((name) => {
              return <WrappedIcon key={name} name={name} />;
            })}
          </Grid>
        </Card>
        <Card>
          <Heading variant="medHeading">Standard Icons</Heading>
          <Heading pb={3} variant="smallHeading">
            Colors and size can be customized
          </Heading>
          <Grid columns={4}>
            {[...allStandardIcons, ...social]
              .filter(queryFilter)
              .map((name) => {
                return <WrappedIcon key={name} name={name} />;
              })}
          </Grid>
        </Card>
      </Grid>
    </Container>
  );
};

export default Icons;
