import "../src/assets/styles/globals.css";
import { useEffect } from "react";
import type { AppProps } from "next/app";

import "../src/assets/styles/globals.css";
import { ConfigProvider } from "antd";
import TagManager from "react-gtm-module";
import { hotjar } from "react-hotjar";
import NextNProgress from "nextjs-progressbar";
import { antdThemeConfig } from "../src/assets/styles/antd-theme";
import { theme } from "../src/assets/styles/theme";
import { ThemeProvider } from "styled-components";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") return;
    // hotjar
    hotjar.initialize(2213530, 6);
    // tag manager
    TagManager.initialize({ gtmId: "GTM-PGZFN26" });
  }, []);

  return (
    <ConfigProvider theme={antdThemeConfig}>
      <ThemeProvider theme={theme}>
        <NextNProgress
          color={theme.colors.primary.main}
          height={3}
          showOnShallow={false}
        />
        <Component {...pageProps} />
      </ThemeProvider>
    </ConfigProvider>
  );
}

export default MyApp;
