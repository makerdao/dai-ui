import { ThemeProvider } from "theme-ui";

import Header from "../components/Header";
import useSystemStore, { selectors } from "../stores/system";

const MyApp = ({ Component, pageProps }) => {
  const { currentTheme } = useSystemStore((state) => state);
  const theme = selectors.getCurrentTheme({ currentTheme });

  return (
    <ThemeProvider {...{ theme }}>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
