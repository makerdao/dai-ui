import Head from "next/head";
import { Global, css } from "@emotion/core";

const InjectCustomFont = ({ theme }) => {
  const fontLinkHref = theme.metadata && theme.metadata.fontLinkHref;
  const fontLinkImport = theme.metadata && theme.metadata.fontLinkImport;

  return (
    <>
      {fontLinkHref ? (
        <Head>
          <link href={fontLinkHref} rel="stylesheet" />
        </Head>
      ) : null}
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
