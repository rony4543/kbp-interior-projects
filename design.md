# Design Direction

Build a premium architectural and interior-design website inspired by the supplied reference image.

The visual language should feel:

- Minimal, editorial, architectural, precise.
- Monochrome with warm neutral accents.
- High-end, calm, spacious, and slightly experimental.
- Structured through thin rules, modular grids, oversized imagery, and small typography.
- More like an architecture magazine or design portfolio than a conventional business website.
- Focused on visual storytelling, project depth, materials, process, and spatial experience.

Do **not** create a generic SaaS-style layout. Avoid rounded cards, heavy shadows, bright gradients, oversized buttons, pill-shaped UI, or decorative icon packs.

---

## 2. Core Visual Principles

### 2.1 Composition

Use a controlled asymmetrical composition:

- Large image blocks dominate the page.
- Smaller project cards overlap or sit inside larger visual frames.
- Text remains compact and aligned to clear grid lines.
- Sections should alternate between dense visual areas and open white space.
- Use slight offsets to create movement without making the page feel chaotic.
- Important content should often sit near edges rather than always centered.
- Allow project images to crop boldly.

### 2.2 Mood

The final page should feel like:

- Contemporary architecture.
- Luxury residential and hospitality design.
- Curated editorial publication.
- Art direction with precision.
- Quiet confidence rather than aggressive marketing.

### 2.3 Color Use

Primary palette:

```css
--color-bg: #F5F5F2;
--color-surface: #FFFFFF;
--color-text: #151515;
--color-muted: #686868;
--color-line: rgba(21, 21, 21, 0.18);
--color-line-strong: rgba(21, 21, 21, 0.42);
--color-dark: #1C1C1C;
--color-dark-soft: #2A2A2A;
--color-stone: #D8D4CE;
--color-warm-gray: #B8B1A7;
--color-image-overlay: rgba(0, 0, 0, 0.16);
```

Rules:

- Keep approximately 80–90% of the interface in white, off-white, charcoal, gray, and stone.
- Project photography may introduce muted natural colors.
- Do not use vivid accent colors.
- Keep text contrast high and lines subtle.

---

## 3. Typography

Use `UI2` as the primary font if it is already installed in the project.

```css
font-family: "UI2", "Inter Tight", "Helvetica Neue", Arial, sans-serif;
```

Typography must be clean, narrow, and restrained.

### Type Scale

```css
--text-xs: clamp(0.62rem, 0.55rem + 0.15vw, 0.75rem);
--text-sm: clamp(0.74rem, 0.68rem + 0.15vw, 0.88rem);
--text-base: clamp(0.92rem, 0.84rem + 0.18vw, 1.05rem);
--text-md: clamp(1.15rem, 0.95rem + 0.7vw, 1.65rem);
--text-lg: clamp(1.8rem, 1.2rem + 2vw, 3.4rem);
--text-xl: clamp(2.8rem, 1.6rem + 4.2vw, 6.8rem);
--text-hero: clamp(3.2rem, 1.4rem + 7vw, 9.5rem);
```

### Typography Rules

- Navigation: uppercase, 10–12px, medium weight, increased letter spacing.
- Labels: uppercase, 9–11px, letter spacing between `0.06em` and `0.12em`.
- Body copy: 13–16px, line-height between `1.45` and `1.65`.
- Major headings: large but not excessively bold.
- Use weights between 400 and 600 only.
- Avoid heavy 700–900 weights.
- Keep paragraph width between 42 and 62 characters.
- Use uppercase for metadata, categories, years, section labels, and project locations.

---

## 4. Grid System

### Desktop Grid

Use a 12-column grid.

```css
--page-padding: clamp(20px, 3vw, 52px);
--grid-gap: clamp(8px, 1vw, 18px);
--section-space: clamp(80px, 10vw, 180px);
```

Recommended container:

```css
.site-container {
  width: min(100%, 1600px);
  margin-inline: auto;
  padding-inline: var(--page-padding);
}
```

Rules:

- Use edge-to-edge image moments inside the main container.
- Text blocks should often occupy 3–5 columns.
- Large imagery should occupy 7–12 columns.
- Allow selected elements to break the grid by 1–2 columns.
- Use thin alignment lines to visually connect content across sections.

### Mobile Grid

- 4-column layout.
- Page padding: 16–20px.
- Stack images and text.
- Keep asymmetry through image ratios and offsets, not through unreadable overlap.
- Remove complex overlap where it harms clarity.
- Maintain thin divider lines and compact labels.

---

## 5. Global UI Rules

### Corners

- Use square corners by default.
- Maximum border radius: `2px`.
- Do not use large rounded containers.

### Borders

```css
border: 1px solid var(--color-line);
```

- Prefer top and bottom rules rather than full boxes.
- Use vertical hairlines for editorial structure.
- Use slightly darker rules on hover or active states.

### Shadows

- Avoid standard card shadows.
- If depth is required, use only:

```css
box-shadow: 0 18px 50px rgba(0, 0, 0, 0.08);
```

- Shadows should be rare and mainly used for floating project previews.

### Icons

- Use simple line arrows only.
- Use `→`, `↗`, `+`, and `—` where possible.
- Avoid colorful icon libraries.
- Stroke width should be thin.

### Buttons

Buttons should look like editorial actions, not app controls.

Primary text action:

```text
EXPLORE PROJECT →
```

Button style:

- Uppercase.
- Transparent background.
- Thin top or bottom rule.
- Small text.
- Wide click area.
- Arrow shifts 4–8px on hover.

---

## 6. Header / Navigation

### Desktop Header

Create a fixed or sticky header with a light transparent background.

Structure:

- Left: logo / wordmark.
- Right: `HOME`, `PROJECTS`, `ABOUT`, `PROCESS`, `CONTACT`.
- Optional small project counter or location label.
- Height: 72–92px.
- Use a thin bottom line.
- The header may become slightly opaque after scrolling.

Logo style:

- Black custom wordmark.
- Tight geometry.
- No icon is required.
- Keep logo approximately 130–180px wide.

Hover:

- Navigation text fades from muted gray to black.
- A 1px underline grows from left to right.
- Do not scale links.

### Mobile Header

- Logo left.
- `MENU +` right.
- Open a full-screen off-white menu.
- Navigation items should be large but controlled.
- Show contact details and social links at the bottom of the menu.

---

## 7. Homepage Structure

## Section 01 — Hero / Featured Project

The first screen should immediately communicate a premium architecture studio.

### Layout

- Full-width visual frame within the page margins.
- Image ratio between `16:9` and `21:10`.
- Navigation sits above the image.
- Add very thin geometric line graphics over the image.
- Add one or two smaller project preview cards overlapping the bottom-right portion of the hero.
- Place a compact text block directly below the hero image.

### Hero Content

Suggested structure:

```text
SELECTED WORK / 2026

SPACES SHAPED
BY MATERIAL,
LIGHT AND TIME.

A multidisciplinary interior and architecture studio creating
residential, hospitality, and commercial environments.
```

Actions:

```text
VIEW PROJECTS →
START A PROJECT ↗
```

### Featured Project Metadata

Under the large image:

- Left: one-line concept statement.
- Right: short project description.
- Bottom-right: `EXPLORE MORE →`.
- Add project title, city, category, and year.

Example:

```text
01 / HORIZON HOUSE
AHMEDABAD · RESIDENTIAL · 2026
```

### Image Treatment

- Use high-resolution architecture imagery.
- Prefer neutral concrete, stone, glass, wood, sculptural curves, and controlled lighting.
- `object-fit: cover`.
- Add optional dark overlay between 8% and 18%.
- Keep image contrast soft and cinematic.

---

## Section 02 — Introducing Projects

