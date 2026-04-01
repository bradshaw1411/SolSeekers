# ☀️ Sol Seekers Adventures LLC
### Mexico's Best Adventure Tours — Hand-Curated by a Couple Who Actually Goes There

---

## What This Is

Sol Seekers is a click-first adventure discovery website for Mexico. We travel between the US and Mexico multiple times a year, personally test adventures, and only list what we'd genuinely recommend to a close friend.

This repository contains the complete static website — no backend, no database, no frameworks. Just clean HTML, CSS, and a touch of vanilla JS.

---

## Pages

| File | Page | Description |
|---|---|---|
| `index.html` | Homepage | Hero, destination grid, experience categories, testimonials |
| `cozumel.html` | Cozumel | Diving & snorkeling — Palancar Reef, sea turtles, night dives |
| `cabo.html` | Cabo San Lucas | Sailing, sportfishing, whale watching, El Arco |
| `puerto-vallarta.html` | Puerto Vallarta | Humpback whales, jungle zip-lines, Marietas Islands |
| `cancun.html` | Cancún | Isla Mujeres, MUSA underwater museum, Caribbean reef dives |
| `playa-del-carmen.html` | Playa del Carmen | Cenote diving, cave diving, Jardines reef |
| `tulum.html` | Tulum | Mayan ruins at sunrise, Gran Cenote, Sian Ka'an safari |
| `about.html` | About Us | Our story, mission, values, personal adventure log |
| `style.css` | Global Styles | All shared CSS — variables, components, responsive breakpoints |
| `shared.js` | Shared JS | Nav + footer injected into every page via `SS.buildNav()` / `SS.buildFooter()` |

---

## Architecture

- **Pure static HTML** — no build step, no npm, no dependencies
- **Shared nav + footer** injected by `shared.js` so changes propagate everywhere
- **Google Fonts** loaded via CDN (Inter)
- **All images** have gradient fallbacks via `onerror` — site works even if images fail to load
- **Fully responsive** — breakpoints at 900px and 600px
- **Wave animations** use CSS `d:path()` keyframes across 4 SVG layers

---

## Running Locally

No build step required. Just open any HTML file in a browser:

```bash
# Option 1: Open directly
open index.html

# Option 2: Serve locally (recommended — avoids any CORS issues with shared.js)
npx serve .
# or
python3 -m http.server 8080
```

---

## Deploying

### Netlify (Recommended)
1. Go to [netlify.com](https://netlify.com) and create a free account
2. Click **Add new site → Deploy manually**
3. Drag and drop this entire folder into the upload zone
4. Live instantly — free HTTPS included

### Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click **Add New → Project** and drag-and-drop the folder
3. Live at `yourname.vercel.app`

### GitHub Pages
1. Push this folder to a GitHub repository
2. Go to **Settings → Pages → Deploy from branch (main)**
3. Live at `https://yourusername.github.io/repo-name`

---

## Revenue Model

Sol Seekers earns commission when visitors click through and book tours. The current setup uses placeholder buttons — replace them with real affiliate links once approved.

**Step 1 — Apply to affiliate programs:**
- [Viator Partner Program](https://www.viator.com/partner)
- [GetYourGuide Affiliate](https://partner.getyourguide.com)

**Step 2 — Replace Book Now placeholders:**

Find all instances of:
```html
onclick="alert('Booking coming soon!')"
```

Replace with:
```html
onclick="window.open('YOUR_AFFILIATE_LINK', '_blank')"
```

---

## Adding Analytics

Add this before `</head>` in every HTML file:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## Customization

### Colors
All colors are defined as CSS variables at the top of `style.css`:

```css
:root {
  --teal:      #0a4a52;   /* Primary brand color */
  --gold:      #f5c542;   /* CTAs and accents */
  --sky:       #b8dde4;   /* Supporting blue */
  --teal-dark: #051e22;   /* Backgrounds */
}
```

### Navigation Links
Edit `shared.js` to update nav links and footer columns — changes apply to every page automatically.

### Adding a New Destination Page
Each destination page follows the same template. Copy any existing destination HTML file and update:
- Page title and meta description
- Hero gradient colors (`hero_bg`)
- Facts bar data
- About section text
- Tour cards
- Wildlife grid
- Monthly calendar
- Insider tips

---

## SEO Roadmap

Per the business blueprint, the long-term traffic engine is programmatic SEO at scale:

- **Phase 1:** 8 core pages (current)
- **Phase 2:** 50 activity + location pages (e.g. `/atv-tours-cabo-san-lucas`)
- **Phase 3:** 500 pages with modifiers (best, beginner, luxury, extreme)
- **Phase 4:** 10,000+ pages via Next.js + Vercel + Supabase programmatic engine

---

## Tech Stack

| Function | Tool |
|---|---|
| Website | Plain HTML / CSS / JS |
| Hosting | Netlify (recommended) |
| Fonts | Google Fonts — Inter |
| Affiliate tracking | Viator + GetYourGuide (phase 1) |
| Analytics | Google Analytics |
| Future SEO engine | Next.js + Vercel + Supabase |

---

## Contact

**Sol Seekers Adventures LLC**  
hello@solseekersadventures.com  
[solseekersadventures.com](https://solseekersadventures.com)

*We travel. We test. We only share what blew us away.*
