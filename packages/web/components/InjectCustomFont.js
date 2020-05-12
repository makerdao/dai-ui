import Head from 'next/head';
import { Global, css } from '@emotion/core';

const InjectCustomFont = ({ theme }) => {
  const fontLinkHref = theme.metadata && theme.metadata.fontLinkHref;
  const fontLinkImport = theme.metadata && theme.metadata.fontLinkImport;

  return (
    <>
      <Head>
        {fontLinkHref ? <link href={fontLinkHref} rel="stylesheet" /> : null}
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      {fontLinkImport ? (
        <Global
          styles={css`
            @import url(${fontLinkImport});
          `}
        />
      ) : null}
    </>
  );
};

export default InjectCustomFont;
