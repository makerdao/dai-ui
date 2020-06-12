import { useState, Fragment } from 'react';
import { Container, Heading, Grid, Text, Box, Input, Flex } from 'theme-ui';
import { Icon, icons as standardIcons } from '@makerdao/dai-ui-icons';
import { icons as brandingIcons } from '@makerdao/dai-ui-icons-branding';
import copy from 'copy-to-clipboard';
import IconsGuide from '../text/iconsGuide.mdx';
import CollapsableCard from '../components/CollapsableCard';

const social = [
  'facebook',
  'medium',
  'rocketchat',
  'reddit',
  'telegram',
  'twitter',
  'youtube',
  'wechat',
];

const wallets = [
  'ledger',
  'trezor',
  'metamask_color',
  'wallet_connect_color',
  'coinbase_color',
];

const WrappedIcon = ({ name, selected, onClick }) => {
  return (
    <Grid
      onClick={() => {
        onClick(name);
        copy(name);
      }}
      gap={2}
      columns={1}
      key={name}
      sx={{
        py: 3,
        bg: selected ? 'muted' : 'background',
        borderRadius: 'roundish',
        '&:hover': {
          bg: 'muted',
          cursor: 'pointer',
        },
        '&:active': {
          bg: 'mutedAlt',
        },
      }}
    >
      <Icon name={name} color="onBackground" size={4} sx={{ margin: 'auto' }} />
      <Text variant="small" sx={{ margin: 'auto' }}>
        {name}
      </Text>
    </Grid>
  );
};

const CircularIcon = ({
  name,
  onClick,
  size = 4,
  height = '20px',
  width = '20px',
  sx,
}) => {
  return (
    <Flex
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        bg: 'onSurface',
        size,
        borderRadius: 9999,
        ...sx,
      }}
      onClick={onClick}
    >
      <Icon
        name={name}
        color="surface"
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
      gap={2}
      columns={1}
      key={name}
      sx={{
        py: 3,
        bg: 'background',
        borderRadius: 'roundish',
      }}
    >
      <Grid columns={3} gap={0}>
        <Icon
          name={`${name}_color`}
          size={4}
          sx={{ margin: 'auto' }}
          onClick={() => {
            onClick(`${name}_color`);
            copy(`${name}_color`);
          }}
        />
        <CircularIcon
          name={name}
          sx={{ margin: 'auto' }}
          onClick={() => {
            onClick([name]);
            copy(name);
          }}
        />
        <Icon
          name={name}
          color="onBackground"
          size={4}
          sx={{ margin: 'auto' }}
          onClick={() => {
            onClick(name);
            copy(name);
          }}
        />
        <Text sx={{ margin: 'auto', px: 2 }} variant="small">
          {name}_color
        </Text>
        <Text sx={{ margin: 'auto', px: 2 }} variant="small">
          {name}
        </Text>
        <Text sx={{ margin: 'auto', px: 2 }} variant="small">
          {name}
        </Text>
      </Grid>
    </Grid>
  );
};

