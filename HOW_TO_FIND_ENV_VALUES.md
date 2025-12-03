# 🔍 How to Find Environment Variable Values

This guide shows you **exactly** how to get each value you need.

---

## 🔑 Variable 1: NEXT_PUBLIC_RPC_URL

### ✅ **EASIEST OPTION: Use Free Public RPC (No Account Needed)**

**Value:**
```
https://rpc.sepolia.org
```

**Just copy and paste this directly!** No signup needed.

---

### ✅ **BETTER OPTION: Use Your Existing Alchemy URL**

I found this in your `hardhat.config.js` file - you can use it:

**Value:**
```
https://eth-sepolia.g.alchemy.com/v2/IGJD0yiLouK86_fCJBdm-COk2pKnV2w0
```

**Just copy and paste this directly!** It's already in your code.

---

### ✅ **OPTION 3: Get New Alchemy URL**

1. Go to: https://www.alchemy.com/
2. Click: **"Create App"** or **"Get Started"**
3. Sign up / Login (free account)
4. Fill in:
   - **App Name:** CryptoKet NFT
   - **Chain:** Ethereum
   - **Network:** Sepolia (testnet)
5. Click **Create**
6. Copy the **HTTP URL** (looks like: `https://eth-sepolia.g.alchemy.com/v2/...`)

---

### ✅ **OPTION 4: Get Infura RPC URL**

1. Go to: https://infura.io/
2. Sign up / Login
3. Create a new project (or use existing)
4. Select **Ethereum** network
5. Copy the **HTTPS URL** for Sepolia network

---

## 🔑 Variable 2: IPFS_PROJECT_ID

### **Get from Infura (Free Account)**

**Step-by-Step:**

1. **Go to Infura:**
   - Visit: https://infura.io/
   - Click **"Get Started"** or **"Sign Up"**

2. **Create Account:**
   - Enter email and password
   - Verify your email (check inbox)

3. **Create IPFS Project:**
   - After login, click **"Create New Key"** button
   - OR click **"IPFS"** in the left menu
   - Fill in:
     - **Project Name:** CryptoKet NFT (or any name)
     - **Services:** Select **IPFS** ✓
   - Click **"Create"**

4. **Copy Project ID:**
   - You'll see a screen with your project details
   - Look for **"Project ID"** 
   - It looks like: `2ABC123XYZ456DEF789GHI012JKL345MNO`
   - **Copy this entire string**

5. **This is your IPFS_PROJECT_ID value!**

**Example of what it looks like:**
```
2ABC123XYZ456DEF789GHI012JKL345MNO
```
*(Your actual one will be different - just copy the one Infura gives you)*

---

## 🔑 Variable 3: API_KEY_SECRET

### **Get from Same Infura Project**

**Step-by-Step:**

1. **In your Infura dashboard:**
   - Make sure you're logged in
   - Click on your IPFS project (the one you just created)

2. **Get API Secret:**
   - Look for **"API Key Secret"** or **"Secret Key"**
   - OR go to: **Settings** → **API Keys**
   - Click **"View"** or **"Reveal"** next to the secret key
   - **Copy the entire secret**

3. **This is your API_KEY_SECRET value!**

**Example of what it looks like:**
```
1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t
```
*(Your actual one will be different - just copy the one Infura shows you)*

---

## 🔑 Variable 4: BASE_URL (Optional)

### **Already Know This One!**

**Value:**
```
https://crypto-mvp-wine.vercel.app
```

This is your deployed site URL - just copy it!

---

## 📋 Quick Reference: All Values

Copy these exact values (replace placeholders with your actual values):

