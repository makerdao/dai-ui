import React, { useState } from "react";
import { Box, Card, Flex, Heading, IconButton } from "theme-ui";
import { Icon } from "@makerdao/dai-ui-icons";

const CollapsableCard = ({ title, text, isCollapsed = false }) => {
  const [collapsed, setCollapsed] = useState(isCollapsed);
  const iconName = collapsed ? "chevron_down" : "chevron_up";
  return (
    <Card p={0}>
      <Flex
        sx={{
          p: 3,
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
            <Icon name={iconName} />
          </IconButton>
        </Box>
      </Flex>
      {collapsed ? null : <Box>{text}</Box>}
    </Card>
  );
};

export default CollapsableCard;
