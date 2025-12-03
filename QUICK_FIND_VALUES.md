# ⚡ Quick Guide: How to Find Each Value

## ✅ Value 1: NEXT_PUBLIC_RPC_URL (EASIEST - No Account Needed!)

**Just use this free public RPC:**

```
https://rpc.sepolia.org
```

**OR use your existing Alchemy URL (found in your code):**

```
https://eth-sepolia.g.alchemy.com/v2/IGJD0yiLouK86_fCJBdm-COk2pKnV2w0
```

**That's it! Just copy and paste!** ✅

---

## ✅ Value 2: IPFS_PROJECT_ID (Need Infura Account)

### Steps:

1. **Go to:** https://infura.io/
2. **Sign up** (free account) or **Login**
3. **Click:** "Create New Key" button
4. **Select:** IPFS service
5. **Copy:** The "Project ID" (looks like: `2ABC123XYZ...`)
6. **That's your value!** ✅

---

## ✅ Value 3: API_KEY_SECRET (Same Infura Account)

### Steps:

1. **In your Infura project page**
2. **Go to:** Settings → API Keys
3. **Click:** "Reveal" or "View" next to Secret Key
4. **Copy:** The entire secret (long string)
5. **That's your value!** ✅

---

## ✅ Value 4: BASE_URL (You Already Know This!)

```
https://crypto-mvp-wine.vercel.app
```

Just copy your site URL! ✅

---

## 📋 Copy-Paste Ready Values

When adding to Vercel, use these:

```
Variable Name: NEXT_PUBLIC_RPC_URL
Value: https://rpc.sepolia.org

Variable Name: IPFS_PROJECT_ID  
Value: [paste from Infura]

Variable Name: API_KEY_SECRET
Value: [paste from Infura]

Variable Name: BASE_URL
Value: https://crypto-mvp-wine.vercel.app
```

---

## ⚠️ Contract Address Update Needed!

Your contract address `0x5FbDB2315678afecb367f032d93F642f64180aa3` is for localhost only.

**To fix:**

1. **Deploy contract to Sepolia:**
   ```bash
   npx hardhat run scripts/deploy.js --network sepolia
   ```

2. **Copy the new address** from the output

3. **Update `context/constants.js`:**
   ```javascript
   export const MarketAddress = '0xYOUR_NEW_ADDRESS';
   ```

4. **Commit and push** to trigger redeploy

---

## 🚀 Minimum Setup (5 Minutes)

**Just add these 2 for now:**

1. `NEXT_PUBLIC_RPC_URL` = `https://rpc.sepolia.org` ✅
2. `BASE_URL` = `https://crypto-mvp-wine.vercel.app` ✅

**Add IPFS later when you have time!**

See `HOW_TO_FIND_ENV_VALUES.md` for detailed step-by-step instructions.