const Icons = () => {
  const [query, setQuery] = useState();
  const [activeIcon, setActiveIcon] = useState('dai_circle_color');

  const allBrandingIcons = Object.keys(brandingIcons);
  const allStandardIcons = Object.keys(standardIcons);

  const mainLogos = allBrandingIcons.filter(
    (name) => !name.includes('_') && !social.includes(name)
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
    .filter((name) => name.includes('_circle_color'));

  const codeGen = (activeIcon) => {
    if (Array.isArray(activeIcon)) {
      const str = `
<Flex sx={{ alignItems: "center", justifyContent: "center", bg: "onSurface", size: 4, borderRadius: "round", margin: "auto" }}>
  <Icon name="${activeIcon}" color="surface" size="3" />
</Flex>
      `;
      return str;
    } else {
      return `<Icon name="${activeIcon ?? 'my_icon'}" size={5} />`;
    }
  };

  const data = [
    [
      'Standard Icons',
      '@makerdao/dai-ui-icons',
      <Fragment key="firstSet">
        <Text sx={{ p: 3, pb: 0 }}>
          This set contains the collection of standard UI Icons.
        </Text>
        <Grid columns={[2, 4, 6]} p={3}>
          {[...allStandardIcons, ...social].filter(queryFilter).map((name) => {
            return (
              <WrappedIcon
                key={name}
                name={name}
                selected={activeIcon === name}
                onClick={setActiveIcon}
              />
            );
          })}
        </Grid>
      </Fragment>,
    ],
    [
      'Brand Tokens',
      '@makerdao/dai-ui-icons-branding',
      <Fragment key="secondSet">
        <Text sx={{ p: 3, pb: 0 }}>
          Commonly used brand token whose color and size can be customized.
        </Text>
        <Grid columns={[1, 2, 4]} p={3}>
          {withColorVariants.map((name) => (
            <LogoDisplay
              key={name}
              name={name}
              selected={activeIcon === name}
              onClick={setActiveIcon}
            />
          ))}
        </Grid>
      </Fragment>,
    ],
    [
      'Color Icons',
      '@makerdao/dai-ui-icons-branding',
      <Fragment key="thirdSet">
        <Text sx={{ p: 3, pb: 0 }}>
          Brand icons with coloring or features that will not need to be edited.
        </Text>
        <Grid columns={[2, 4, 6]} p={3}>
          {[...wallets, ...withCircleColor].map((name) => {
            return (
              <WrappedIcon
                key={name}
                name={name}
                selected={activeIcon === name}
                onClick={setActiveIcon}
              />
            );
          })}
        </Grid>
      </Fragment>,
    ],
  ];

  const sizeMe = [
    ['96px', 6],
    ['48px', 5],
    ['16px', 4],
  ];

  return (
    <Container>
      <Heading
        variant="h1"
        sx={{
          fontSize: 8,
        }}
      >
        Icons
      </Heading>

      <Box py="3" pb="4">
        <CollapsableCard
          title={'How to use the icons package?'}
          body={
            <Box px="3">
              <Grid columns={['1fr 2fr']}>
                <Flex sx={{ flexDirection: 'column' }}>
                  <Heading sx={{ py: 3 }} variant="smallHeading">
                    {activeIcon}
                  </Heading>
                  <Grid columns={['3fr 2fr 1fr']} sx={{ margin: 'auto' }}>
                    {activeIcon
                      ? Array.isArray(activeIcon)
                        ? sizeMe.map(([dimension, size]) => {
                            return (
                              <Flex
                                key={dimension}
                                sx={{
                                  flexDirection: 'column',
                                  justifyContent: 'flex-end',
                                }}
                              >
                                <CircularIcon
                                  key={dimension}
                                  name={activeIcon[0]}
                                  size={size}
                                  height={dimension}
                                  width={dimension}
                                />
                                <Text>{dimension}</Text>
                              </Flex>
                            );
                          })
                        : sizeMe.map(([dimension]) => {
                            return (
                              <Flex
                                key={dimension}
                                sx={{
                                  flexDirection: 'column',
                                  justifyContent: 'flex-end',
                                }}
                              >
                                <Icon
                                  name={activeIcon}
                                  height={dimension}
                                  width={dimension}
                                  size="auto"
                                />
                                <Text>{dimension}</Text>
                              </Flex>
                            );
                          })
                      : null}
                  </Grid>
                </Flex>
                <Box py={0}>
                  <IconsGuide activeIcon={codeGen(activeIcon)} />
                </Box>
              </Grid>
            </Box>
          }
          isCollapsed={true}
        />
      </Box>
      <Box>
        <Input
          sx={{ bg: 'surface', p: 3, fontSize: 4, mb: 2 }}
          placeholder="Find icon by name..."
          onChange={(e) => setQuery(e.target.value)}
        />
      </Box>
      <Grid pt="2">
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
