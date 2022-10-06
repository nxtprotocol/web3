import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import { lightTheme } from "../styles/mui";
import { WagmiConfig } from "wagmi";
import { chains, wagmiClient } from "../src/libs/rainbowkit/wagmi";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <ThemeProvider theme={lightTheme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
