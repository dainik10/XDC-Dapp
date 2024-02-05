const hre = require("hardhat");

async function main() {
  const NFTMinting = await hre.ethers.getContractFactory('NFTMinting')
  const nftminting = await NFTMinting.deploy()

  await nftminting.waitForDeployment();

  console.log(`CONTRACT DEPLOYED AT ADDRESS : ${nftminting.target}`);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});