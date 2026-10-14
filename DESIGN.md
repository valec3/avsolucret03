---
name: Luminar Architectural Polish
colors:
  surface: '#f9f9ff'
  surface-dim: '#d7dae3'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f3fd'
  surface-container: '#ebeef7'
  surface-container-high: '#e5e8f2'
  surface-container-highest: '#dfe2ec'
  on-surface: '#181c23'
  on-surface-variant: '#3f4850'
  inverse-surface: '#2d3138'
  inverse-on-surface: '#eef0fa'
  outline: '#707881'
  outline-variant: '#bfc7d2'
  surface-tint: '#006398'
  primary: '#006194'
  on-primary: '#ffffff'
  primary-container: '#007bb9'
  on-primary-container: '#fdfcff'
  inverse-primary: '#93ccff'
  secondary: '#775a19'
  on-secondary: '#ffffff'
  secondary-container: '#fed488'
  on-secondary-container: '#785a1a'
  tertiary: '#00628d'
  on-tertiary: '#ffffff'
  tertiary-container: '#007cb1'
  on-tertiary-container: '#fcfcff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cce5ff'
  primary-fixed-dim: '#93ccff'
  on-primary-fixed: '#001d31'
  on-primary-fixed-variant: '#004b73'
  secondary-fixed: '#ffdea5'
  secondary-fixed-dim: '#e9c176'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4201'
  tertiary-fixed: '#c9e6ff'
  tertiary-fixed-dim: '#89ceff'
  on-tertiary-fixed: '#001e2f'
  on-tertiary-fixed-variant: '#004c6e'
  background: '#f9f9ff'
  on-background: '#181c23'
  surface-variant: '#dfe2ec'
typography:
  display-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 38px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 44px
    fontWeight: '700'
    lineHeight: 52px
    letterSpacing: -0.025em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0em
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.04em
  label-editorial:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.12em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-lg: 2rem
  margin: 1.25rem
  margin-md: 2.5rem
  margin-lg: 4rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
  space-3xl: 6rem
---

## Brand & Style

This design system establishes an architectural, ultra-clean aesthetic tailored for premium diamond floor polishing, terrazzo restoration, and mineral surface engineering. The emotional tenor is uncompromising precision, pristine cleanliness, and institutional authority. It combines an immaculate white gallery backdrop with metallic bronze micro-accents and high-visibility diamond cyan/blue conversion points.

Drawing inspiration from architectural minimalism and contemporary Swiss editorial design, the interface feels light, disciplined, and clinical yet luxurious. It avoids visual clutter or heavy industrial tropes, presenting construction and surface restoration through the lens of architectural couture.

## Colors

The palette relies on absolute chromatic discipline to enforce trust and direct focus:

- **Surface & Canvas:** Pure White (`#FFFFFF`) forms the foundational canvas, contrasted subtly by Pearl Mist (`#F8F9FA`) and Architectural Alabaster (`#F2F4F7`) for layered containment.
- **Diamond Blue Accent (Primary / Action):** `#0284C7` (paired with `#0EA5E9` and `#38BDF8` for active/hover states) is reserved strictly for high-conversion directives: inquiry triggers, quotation requests, and direct communication channels.
- **Noble Gold / Bronze (Secondary / Prestige Accent):** `#C5A059` (with `#B38F48` for deep contrast and `#E5C88B` for subtle backgrounds) serves as an editorial stamp. It is used on technical indexing numbers, micro-borders, certification pills, and structural dividers.
- **High-Density Anthracite (Neutral):** Deep Mineral Anthracite (`#1E2229` and `#111827`) provides decisive legibility for primary headlines and technical data without the harshness of pure black. Muted slate (`#64748B`) handles supporting technical specifications.

## Typography

The typographic hierarchy juxtaposes the structured geometric geometry of `Plus Jakarta Sans` for display headlines with the neutral, utilitarian clarity of `Inter` for technical specifications and body text.

- **Display & Headline Hierarchy:** Headlines use bold geometric weights with tightened letter spacing to evoke architectural precision and premium scale.
- **Editorial Eyebrows & Numbers:** Eyebrows, category markers, and procedural step counters utilize `label-editorial` rendered in uppercase with wide letter tracking (`0.12em`) set in bronze hues.
- **Body & Specification:** Standard reading text adheres to generous vertical leading (`lineHeight: 26px` on `16px` font) to guarantee effortless optical scanning across service sheets and material breakdown tables.

## Layout & Spacing

The layout model implements an asymmetric 12-column modular grid structured like modern architectural portfolio layouts.

