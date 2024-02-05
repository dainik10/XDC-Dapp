import { ethers } from "ethers";
import NFTMint from "./NFTMinting.json";

export async function connectWallet() {
  await window.ethereum.request({ method: "eth_requestAccounts" });
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();

  const contract = new ethers.Contract(
    "YOUR_DEPLOYED_ADDRESS", // Paste your Deployed NFT contract address
    NFTMint.abi,
    signer
  );

  return { signer,provider, contract };
}

export async function connectMetaMask() {
  const { signer,provider } = await connectWallet();
  const address = await signer.getAddress();
  const balance = await provider.getBalance(address);
  console.log(balance)
  const formattedBalance = ethers.formatUnits(balance);
  return { address, formattedBalance };
}
