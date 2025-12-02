# Cryptoket NFT Marketplace - Setup Guide

This guide will help you set up and run the Cryptoket NFT Marketplace project on a new PC.

## Prerequisites

- Node.js (v14 or higher)
- MetaMask browser extension
- Git

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Configure Environment

### Option A: Local Development Only (Recommended for Testing)

For local development, the project is already configured with fallback settings:

1. **Hardhat Configuration**: 
   - Uses test private key for local blockchain
   - Chain ID: 1337 for local development

2. **IPFS Configuration**:
   - The project will work without IPFS credentials for basic functionality
   - NFT creation/upload will show warnings but other features work

### Option B: Full Setup with IPFS

If you want full functionality including NFT creation:

1. **Get Infura IPFS Credentials**:
   - Go to [Infura.io](https://infura.io/) and create an account
   - Create a new IPFS project
   - Copy the Project ID and API Key Secret

2. **Update .env file**:
   ```env
   IPFS_PROJECT_ID=your_project_id_here
   API_KEY_SECRET=your_api_key_secret_here
   ```

3. **Update .secret file** (optional for testnet deployment):
   - Replace with your actual MetaMask private key if deploying to testnet

## Step 3: Start Local Blockchain

Open Terminal 1:
```bash
npx hardhat node
```

This starts a local Ethereum network on `http://localhost:8545`

## Step 4: Deploy Smart Contracts

Open Terminal 2:
```bash
npx hardhat run scripts/deploy.js --network localhost
```

This deploys the NFTMarketplace contract to your local blockchain.

## Step 5: Configure MetaMask

1. **Add Local Network**:
   - Open MetaMask
   - Click network dropdown → Add Network → Add a network manually
   - Fill in:
     - Network Name: `Localhost 8545`
     - New RPC URL: `http://127.0.0.1:8545/`
     - Chain ID: `1337`
     - Currency Symbol: `ETH`

2. **Import Test Account**:
   - Look at the terminal running `npx hardhat node`
   - Copy the Private Key of Account #0
   - In MetaMask: Click account icon → Import Account
   - Paste the private key
   - You should see 10,000 ETH

## Step 6: Start the Frontend

Open Terminal 3:
```bash
npm run dev
```

The app will be available at: `http://localhost:3000`

## Step 7: Test the Application

1. **Connect Wallet**: Click "Connect Wallet" in the navbar
2. **Browse NFTs**: View listed NFTs on the homepage
3. **Create NFT**: Go to "Create NFT" page (requires IPFS setup for full functionality)
4. **View Your NFTs**: Check "My NFTs" page

## Troubleshooting

### Common Issues

1. **"IPFS client not initialized" warnings**:
   - This is normal without IPFS credentials
   - NFT creation won't work, but browsing and buying will

2. **MetaMask connection issues**:
   - Make sure you're connected to Localhost 8545 network
   - Check that the chain ID is 1337

3. **Contract deployment fails**:
   - Ensure local blockchain is running (`npx hardhat node`)
   - Check that .secret file exists with a valid private key

4. **Frontend won't start**:
   - Run `npm install` to ensure all dependencies are installed
   - Check Node.js version (should be 14+)

### Development Notes

- The project uses Hardhat for local blockchain development
- Smart contracts are written in Solidity 0.8.4
- Frontend is built with Next.js and React
- IPFS integration is optional for local testing
- All configuration files are now properly set up with fallbacks

## File Structure Overview

- `contracts/` - Smart contract source code
- `scripts/` - Deployment scripts
- `pages/` - Next.js pages
- `components/` - React components
- `context/` - React context for state management
- `hardhat.config.js` - Hardhat configuration
- `.env` - Environment variables (IPFS credentials)
- `.secret` - Private key for contract deployment

## Next Steps

After successful local setup, you can:
1. Test all marketplace features locally
2. Customize the UI and functionality
3. Deploy to a testnet (Sepolia) by updating hardhat.config.js
4. Set up proper IPFS credentials for NFT uploads
