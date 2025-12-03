# 🔐 Vercel Environment Variables Setup Guide

Your app is deployed at: **https://crypto-mvp-wine.vercel.app/**

## 📋 Step-by-Step: Add Environment Variables to Vercel

### Step 1: Go to Vercel Dashboard
1. Go to https://vercel.com/dashboard
2. Find your project: **crypto-mvp-wine** (or similar name)
3. Click on the project

### Step 2: Navigate to Environment Variables
1. Click **Settings** tab
2. Click **Environment Variables** in the left sidebar

### Step 3: Add These Environment Variables

Add each variable one by one by clicking **Add New**:

---

## 🔑 Required Environment Variables

### 1. IPFS_PROJECT_ID
**What it is:** Your Infura IPFS Project ID

**How to get it:**
- Go to https://infura.io/
- Sign up/Login
- Create a new project
- Select **IPFS** as the service
- Copy the **Project ID**

**Value format:**
```
2ABC123XYZ456DEF789GHI012JKL345MNO
```
*(This is just an example - use your actual Project ID)*

**Add in Vercel:**
- **Key:** `IPFS_PROJECT_ID`
- **Value:** `your_infura_project_id_here`
- **Environment:** Select all (Production, Preview, Development)

---

### 2. API_KEY_SECRET
**What it is:** Your Infura IPFS API Key Secret

**How to get it:**
- In the same Infura project page
- Go to **Settings** → **API Keys**
- Copy the **API Key Secret**

**Value format:**
```
1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t
```
*(This is just an example - use your actual Secret)*

**Add in Vercel:**
- **Key:** `API_KEY_SECRET`
- **Value:** `your_infura_api_key_secret_here`
- **Environment:** Select all (Production, Preview, Development)

---

### 3. NEXT_PUBLIC_RPC_URL
**What it is:** Blockchain RPC endpoint URL

**Choose ONE option below:**

#### Option A: Free Public RPC (Recommended for Testing)
**Use this for Sepolia Testnet:**
```
https://rpc.sepolia.org
```

**Add in Vercel:**
- **Key:** `NEXT_PUBLIC_RPC_URL`
- **Value:** `https://rpc.sepolia.org`
- **Environment:** Select all (Production, Preview, Development)

#### Option B: Alchemy RPC (Better Performance)
**How to get it:**
- Go to https://www.alchemy.com/
- Sign up/Login
- Create a new app
- Select **Ethereum** → **Sepolia** network
- Copy the **HTTP URL**

**Value format:**
```
https://eth-sepolia.g.alchemy.com/v2/abc123xyz456def789ghi012jkl345
```

**Add in Vercel:**
- **Key:** `NEXT_PUBLIC_RPC_URL`
- **Value:** `your_alchemy_rpc_url_here`
- **Environment:** Select all (Production, Preview, Development)

#### Option C: Infura RPC (Alternative)
**Value format:**
```
https://sepolia.infura.io/v3/YOUR_INFURA_PROJECT_ID
```

**Add in Vercel:**
- **Key:** `NEXT_PUBLIC_RPC_URL`
- **Value:** `https://sepolia.infura.io/v3/YOUR_INFURA_PROJECT_ID`
- **Environment:** Select all (Production, Preview, Development)

---

### 4. BASE_URL (Optional)
**What it is:** Your deployed app URL

**Value:**
```
https://crypto-mvp-wine.vercel.app
```

**Add in Vercel:**
- **Key:** `BASE_URL`
- **Value:** `https://crypto-mvp-wine.vercel.app`
- **Environment:** Production only

---

## ✅ After Adding Variables

1. **Save all variables** - Make sure you click **Save** after adding each one
2. **Redeploy your app:**
   - Go to **Deployments** tab
   - Click the **3 dots (⋯)** on the latest deployment
   - Click **Redeploy**
   - Or push a new commit to trigger automatic redeploy

---

## 🧪 Test Your Setup

After redeploying, test these features:

1. **Visit:** https://crypto-mvp-wine.vercel.app/
2. **Connect Wallet:** Click "Connect" button (should work with MetaMask)
3. **View NFTs:** Check if NFTs load (if any exist)
4. **Create NFT:** Test NFT creation (requires IPFS credentials)

---

## 🔍 Verify Environment Variables are Set

To check if variables are set correctly:

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. You should see all 3-4 variables listed
3. Values should NOT show as empty

---

## ⚠️ Important Notes

- **IPFS credentials are REQUIRED** for NFT creation/upload features
- **RPC URL must match** the network where your smart contract is deployed
- **Contract Address** must be correct in `context/constants.js`
- Variables starting with `NEXT_PUBLIC_` are accessible in the browser
- Variables without `NEXT_PUBLIC_` are server-side only (like API keys)

---

## 🆘 Troubleshooting

### "NFT creation not working"
- ✅ Check IPFS_PROJECT_ID is set correctly
- ✅ Check API_KEY_SECRET is set correctly
- ✅ Verify Infura IPFS project is active

### "Can't fetch NFTs"
- ✅ Check NEXT_PUBLIC_RPC_URL is set correctly
- ✅ Verify RPC URL matches your contract's network
- ✅ Check contract address in `context/constants.js`

### "Wallet won't connect"
- ✅ Users need MetaMask installed
- ✅ Check browser console for errors
- ✅ Verify network matches in MetaMask

---

## 📝 Quick Copy-Paste Values

If you want to use the free public RPC for testing, here are the exact values:

```env
IPFS_PROJECT_ID=your_infura_project_id
API_KEY_SECRET=your_infura_api_key_secret
NEXT_PUBLIC_RPC_URL=https://rpc.sepolia.org
BASE_URL=https://crypto-mvp-wine.vercel.app
```

**Remember:** Replace `your_infura_project_id` and `your_infura_api_key_secret` with your actual values from Infura!

---

## 🎯 Next Steps

1. ✅ Add all environment variables to Vercel
2. ✅ Redeploy your application
3. ✅ Test all features
4. ✅ Update contract address if needed (in `context/constants.js`)

Your app should now work perfectly! 🚀