```
┌──────────────────────┬─────────────────────────────────────────────────┐
│ Variable Name        │ Value                                          │
├──────────────────────┼─────────────────────────────────────────────────┤
│ NEXT_PUBLIC_RPC_URL  │ https://rpc.sepolia.org                        │
│                      │ OR                                              │
│                      │ https://eth-sepolia.g.alchemy.com/v2/IGJD0yiLou│
│                      │ K86_fCJBdm-COk2pKnV2w0                         │
├──────────────────────┼─────────────────────────────────────────────────┤
│ IPFS_PROJECT_ID      │ [Get from Infura - see instructions above]     │
│                      │ Example: 2ABC123XYZ456DEF789GHI012JKL345MNO     │
├──────────────────────┼─────────────────────────────────────────────────┤
│ API_KEY_SECRET       │ [Get from Infura - see instructions above]     │
│                      │ Example: 1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r  │
├──────────────────────┼─────────────────────────────────────────────────┤
│ BASE_URL             │ https://crypto-mvp-wine.vercel.app            │
└──────────────────────┴─────────────────────────────────────────────────┘
```

---

## ⚠️ Important: Contract Address

### **Current Contract Address (Localhost Only)**

Your current contract address in `context/constants.js`:
```
0x5FbDB2315678afecb367f032d93F642f64180aa3
```

This is **only for local development**. It won't work on the live site.

### **To Get a Production Contract Address:**

**Option 1: Deploy to Sepolia Testnet**

1. **Make sure you have testnet ETH:**
   - Get free Sepolia ETH from: https://sepoliafaucet.com/

2. **Deploy Contract:**
   ```bash
   npx hardhat run scripts/deploy.js --network sepolia
   ```

3. **Copy the deployed address:**
   - After deployment, you'll see: `NFTMarketplace deployed to: 0x...`
   - Copy that address

4. **Update `context/constants.js`:**
   ```javascript
   export const MarketAddress = '0xYOUR_NEW_DEPLOYED_ADDRESS_HERE';
   ```

5. **Commit and push:**
   ```bash
   git add context/constants.js
   git commit -m "Update contract address for production"
   git push
   ```

**Option 2: Use Existing Deployed Contract**
- If you already deployed before, check your deployment transaction
- Or check Hardhat deployments folder

---

## 🚀 Quick Start (Minimum Setup)

**If you want to test quickly, you only need:**

1. **NEXT_PUBLIC_RPC_URL** = `https://rpc.sepolia.org` ✅ (No signup needed)
2. **BASE_URL** = `https://crypto-mvp-wine.vercel.app` ✅ (Already know)

**Add IPFS variables later when you create Infura account!**

---

## 📝 Step-by-Step: Adding to Vercel

1. **Go to Vercel Dashboard:**
   - Visit: https://vercel.com/dashboard
   - Click your project: **crypto-mvp-wine**

2. **Go to Environment Variables:**
   - Click **Settings** tab
   - Click **Environment Variables** in left sidebar

3. **Add Each Variable:**
   - Click **"Add New"** button
   - Enter **Key** name
   - Enter **Value** (paste from above)
   - Select environments (✓ Production, ✓ Preview, ✓ Development)
   - Click **Save**

4. **Redeploy:**
   - Go to **Deployments** tab
   - Click **⋯** on latest deployment
   - Click **Redeploy**

---

## 🎯 Checklist

- [ ] Get `NEXT_PUBLIC_RPC_URL` (use free public RPC or your Alchemy URL)
- [ ] Sign up for Infura account
- [ ] Create IPFS project in Infura
- [ ] Copy `IPFS_PROJECT_ID` from Infura
- [ ] Copy `API_KEY_SECRET` from Infura
- [ ] Add all variables to Vercel
- [ ] Redeploy application
- [ ] (Optional) Deploy contract to Sepolia testnet
- [ ] (Optional) Update contract address in code

---

## 🆘 Troubleshooting

**"Can't find Project ID in Infura"**
- Make sure you created an **IPFS** project (not just Ethereum)
- Check the project dashboard page
- Look for "Project ID" or "Key" section

**"Can't find API Secret"**
- Go to project Settings → API Keys
- Click "Reveal" or "View" button
- Some accounts might need to generate it first

**"RPC URL not working"**
- Try the free public one first: `https://rpc.sepolia.org`
- Make sure you're using Sepolia network (not mainnet)
- Check if your Alchemy/Infura account is active

---

## ✅ You're Ready!

Once you have all values, add them to Vercel and redeploy! 🚀

