import maker from "@makerdao/dai-ui-theme-maker";
import pen from "@makerdao/dai-ui-theme-pen";
import oasis from "@makerdao/dai-ui-theme-oasis";

import { icons } from "@makerdao/dai-ui-icons";

const themes = {
  MakerDefault: { ...maker, icons },
  OasisDex: { ...oasis, icons },
  Pen: { ...pen, icons },
};

export const { MakerDefault, Pen, OasisDex } = themes;
