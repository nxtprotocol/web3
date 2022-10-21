import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { Chain, configureChains, createClient } from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { app } from "../../configs/app";

const bitkubChainMainnet: Chain = {
  id: 96,
  name: "Bitkub Chain",
  network: "bitkubchain",
  rpcUrls: {
    default: "https://rpc.bitkubchain.io",
  },
  nativeCurrency: {
    decimals: 18,
    name: 'Bitkub Coin',
    symbol: 'KUB',
  },
  testnet: false,
  blockExplorers: {
    default: { name: "BKCScan", url: "https://bkcscan.com" },
  },
};

const bitkubChainTestnet: Chain = {
  id: 25925,
  name: "Bitkub Chain Testnet",
  network: "bitkubchain-testnet",
  rpcUrls: {
    default: "https://rpc-testnet.bitkubchain.io",
  },
  nativeCurrency: {
    decimals: 18,
    name: 'Bitkub Coin',
    symbol: 'KUB',
  },
  blockExplorers: {
    default: { name: "BKCScan Testnet", url: "https://testnet.bkcscan.com" },
  },
  testnet: true,
};

export const { chains, provider } = configureChains(
  [bitkubChainMainnet, bitkubChainTestnet],
  [
    jsonRpcProvider({
      rpc: (chain) => ({
        http: chain.rpcUrls.default,
      }),
    }),
  ]
);
const { connectors } = getDefaultWallets({
  appName: app.name,
  chains,
});

export const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});
