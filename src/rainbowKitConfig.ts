"use client";

import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { anvil, mainnet, zksync } from 'wagmi/chains';

const config = getDefaultConfig({
  appName: 'TSender',
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
  chains: [anvil, zksync, mainnet],
  ssr: false,
});

export default config;