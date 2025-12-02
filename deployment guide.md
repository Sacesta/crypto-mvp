Deployment & Usage Guide
1. Using MetaMask with Localhost
To test the application locally, you need to connect MetaMask to your local Hardhat node.

Step 1: Install & Setup
Install the MetaMask extension for Chrome.
Create a new wallet (save your Secret Recovery Phrase safely).
Step 2: Connect to Localhost
Click the network dropdown at the top of MetaMask (it usually says "Ethereum Mainnet").
Enable "Show test networks" in settings if you don't see Localhost.
Select Localhost 8545.
Note: If you restarted your hardhat node, you might need to reset your account (Settings > Advanced > Reset Account) to fix "Nonce" errors.
Step 3: Import Test Accounts
Hardhat provides 20 test accounts with 10,000 fake ETH each.

Check your terminal where npx hardhat node is running. You will see a list of accounts and private keys.
Copy the Private Key of Account #0 (or any other).
In MetaMask, click the circle icon (top right) -> Import Account.
Paste the private key.
You now have 10,000 ETH to test buying and selling NFTs!
2. Deployment Architecture
This application consists of two parts that are deployed separately: the Frontend and the Smart Contracts.

Part A: Smart Contracts (The "Backend")
Smart contracts live on the blockchain, not a server.

Network: You deploy to a testnet (like Sepolia or Goerli) or mainnet (Ethereum).
RPC Provider: You need a node provider like Alchemy or Infura to broadcast your deployment transaction.
Command: npx hardhat run scripts/deploy.js --network sepolia
Result: You get a contract address (e.g., 0x123...) which you paste into your frontend code (
context/constants.js
).
Part B: Frontend (The "Web App")
The frontend is a standard Next.js application.

Hosting: Can be deployed to Vercel (recommended for Next.js) or Netlify.
Environment Variables:
You will need to set up environment variables for things like your IPFS project ID (if using Infura/Pinata for file storage).
Build Process:
npm run build (Compiles the app)
npm start (Runs the production server)
Summary of Production Flow
Deploy Contracts to a public testnet (e.g., Sepolia).
Update Frontend (
constants.js
) with the new contract address and ABI.
Deploy Frontend to Vercel.