Create a project gallery directly inspired by the lower section of the reference.

### Header

```text
INTRODUCING PROJECTS
```

Place this small label above a thin horizontal line.

### Grid

Desktop:

- Three columns.
- Equal-width cards.
- Different image heights are allowed.
- Each card contains image, title, category, city, and year.
- Use no rounded corners.
- Keep 6–12px spacing between cards.

Card example:

```text
01
MONOLITH RESIDENCE
RESIDENTIAL / AHMEDABAD
2026
```

Hover behavior:

- Image scales to `1.025`.
- Overlay darkens slightly.
- Project title moves upward by 4px.
- Arrow appears from the right.
- Transition duration: 400–700ms.

Mobile:

- Horizontal snap carousel or vertical stacked list.
- Use one card per viewport width.
- Keep project metadata visible.

---

## Section 03 — Studio Statement

Create a large editorial text section with strong white space.

Layout:

- Small section label in the first 2 columns.
- Large statement across 7–9 columns.
- Supporting paragraph in the final 3–4 columns.

Suggested copy structure:

```text
THE STUDIO

WE DESIGN INTERIORS THAT FEEL
PRECISE, TIMELESS, AND DEEPLY
CONNECTED TO THE PEOPLE WHO
LIVE AND WORK INSIDE THEM.
```

Supporting paragraph:

```text
From concept and material selection to execution and final styling,
our studio delivers complete interior environments with clarity,
craft, and disciplined project control.
```

Use a top border and a large bottom margin.

---

## Section 04 — Capabilities

Use an editorial list rather than cards.

Capabilities:

1. Interior Architecture
2. Design & Build
3. Furniture & Joinery
4. Material Development
5. Project Execution
6. Styling & Handover

Layout:

- Each row has number, service name, short description, and arrow.
- Use full-width horizontal lines.
- On hover, the row background changes from off-white to a subtle warm gray.
- Optional project image preview may appear on the right side.

Example:

```text
01    INTERIOR ARCHITECTURE
      Spatial planning, concept development, material language,
      lighting, detailing, and complete design direction.        →
```

---

## Section 05 — Design Process

Show the end-to-end process in a structured architectural timeline.

Steps:

```text
01 / DISCOVER
02 / DEFINE
03 / DESIGN
04 / DETAIL
05 / BUILD
06 / HANDOVER
```

### Layout

Desktop:

- Six-column horizontal process.
- Each step separated by a vertical hairline.
- Number at top.
- Title in the middle.
- Description at bottom.
- Add a thin progress line running through the section.

Mobile:

- Vertical timeline.
- Keep numbers large and descriptions concise.

Suggested descriptions:

- Discover — Site study, requirements, references, budget, and ambition.
- Define — Scope, spatial priorities, timeline, and technical constraints.
- Design — Concepts, layouts, materials, lighting, and visual direction.
- Detail — Working drawings, specifications, mock-ups, and approvals.
- Build — Procurement, manufacturing, site execution, and coordination.
- Handover — Styling, quality review, documentation, and final delivery.

---

## Section 06 — Material Story

Create a highly visual section focused on material and craft.

Layout:

- One oversized image on the left.
- Two smaller stacked images on the right.
- Text block overlaps the lower edge of one image on desktop.
- Use materials such as stone, brushed metal, oak, fabric, concrete, and glass.
- Add small labels over imagery.

Example labels:

```text
NATURAL OAK / BRUSHED BRASS
HONED STONE / LINEN TEXTURE
CUSTOM JOINERY / SITE DETAIL
```

Body copy:

```text
Materials are selected for how they age, reflect light, and shape
the atmosphere of a room—not only for how they look on day one.
```

---

## Section 07 — Selected Project Detail Preview

Create a cinematic preview that leads to an individual project page.

Structure:

- Full-bleed dark section.
- Large project title.
- Large image.
- Metadata row.
- Short project narrative.
- View project action.

Example:

