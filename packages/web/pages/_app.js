import App from "next/app";
import { ThemeProvider, Styled } from "theme-ui";
import { Global } from "@emotion/core";

import Header from "../components/Header";
import { selectors, sysAPI } from "../stores/system";

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

    // TODO this is not really needed for now?
    const currentTheme = selectors.currentTheme({
      currentTheme: sysAPI.getState().currentTheme,
    });
    return (
      <ThemeProvider theme={currentTheme}>
        <Global
          styles={(theme) => ({
            "*, *:before, *:after": {
              flexShrink: "0",
            },
          })}
        />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

export default MyApp;
