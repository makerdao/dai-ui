import { useState } from "react";
import {
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
import CollapsableCard from "../components/CollapsableCard";

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

const WrappedIcon = ({ name, onClick }) => {
  return (
    <Grid
      onClick={() => onClick(name)}
      gap={2}
      columns={1}
      key={name}
      sx={{
        py: 3,
        bg: "background",
        borderRadius: "roundish",
      }}
    >
      <Icon name={name} color="onBackground" size={4} sx={{ margin: "auto" }} />
      <Text variant="boldBody" sx={{ margin: "auto" }}>
        {name}
      </Text>
    </Grid>
  );
};

const CircularIcon = ({
  name,
  onClick,
  size = 4,
  height = "20px",
  width = "20px",
}) => {
  return (
    <Flex
      sx={{
        alignItems: "center",
        justifyContent: "center",
        bg: "black",
        size,
        borderRadius: 9999,
        margin: "auto",
      }}
      onClick={() => onClick([name])}
    >
      <Icon
        name={name}
        color="white"
        size="auto"
        height={height}
        width={width}
      />
    </Flex>
  );
};

const LogoDisplay = ({ name, onClick }) => {
  return (
    <Grid
      columns={3}
      gap={0}
      sx={{
        py: 3,
        bg: "background",
        borderRadius: "roundish",
      }}
    >
      <Icon
        name={`${name}_color`}
        color="onBackground"
        size={4}
        sx={{ margin: "auto" }}
        onClick={() => onClick(`${name}_color`)}
      />
      <Icon
        name={name}
        color="onBackground"
        size={4}
        sx={{ margin: "auto" }}
        onClick={() => onClick(name)}
      />
      <CircularIcon name={name} onClick={() => onClick([name])} />
    </Grid>
  );
};

const Icons = () => {
  const [query, setQuery] = useState();
  const [activeIcon, setActiveIcon] = useState(null);

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

  const codeGen = (activeIcon) => {
    if (Array.isArray(activeIcon)) {
      const str = `
<Flex sx={{ alignItems: "center", justifyContent: "center", bg: "onSurface", size: 4, borderRadius: "round", margin: "auto" }}>
  <Icon name="${activeIcon}" color="surface" size="3" />
</Flex>
      `;
      return str;
    } else {
      return `<Icon name="${activeIcon ?? "my_icon"}" size={5} />`;
    }
  };

  const data = [
    [
      "Standard Icons",
      "This set contains the collection of standard UI Icons.",
      <Grid key="firstSet" columns={6} p={3}>
        {[...allStandardIcons, ...social].filter(queryFilter).map((name) => {
          return <WrappedIcon key={name} name={name} onClick={setActiveIcon} />;
        })}
      </Grid>,
    ],
    [
      "Brand Tokens",
      "Commonly used brand token whose color and size can be customized.",
      <Grid key="secondSet" columns={4} p={3}>
        {withColorVariants.map((name) => (
          <LogoDisplay key={name} name={name} onClick={setActiveIcon} />
        ))}
      </Grid>,
    ],
    [
      "Color Icons",
      "Brand icons with coloring or features that shouldn't be changed.",
      <Grid key="thirdSet" columns={6} p={3}>
        {[...wallets, ...withCircleColor].map((name) => {
          return <WrappedIcon key={name} name={name} onClick={setActiveIcon} />;
        })}
      </Grid>,
    ],
  ];

  return (
    <Container>
      <Grid columns={1}>
        <Grid columns={["1fr 2fr"]}>
          <Flex sx={{ flexDirection: "column" }}>
            <Heading variant="largeHeading">Icons</Heading>
            <Box sx={{ margin: "auto" }}>
              {activeIcon ? (
                Array.isArray(activeIcon) ? (
                  <CircularIcon
                    name={activeIcon[0]}
                    size={6}
                    height="100px"
                    width="100px"
                  />
                ) : (
                  <Icon name={activeIcon} size={6} />
                )
              ) : null}
            </Box>
          </Flex>
          <Card py={0}>
            <IconsGuide activeIcon={codeGen(activeIcon)} />
          </Card>
        </Grid>
        <Input
          sx={{ bg: "surface", p: 3, fontSize: 4 }}
          placeholder="Find icon by name..."
          onChange={(e) => setQuery(e.target.value)}
        />
        {data.map(([title, subtitle, body]) => (
          <CollapsableCard
            key={title}
            title={title}
            subtitle={subtitle}
            body={body}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default Icons;
