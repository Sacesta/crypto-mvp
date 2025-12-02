# Quick Vercel Deployment Checklist

## Before Deploying

1. ✅ **Code is ready**: All changes committed and pushed to Git
2. ✅ **Configuration files**: `vercel.json` is in place
3. ✅ **Dependencies**: All in `package.json` (no duplicates)

## Deploy Steps

### 1. Connect to Vercel
- Go to https://vercel.com/new
- Import your Git repository
- Vercel will auto-detect Next.js

### 2. Set Environment Variables
In Vercel Dashboard → Settings → Environment Variables, add:

```
IPFS_PROJECT_ID=your_infura_project_id
API_KEY_SECRET=your_infura_secret
NEXT_PUBLIC_RPC_URL=https://rpc.sepolia.org
```

**For production networks, use:**
- Alchemy: `https://eth-sepolia.g.alchemy.com/v2/YOUR_KEY`
- Infura: `https://sepolia.infura.io/v3/YOUR_PROJECT_ID`
- Public: `https://rpc.sepolia.org` (free but rate-limited)

### 3. Update Contract Address
Edit `context/constants.js`:
```javascript
export const MarketAddress = 'YOUR_DEPLOYED_CONTRACT_ADDRESS';
```

### 4. Deploy
- Click "Deploy"
- Wait for build to complete
- Visit your live URL!

## Important Notes

- ⚠️ **IPFS credentials are required** for NFT creation/upload features
- ⚠️ **RPC URL must match** the network where your contract is deployed
- ⚠️ **Contract address** must be updated after deploying to a new network
- ✅ The app will work for browsing NFTs even without IPFS credentials
- ✅ Wallet connection works automatically via MetaMask

## Testing After Deployment

1. Visit your deployed URL
2. Click "Connect Wallet" (should work with MetaMask)
3. Try viewing NFTs (if any exist)
4. Test NFT creation (requires IPFS credentials)

## Troubleshooting

**Build fails?**
- Check Vercel build logs
- Ensure Node.js version is compatible (Vercel uses 18.x)

**App loads but wallet won't connect?**
- Users need MetaMask installed
- Check browser console for errors

**NFT creation fails?**
- Verify IPFS credentials in Vercel environment variables
- Check that Infura IPFS project is active

**Can't fetch NFTs?**
- Verify `NEXT_PUBLIC_RPC_URL` is correct
- Ensure contract address matches deployed contract
- Check that RPC endpoint supports your network

## Need Help?

See `VERCEL_DEPLOYMENT.md` for detailed instructions.

