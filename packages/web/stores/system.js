import create from "zustand";
import { icons } from "@makerdao/dai-ui-icons";

import maker from "../../dai-ui-theme-maker";
import fountain from "../../dai-ui-theme-fountain";
import oasis from "../../dai-ui-theme-oasis";

// console.log(maker, 'hehrhere')
// console.log(maker, fountain, oasis);

const themes = {
  MakerDefault: { ...maker, icons },
  OasisDex: oasis,
  Fountain: fountain,
};

const selectors = {
  getCurrentTheme: ({ currentTheme }) => themes[currentTheme],
};

const [useSystemStore, sysAPI] = create((set, get) => ({
  currentTheme: "MakerDefault",
  featureFlags: [],

  setCurrentTheme: (val) => {
    set({ currentTheme: val });
  },
}));

export { selectors, sysAPI, themes };
export default useSystemStore;
