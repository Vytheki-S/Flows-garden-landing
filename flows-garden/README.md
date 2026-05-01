# Flows Garden

Flows Garden is a premium editorial landing page for a botanical brand. The design is intended to feel like a cultivated nature periodical: calm, educational, organic, and visually refined rather than like a generic marketing template.

## Design Decisions

- Typography: Headlines use Newsreader, a serif display face, with tight spacing and italic styling to create a premium botanical journal feeling. Body text uses Plus Jakarta Sans for clear, modern readability.
- Color palette: The page uses deep forest green `#23422a` as the primary text color, warm earth brown `#75584d` for secondary copy, dark red `#711e0e` for high-impact accents, and pale lime surface `#f4ffc8` for the main background.
- No-line rule: Section boundaries are created with tonal shifts, whitespace, shadows, and soft inset ghost borders instead of hard 1px divider lines.
- Organic image treatment: Botanical imagery uses asymmetric rounded corners and leaf-like masks so images feel natural rather than rigid or rectangular.
- Asymmetry: The layout intentionally avoids perfectly even grids. The hero uses overlapping imagery, the philosophy block uses offset image columns, and Featured Flora offsets the middle card for a more editorial rhythm.
- Glassmorphism: Floating overlay styles use translucent surfaces with `24px` backdrop blur where appropriate.
- Motion: Framer Motion adds subtle fade-and-rise transitions to make the page feel alive without distracting from the content.

## Built Features

- Hero section with oversized editorial typography and overlapping leaf-masked imagery.
- Philosophy block with tonal layering, asymmetrical margins, and supporting visual tiles.
- Featured Flora section with three species cards, image labels, and editorial text hierarchy.
- Workshop Masterclass CTA using the dark red tertiary accent to create a stronger conversion moment.
- Footer with restrained botanical branding and soft tonal separation.

## Tech Stack

- Next.js App Router
- Tailwind CSS
- Framer Motion
- next/font/google
- next/image

## Local Run

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deployment

The live site is deployed on Vercel:

https://flows-garden-landing.vercel.app
