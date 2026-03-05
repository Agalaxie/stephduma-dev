# Design Specification — stephduma.dev

## ⚠️ CRITICAL: The site is MOSTLY LIGHT/WHITE — not dark!
Only the hero and CTA sections are dark (#141414). Everything else is white (#FFFFFF).

## Color Palette
- Main background: #FFFFFF
- Secondary background: #F7F7F7 (subtle sections)
- Dark sections (hero, CTA, footer): #141414
- Text primary: #1A1A1A
- Text secondary/muted: #6B6B6B
- Borders: #E5E5E5
- Borders dark: #333333
- Green accent (badge): #22C55E
- Card dark: #232323
- Tags: #F5F5F5 with border #E0E0E0

## Typography
- Body/UI font: Inter or DM Sans
- Display headings (large): Serif — "DM Serif Display" or "Playfair Display" (italic, for stats numbers and experience dates)
- Section labels: 11-12px, uppercase, letter-spacing: 3px, #6B6B6B
- Hero title: ~110px, weight 700-800, letter-spacing: -2px, #FFFFFF
- Section headings: ~60px, weight 400, letter-spacing: -1px, #1A1A1A
- Stats numbers: ~88px, weight 400, ITALIC, SERIF, #1A1A1A

## Section Structure
1. NAV — white bg, logo left, links center, CTA button right (pill border)
2. HERO — dark bg #141414, wireframe globe right, availability badge, big title, info bar bottom
3. LOGO TICKER — white bg, grayscale logos, infinite scroll
4. ABOUT — white bg, large quote text left, description right, stats with ITALIC SERIF numbers
5. SERVICES — white bg, 2x2 cards grid, light cards + one dark featured card, arrow icons in circles
6. EXPERIENCE — white bg, timeline numbered with large italic serif dates
7. PORTFOLIO — white bg, 3x2 image grid, B&W photos
8. TESTIMONIAL — #F7F7F7 bg, centered large quote
9. CTA — dark bg #141414, centered heading, email button
10. FOOTER — dark bg #141414

## Key Design Details

### Section Labels (pill tags)
```css
display: inline-flex;
border: 1px solid #E0E0E0;
border-radius: 100px;
padding: 6px 16px;
font-size: 11px;
font-weight: 500;
letter-spacing: 3px;
color: #6B6B6B;
text-transform: uppercase;
```

### Service Cards
- Padding: 32-40px
- Border: 1px solid #E5E5E5
- Border-radius: 16px
- Arrow icon: circle border, ~40px, top-right
- One card is DARK (#232323) — the featured one

### Info bar at bottom of hero
3 stats: Based in Perpignan, FR | 10+ Years | 57 Projects
Label above: 10-11px uppercase muted
Value below: 14px white
Right: "Scroll to explore ↓" muted

### Stats in About section
Big number like "+57" in ITALIC SERIF font (~88px)
Below: description text 14px #6B6B6B

## Content for Stéphane Duma

### Nav
- Logo: "SD" 
- Links: À propos, Services, Expérience, Portfolio
- CTA: "Me contacter"

### Hero  
- Badge: "● DISPONIBLE POUR PROJETS"
- Title: "Développeur\nFrontend" (huge)
- Subtitle: "Créateur d'expériences web qui font la différence"
- Info bar: Basé à Perpignan, FR | 10+ Ans | 57 Projets

### About
- Label: "À PROPOS"
- Quote: "Le développement web a toujours été plus qu'un métier — c'est ma passion."
- Description: "Je crée des interfaces qui fonctionnent, qui séduisent, et qui convertissent. Avec 10 ans d'expérience en React, Next.js et WordPress, je suis le partenaire technique dont votre projet a besoin."
- Stats: "+57 Projets livrés" and "+50 Clients satisfaits"

### Services (2x2 grid, 3rd card dark)
1. Sites React & Next.js — apps performantes, SSR, SEO optimisé
2. Thèmes WordPress — sur mesure, WooCommerce, sans page builder
3. (DARK FEATURED) Intégrations & APIs — Supabase, Stripe, outils IA
4. Performance & Accessibilité — Core Web Vitals, RGAA, audits

### Experience (numbered)
01 | 2014–2018 | Développeur WordPress
02 | 2018–2022 | Développeur React & Frontend  
03 | 2022–Présent | Développeur Next.js & IA

### Portfolio (6 projects, B&W or dark placeholder images)
1. DigitalQT — SaaS dashboard clients
2. Cinq Mars — Site immobilier prestige
3. Cactus Shop — E-commerce plantes
4. DQT Dashboard — Interface analytics
5. DICASTRI 2026 — Plateforme institutionnelle
6. i2t — App traduction IA

### Testimonial
"Stéphane a transformé notre site en quelques semaines. Résultat au-delà de nos attentes."
— Jean-Marc, Dirigeant PME

### CTA
"Travaillons ensemble" + "me@stephduma.dev"

## Technical
- Astro + Tailwind + GSAP ScrollTrigger
- Google Fonts: DM Sans + DM Serif Display
- Marquee: pure CSS
- Scroll animations: GSAP fade-in-up
- Mobile responsive
- After done: git add -A && git commit -m "feat: redesign — light/dark sections, proper typography" && git push
- Then: openclaw system event --text "Done: stephduma.dev redesign complete" --mode now
