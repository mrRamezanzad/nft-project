// ethereum/scripts/deploy.js
const { ethers } = require("ethers");

async function main() {
  const EmotionalShapes = await ethers.ContractFactory("EmotionalShapes");
  const emotionalShapes = await EmotionalShapes.deploy();

  console.log("EmotionalShapes deployed:", emotionalShapes.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });