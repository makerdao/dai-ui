import maker from '@makerdao/dai-ui-theme-maker';
import pen from '@makerdao/dai-ui-theme-pen';
import oasis from '@makerdao/dai-ui-theme-oasis';
import casual from '@makerdao/dai-ui-theme-casual';
import makerNeue from '@makerdao/dai-ui-theme-maker-neue';

import { icons as standardIcons } from '@makerdao/dai-ui-icons';
import { icons as brandIcons } from '@makerdao/dai-ui-icons-branding';

const icons = { ...standardIcons, ...brandIcons };

const themes = {
  MakerDefault: { ...maker, icons },
  MakerNeue: { ...makerNeue, icons },
  OasisDex: { ...oasis, icons },
  Pen: { ...pen, icons },
  CryptoCasual: { ...casual, icons },
};

export const { MakerDefault, MakerNeue, Pen, OasisDex, CryptoCasual } = themes;
