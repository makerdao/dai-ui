import { ThemeProvider } from 'theme-ui';
import ThemeUIPrism from '@theme-ui/prism';
import PrismCore from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-solidity';
import 'prismjs/components/prism-javascript';

import InjectCustomFont from '../components/InjectCustomFont';
import Header from '../components/Header';
import Footer from '../components/Footer';
import useSystemStore, { selectors } from '../stores/system';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
const { getCurrentTheme, getAvailableThemes } = selectors;

const components = {
  pre: ({ children }) => <>{children}</>,
  code: (props) => <ThemeUIPrism {...props} Prism={PrismCore} />,
};

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
    <ThemeProvider theme={theme} components={components}>
      <InjectCustomFont {...{ theme }} />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
};

export default MyApp;
