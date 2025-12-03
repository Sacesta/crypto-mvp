# 🧪 How to Test Your Deployed Site

**Your Site:** https://crypto-mvp-wine.vercel.app/

---

## ✅ Quick Test Checklist

### 1. **Basic Site Loading Test**
- [ ] Site loads without errors
- [ ] No blank white screen
- [ ] Homepage displays correctly
- [ ] All images load properly

### 2. **Wallet Connection Test**
- [ ] "Connect" button appears
- [ ] Clicking connect opens MetaMask
- [ ] Wallet connects successfully
- [ ] Wallet address displays after connection

### 3. **Navigation Test**
- [ ] All menu links work
- [ ] Pages load correctly
- [ ] No 404 errors

### 4. **NFT Features Test**
- [ ] Can view listed NFTs (if any exist)
- [ ] NFT images display
- [ ] Can browse marketplace
- [ ] Can create NFT (if IPFS configured)

---

## 📋 Step-by-Step Testing Guide

### **Test 1: Check Site Loads** ⏱️ 30 seconds

1. **Open your site:**
   - Go to: https://crypto-mvp-wine.vercel.app/
   - Or open in a new tab

2. **What to check:**
   - ✅ Page loads (not blank)
   - ✅ You see "CryptoKet" logo/branding
   - ✅ Navigation menu appears
   - ✅ Homepage content shows

3. **If it works:**
   - You should see the homepage with "Discover, collect, and sell extraordinary NFTs"

4. **If it doesn't work:**
   - Check browser console (F12) for errors
   - Try refreshing the page
   - Check Vercel deployment status

---

### **Test 2: Check Browser Console** ⏱️ 1 minute

1. **Open Developer Tools:**
   - Press **F12** (or Right-click → Inspect)
   - Click **Console** tab

2. **What to check:**
   - ✅ No red error messages
   - ✅ Yellow warnings are OK (can ignore)
   - ✅ No "Failed to fetch" errors

