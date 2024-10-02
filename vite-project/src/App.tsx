import React, { FC, useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";

import "@solana/wallet-adapter-react-ui/styles.css";
import { RequestAirdrop } from "./Airdrop";
import ShowBalance from "./ShowBalance";

export const App: FC = () => {
  return (
    <ConnectionProvider
      endpoint={
        "https://solana-devnet.g.alchemy.com/v2/MR15rlO-bHh8MzvXHRHhyiuzF88C-ipZ"
      }
    >
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <RequestAirdrop></RequestAirdrop>
          <ShowBalance></ShowBalance>
          <WalletMultiButton />
          <WalletDisconnectButton />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};
