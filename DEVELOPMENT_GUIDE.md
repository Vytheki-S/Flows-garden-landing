# The Living Manuscript - Step-by-Step Development Guide

## Project Context
Build a premium editorial landing page for Flows Garden called The Living Manuscript.
The page should embody The Cultivated Wild: a balance between structured editorial design and organic unpredictability.

## Step 1 - Project Setup
1. Run project bootstrap command:
   - `npx create-next-app@latest flows-garden --typescript --tailwind --app`
2. Install animation dependency:
   - `npm install framer-motion`
3. Add Google fonts in `app/layout.tsx` using `next/font/google`:
   - Newsreader (headlines)
   - Plus Jakarta Sans (body text)
4. Define color and font tokens in `app/globals.css`.

## Step 2 - CSS Variables and Base Styles (`globals.css`)
Use reusable design tokens:

```css
:root {
  --color-primary: #23422a;
  --color-secondary: #75584d;
  --color-tertiary: #711e0e;
  --color-surface: #f4ffc8;
  --font-display: 'Newsreader', serif;
  --font-body: 'Plus Jakarta Sans', sans-serif;
}
```

Also establish utility classes for:
- Leaf masks (asymmetric border radius)
- Ghost borders
- Tonal surface variants
- Glassmorphism overlays

## Step 3 - Hero Section
Requirements:
- Full viewport section with `position: relative`.
- Main H1 in Newsreader with fluid scale (`clamp(3rem, 8vw, 7rem)`).
- Tight letter spacing (`-0.02em` to `-0.05em`).
- Botanical image absolutely positioned to overlap typography.
- Leaf-mask image treatment (organic asymmetric radius).
- Framer Motion entrance animation (fade + slight upward drift).
- Section background uses surface color `#f4ffc8`.

## Step 4 - Philosophy Block
Requirements:
- Asymmetric grid layout, for example: `grid-template-columns: 3fr 5fr`.
- Primary brand statement in the wider column.
- Secondary quote/value block offset with negative top margin.
- Tonal color layering (left column slightly darker/lighter than base surface).
- Decorative botanical image or SVG absolutely positioned.
- Avoid rigid centering; keep composition intentionally off-axis.

## Step 5 - Featured Flora Cards
Requirements:
- Build a grid of 3-4 plant cards.
- Each card contains:
  - Leaf-masked image
  - Plant title in Newsreader
  - Plant description in Plus Jakarta Sans
  - Ghost border container
- Use ghost border style:
  - `border: 1px solid rgba(35, 66, 42, 0.2);`
- Stagger card reveal animations (`0.1s` incremental delays).
- End section with a Soil Bar:
  - Full-width footer strip
  - Warm brown gradient
  - Short botanical tagline

## Step 6 - Masterclass CTA Section
Requirements:
- Background color: `#711e0e`.
- High-contrast headline in Newsreader.
- Headline/body color in pale cream (`#f4ffc8`) or white.
- CTA button inverted from section:
  - Button background: `#f4ffc8`
  - Button text: `#711e0e`
- Add a large, low-opacity, blurred decorative botanical form.
- Overall tone should feel bold, urgent, and promotional.

## Step 7 - Responsive Design
Requirements:
- Collapse asymmetric grids to single-column on mobile.
- Hero image shifts behind text on mobile with reduced opacity.
- Maintain overlap while preserving readability and tap targets.
- Apply fluid typography with `clamp()` across breakpoints.
- For mobile menus/overlays, apply glassmorphism:
  - `background: rgba(255, 255, 255, 0.8);`
  - `backdrop-filter: blur(24px);`

## Step 8 - README Content Requirements
Ensure `README.md` includes:
- Project overview (1-2 concise sentences)
- Design decisions (layout, color, typography, motion rationale)
- Tech stack and why each tool was selected
- Local run instructions:
  - `npm install`
  - `npm run dev`
- GitHub repository link
- Live demo link

## Step 9 - Deploy to Vercel
1. Push code to a public GitHub repository.
2. Open Vercel and import the repository.
3. Vercel auto-detects Next.js; click Deploy.
4. Copy and submit the live production URL.

## Non-Negotiable Design Laws

### 1) No-Line Rule
Do not rely on hard separators for layout structure.
Prefer tonal blocks, whitespace, and ghost borders.

### 2) Organic Masks
Avoid rectangular images.
Use varied asymmetric radius combinations per image.

### 3) Asymmetry
Do not use rigid equal-column composition.
Use uneven ratios, overlap, offset positioning, and bleed.

### 4) Glassmorphism
Floating overlays and mobile menus should use frosted layers:
- `rgba(255,255,255,0.8)`
- `backdrop-filter: blur(24px)`

## Suggested Deliverables
- Source code in Next.js App Router structure
- Styled and responsive page with all 4 sections
- README with setup, rationale, and links
- Public GitHub repository URL
- Live Vercel URL

## Figma Asset Note
If your Figma file provides photography or decorative assets, export and place them under `public/images`, then apply unique organic masks to each major visual to preserve the editorial botanical aesthetic.
