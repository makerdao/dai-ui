import create from "zustand";
import { icons } from "@makerdao/dai-ui-icons";

// import maker from "../../dai-ui-theme-maker";
import maker from "@makerdao/dai-ui-theme-maker";
import fountain from "@makerdao/dai-ui-theme-fountain";
import oasis from "@makerdao/dai-ui-theme-oasis";

const themes = {
  MakerDefault: { ...maker, icons },
  OasisDex: oasis,
  Fountain: fountain,
};

const selectors = {
  getCurrentTheme: ({ currentTheme }) => themes[currentTheme],
  getAvailableThemes: () => Object.keys(themes),
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