3. **Common errors to watch for:**
   - ❌ "Failed to fetch" = RPC URL issue
   - ❌ "IPFS client not initialized" = IPFS credentials missing (OK if you didn't add them)
   - ❌ "Contract not found" = Contract address issue

4. **If errors appear:**
   - Note what they say
   - Check environment variables in Vercel
   - Check contract address in code

---

### **Test 3: Wallet Connection Test** ⏱️ 2 minutes

**Prerequisites:**
- You need MetaMask browser extension installed
- MetaMask should be unlocked

**Steps:**

1. **Check MetaMask is installed:**
   - Look for MetaMask icon in browser toolbar
   - If not installed: https://metamask.io/download/

2. **Click "Connect" button:**
   - Find "Connect" or "Connect Wallet" button on your site
   - Click it

3. **What should happen:**
   - ✅ MetaMask popup appears
   - ✅ Shows connection request
   - ✅ Asks which account to connect

4. **Approve connection:**
   - Click "Next" in MetaMask
   - Click "Connect"

5. **Check if connected:**
   - ✅ Button changes to show wallet address
   - ✅ Shows shortened address like: "0x1234...5678"
   - ✅ No error messages

6. **If it doesn't work:**
   - Check MetaMask is unlocked
   - Check MetaMask is on correct network
   - Check browser console for errors
   - Try refreshing the page

---

### **Test 4: Network Connection Test** ⏱️ 1 minute

1. **Check MetaMask Network:**
   - Click MetaMask icon
   - Check which network is selected
   - Should match your RPC URL:
     - If using `rpc.sepolia.org` → Select "Sepolia" network
     - If using localhost → Select "Localhost 8545"

2. **If wrong network:**
   - Click network dropdown in MetaMask
   - Select correct network
   - Or add network if not listed

3. **Check RPC URL works:**
   - Open browser console (F12)
   - Look for any "Failed to fetch" errors
   - If errors appear, RPC URL might be wrong

---

### **Test 5: View NFTs Test** ⏱️ 2 minutes

1. **Check homepage:**
   - Look for NFT listings
   - Check if any NFTs appear

2. **What you might see:**
   - ✅ "Hot Bids" section with NFT cards
   - ✅ "Top Sellers" section
   - ✅ NFT images and prices
   - OR
   - ℹ️ "That's weird... No NFTs for sale!" message (normal if no NFTs exist)

3. **If NFTs appear:**
   - ✅ Click on an NFT
   - ✅ Should navigate to NFT details page
   - ✅ Shows NFT information

4. **If no NFTs appear:**
   - This is normal if contract is localhost-only
   - Need to deploy contract to testnet first
   - Or NFTs simply don't exist yet

---

### **Test 6: Create NFT Test** ⏱️ 5 minutes

**Prerequisites:**
- ✅ IPFS credentials configured in Vercel
- ✅ Wallet connected
- ✅ Contract deployed to testnet

**Steps:**

1. **Navigate to Create NFT:**
   - Click "Create" in navigation
   - Or go to: `/create-nft`

2. **Fill in NFT details:**
   - Name
   - Description
   - Price (in ETH)
   - Upload image file

3. **Click "Create NFT":**
   - Should process the upload
   - Shows loading indicator
   - MetaMask popup appears for transaction

4. **Approve transaction:**
   - Review in MetaMask
   - Confirm transaction
   - Wait for confirmation

5. **Check result:**
   - ✅ Redirects to homepage
   - ✅ Shows success message
   - ✅ NFT appears in listings

6. **If it fails:**
   - Check IPFS credentials are set
   - Check browser console for errors
   - Check MetaMask for transaction errors
   - Check you have ETH for gas fees

---

### **Test 7: Navigation Test** ⏱️ 1 minute

Test all pages:

1. **Homepage** (`/`)
   - ✅ Loads correctly
   - ✅ Shows content

2. **Create NFT** (`/create-nft`)
   - ✅ Page loads
   - ✅ Form appears

3. **My NFTs** (`/my-nfts`)
   - ✅ Page loads
   - ✅ Shows your NFTs (if any)

4. **Listed NFTs** (`/listed-nfts`)
   - ✅ Page loads
   - ✅ Shows listed NFTs

5. **Explore**
   - ✅ Navigation works
   - ✅ All links functional

---

## 🔍 How to Check if It's Working

### ✅ **Everything Works If:**
- Site loads without errors
- Wallet connects successfully
- No red errors in browser console
- Pages navigate correctly
- Can interact with buttons/forms

### ❌ **Something's Wrong If:**
- Blank white screen
- Red errors in console
- Wallet won't connect
- "Failed to fetch" errors
- 404 page errors
- Features don't respond

---

## 🐛 Troubleshooting Common Issues

### **Issue: Site won't load**
- ✅ Check Vercel deployment status (should be "Ready")
- ✅ Try refreshing the page
- ✅ Check URL is correct
- ✅ Try incognito/private window

### **Issue: Wallet won't connect**
- ✅ Check MetaMask is installed
- ✅ Check MetaMask is unlocked
- ✅ Check browser console for errors
- ✅ Try disconnecting and reconnecting
- ✅ Check network matches RPC URL

### **Issue: Can't fetch NFTs**
- ✅ Check RPC URL is set correctly in Vercel
- ✅ Check contract address is correct
- ✅ Check contract is deployed to testnet (not just localhost)
- ✅ Check network in MetaMask matches RPC network

### **Issue: NFT creation fails**
- ✅ Check IPFS credentials are set in Vercel
- ✅ Check browser console for IPFS errors
- ✅ Verify you have ETH for gas fees
- ✅ Check MetaMask transaction errors

### **Issue: Console shows errors**
- ✅ Note the exact error message
- ✅ Check if environment variables are set
- ✅ Verify all values are correct
- ✅ Check contract address matches deployment

---

## 📊 Testing Report Template

Use this to track your tests:

```
Testing Date: ___________

Basic Loading:
[ ] Site loads
[ ] No blank screen
[ ] Images display

Wallet Connection:
[ ] Connect button works
[ ] MetaMask opens
[ ] Wallet connects
[ ] Address displays

Navigation:
[ ] All pages load
[ ] No 404 errors
[ ] Links work

NFT Features:
[ ] Can view NFTs (if exist)
[ ] Can create NFT (if IPFS configured)
[ ] NFT details page works

Console Errors:
[ ] No red errors
[ ] Warnings only (OK to ignore)

Issues Found:
_________________________________
_________________________________

Overall Status: ✅ Working / ❌ Issues
```

---

## 🎯 Quick 5-Minute Test

**Fastest way to check if everything works:**

1. ✅ **Open site** → Should load
2. ✅ **Open console** (F12) → Should see no red errors
3. ✅ **Click Connect** → Should open MetaMask
4. ✅ **Approve connection** → Should show wallet address
5. ✅ **Check homepage** → Should show content

**If all 5 work = Your site is working!** 🎉

---

## 💡 Pro Tips

1. **Always check browser console first** - It shows most errors
2. **Test in incognito mode** - Avoids cache issues
3. **Try different browsers** - Chrome, Firefox, Edge
4. **Check MetaMask network** - Must match your RPC URL
5. **Have test ETH** - Needed for transactions (gas fees)

---

## ✅ You're Done Testing!

If all basic tests pass, your site is working correctly! 🚀

For detailed feature testing, follow the step-by-step guides above.

