import React, { useState } from "react";
import { Box, Card, Flex, Heading, IconButton, Text } from "theme-ui";
import { Icon } from "@makerdao/dai-ui-icons";

const CollapsableCard = ({
  title,
  subtitle,
  body,
  isCollapsed = false,
  sx,
}) => {
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
          ...sx,
        }}
      >
        <Heading
          sx={{ flexBasis: "33.33%", flexShrink: 0 }}
          variant="smallHeading"
        >
          {title}
        </Heading>
        {subtitle && <Text sx={{ color: "onSurface" }}>{subtitle}</Text>}
        <Box sx={{ ml: "auto" }}>
          <IconButton
            onClick={() => setCollapsed(!collapsed)}
            active={!collapsed}
          >
            <Icon name={iconName} />
          </IconButton>
        </Box>
      </Flex>
      {collapsed ? null : body}
    </Card>
  );
};

export default CollapsableCard;
