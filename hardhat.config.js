const fs = require('fs');
require('@nomiclabs/hardhat-waffle');

// Read private key from .secret file if it exists, otherwise use a test key for local development
let privateKey;
try {
  privateKey = fs.readFileSync('.secret').toString().trim();
} catch (error) {
  console.log('No .secret file found. Using test key for local development.');
  privateKey = 'ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80';
}

const ALCHEMY_API_KEY_URL = 'https://eth-sepolia.g.alchemy.com/v2/IGJD0yiLouK86_fCJBdm-COk2pKnV2w0';
const INFURA_API_KEY = 'b810dc227a08412785a0b438668ae6ab';
const INFURA_SEPOLIA_URL = `https://sepolia.infura.io/v3/${INFURA_API_KEY}`;

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    sepolia: {
      url: INFURA_SEPOLIA_URL, // Using Infura instead of Alchemy
      accounts: [privateKey],
    },
    sepolia_alchemy: {
      url: ALCHEMY_API_KEY_URL,
      accounts: [privateKey],
    },
  },
  solidity: '0.8.4',
};
