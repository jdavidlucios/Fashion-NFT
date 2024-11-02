"use client";

import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { RainbowKitProvider, getDefaultWallets } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';

const { chains, provider } = configureChains(
    [mainnet, polygon, optimism, arbitrum],
    [publicProvider()]
);

const { connectors } = getDefaultWallets({
    appName: 'Fashion-NFT',
    chains
});

const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider
});

const RainbowProviders = ({ children }: { children: React.ReactNode }) => {
    return (
        <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider chains={chains}>
                {children}
            </RainbowKitProvider>
        </WagmiConfig>
    );
};

export default RainbowProviders;
