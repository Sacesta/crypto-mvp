# 🔍 Understanding RPC URL and Testing

## What You're Seeing

If you see:
```
Referrer Policy: strict-origin-when-cross-origin
```

**This is NORMAL!** ✅ It's just a security header, not an error.

---

## ⚠️ Important: Don't Test RPC URL Directly

The RPC URL (`https://rpc.sepolia.org`) is **NOT** meant to be opened in your browser.

It's used **internally** by your app to connect to the blockchain.

### ❌ Wrong Way:
- Opening `https://rpc.sepolia.org` in browser
- You'll see technical info or headers (that's normal)

### ✅ Right Way:
- Add RPC URL as environment variable in Vercel
- Your app uses it automatically
- Test by using your app features

---

## ✅ How RPC URL Works

1. **You add it to Vercel:**
   - Variable: `NEXT_PUBLIC_RPC_URL`
   - Value: `https://rpc.sepolia.org`

2. **Your app uses it automatically:**
   - When fetching NFTs
   - When reading blockchain data
   - When interacting with smart contracts

3. **You test it by:**
   - Using your app (not the RPC URL directly)
   - Connecting wallet
   - Viewing NFTs
   - Checking browser console for errors

---

## 🧪 How to Test if RPC URL is Working

### Method 1: Test Your App Features

1. **Open your site:** https://crypto-mvp-wine.vercel.app/
2. **Open browser console:** Press F12
3. **Try to fetch NFTs** or connect wallet
4. **Check console for errors:**
   - ✅ No "Failed to fetch" errors = RPC URL is working
   - ❌ "Failed to fetch" or network errors = RPC URL problem

### Method 2: Check Environment Variables

1. **Go to Vercel Dashboard**
2. **Settings → Environment Variables**
3. **Check if `NEXT_PUBLIC_RPC_URL` is set**
4. **Verify value:** `https://rpc.sepolia.org`

---

## 📋 RPC URL Test Checklist

- [ ] RPC URL added to Vercel environment variables
- [ ] Value is correct: `https://rpc.sepolia.org`
- [ ] App deployed after adding variable
- [ ] No "Failed to fetch" errors in browser console
- [ ] Wallet can connect
- [ ] Can fetch/view NFTs (if contract deployed)

---

## 🔧 Troubleshooting RPC URL Issues

### Issue: "Failed to fetch" in console

**Causes:**
1. RPC URL not set in Vercel
2. Wrong RPC URL value
3. RPC endpoint is down
4. Network mismatch

**Solutions:**
1. ✅ Check environment variable is set in Vercel
2. ✅ Verify URL is correct: `https://rpc.sepolia.org`
3. ✅ Try alternative RPC: `https://eth-sepolia.g.alchemy.com/v2/...`
4. ✅ Redeploy after adding/changing variable

### Issue: Can't connect to blockchain

**Check:**
- RPC URL matches the network where contract is deployed
- If contract on Sepolia → Use Sepolia RPC
- If contract on localhost → Use localhost RPC (won't work on Vercel)

---

## ✅ Quick Test Guide

**Don't test the RPC URL directly!**

Instead:

1. ✅ Add `NEXT_PUBLIC_RPC_URL` to Vercel
2. ✅ Set value: `https://rpc.sepolia.org`
3. ✅ Redeploy your app
4. ✅ Test your app (not the RPC URL)
5. ✅ Check browser console for errors

---

## 🎯 What to Do Now

1. **Verify RPC URL is in Vercel:**
   - Go to Vercel Dashboard
   - Settings → Environment Variables
   - Should see `NEXT_PUBLIC_RPC_URL` = `https://rpc.sepolia.org`

2. **Test your app:**
   - Open: https://crypto-mvp-wine.vercel.app/
   - Open console (F12)
   - Look for errors
   - Try connecting wallet

3. **Check results:**
   - ✅ No errors = RPC URL is working
   - ❌ Errors = Check environment variables

---

## 💡 Remember

- ❌ **Don't** open RPC URL in browser directly
- ✅ **Do** add it as environment variable in Vercel
- ✅ **Do** test by using your app features
- ✅ **Do** check browser console for errors

The RPC URL works behind the scenes - you test it by testing your app! 🚀

