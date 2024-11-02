// WalletConnector.ts
"use client";


import "@rainbow-me/rainbowkit/styles.css";
import {
    getDefaultWallets,
    RainbowKitProvider,
    RainbowKitAuthenticationProvider,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet, baseSepolia } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
const { chains, publicClient } = configureChains(
    [mainnet], // Add your chains here for mainnet
    [
        alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID || "" }),
        publicProvider(),
    ]
);
const { connectors } = getDefaultWallets({
    appName: "my-app",
    projectId: process.env.NEXT_PUBLIC_WALLET_PROJECT_ID || "",
    chains,
});
const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
});

const appInfo = {
    appName: "My App",
};

export {
    wagmiConfig,
    RainbowKitProvider,
    chains,
    WagmiConfig,
    RainbowKitAuthenticationProvider,
    appInfo,
};