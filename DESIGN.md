---
name: Ligia Urroz
colors:
  # Dark surfaces — dominate most pages (header, hero, novel, chronicle, essays)
  surface: "#131415"
  surface-dim: "#0e0f10"
  surface-bright: "#1e2022"
  surface-container-lowest: "#000000"
  surface-container-low: "#131415"
  surface-container: "#1a1c1e"
  surface-container-high: "#222426"
  surface-container-highest: "#2a2c2e"
  # Light surfaces — used for the About Author section and content cards
  surface-light: "#ffffff"
  surface-light-container: "#f5f5f5"
  # Text on dark backgrounds
  on-surface: "#ffffff"
  on-surface-variant: "#a1a1a1"
  # Text on light backgrounds
  on-surface-light: "#000000"
  on-surface-light-variant: "#4b5563"
  on-surface-light-muted: "#9ca3af"
  # Accent gradient — periwinkle to soft orchid; the brand's single expressive hue
  primary: "#7b7dcd"
  primary-end: "#b987c4"
  on-primary: "#ffffff"
  # Footer
  footer-surface: "#000000"
  on-footer: "#ffffff"
  on-footer-variant: "#9ca3af"
  # Utility
  outline: "#374151"
  outline-variant: "#e5e7eb"
  background: "#131415"
  on-background: "#ffffff"
typography:
  # All type is set in Playfair Display — a high-contrast transitional serif that
  # anchors the site's literary, author-focused identity.
  display:
    fontFamily: Playfair Display
    fontSize: 72px
    fontWeight: "400"
    lineHeight: 80px
    letterSpacing: 0em
  display-md:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: "400"
    lineHeight: 56px
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: "700"
    lineHeight: 44px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 30px
    fontWeight: "700"
    lineHeight: 38px
  title-lg:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: "600"
    lineHeight: 32px
  title-md:
    fontFamily: Playfair Display
    fontSize: 20px
    fontWeight: "600"
    lineHeight: 28px
  body-lg:
    fontFamily: Playfair Display
    fontSize: 18px
    fontWeight: "400"
    lineHeight: 28px
  body-md:
    fontFamily: Playfair Display
    fontSize: 16px
    fontWeight: "400"
    lineHeight: 24px
  body-sm:
    fontFamily: Playfair Display
    fontSize: 14px
    fontWeight: "400"
    lineHeight: 20px
  label:
    fontFamily: Playfair Display
    fontSize: 12px
    fontWeight: "400"
    lineHeight: 16px
    letterSpacing: 0.05em
    textTransform: uppercase
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  section-y: 80px
  hero-y: 160px
  container-x: 16px
  container-x-wide: 24px
  card-gap: 40px
  stack-gap: 40px
  nav-x: 16px
elevation:
  card: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)"
  card-sm: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)"
  float: "0 20px 25px -5px rgba(0,0,0,0.2), 0 8px 10px -6px rgba(0,0,0,0.2)"
motion:
  duration-fast: 150ms
  duration-default: 200ms
  easing: ease-in-out
components:
  header:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    position: fixed
    zIndex: 50
    padding: 16px
  hero-section:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    paddingY: "{spacing.hero-y}"
  hero-name:
    textColor: "{colors.on-surface}"
    typography: "{typography.display}"
  hero-subtitle:
    textColor: "{colors.on-surface-variant}"
    typography: "{typography.body-lg}"
  hero-portrait:
    shape: circle
    rounded: "{rounded.full}"
    size: 320px
  section-heading-gradient:
    background: "linear-gradient(to right, #7b7dcd, #b987c4)"
    backgroundClip: text
    textColor: transparent
    typography: "{typography.headline-lg}"
  about-section:
    backgroundColor: "{colors.surface-light}"
    paddingY: "{spacing.section-y}"
  about-bullet-icon:
    color: "#000000"
    size: 16px
    fill: "#000000"
  novel-card:
    background: "linear-gradient(to bottom, #7b7dcd, #b987c4)"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.xl}"
    padding: 24px
    shadow: "{elevation.card}"
    maxWidth: 474px
  tale-card:
    backgroundColor: "{colors.surface-light}"
    textColor: "{colors.on-surface-light}"
    rounded: "{rounded.xl}"
    border: "2px solid"
    borderColor: "linear-gradient(to right, #7b7dcd, #b987c4)"
    shadow: "{elevation.card-sm}"
  about-box:
    backgroundColor: "{colors.surface-light}"
    rounded: "{rounded.lg}"
    shadow: "{elevation.float}"
    maxWidth: 903px
    height: 535px
  publication-card:
    backgroundColor: "{colors.surface-light}"
    textColor: "{colors.on-surface-light}"
    rounded: "{rounded.lg}"
    width: 340px
    height: 555px
  review-box:
    background: "linear-gradient(to bottom-right, #7b7dcd, #b987c4)"
    rounded: "{rounded.lg}"
    padding: 8px
    innerBackgroundColor: "{colors.surface-light}"
    innerRounded: "{rounded.md}"
  social-icon:
    backgroundColor: "{colors.surface-light}"
    textColor: "{colors.surface-container-lowest}"
    rounded: "{rounded.full}"
    size: 40px
    padding: 8px
  footer:
    backgroundColor: "{colors.footer-surface}"
    textColor: "{colors.on-footer}"
    paddingY: 64px
  nav-link:
    textColor: "{colors.on-surface}"
    hoverColor: "#d1d5db"
    typography: "{typography.body-md}"
