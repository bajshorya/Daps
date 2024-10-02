import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import React from "react";

const RequestAirdrop = () => {
  const wallet = useWallet();
  const { connection } = useConnection();

  const requestAirdrop = async () => {
    // Request airdrop
    const publicKey = wallet.publicKey;
    const amount = document.getElementById("amount")?.value;
    connection.requestAirdrop(publicKey, amount * LAMPORTS_PER_SOL);
  };

  return (
    <div>
      <div>
        <input id="amount" type="text" placeholder="Amount...." />
        <button onClick={requestAirdrop}>Request Airdrop</button>
        {/* {wallet.publicKey?.toBase58()} */}
      </div>
    </div>
  );
};

export default RequestAirdrop;
