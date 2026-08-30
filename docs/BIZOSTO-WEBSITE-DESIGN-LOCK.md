# Bizosto Website Design Lock

**Status:** Approved and locked  
**Effective date:** 2026-08-29

This document protects the approved Bizosto website art direction from gradual visual drift. Future work should extend this system, not replace it, unless a new direction is explicitly approved.

## Locked art direction

- **Positioning:** premium, calm, intelligent business operating system.
- **Light theme:** pearl-white foundations, cool blue-tinted surfaces, crisp navy typography, electric-blue emphasis, and restrained cyan highlights.
- **Dark theme:** midnight-navy foundations, layered blue-black surfaces, pearl typography, electric-blue depth, and cyan highlights.
- **Typography:** Sora for display and headings; DM Sans for body copy and interface text.
- **Shape language:** confident rounded geometry, generous whitespace, fine borders, controlled shadows, and pill-shaped actions where appropriate.
- **Gradient language:** electric blue through deep navy with selective cyan illumination. Gradients must remain directional and purposeful, never decorative noise.
- **Logo:** the approved custom white B-mark on its midnight-to-electric-blue gradient tile. `public/brand/bizosto-mark.png` is the canonical website master.
- **Surfaces:** clear hierarchy between page background, section background, and elevated cards. Every component must have intentionally art-directed light and dark states.
- **Motion:** subtle reveal, sheen, and hover movement only. Motion supports hierarchy and comprehension.
- **Imagery:** real Bizosto product UI is preferred. Any supporting generated imagery must feel architectural, precise, and consistent with the operating-system narrative.

## Locked interface rules

1. Light and dark modes receive equal visual attention and must be reviewed together.
2. Heading hierarchy, spacing rhythm, buttons, cards, navigation, footer, CTA bands, and responsive behavior remain consistent across all pages.
3. CTA bands retain the approved blue-to-navy gradient, fine grid texture, white primary action, and outlined secondary action. Decorative logo watermarks are not part of the locked CTA pattern.
4. Page-specific alignment is intentional. The pricing hero is centered; other editorial layouts may remain left aligned where the content hierarchy calls for it.
5. Mobile is a composed layout, not a compressed desktop layout. Tap targets, readable line lengths, and stacking order must be preserved.
6. New UI must use the existing tokens and shared components before introducing one-off styling.
7. Accessibility, contrast, keyboard behavior, reduced motion, performance, and responsive correctness may never be traded for visual effect.
8. Never recreate the B-mark with a font. Header, footer, favicon, app icon, Apple icon, structured data, and social cards must use assets derived from the canonical master.

## Changes allowed without an art-direction review

- Copy, pricing, feature, marketplace, and legal-content updates.
- Real dashboard screenshot replacements within approved product frames.
- Bug fixes, accessibility improvements, and performance improvements.
- New sections and pages that faithfully reuse the locked system.
- New size or format exports derived without redesigning the canonical logo.

## Changes requiring explicit approval

- New primary colors, typefaces, gradient language, or shape language.
- Redesigning shared cards, buttons, navigation, footer, hero system, or CTA system.
- Adding decorative marks, patterns, or imagery that alter the established visual character.
- Changing the balance or quality of either light or dark mode.

## Implementation source of truth

- Theme tokens and shared visual treatments: `app/globals.css`
- Typography: `app/layout.tsx`
- Reusable surfaces and sections: `components/`
- Responsive page composition: `app/`

The supplied B-mark and the current website art direction are the approved baseline. A future logo redesign requires explicit approval; routine exports must remain visually identical to the canonical master.
