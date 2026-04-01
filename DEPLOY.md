# Sol Seekers Adventures — Deployment Guide

## Files in this package
- index.html          — Homepage
- cozumel.html        — Cozumel destination page
- cabo.html           — Cabo San Lucas destination page
- puerto-vallarta.html — Puerto Vallarta destination page
- cancun.html         — Cancún destination page
- playa-del-carmen.html — Playa del Carmen destination page
- tulum.html          — Tulum destination page
- about.html          — About Us page
- style.css           — Global stylesheet (required by all pages)
- shared.js           — Nav + footer injector (required by all pages)

---

## Option 1: Netlify (Recommended — Free, 5 minutes)

1. Go to https://netlify.com and sign up free
2. From the dashboard, click "Add new site" → "Deploy manually"
3. Drag and drop the entire solseekers folder onto the upload zone
4. Your site is live instantly at a URL like: https://random-name-123.netlify.app
5. (Optional) Go to Site Settings → Domain Management → Add custom domain

---

## Option 2: Vercel (Also Free)

1. Go to https://vercel.com and sign up free
2. Click "Add New" → "Project" → drag-and-drop your folder
3. Live at yourname.vercel.app instantly

---

## Option 3: GitHub Pages (Free)

1. Create a free GitHub account at https://github.com
2. Create a new repository named: solseekers
3. Upload all files to the repository
4. Go to Settings → Pages → Source: Deploy from branch (main)
5. Live at: https://yourusername.github.io/solseekers

---

## Adding Your Domain (e.g. solseekersadventures.com)

1. Buy your domain at Namecheap, GoDaddy, or Google Domains (~$12/year)
2. In Netlify: Site Settings → Domain Management → Add custom domain
3. Update your domain's DNS nameservers to point to Netlify
4. Netlify provides free HTTPS automatically

---

## Next Steps After Going Live

### 1. Replace "Book Now" placeholders with real affiliate links
- Join Viator affiliate program: https://www.viator.com/partner
- Join GetYourGuide affiliate program: https://partner.getyourguide.com
- Find your tour links and replace onclick="alert(...)" with:
  onclick="window.open('YOUR_VIATOR_LINK', '_blank')"

### 2. Add Google Analytics
- Create account at https://analytics.google.com
- Add this before </head> in every page:
  <script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-ID"></script>

### 3. Submit to Google Search Console
- Go to https://search.google.com/search-console
- Add your domain and verify ownership
- Submit your sitemap for indexing

### 4. Add a sitemap.xml
Create sitemap.xml with your 8 pages and upload alongside your HTML files.

---

## Support
All pages use only style.css and shared.js — no external dependencies except
Google Fonts (loaded via CDN). The site works without an internet connection
except for fonts and destination images (which have fallback gradients).