---

## Brand & Style

The Ligia Urroz website is built around the visual identity of a literary author: contemplative, cultured, and quietly confident. The aesthetic is **Literary Minimalism** — a predominantly near-black canvas that recedes and lets typographic expression take centre stage, punctuated by a single warm gradient accent in periwinkle-to-orchid.

The site carries the weight of serious literature without feeling austere. The use of Playfair Display throughout (from hero display to body copy) creates a unified typographic voice that feels at home on a printed page as much as on screen. The accent gradient — a journey from cool violet to warm orchid — is the only expressive colour in the palette, used selectively for section headings and card backgrounds to create moments of warmth within the otherwise monochrome dark environment.

The overall emotional register is **intimate and prestigious**: a personal author site that feels like stepping into a beautifully lit literary salon.

## Colors

The palette is intentionally restrained — almost entirely monochromatic dark tones and pure white, with a single gradient accent carrying the visual brand.

- **Surface (Dark):** `#131415` — a near-black warm charcoal that is not pure black; it has just enough warmth to avoid feeling cold or digital. Used for the header, hero, all content pages, and the main body background.
- **Footer:** `#000000` — pure black, slightly heavier than the surface, creating a sense of anchoring the page at the bottom without a visible seam.
- **Light Surface:** `#FFFFFF` — used exclusively for the About Author section and content cards (TaleCard, AboutBox). The contrast between dark and light sections creates clear visual rhythm as you scroll.
- **On-Surface Primary:** `#FFFFFF` — white text on all dark backgrounds, relying on Playfair Display's high stroke contrast rather than colour for legibility hierarchy.
- **On-Surface Muted:** `#A1A1A1` — a neutral mid-gray used for the hero subtitle and secondary metadata. Provides clear secondary hierarchy without disrupting the dark atmosphere.
- **Accent Gradient:** `#7B7DCD` → `#B987C4` — a linear gradient from soft periwinkle indigo to a muted orchid mauve. This is the only expressive colour in the entire system. It is used for: gradient text on section headings, the full background of NovelCards and ChroniqueCards, and as a border treatment on the essay review box. The gradient reads as warm-cool simultaneously — intellectual yet personal.

## Typography

A single typeface — **Playfair Display** — is used for all text across the entire site. This is an uncommon but deliberate choice. Rather than separating display from body with different font families, the design trusts Playfair Display's broad weight range and high contrast letterforms to create hierarchy through size and weight alone.

- **Display (Hero):** Set at `font-normal` (weight 400) for the author's name. The choice of regular weight — not bold — at large display sizes is the key typographic statement of the site. It conveys effortless authority. At `text-4xl` (mobile) to `text-7xl` (desktop), the name fills the viewport without shouting.
- **Section Headings:** `text-3xl` to `text-4xl`, `font-bold` (700). When rendered as gradient text (periwinkle-to-orchid), these headings serve as the sole colour moment in light sections.
- **Subheadings:** `text-xl` to `24px`, `font-semibold` (600). Used for named sections within the bio and card titles.
- **Body:** `text-sm` to `18px`, `font-normal`, `leading-relaxed`. Long biographical paragraphs and book descriptions are set for comfortable reading at generous line heights.
- **Navigation:** Regular weight at base size — deliberately understated, keeping the focus on content over chrome.

## Layout & Spacing

The layout follows a **centered, single-column-at-heart** philosophy even when using flex or grid constructs. All content is constrained within a `container mx-auto` wrapper, ensuring generous side margins.

