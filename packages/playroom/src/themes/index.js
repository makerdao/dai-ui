import maker from "@makerdao/dai-ui-theme-maker";
import fountain from "@makerdao/dai-ui-theme-fountain";
import oasis from "@makerdao/dai-ui-theme-oasis";

import { icons } from "@makerdao/dai-ui-icons";

const themes = {
  MakerDefault: { ...maker, icons },
  OasisDex: { ...oasis, icons },
  Fountain: { ...fountain, icons },
};

export const { MakerDefault, Fountain, OasisDex } = themes;
