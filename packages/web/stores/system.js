import create from "zustand";
import { icons as standardIcons } from "@makerdao/dai-ui-icons";
import { icons as brandIcons } from "@makerdao/dai-ui-icons-branding";

// import maker from "../../dai-ui-theme-maker";
import maker from "@makerdao/dai-ui-theme-maker";
import makerNeue from "@makerdao/dai-ui-theme-maker-neue";
import pen from "@makerdao/dai-ui-theme-pen";
import oasis from "@makerdao/dai-ui-theme-oasis";
import casual from "@makerdao/dai-ui-theme-casual";

const icons = { ...standardIcons, ...brandIcons };

const themes = {
  MakerDefault: { ...maker, icons },
  MakerNeue: { ...makerNeue, icons },
  OasisDex: { ...oasis, icons },
  Pen: { ...pen, icons },
  CryptoCasual: { ...casual, icons },
};

const selectors = {
  getCurrentTheme: ({ currentTheme }) => themes[currentTheme],
  getAvailableThemes: () => Object.keys(themes),
};

const [useSystemStore, sysAPI] = create((set) => ({
  currentTheme: "MakerDefault",
  featureFlags: [],

  setCurrentTheme: (val) => {
    set({ currentTheme: val });
  },
}));

export { selectors, sysAPI, themes };
export default useSystemStore;