- **Rhythm:** A 4px base unit (Tailwind default) governs all spacing. Section vertical padding is `py-20` (80px) on content pages and `py-40 md:py-60` (160px–240px) on the hero — breathing room that reinforces the literary sense of deliberate pacing.
- **Dark/Light Section Alternation:** The homepage transitions from the dark hero directly into the white About Author section. This high-contrast hard break (no fade or transition) is an intentional structural punctuation mark, mirroring a chapter break in print.
- **Cards:** Novel and Chronicle content cards use a side-by-side `flex-col md:flex-row` layout on larger screens. Each card has a maximum width of 474px, constrained so the pair never feels crowded. The `gap-10` (40px) between them provides generous breathing room.
- **Tale Cards:** Stack vertically with full container width and a `space-y-6` (24px) gap, alternating the image between left and right — a classic two-column editorial layout rendered in a single-column flex container.
- **Container Max Widths:** `max-w-4xl` (896px) for about section, `max-w-3xl` (768px) for page intro text, `max-w-xl` (576px) for hero subtitle — a deliberate narrowing as content becomes more intimate.

## Elevation & Depth

Depth is created through surface contrast rather than shadows. The transition from dark page background to card surfaces is the primary depth signal.

- **Dark Sections:** The page background `#131415` is the lowest layer. No cards float above it in dark sections — content exists flat on the surface, reinforcing a minimal, editorial reading experience.
- **Light Sections & Cards:** White surfaces (`#FFFFFF`) on the About section appear to "lift" off the dark page context by nature of the background switch. The `AboutBox` component uses a large diffused `shadow-lg` to physically float the white panel above the content beneath it.
- **Content Cards:** `NovelCard` and `ChroniqueCard` use `shadow-lg` for prominence on the dark background. `TaleCard` uses `shadow-md` for slightly lower visual weight on its white host section.
- **Review Box (Essays):** A gradient border wrapper with a white inner panel — the gradient acts as an elevated accent border, giving the testimonial block a premium, framed appearance.

## Shapes

The shape language uses **soft rounding** consistently, maintaining an approachable, modern quality that complements the literary serif typography.

- **Circular Portrait:** The hero portrait photo uses `rounded-full` — an important exception that creates a locket-like, intimate framing for the author's image.
- **Content Cards (NovelCard, TaleCard, ReviewBox):** `rounded-xl` (0.75rem / 12px) is the standard card radius. It is large enough to feel contemporary without becoming bubbly.
- **Smaller Elements (thumbnails, inner panels):** `rounded-lg` (0.5rem / 8px) for image thumbnails within cards and inner white panels.
- **Social Icons:** `rounded-full` for the circular white icon backgrounds in the footer — visually consistent with the circular author portrait motif.
- **No sharp edges:** There are no `rounded-none` or border-radius-zero elements in the design. Every surface has some degree of rounding.

## Components

### Header

The header is fixed at `z-50`, using the same `#131415` surface as the hero so the two sections merge seamlessly on page load. The brand name is set in `font-bold` Playfair Display — heavier than the hero display name below it — creating a visual anchor point. Navigation links are regular weight, creating a clear parent-child hierarchy with the brand name. A hamburger menu (`Menu`/`X` icons from Lucide) handles the mobile viewport.

### Hero Section

The hero is the defining statement of the site. It juxtaposes a circular black-and-white portrait on the left with the author's name on the right in oversized `font-normal` Playfair Display. The deliberate choice of weight 400 at display scale makes the name feel inscribed rather than announced. The muted `#A1A1A1` subtitle below provides biographical grounding without competing.

### About Author Section

The white section that follows the hero acts as a content layer switch. The section heading is rendered as gradient text (`#7B7DCD` → `#B987C4`) on white — the only time the accent colours appear on a light background. Each biographical entry is prefixed by a filled black `Sparkle` icon from Lucide, used as a decorative bullet that adds a touch of whimsy and references the author's artistic personality. Subheading text at `font-semibold` and body text at `font-normal` maintain clear hierarchy within each entry.

### Novel Card & Chronicle Card

These tall portrait cards (max 474px wide) have the accent gradient (`#7B7DCD` → `#B987C4`) as their full background, making them the most visually saturated elements on the site. Book cover imagery sits at the top, with the title in `text-2xl font-semibold` and description text in `text-sm` below. The white text on gradient background maintains sufficient contrast. `rounded-xl` corners and `shadow-lg` lift them from the dark page background.

### Tale Card

A horizontal card pattern with `rounded-xl border-2` on a white background. Images alternate left and right across the list (controlled via the `imageRight` prop), creating an editorial zigzag rhythm that keeps the stacked list visually engaging. The gradient border treatment (`border-gradient`) ties the cards back to the accent palette.

### Footer

Pure black (`#000000`) with a clean two-column grid at desktop. Social platform icons (Facebook, Twitter/X, Instagram) are displayed as Lucide icons inside white `rounded-full` circular containers — an inverted motif that echoes the hero portrait circle at the top of the page. The copyright line is set in `text-gray-400`, fading to near-invisible on the black background.
