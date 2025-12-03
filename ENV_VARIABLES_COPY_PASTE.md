# 🔐 Environment Variables - Copy & Paste Ready

**Your deployed site:** https://crypto-mvp-wine.vercel.app/

## 📍 Where to Add in Vercel

1. Go to: https://vercel.com/dashboard
2. Click your project: **crypto-mvp-wine**
3. Go to: **Settings** → **Environment Variables**
4. Click: **Add New**

---

## 🔑 Environment Variables to Add

### ✅ Variable 1: NEXT_PUBLIC_RPC_URL

**For Sepolia Testnet (FREE - Recommended for testing):**

```
Key: NEXT_PUBLIC_RPC_URL
Value: https://rpc.sepolia.org
Environment: Production, Preview, Development (select all)
```

**OR use Alchemy (Better performance):**
```
Key: NEXT_PUBLIC_RPC_URL
Value: https://eth-sepolia.g.alchemy.com/v2/IGJD0yiLouK86_fCJBdm-COk2pKnV2w0
Environment: Production, Preview, Development (select all)
```
*(I found this Alchemy URL in your hardhat.config.js - you can use it!)*

---

### ✅ Variable 2: IPFS_PROJECT_ID

**You need to get this from Infura:**

1. Go to: https://infura.io/
2. Sign up / Login
3. Click: **Create New Key**
4. Select: **IPFS**
5. Copy the **Project ID**

Then add:
```
Key: IPFS_PROJECT_ID
Value: [paste your Infura Project ID here]
Environment: Production, Preview, Development (select all)
```

**Example format:**
```
2ABC123XYZ456DEF789GHI012JKL345MNO
```

---

### ✅ Variable 3: API_KEY_SECRET

**Get this from the same Infura project:**

1. In your Infura project
2. Go to: **Settings** → **API Keys**
3. Copy the **API Key Secret**

Then add:
```
Key: API_KEY_SECRET
Value: [paste your Infura API Key Secret here]
Environment: Production, Preview, Development (select all)
```

**Example format:**
```
1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t
```

---

### ✅ Variable 4: BASE_URL (Optional)

```
Key: BASE_URL
Value: https://crypto-mvp-wine.vercel.app
Environment: Production only
```

---

## ⚠️ IMPORTANT: Update Contract Address

Your current contract address is set for **localhost only**:
```
0x5FbDB2315678afecb367f032d93F642f64180aa3
```

### To Use on Live Site:

**Option 1: Deploy to Sepolia Testnet**
1. Deploy your contract to Sepolia testnet
2. Update `context/constants.js` with new contract address
3. Commit and push to trigger redeploy

**Option 2: For Now (Testing Only)**
- The app will work for UI testing
- But NFTs won't load until you deploy contract to testnet

---

## 🚀 Quick Setup (Minimum Required)

**Add just these 2 to get started:**

1. **NEXT_PUBLIC_RPC_URL** = `https://rpc.sepolia.org`
2. **BASE_URL** = `https://crypto-mvp-wine.vercel.app`

*(Add IPFS variables later when you create Infura account)*

---

## 📝 Copy-Paste Template

Use this format when adding in Vercel:

```
┌─────────────────────────┬──────────────────────────────────────┐
│ Key                     │ Value                                │
├─────────────────────────┼──────────────────────────────────────┤
│ NEXT_PUBLIC_RPC_URL     │ https://rpc.sepolia.org              │
│ IPFS_PROJECT_ID         │ [your_infura_project_id]             │
│ API_KEY_SECRET          │ [your_infura_api_secret]             │
│ BASE_URL                │ https://crypto-mvp-wine.vercel.app   │
└─────────────────────────┴──────────────────────────────────────┘
```

---

## ✅ After Adding Variables

1. ✅ Click **Save** after each variable
2. ✅ Go to **Deployments** tab
3. ✅ Click **⋯** on latest deployment
4. ✅ Click **Redeploy**
5. ✅ Wait for deployment to finish
6. ✅ Test your site!

---

## 🆘 Need Help Getting Infura Credentials?

### Step-by-Step Infura Setup:

1. **Sign Up:** https://infura.io/register
2. **Verify Email**
3. **Create IPFS Project:**
   - Click **Create New Key**
   - Name: `CryptoKet NFT`
   - Services: Select **IPFS**
   - Click **Create**
4. **Get Credentials:**
   - **Project ID:** Copy from the project dashboard
   - **API Key Secret:** Go to Settings → API Keys → Copy Secret
5. **Add to Vercel:** Use the values you copied

---

## 🎯 Quick Start (5 Minutes)

1. ✅ Add `NEXT_PUBLIC_RPC_URL` = `https://rpc.sepolia.org`
2. ✅ Add `BASE_URL` = `https://crypto-mvp-wine.vercel.app`
3. ✅ Redeploy
4. ✅ Test wallet connection
5. ⏰ (Later) Add IPFS credentials for NFT creation

**You're all set!** 🚀

