# 🖼️ Fix Image Upload Issue

## ✅ Good News: RPC is Working!
Your Alchemy RPC is working correctly! 🎉

## ❌ Problem: Image Upload Not Working

Images aren't uploading because **IPFS credentials are missing**.

---

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

---

### Step 3: Redeploy (2 minutes)

1. **Go to Deployments tab**
2. **Click ⋯ on latest deployment**
3. **Click Redeploy**
4. **Wait 2-3 minutes** for deployment to finish

---

### Step 4: Test Image Upload

1. **Open your site:** https://crypto-mvp-wine.vercel.app/
2. **Go to Create NFT page**
3. **Try uploading an image:**
   - Drag and drop an image
   - OR click to browse and select
4. **Check if it works:**
   - ✅ Image preview should appear
   - ✅ Image URL should show in console (F12)
   - ❌ If error, check console for details

---

## 🔍 How to Check if IPFS is Working

### Before Adding Credentials:
- ❌ Upload doesn't work
- ❌ No image preview
- ❌ Console shows: "IPFS client not initialized"

### After Adding Credentials:
- ✅ Image uploads successfully
- ✅ Image preview appears
- ✅ Image URL shows in console
- ✅ Can create NFT

---

## 📋 Checklist

- [ ] Create Infura account
- [ ] Create IPFS project in Infura
- [ ] Copy Project ID
- [ ] Copy API Key Secret
- [ ] Add `IPFS_PROJECT_ID` to Vercel
- [ ] Add `API_KEY_SECRET` to Vercel
- [ ] Redeploy application
- [ ] Test image upload
- [ ] Verify image appears

---

## 🐛 Troubleshooting

### Issue: "IPFS client not initialized"
**Solution:**
- ✅ Check environment variables are set in Vercel
- ✅ Verify values are correct (no extra spaces)
- ✅ Make sure you redeployed after adding variables
- ✅ Check browser console for specific errors

### Issue: Upload still doesn't work after adding credentials
**Check:**
1. **Environment variables:**
   - `IPFS_PROJECT_ID` is set
   - `API_KEY_SECRET` is set
   - Both have correct values

2. **Redeployment:**
   - Did you redeploy after adding variables?
   - Is deployment status "Ready"?

3. **Browser console:**
   - Press F12
   - Check Console tab for errors
   - Look for IPFS-related error messages

4. **Infura account:**
   - Is your Infura account active?
   - Is the IPFS project active?
   - Check Infura dashboard for any issues

### Issue: Can't find API Key Secret in Infura
**Solution:**
- Go to project Settings → API Keys
- Click "View" or "Reveal" button
- If not visible, you might need to generate it
- Some accounts show it directly in project dashboard

---

## ✅ Expected Behavior After Fix

1. **Upload Image:**
   - Select/drag image file
   - Image preview appears below upload area
   - Image URL is generated

2. **Create NFT:**
   - Fill in Name, Description, Price
   - Click "Create Item"
   - MetaMask popup appears
   - Transaction is processed
   - NFT is created and listed

---

## 🎯 Quick Summary

**What you need:**
- Infura account (free)
- IPFS project in Infura
- Project ID and API Secret

**What to do:**
1. Get credentials from Infura
2. Add to Vercel environment variables
3. Redeploy
4. Test upload

**Time needed:** ~10 minutes

---

## 💡 Pro Tips

1. **Test in browser console:**
   - Press F12 after uploading
   - Look for image URL in console
   - Check for any error messages

2. **Use small images for testing:**
   - Start with images under 1MB
   - JPG/PNG format works best

3. **Check Infura dashboard:**
   - Make sure project is active
   - Check if there are any usage limits

---

## 🚀 You're Almost There!

Once you add IPFS credentials and redeploy, image uploads will work perfectly! 🎉

Follow the steps above, and you'll be able to upload images and create NFTs!

