# 🔧 Fix 401 Unauthorized Error

## ❌ The Problem

You're getting **401 Unauthorized** when uploading images to IPFS.

This means:
- ✅ Your app is trying to upload (good!)
- ❌ Authentication is failing (credentials issue)

---

## 🔍 What Causes 401 Error

1. **Environment variables not set** in Vercel
2. **Wrong values** in environment variables
3. **Variables not redeployed** after adding
4. **API route not working** correctly

---

## ✅ Step-by-Step Fix

### Step 1: Verify Environment Variables in Vercel

1. **Go to Vercel Dashboard:**
   - https://vercel.com/dashboard
   - Click your project: **crypto-mvp-wine**
   - Go to: **Settings** → **Environment Variables**

2. **Check if these exist:**
   - ✅ `IPFS_PROJECT_ID` - Should have your Infura Project ID
   - ✅ `API_KEY_SECRET` - Should have your Infura API Secret

3. **If they don't exist:**
   - Add them now (see Step 2)

4. **If they exist:**
   - Click on each one to verify the values
   - Make sure there are **no extra spaces**
   - Make sure values are **complete** (not cut off)

---

### Step 2: Add/Update Environment Variables

**If missing or wrong, add/update:**

1. **IPFS_PROJECT_ID:**
   - Key: `IPFS_PROJECT_ID`
   - Value: `[your Infura Project ID]`
     - Example: `7113b1cacfe24354abf9cee12a242c5e`
   - Environment: ✓ Production ✓ Preview ✓ Development
   - Click **Save**

2. **API_KEY_SECRET:**
   - Key: `API_KEY_SECRET`
   - Value: `[your Infura API Secret]`
     - Example: `1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t`
   - Environment: ✓ Production ✓ Preview ✓ Development
   - Click **Save**

**⚠️ Important:**
- No quotes around values
- No extra spaces before/after
- Copy the exact values from Infura

---

### Step 3: Verify API Route is Working

1. **Open your site:** https://crypto-mvp-wine.vercel.app/
2. **Open browser console:** Press F12
3. **Go to Console tab**
4. **Type this and press Enter:**
   ```javascript
   fetch('/api/secure').then(r => r.json()).then(console.log)
   ```

5. **Check the result:**
   - ✅ Should show: `{ data: "Basic ..." }` (with a long string)
   - ❌ If shows: `{ data: "" }` = Credentials not set
   - ❌ If shows error = API route problem

---

### Step 4: Redeploy After Changes

**IMPORTANT:** After adding/updating environment variables:

1. **Go to Deployments tab**
2. **Click ⋯ on latest deployment**
3. **Click Redeploy**
4. **Wait 2-3 minutes** for deployment to finish

**⚠️ Environment variables only take effect after redeploy!**

---

### Step 5: Test Again

1. **Open your site** (after redeploy)
2. **Go to Create NFT page**
3. **Try uploading an image**
4. **Check browser console:**
   - Press F12
   - Go to Network tab
   - Look for the IPFS request
   - Should be **200 OK** (not 401)

---

## 🔍 Troubleshooting Checklist

### Check 1: Are Variables Set?
- [ ] Go to Vercel → Settings → Environment Variables
- [ ] See `IPFS_PROJECT_ID` listed
- [ ] See `API_KEY_SECRET` listed

### Check 2: Are Values Correct?
- [ ] `IPFS_PROJECT_ID` matches your Infura Project ID
- [ ] `API_KEY_SECRET` matches your Infura Secret
- [ ] No extra spaces or quotes
- [ ] Values are complete (not truncated)

### Check 3: Did You Redeploy?
- [ ] Added variables to Vercel
- [ ] Clicked Redeploy after adding
- [ ] Deployment finished successfully

### Check 4: Is API Route Working?
- [ ] Test `/api/secure` endpoint
- [ ] Returns auth string (not empty)
- [ ] No errors in console

---

## 🐛 Common Issues & Fixes

### Issue: Variables exist but still 401

**Possible causes:**
1. **Didn't redeploy** after adding variables
   - **Fix:** Redeploy now!

2. **Wrong values** (typos, extra spaces)
   - **Fix:** Double-check values match Infura exactly

3. **Variables in wrong environment**
   - **Fix:** Make sure they're set for Production

4. **API route not accessible**
   - **Fix:** Check if `/api/secure` works (see Step 3)

### Issue: API route returns empty data

**This means credentials aren't set:**
- Check Vercel environment variables
- Verify both `IPFS_PROJECT_ID` and `API_KEY_SECRET` exist
- Make sure values are not empty

### Issue: Still getting 401 after everything

**Try this:**
1. **Double-check Infura credentials:**
   - Login to Infura
   - Verify Project ID is correct
   - Reveal secret again and copy fresh

2. **Re-add to Vercel:**
   - Delete old variables
   - Add them again with fresh values
   - Redeploy

3. **Check API route:**
   - Test `/api/secure` endpoint
   - Should return auth string

---

## ✅ Expected Result After Fix

**Before (401 Error):**
- ❌ 401 Unauthorized
- ❌ Image upload fails
- ❌ Console shows auth error

**After (Fixed):**
- ✅ 200 OK
- ✅ Image uploads successfully
- ✅ Image preview appears
- ✅ NFT can be created

---

## 🧪 Quick Test

**Test if credentials are working:**

1. **Open browser console** (F12)
2. **Run this:**
   ```javascript
   fetch('/api/secure').then(r => r.json()).then(d => console.log('Auth:', d.data ? 'SET' : 'MISSING'))
   ```

3. **Result:**
   - ✅ Shows "Auth: SET" = Credentials are working
   - ❌ Shows "Auth: MISSING" = Need to add credentials

---

## 📋 Final Checklist

- [ ] `IPFS_PROJECT_ID` added to Vercel
- [ ] `API_KEY_SECRET` added to Vercel
- [ ] Values are correct (no typos, no spaces)
- [ ] Redeployed after adding variables
- [ ] Tested `/api/secure` endpoint
- [ ] Endpoint returns auth string
- [ ] Tried uploading image again
- [ ] No more 401 errors

---

## 🎯 Most Common Fix

**90% of the time, the issue is:**
- ✅ Variables added to Vercel
- ❌ **Forgot to redeploy!**

**Solution:** Just redeploy and it should work! 🚀

---

## 🆘 Still Not Working?

If you've done everything and still get 401:

1. **Verify Infura credentials:**
   - Login to Infura dashboard
   - Check Project ID is correct
   - Reveal and copy secret again

2. **Check Vercel variables:**
   - Make sure both variables exist
   - Verify values are exact (character by character)
   - No extra spaces or newlines

3. **Test API route:**
   - Visit: `https://crypto-mvp-wine.vercel.app/api/secure`
   - Should return JSON with `data` field
   - If empty, credentials aren't set

4. **Clear browser cache:**
   - Hard refresh: Ctrl+Shift+R
   - Or try incognito mode

---

Good luck! The 401 error is almost always fixed by adding credentials and redeploying! 🎉