- **Grid Architecture:** 
  - Desktop (1200px+): 12 columns, `gutter-lg` (2rem / 32px), with `margin-lg` (4rem / 64px) providing wide negative space flanks.
  - Tablet (768px - 1199px): 8 columns, `gutter` (1.5rem / 24px), `margin-md` (2.5rem / 40px).
  - Mobile (under 768px): 4 columns, `gutter` (1rem / 16px), `margin` (1.25rem / 20px).
- **Rhythm & Bento-Box Rules:** Bento layouts align strictly to fractional grid increments (e.g., 8 cols + 4 cols or three 4-col units). Vertical flow relies on large negative spaces (`space-2xl` and `space-3xl`) between macro-sections to preserve the gallery aesthetic.

## Elevation & Depth

Visual hierarchy uses delicate physical surfacing rather than deep, murky dropshadows. Surfaces replicate polished marble, diamond-honed concrete, and light-reflective planes:

- **Micro-Boundaries:** Depth is primarily established through 1px crisp borders (`#E5E7EB` or semi-transparent `#C5A059` at 20% opacity) instead of heavy shadows.
- **Diamond Ambient Elevation (Level 1 - Bento Tiles):** 
  `box-shadow: 0 1px 3px 0 rgba(30, 34, 41, 0.03), 0 8px 24px -4px rgba(30, 34, 41, 0.04);`
- **Elevated Interactive Layer (Level 2 - Hover / Overlays):** 
  `box-shadow: 0 4px 6px -1px rgba(30, 34, 41, 0.04), 0 20px 32px -8px rgba(30, 34, 41, 0.07);`
- **Conversion Accent Elevation:** Primary Diamond Blue CTA elements utilize an ultra-clean optical glow on interaction:
  `box-shadow: 0 8px 20px -4px rgba(2, 132, 199, 0.35);`

## Shapes

The design system maintains a refined, architectural curvature with roundedness level `2`. Corners are disciplined and engineered:

- **Base Radius (`rounded-md`, 0.5rem / 8px):** Applied to form fields, nested micro-cards, and standard interactive triggers.
- **Card Radius (`rounded-lg`, 1rem / 16px):** Used across primary bento-boxes, service panels, and image showcase frames.
- **Modal & Floating Radius (`rounded-xl`, 1.5rem / 24px):** Utilized for hero showcase containers and architectural before/after display units.
- **Capsule / Pill Exception:** Badge counters, status indicators, and conversion CTA pills use fully rounded boundaries (`rounded-full`) to contrast sharply against structural rectangular bento grids.

## Components

### Buttons
- **Primary Action (Conversion):** Background `#0284C7`, text `#FFFFFF`, font `Plus Jakarta Sans` 600 weight. Subtle internal glow with 8px radius or full pill configuration. Hover state lifts to `#0EA5E9` with dynamic cyan ambient elevation.
- **Secondary Prestige (Consultation / Specs):** Pure white background, 1px border in `#C5A059`, text `#1E2229`. Hover transitions background to a soft `#FDFBF7` champagne wash with text shifting to `#B38F48`.
- **Text Links:** Anthracite `#1E2229` with a gold `#C5A059` 1px underline positioned at a 4px offset.

### Bento Cards & Surfaces
- Structural tiles built upon pure `#FFFFFF` or `#F8F9FA`. Bordered by hairline 1px `#E2E8F0` or `#C5A059` at 15% opacity. Padding is calibrated to `space-xl` (2.5rem) on desktop to guarantee an uncluttered presentation of surface restoration metrics.

### Chips & Badges
- **Gold Technical Badges:** Background `#FCF9F2`, border 1px solid `#E5C88B`, text `#946E29`. Applied to technical certifications, micron diamond ratings, and warranty badges.
- **Live Status Badges:** Neutral gray background with an animated pulsing Diamond Blue dot for live project statuses.

### Inputs & Form Fields
- Minimalist architectural style. Background `#FFFFFF`, border 1px solid `#D1D5DB`, border-radius 8px. Height 48px with generous internal padding. Focus state switches border to `#0284C7` with a matching 3px diffused outer halo at 15% opacity.

### Before / After Surface Comparison Slider
- Distinctive component featuring edge-to-edge high-definition surface captures. Centered divider line in pure white (`#FFFFFF`) with a circular grab-handle bound in `#C5A059` gold finish and dual directional arrows in Diamond Blue.

### Step Index Indicators
- Numeric step indicators (e.g., "01", "02", "03") rendered in `Plus Jakarta Sans` Bold, styled in `#C5A059` with tracking `0.08em`, accompanied by ultra-thin hairline separation rules.