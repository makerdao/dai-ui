import { useThemeUI, Container, Heading, Grid, Text } from "theme-ui";
import { Icon } from "@makerdao/dai-ui-icons";

const WrappedIcon = ({ name }) => {
  return (
    <Grid gap={2} columns={1} p={2} key={name}>
      <Icon name={name} color="onBackground" size={5} />
      <Text variant="boldBody">{name}</Text>
      <Text variant="small">{`<Icon name="${name}" color="onBackground" />`}</Text>
    </Grid>
  );
};

const Icons = () => {
  const {
    theme: { icons },
  } = useThemeUI();

  return (
    <Container>
      <Heading variant="largeHeading" py={4}>
        Icons
      </Heading>
      <Grid columns={5}>
        {Object.keys(icons).map((name) => {
          return <WrappedIcon key={name} name={name} />;
        })}
      </Grid>
    </Container>
  );
};

export default Icons;
