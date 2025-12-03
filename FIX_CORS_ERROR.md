# 🔧 Fix CORS Error - Quick Solution

## ❌ The Problem

You're seeing **CORS errors** for `rpc.sepolia.org` because:
- The public RPC endpoint blocks browser requests
- Your app is trying to connect from the browser directly
- CORS policy prevents this

## ✅ The Solution

**Use Alchemy RPC instead** - it supports CORS and works from the browser!

---

## 🚀 Quick Fix (2 Minutes)

### Step 1: Update RPC URL in Vercel

1. **Go to Vercel Dashboard:**
   - https://vercel.com/dashboard
   - Click your project: **crypto-mvp-wine**
   - Go to: **Settings** → **Environment Variables**

2. **Update `NEXT_PUBLIC_RPC_URL`:**
   - Find `NEXT_PUBLIC_RPC_URL`
   - Click the **3 dots (⋯)** → **Edit**
   - Change value from:
     ```
     https://rpc.sepolia.org
     ```
   - To (use your existing Alchemy URL):
     ```
     https://eth-sepolia.g.alchemy.com/v2/IGJD0yiLouK86_fCJBdm-COk2pKnV2w0
     ```
   - Click **Save**

3. **Redeploy:**
   - Go to **Deployments** tab
   - Click **⋯** on latest deployment
   - Click **Redeploy**

---

## ✅ Alternative Solutions

### Option 1: Use Alchemy (Recommended) ✅

**Already have this in your code!**

Update Vercel environment variable:
```
NEXT_PUBLIC_RPC_URL = https://eth-sepolia.g.alchemy.com/v2/IGJD0yiLouK86_fCJBdm-COk2pKnV2w0
```

**Pros:**
- ✅ Supports CORS
- ✅ Fast and reliable
- ✅ Already in your hardhat.config.js
- ✅ No signup needed (you already have the URL)

### Option 2: Use Infura RPC

If you have Infura account:

1. Create Ethereum project in Infura
2. Select Sepolia network
3. Copy the HTTPS URL
4. Use as RPC URL in Vercel

Format:
```
https://sepolia.infura.io/v3/YOUR_INFURA_PROJECT_ID
```

### Option 3: Use Other CORS-Enabled RPCs

**QuickNode (if you have account):**
```
https://your-endpoint.sepolia.quiknode.pro/YOUR_API_KEY
```

**PublicRPC (CORS-enabled):**
```
https://public-rpc.sepolia.ethpandaops.io
```

---

## 📋 Step-by-Step Fix

### Current Status:
- ❌ `rpc.sepolia.org` → CORS errors
- ✅ `NEXT_PUBLIC_RPC_URL` is set in Vercel
- ✅ `BASE_URL` is set in Vercel

### Action Needed:
1. ✅ Change RPC URL to Alchemy
2. ✅ Redeploy
3. ✅ Test again

---

## 🧪 After Fixing - Test Again

1. **Wait for redeploy to finish** (2-3 minutes)
2. **Open your site:** https://crypto-mvp-wine.vercel.app/
3. **Open browser console:** Press F12
4. **Check Network tab:**
   - ✅ Should see requests to Alchemy RPC
   - ✅ No more CORS errors
5. **Check Console tab:**
   - ✅ No red errors
   - ✅ App should work

---

## 🎯 Quick Checklist

- [ ] Go to Vercel Environment Variables
- [ ] Edit `NEXT_PUBLIC_RPC_URL`
- [ ] Change to Alchemy URL: `https://eth-sepolia.g.alchemy.com/v2/IGJD0yiLouK86_fCJBdm-COk2pKnV2w0`
- [ ] Save changes
- [ ] Redeploy application
- [ ] Wait for deployment to finish
- [ ] Test site again
- [ ] Check console - should see no CORS errors

---

## ✅ Expected Result

**Before (CORS errors):**
- ❌ Red CORS errors in Network tab
- ❌ Can't fetch blockchain data
- ❌ NFTs won't load

**After (Fixed):**
- ✅ No CORS errors
- ✅ Can connect to blockchain
- ✅ NFTs can load (if contract deployed)

---

## 💡 Why This Works

1. **Public RPC (`rpc.sepolia.org`):**
   - Blocks browser requests (CORS policy)
   - Meant for server-side use

2. **Alchemy RPC:**
   - Allows browser requests (CORS enabled)
   - Designed for frontend apps
   - Better performance

---

## 🆘 Still Having Issues?

If CORS errors persist after switching to Alchemy:

1. **Check the URL is correct** - should start with `https://eth-sepolia.g.alchemy.com/v2/...`
2. **Verify redeploy completed** - wait for green "Ready" status
3. **Clear browser cache** - Hard refresh (Ctrl+Shift+R)
4. **Try incognito mode** - Avoids cache issues
5. **Check console** - Look for specific error messages

---

## 🎉 You're Done!

Once you update the RPC URL to Alchemy and redeploy, the CORS errors should be gone! 🚀

**Estimated time:** 5 minutes to fix

