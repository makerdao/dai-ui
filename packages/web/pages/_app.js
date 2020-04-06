import React from 'react';
import App from 'next/app';
import { ThemeProvider, Styled } from 'theme-ui';

import Header from '../components/Header';
import { selectors, sysAPI } from '../stores/system';

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  render() {
    const { Component, pageProps } = this.props;
    // const currentTheme = useSystemStore(selectors.currentTheme);
    const currentTheme = selectors.currentTheme({
      currentTheme: sysAPI.getState().currentTheme,
    });

    console.log(
      currentTheme,
      'here',
      sysAPI.getState().currentTheme,
      selectors
    );

    return (
      <ThemeProvider theme={currentTheme}>
        <Header />
        <Styled.root>
          <Component {...pageProps} />
        </Styled.root>
      </ThemeProvider>
    );
  }
}

export default MyApp;