```text
PROJECT 03 / CASA ARC

A restrained residential interior defined by curved walls,
deep shadow lines, natural stone, and custom-built furniture.
```

Use white text over charcoal background.

---

## Section 08 — Numbers / Proof

Avoid large colorful statistic cards.

Use a simple ruled layout:

```text
120+  PROJECTS DELIVERED
08+   YEARS OF PRACTICE
14    CITIES
100%  END-TO-END EXECUTION
```

Rules:

- Large numbers.
- Small uppercase labels.
- Horizontal separators.
- Optional reveal animation on scroll.
- Keep the section monochrome.

---

## Section 09 — Client Perspective

Create one strong testimonial at a time.

Layout:

- Large quotation in 6–8 columns.
- Client name and project metadata below.
- Optional small project image on the opposite side.
- Use left/right arrows for switching testimonials.
- No carousel dots.

Example:

```text
“THE TEAM TRANSLATED A COMPLEX BRIEF INTO A SPACE THAT FEELS
CALM, FUNCTIONAL, AND COMPLETELY PERSONAL.”

— CLIENT NAME
PRIVATE RESIDENCE / AHMEDABAD
```

---

## Section 10 — Contact / Final CTA

The final CTA should be minimal and highly intentional.

Background: off-white or charcoal.

Suggested copy:

```text
HAVE A SPACE IN MIND?

LET’S DISCUSS THE SITE,
SCOPE, AND POSSIBILITY.

START A PROJECT ↗
```

Add:

- Email.
- Phone.
- Studio location.
- Social links.
- Availability note.
- Thin horizontal rule.

The CTA can use an oversized headline occupying most of the viewport width.

---

## 8. Footer

The footer should resemble the reference image: sparse, structured, and editorial.

### Desktop Layout

Use a 4-column or 5-column grid.

Column groups:

- Studio
- Projects
- Social
- Contact
- Legal

Suggested content:

```text
STUDIO
ABOUT
PROCESS
CAPABILITIES

PROJECTS
RESIDENTIAL
HOSPITALITY
COMMERCIAL
ALL PROJECTS

SOCIAL
INSTAGRAM →
LINKEDIN →
BEHANCE →

CONTACT
HELLO@STUDIO.COM
+91 00000 00000
AHMEDABAD, INDIA

LEGAL
PRIVACY
TERMS
```

Bottom line:

```text
© 2026 STUDIO NAME
DESIGNED WITH DISCIPLINE
01—10
```

Rules:

- Large whitespace.
- Very small text.
- Vertical alignment across columns.
- Use a thin line above footer.
- Add one final architectural image strip at the bottom if desired.

---

## 9. Project Listing Page

Create a project index page with two display modes:

- Editorial Grid.
- Compact Index.

### Grid Mode

- 2–3 columns.
- Large imagery.
- Filter labels at the top.
- Category filters: `ALL`, `RESIDENTIAL`, `COMMERCIAL`, `HOSPITALITY`, `FURNITURE`.
- Active filter uses a thin underline.

### Index Mode

Each row:

```text
01   PROJECT NAME   LOCATION   CATEGORY   YEAR   →
```

- Full-width rows.
- Hover reveals an image preview following the cursor on desktop.
- On mobile, show a thumbnail inside each row.

---

## 10. Individual Project Page

### Project Hero

- Project number.
- Project title.
- Location.
- Year.
- Scope.
- Architect / designer.
- Large cinematic image.

### Project Narrative

Use a two-column layout:

- Left: project title and metadata.
- Right: short story and design intent.

### Image Sequence

Use a combination of:

- Full-width landscape image.
- Two-column image pair.
- One portrait image aligned to the right.
- One detail crop aligned to the left.
- A wide image with a caption below.
- Optional short muted autoplay video.

### Captions

```text
01 / LIVING SPACE — NATURAL LIGHT ACROSS THE WESTERN FACADE
```

### Next Project

