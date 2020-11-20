import create from 'zustand';
import { icons as standardIcons } from '@makerdao/dai-ui-icons';
import { icons as brandIcons } from '@makerdao/dai-ui-icons-branding';

// import maker from "../../dai-ui-theme-maker";
import maker from '@makerdao/dai-ui-theme-maker';
import makerNeue from '@makerdao/dai-ui-theme-maker-neue';
// import makerDev from '@makerdao/dai-ui-theme-maker-dev';
import pen from '@makerdao/dai-ui-theme-pen';
import oasis from '@makerdao/dai-ui-theme-oasis';

import casual from '@makerdao/dai-ui-theme-casual';
import commDev from '../data/commdevTheme';
import makerDev from '../data/makerDevTheme';
const icons = { ...standardIcons, ...brandIcons };

const themes = {
  MakerNeue: { ...makerNeue, icons },
  MakerCommunity: commDev,
  MakerDev: makerDev,
  // MakerDev: { ...makerDev, icons },
  OasisDex: { ...oasis, icons },
  Pen: { ...pen, icons },
  CryptoCasual: { ...casual, icons },
  MakerDefault: { ...maker, icons },
};

const selectors = {
  getCurrentTheme: ({ currentTheme }) => themes[currentTheme],
  getAvailableThemes: () => Object.keys(themes),
};

const [useSystemStore, sysAPI] = create((set) => ({
  currentTheme: 'MakerNeue',
  featureFlags: [],

  setCurrentTheme: (val) => {
    set({ currentTheme: val });
  },
}));

export { selectors, sysAPI, themes };
export default useSystemStore;
