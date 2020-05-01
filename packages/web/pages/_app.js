import { ThemeProvider } from 'theme-ui';
import 'prismjs/themes/prism.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import useSystemStore, { selectors } from '../stores/system';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
const { getCurrentTheme, getAvailableThemes } = selectors;

const MyApp = ({ Component, pageProps }) => {
  const { query } = useRouter();
  const { theme: urlTheme } = query;
  const { setCurrentTheme, currentTheme } = useSystemStore((state) => state);

  const theme = getCurrentTheme({ currentTheme });

  useEffect(() => {
    if (getAvailableThemes().includes(urlTheme) && urlTheme !== currentTheme) {
      setCurrentTheme(urlTheme);
    }
  }, [urlTheme, currentTheme]);
  return (
    <ThemeProvider {...{ theme }}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
};

export default MyApp;
