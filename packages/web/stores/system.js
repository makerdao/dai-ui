import create from "zustand";
import MakerDefault, { OasisDex } from "../../dai-ui-theme-maker/src";

const themes = {
  MakerDefault: MakerDefault,
  OasisDex: OasisDex,
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
