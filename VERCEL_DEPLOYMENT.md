# Vercel Deployment Guide

This guide will help you deploy your Cryptoket NFT Marketplace to Vercel.

## Prerequisites

1. A Vercel account (sign up at https://vercel.com)
2. Your project pushed to GitHub, GitLab, or Bitbucket
3. IPFS credentials from Infura (for NFT uploads)
4. A deployed smart contract address (if deploying to a testnet/mainnet)

## Step 1: Prepare Your Repository

1. Make sure all your code is committed and pushed to your Git repository
2. Ensure `vercel.json` is in the root directory (already created)

## Step 2: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended)

1. Go to https://vercel.com/new
2. Import your Git repository
3. Vercel will auto-detect Next.js framework
4. Configure the project:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `cryptoket-MVP` (if your project is in a subdirectory)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
   - **Install Command**: `npm install` (default)

### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Navigate to project directory
cd cryptoket-MVP

# Deploy
vercel

# Follow the prompts to link your project
```

## Step 3: Configure Environment Variables

In your Vercel project dashboard, go to **Settings → Environment Variables** and add:

### Required for IPFS (NFT Uploads):
```
IPFS_PROJECT_ID=your_infura_project_id_here
API_KEY_SECRET=your_infura_api_key_secret_here
```

### Required for Blockchain Connection:
```
NEXT_PUBLIC_RPC_URL=https://eth-sepolia.g.alchemy.com/v2/YOUR_API_KEY
```

Or use a public RPC endpoint:
```
NEXT_PUBLIC_RPC_URL=https://rpc.sepolia.org
```

### Optional:
```
BASE_URL=https://your-project.vercel.app
```

**Important Notes:**
- `NEXT_PUBLIC_` prefix is required for client-side access
- After adding environment variables, redeploy your project
- You can set different values for Production, Preview, and Development environments

## Step 4: Update Smart Contract Address

1. Deploy your smart contract to your target network (Sepolia testnet, etc.)
2. Update `context/constants.js` with your deployed contract address:
   ```javascript
   export const MarketAddress = 'YOUR_DEPLOYED_CONTRACT_ADDRESS';
   ```
3. Commit and push the changes
4. Vercel will automatically redeploy

## Step 5: Verify Deployment

1. Visit your deployed URL (e.g., `https://your-project.vercel.app`)
2. Test the following:
   - Connect wallet functionality
   - View NFTs (if any exist)
   - Create NFT (requires IPFS credentials)
   - Buy/Sell NFTs

## Troubleshooting

### Build Errors

If you encounter build errors:

1. **Check Node.js version**: Vercel uses Node.js 18.x by default. If you need a different version, add to `package.json`:
   ```json
   "engines": {
     "node": "18.x"
   }
   ```

2. **Check for missing dependencies**: Ensure all dependencies are in `package.json`, not just `package-lock.json`

3. **Check build logs**: In Vercel dashboard, go to your deployment → View Build Logs

### Runtime Errors

1. **IPFS not working**: 
   - Verify `IPFS_PROJECT_ID` and `API_KEY_SECRET` are set correctly
   - Check that your Infura IPFS project is active

2. **Blockchain connection fails**:
   - Verify `NEXT_PUBLIC_RPC_URL` is set correctly
   - Ensure the RPC endpoint is accessible and supports the network your contract is on
   - Check that your contract address in `constants.js` matches the deployed contract

3. **Wallet connection issues**:
   - Ensure users have MetaMask or another Web3 wallet installed
   - Check browser console for errors

### Common Issues

- **"Module not found"**: Make sure all dependencies are listed in `package.json`
- **"Environment variable not found"**: Ensure variables are set in Vercel dashboard and prefixed with `NEXT_PUBLIC_` for client-side access
- **"Contract not found"**: Verify contract address is correct and deployed to the network specified in `NEXT_PUBLIC_RPC_URL`

## Production Checklist

- [ ] Environment variables configured in Vercel
- [ ] Smart contract deployed to target network
- [ ] Contract address updated in `context/constants.js`
- [ ] IPFS credentials configured
- [ ] RPC URL points to production network
- [ ] Build completes successfully
- [ ] All features tested on deployed site

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Infura IPFS Setup](https://docs.infura.io/infura/networks/ipfs)

