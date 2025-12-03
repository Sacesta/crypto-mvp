
## 🔍 Why Images Don't Upload

Your app uses **IPFS (InterPlanetary File System)** to store images. To use IPFS, you need:

1. **IPFS_PROJECT_ID** - From Infura
2. **API_KEY_SECRET** - From Infura

Without these, the IPFS client can't initialize, so images won't upload.

---

## ✅ Solution: Add IPFS Credentials

### Step 1: Get Infura IPFS Credentials (5 minutes)

1. **Go to Infura:**
   - Visit: https://infura.io/
   - Sign up (free) or Login

2. **Create IPFS Project:**
   - Click **"Create New Key"** button
   - OR go to **"IPFS"** in the left menu
   - Project Name: `CryptoKet NFT` (or any name)
   - Services: Select **"IPFS"** ✓
   - Click **"Create"**

3. **Get Project ID:**
   - Copy the **"Project ID"**
   - Looks like: `2ABC123XYZ456DEF789GHI012JKL345MNO`
   - **Save this!**

4. **Get API Key Secret:**
   - In the same project page
   - Go to: **Settings** → **API Keys**
   - Click **"Reveal"** or **"View"** next to Secret Key
   - Copy the entire secret
   - Looks like: `1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t`
   - **Save this!**

---

### Step 2: Add to Vercel Environment Variables (2 minutes)

1. **Go to Vercel Dashboard:**
   - https://vercel.com/dashboard
   - Click your project: **crypto-mvp-wine**
   - Go to: **Settings** → **Environment Variables**

2. **Add IPFS_PROJECT_ID:**
   - Click **"Add New"**
   - **Key:** `IPFS_PROJECT_ID`
   - **Value:** `[paste your Infura Project ID]`
   - **Environment:** Select all (Production, Preview, Development)
   - Click **Save**

3. **Add API_KEY_SECRET:**
   - Click **"Add New"**
   - **Key:** `API_KEY_SECRET`
   - **Value:** `[paste your Infura API Key Secret]`
   - **Environment:** Select all (Production, Preview, Development)
   - Click **Save**

---   first this try but they not work after   Request URL
https://rpc.sepolia.org/Referrer Policy
strict-origin-when-cross-origin





4:41
aa public api ave e use kari to pan na   work the aloso not work erro find some 