# BuildMart — Ready-to-deploy Vite + React + Tailwind MVP

This project is configured to deploy cleanly on Vercel.

## Quick start locally
1. Install dependencies:
   ```
   npm install
   ```
2. Run dev server:
   ```
   npm run dev
   ```
3. Build production files:
   ```
   npm run build
   ```
   You should see a `dist` folder after build.

## Deploy to Vercel (recommended)
1. Create a GitHub repository and push this project, or upload the ZIP to Vercel.
2. In Vercel, when creating a new project:
   - Select the repo (or upload ZIP)
   - Vercel will detect the framework as **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist` (configured automatically via vercel.json)
3. Deploy — the site will be live. SPA routing is handled via `vercel.json`.

## Notes
- Replace the WhatsApp number in `src/pages/Checkout.jsx` with your own.
- Add real product images in `src/assets` and update `src/data/products.json`.
