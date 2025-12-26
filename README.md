# Unified - Financial Dashboard Landing Page

A Next.js landing page for collecting waitlist emails for your financial dashboard app.

## Features

- 🎨 Modern, responsive design with Tailwind CSS
- 📧 Email collection via Formspree
- 📊 Google Analytics integration
- ⚡ Optimized for Vercel deployment
- 🎭 Animated hero section
- 🔒 Security-focused messaging

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git installed

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Deployment to Vercel

### Step 1: Push to GitHub

1. **Initialize Git (if not already done):**
   ```bash
   git init
   ```

2. **Create a new repository on GitHub:**
   - Go to [github.com](https://github.com)
   - Click "New repository"
   - Name it (e.g., "unified-app")
   - Don't initialize with README (we already have files)

3. **Add your files and push:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/unified-app.git
   git push -u origin main
   ```

### Step 2: Deploy to Vercel

1. **Sign up/Login to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account

2. **Import your project:**
   - Click "Add New..." → "Project"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Configure environment variables (optional):**
   - Add `NEXT_PUBLIC_SITE_URL` with your Vercel deployment URL
   - This will be automatically set after first deployment

4. **Deploy:**
   - Click "Deploy"
   - Wait for the build to complete
   - Your site will be live at `https://your-app-name.vercel.app`

### Step 3: Update Form Redirect URLs

After deployment, update the redirect URLs in `app/page.tsx`:
- Replace the redirect URLs in both forms with your actual Vercel URL
- Or set the `NEXT_PUBLIC_SITE_URL` environment variable in Vercel settings

## Email Collection

Emails are collected via Formspree. The current form endpoint is:
- `https://formspree.io/f/xgvgjrro`

To use your own Formspree account:
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Replace the form `action` URLs in `app/page.tsx` with your new endpoint

## Project Structure

```
unified-app/
├── app/
│   ├── globals.css      # Global styles and Tailwind
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main landing page
├── public/              # Static assets (if needed)
├── tailwind.config.js   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies and scripts
```

## Customization

### Colors
Edit `tailwind.config.js` to change brand colors:
```javascript
colors: {
  navy: '#0A1A2F',
  teal: '#39D0C8',
  // ... add your colors
}
```

### Content
Edit `app/page.tsx` to change text, headings, and layout.

### Google Analytics
Replace the GA tracking ID in `app/layout.tsx` with your own:
```javascript
gtag('config', 'YOUR-GA-ID');
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Run production build locally
- `npm run lint` - Run ESLint

## Support

If you encounter issues:
1. Check the Vercel deployment logs
2. Ensure all environment variables are set
3. Verify your Formspree endpoint is active

## License

All rights reserved.