At the end:

```text
NEXT PROJECT
AURORA CREST →
```

Use a full-width preview image.

---

## 11. About Page

Structure:

1. Large studio introduction.
2. Founder or team image.
3. Design philosophy.
4. Capabilities.
5. Selected clients or collaborators.
6. Process.
7. Studio contact.

Keep founder/team content professional and visual. Avoid traditional employee cards.

---

## 12. Motion System

Motion should be subtle and controlled.

### Page Load

- Fade image from 0 to 1 opacity.
- Translate content upward by 12–24px.
- Stagger navigation and labels by 40–80ms.
- Duration: 700–1200ms.

### Scroll

- Use restrained reveal animations.
- Images may use slight parallax, maximum 3–5%.
- Text reveals should not occur on every small element.
- Avoid excessive floating effects.

### Hover

- Image zoom: `1.02–1.04`.
- Arrow translation: `4–8px`.
- Line expansion from 0% to 100%.
- Text opacity: `0.55` to `1`.

### Reduced Motion

Respect:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 13. Image Direction

Use only images that feel aligned with the architecture language.

Preferred imagery:

- Minimal modern interiors.
- Sculptural architecture.
- Large planes and curved surfaces.
- Soft daylight.
- Warm gray, stone, charcoal, cream, beige, black.
- Custom furniture.
- Material close-ups.
- Wide-angle spaces with strong geometry.
- Exterior and interior transitions.

Avoid:

- Generic stock office photos.
- People posing at desks.
- Artificial HDR.
- Highly saturated images.
- Busy decor.
- Random lifestyle photography.
- Repeated images across sections.

Recommended ratios:

```text
Hero: 21:10
Project card: 4:5 or 3:4
Landscape gallery: 16:10
Detail crop: 1:1
Portrait: 2:3
Footer strip: 3:1
```

---

## 14. Responsive Behaviour

### Desktop — 1280px and Above

- Use full 12-column grid.
- Enable overlapping preview cards.
- Enable cursor project preview.
- Keep generous whitespace.
- Keep navigation horizontal.

### Tablet — 768px to 1279px

- Reduce page padding.
- Use 8-column logic.
- Limit overlapping elements.
- Convert three-column project grid to two columns.
- Keep text widths controlled.

### Mobile — Below 768px

- Use a 4-column grid.
- Remove decorative lines that create clutter.
- Stack hero project previews.
- Use edge-to-edge imagery where helpful.
- Reduce section spacing but maintain breathing room.
- Keep labels and metadata readable.
- Disable cursor-follow and heavy parallax.
- Make all interactive targets at least 44px high.
- Keep primary CTA visible without making it oversized.

---

## 15. Accessibility

- Minimum body text contrast ratio: 4.5:1.
- Provide alt text for every project image.
- Add visible keyboard focus states.
- Use semantic landmarks: `header`, `nav`, `main`, `section`, `footer`.
- Do not place essential text only inside images.
- Ensure menus, filters, carousels, and project previews are keyboard accessible.
- Use descriptive link labels, not only “Read More”.
- Respect reduced motion.
- Use correct heading hierarchy.

---

## 16. Technical Design Tokens

