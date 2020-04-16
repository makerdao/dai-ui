import React, { useState } from "react";
import { Box, Card, Flex, Heading, IconButton } from "theme-ui";

// TODO: import icons from dai-ui-icons package when ready.
const ChevronDown = () => (
  <svg
    width="14"
    height="9"
    viewBox="0 0 14 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.12117 0.7072C1.73064 0.316676 1.09748 0.316676 0.706956 0.7072C0.316431 1.09772 0.316431 1.73089 0.706956 2.12141L6.36381 7.77827C6.37601 7.79047 6.38845 7.80229 6.40112 7.81374C6.41063 7.82233 6.42026 7.8307 6.43002 7.83887C6.8229 8.16772 7.40894 8.14755 7.77813 7.77836L13.435 2.12151C13.8255 1.73098 13.8255 1.09782 13.435 0.707293C13.0445 0.316769 12.4113 0.316769 12.0208 0.707293L7.07102 5.65705L2.12117 0.7072Z"
      fill="black"
    />
  </svg>
);

const ChevronUp = () => (
  <svg
    width="14"
    height="9"
    viewBox="0 0 14 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.12117 7.77815C1.73064 8.16868 1.09748 8.16868 0.706956 7.77815C0.316431 7.38763 0.316431 6.75446 0.706956 6.36394L6.36392 0.707086C6.75444 0.316571 7.3876 0.316572 7.77812 0.707088L13.435 6.36384C13.8255 6.75437 13.8255 7.38753 13.435 7.77806C13.0445 8.16858 12.4113 8.16858 12.0208 7.77806L7.07102 2.82831L2.12117 7.77815Z"
      fill="black"
    />
  </svg>
);

const CollapsableCard = ({ title, text, isCollapsed = false }) => {
  const [collapsed, setCollapsed] = useState(isCollapsed);
  return (
    <Card p={0}>
      <Flex
        sx={{
          p: 3,
          py: 2,
          borderBottom: collapsed ? null : "1px solid",
          borderColor: "muted",
          alignItems: "center",
        }}
      >
        <Heading variant="h2">{title}</Heading>
        <Box sx={{ ml: "auto" }}>
          <IconButton
            onClick={() => setCollapsed(!collapsed)}
            active={!collapsed}
          >
            {collapsed ? <ChevronDown /> : <ChevronUp />}
          </IconButton>
        </Box>
      </Flex>
      {collapsed ? null : <Box>{text}</Box>}
    </Card>
  );
};

export default CollapsableCard;
