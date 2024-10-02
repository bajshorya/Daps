import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useEffect, useState } from "react";

const ShowBalance = () => {
  const { connection } = useConnection();
  const wallet = useWallet();
  const [balance, setBalance] = useState<number | null>(null);
  useEffect(() => {
    async function getBalance() {
      if (!wallet.publicKey) {
        console.log("Wallet is not connected");
        return;
      }
      try {
        const balance = await connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      } catch (error) {
        alert("Failed to get balance");
      }
      if (wallet.connected) {
        getBalance();
      }
    }
    getBalance();
  }, [wallet, connection]);

  return (
    <div>
      <p>SOL Balance: {balance !== null ? balance : "Loading..."}</p>
    </div>
  );
};

export default ShowBalance;
