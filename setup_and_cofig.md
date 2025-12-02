Project Setup & Configuration Guide
1. Initial Setup
To run this project locally, follow these steps:

Install Dependencies:
npm install
Start Local Blockchain:
npx hardhat node
This starts a local Ethereum network. Keep this terminal running.
Deploy Smart Contracts: Open a new terminal and run:
npx hardhat run scripts/deploy.js --network localhost
Start Frontend:
npm run dev
The app will be available at http://localhost:3000.
2. The 
.secret
 File
Why is it needed? The 
.secret
 file is used to store your Private Key securely.

In 
hardhat.config.js
, we read this file to sign transactions when deploying to a public testnet (like Sepolia).
Security: This file is listed in 
.gitignore
 so it is never uploaded to GitHub. This prevents your funds from being stolen.
How to create it:

Create a file named 
.secret
 in the root directory.
Paste your MetaMask Private Key inside it (nothing else, no quotes).
Note: For local development with npx hardhat node, this file is not strictly required, but the config expects it to exist.
3. Connecting MetaMask to Localhost
To interact with the app locally, configure MetaMask with these exact settings:

Open MetaMask -> Click the Network Dropdown -> Add Network -> Add a network manually.
Fill in the details:
Network Name: Localhost 8545 (or any name you like)
New RPC URL: http://127.0.0.1:8545/
Chain ID: 1337 (This is defined in 
hardhat.config.js
)
Currency Symbol: ETH
Save.
Importing a Test Account
Look at the terminal running npx hardhat node.
Copy the Private Key of Account #0.
In MetaMask, click the circle icon -> Import Account.
Paste the key. You should see 10,000 ETH.