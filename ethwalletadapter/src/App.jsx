import "./App.css";
import { createPublicClient, http } from "viem";
import { mainnet, sepolia } from "viem/chains";

const client = createPublicClient({
  chain: sepolia,
  transport: http(),
});
function App() {
  const getBalance = async () => {
    const balance = await client.getBalance({
      address: "0x4c09Cd3C48C9A5A6B3cc68AB5b069B8B3e311E4C",
    });
    console.log(balance);
  };
  return (
    <div>
      <button onClick={getBalance}> get balanace </button>
    </div>
  );
}

export default App;