```css
:root {
  --font-primary: "UI2", "Inter Tight", "Helvetica Neue", Arial, sans-serif;

  --color-bg: #F5F5F2;
  --color-surface: #FFFFFF;
  --color-text: #151515;
  --color-muted: #686868;
  --color-line: rgba(21, 21, 21, 0.18);
  --color-line-strong: rgba(21, 21, 21, 0.42);
  --color-dark: #1C1C1C;
  --color-stone: #D8D4CE;

  --page-padding: clamp(18px, 3vw, 52px);
  --grid-gap: clamp(8px, 1vw, 18px);
  --section-space: clamp(80px, 10vw, 180px);

  --text-xs: clamp(0.62rem, 0.55rem + 0.15vw, 0.75rem);
  --text-sm: clamp(0.74rem, 0.68rem + 0.15vw, 0.88rem);
  --text-base: clamp(0.92rem, 0.84rem + 0.18vw, 1.05rem);
  --text-md: clamp(1.15rem, 0.95rem + 0.7vw, 1.65rem);
  --text-lg: clamp(1.8rem, 1.2rem + 2vw, 3.4rem);
  --text-xl: clamp(2.8rem, 1.6rem + 4.2vw, 6.8rem);
  --text-hero: clamp(3.2rem, 1.4rem + 7vw, 9.5rem);

  --ease-editorial: cubic-bezier(0.22, 1, 0.36, 1);
  --duration-fast: 220ms;
  --duration-base: 480ms;
  --duration-slow: 900ms;
}
```

---

## 17. Suggested Component Architecture

```text
components/
  layout/
    SiteHeader
    MobileMenu
    SiteFooter
    PageContainer
    Grid
    SectionDivider

  typography/
    Eyebrow
    DisplayHeading
    BodyCopy
    Metadata
    SectionLabel

  media/
    ResponsiveImage
    ProjectImage
    ImageCaption
    VideoFrame
    ParallaxMedia

  project/
    ProjectCard
    ProjectPreviewCard
    ProjectGrid
    ProjectIndex
    ProjectFilter
    ProjectMetadata
    NextProject

  sections/
    HeroProject
    IntroProjects
    StudioStatement
    CapabilitiesList
    ProcessTimeline
    MaterialStory
    FeaturedProject
    StatsSection
    TestimonialSection
    ContactCTA

  ui/
    TextLink
    ArrowLink
    LineButton
    CursorPreview
    AccordionRow
    SectionCounter
```

---

## 18. Implementation Rules for the Coding Agent

1. Read this file before generating any page.
2. Preserve the monochrome architectural direction across all routes.
3. Do not introduce random colors, gradients, rounded cards, glassmorphism, or SaaS-style blocks.
4. Use a consistent 12-column desktop grid.
5. Use thin lines and alignment to create structure.
6. Give imagery priority over decorative UI.
7. Keep all motion subtle and performance-safe.
8. Use responsive image formats such as AVIF and WebP.
9. Add lazy loading below the first viewport.
10. Prevent layout shift by defining image aspect ratios.
11. Use semantic HTML and accessible interactions.
12. Ensure mobile is deliberately designed, not merely stacked.
13. Keep content editable through structured data objects or CMS fields.
14. Reuse project components across home, listing, and detail pages.
15. Maintain the same typography and spacing tokens across the full site.
16. Do not copy the reference logo, brand name, exact text, or exact project imagery.
17. Use the reference only for visual direction, composition, spacing, and art direction.
18. Make the final design feel original and brand-specific.

---

## 19. Quality Checklist

Before considering a page complete, verify:

- [ ] The page feels architectural and editorial.
- [ ] The first viewport is image-led.
- [ ] Typography is restrained and precise.
- [ ] No unnecessary rounded corners are present.
- [ ] Grid alignment is consistent.
- [ ] Section spacing feels generous.
- [ ] Hairline borders are used correctly.
- [ ] Project metadata is visible and structured.
- [ ] Hover states are subtle.
- [ ] Mobile layout preserves the premium visual character.
- [ ] Images are optimized and do not shift during loading.
- [ ] All major actions are keyboard accessible.
- [ ] Reduced-motion mode works.
- [ ] The design does not look like a template or dashboard.
- [ ] The website feels like a continuous visual story from hero to footer.

---

## 20. Final Visual Goal

The website should feel like a carefully art-directed architectural portfolio where:

- The grid is visible through alignment, not through heavy boxes.
- Images create emotion.
- Thin lines create structure.
- Small typography creates sophistication.
- Large negative space creates confidence.
- Every project feels curated.
- Every transition feels intentional.
- The full site reads as one continuous editorial composition.
