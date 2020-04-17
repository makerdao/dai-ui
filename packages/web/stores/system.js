import create from "zustand";
import themeMaker from "../../dai-ui-theme-maker/src";

const themes = {
  maker: themeMaker,
};

const selectors = {
  currentTheme: (state) => {
    const { currentTheme } = state;
    return themes[currentTheme];
  },
};

const [useSystemStore, sysAPI] = create((set, get) => ({
  currentTheme: "maker",
  featureFlags: [],

  setCurrentTheme: (val) => {
    set({ currentTheme: val });
  },
}));

export default useSystemStore;
export { selectors, sysAPI };
