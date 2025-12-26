# Quick Start Guide for Unified App

## What You Have

A complete Next.js application ready to collect waitlist emails for your financial app.

## Step-by-Step Deployment

### 1. Install Node.js
If you don't have Node.js installed:
- Go to https://nodejs.org
- Download and install the LTS version
- Verify installation: Open terminal and type `node --version`

### 2. Get the Code on Your Computer
- Download the `unified-app` folder
- Open Terminal (Mac) or Command Prompt (Windows)
- Navigate to the folder:
  ```bash
  cd path/to/unified-app
  ```

### 3. Install Dependencies
In the terminal, run:
```bash
npm install
```
This will download all necessary packages (may take 2-3 minutes).

### 4. Test Locally
Run the app on your computer:
```bash
npm run dev
```
Then open your browser and go to: http://localhost:3000

You should see your landing page! Press Ctrl+C in terminal to stop.

### 5. Push to GitHub

**Create a GitHub account** if you don't have one: https://github.com/signup

**Install Git** if needed: https://git-scm.com/downloads

**In the terminal, run these commands one by one:**

```bash
# Initialize git in your project
git init

# Add all files
git add .

# Commit the files
git commit -m "Initial commit"

# Create main branch
git branch -M main
```

**Now create a repository on GitHub:**
1. Go to https://github.com/new
2. Name it "unified-app" (or whatever you want)
3. Don't check any boxes (no README, no .gitignore)
4. Click "Create repository"

**Copy the commands GitHub shows you, they'll look like:**
```bash
git remote add origin https://github.com/YOUR_USERNAME/unified-app.git
git push -u origin main
```

### 6. Deploy to Vercel

**Sign up for Vercel:**
1. Go to https://vercel.com/signup
2. Click "Continue with GitHub"
3. Authorize Vercel to access your GitHub

**Import your project:**
1. Click "Add New..." → "Project"
2. Find your "unified-app" repository
3. Click "Import"
4. Vercel will auto-detect it's a Next.js app
5. Click "Deploy"

**Wait for deployment** (usually 1-2 minutes)

Your site will be live at something like: `https://unified-app-xyz123.vercel.app`

### 7. Update Your Domain in the Code

After deployment:
1. Copy your Vercel URL
2. In Vercel dashboard, go to Settings → Environment Variables
3. Add a new variable:
   - Name: `NEXT_PUBLIC_SITE_URL`
   - Value: Your full Vercel URL (e.g., `https://unified-app-xyz123.vercel.app`)
4. Redeploy (Vercel → Deployments → click three dots → Redeploy)

### 8. Check Your Email Collection

When someone submits their email:
- They'll be redirected back with a success message
- Emails go to your Formspree account
- Check https://formspree.io to see submissions

## Making Changes

1. Edit files in your code editor
2. Push changes to GitHub:
   ```bash
   git add .
   git commit -m "Updated something"
   git push
   ```
3. Vercel will automatically redeploy!

## Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Formspree**: https://formspree.io/help

## Common Issues

**"npm: command not found"**
- Install Node.js from nodejs.org

**"git: command not found"**
- Install Git from git-scm.com

**Forms not working**
- Check that Formspree endpoint is correct
- Verify redirect URL matches your Vercel URL

**Page looks broken**
- Run `npm run build` to check for errors
- Check Vercel deployment logs for errors
