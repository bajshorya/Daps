import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";
import React from "react";

const SendTokens = () => {
  const wallet = useWallet();
  const { connection } = useConnection();
  async function sendTokens() {
    const id = document.getElementById("id")?.value;
    const amount = document.getElementById("amount")?.value;
    const transaction = new Transaction();
    transaction.add(
      SystemProgram.transfer({
        fromPubkey: wallet.publicKey,
        toPubkey: new PublicKey(id),
        lamports: amount * LAMPORTS_PER_SOL,
      })
    );
    await wallet.signTransaction(transaction, connection);
    alert("Sent" + amount + "SOL to" + id);
  }

  return (
    <div>
      <input type="text" id="id" placeholder="to" />
      <input type="text" name="amount" id="amount" />
      <button onClick={sendTokens}>Send</button>
    </div>
  );
};

export default SendTokens;
