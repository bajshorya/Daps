import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export function RequestAirdrop() {
  const wallet = useWallet();
  const { connection } = useConnection();

  async function sendAirdropToUser() {
    const amount = parseFloat(
      (document.getElementById("amount") as HTMLInputElement).value
    );
    if (!wallet.publicKey) {
      console.log("Wallet is not connected");
      return;
    }

    try {
      await connection.requestAirdrop(wallet.publicKey, amount * 1000000000);
      alert("Airdroped Sol");
    } catch (error) {
      console.error("Airdrop failed", error);
      alert("Airdrop failed");
    }
  }
  return (
    <div>
      <br />
      <input id="amount" type="text" placeholder="Amount" />
      <button onClick={sendAirdropToUser}>Request Airdrop</button>
    </div>
  );
}
