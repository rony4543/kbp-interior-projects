---
name: frontend-design
description: Front-end engineering guidelines, component architecture, modern UI design patterns, web performance, accessibility (a11y), responsive layouts, and visual polish for web applications.
---

# Front-End Design & Engineering Skill

Comprehensive front-end engineering standards for building, updating, and polishing UI components and page sections with high visual standards, clean architecture, accessible HTML, and smooth interactions.

---

## 1. Core Objectives & Workflow

When adding or modifying a UI section:
1. **Analyze Existing Context**: Align with the project's current design language, color palette, typography, and existing component structure.
2. **Apply Design Systems & UX Principles**: Leverage `ui-ux-pro-max`, `ui-styling`, and `design-system` skills to ensure cohesive aesthetics.
3. **Enforce Semantic HTML & Accessibility (a11y)**: Build every component with proper ARIA attributes, keyboard navigation, high-contrast visibility, and screen-reader readiness.
4. **Implement Responsive & Modern Styling**: Use CSS Grid/Flexbox, dynamic CSS variables, glassmorphism/subtle shadows, dynamic micro-interactions, and hardware-accelerated animations.
5. **Optimize Performance**: Minimize layout shifts (CLS), use efficient DOM updates, and optimize images/assets.

---

## 2. UI Improvement & Enhancement Checklist

Whenever a new section of UI is created or modified, execute the following improvements:

### A. Structure & Semantics
- Use semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`).
- Ensure proper heading hierarchy (`<h1>` $\rightarrow$ `<h2>` $\rightarrow$ `<h3>`).
- Provide explicit `id`, `class`, and `data-` attributes for interactive components.

### B. Visual Polish & Styling
- **Typography**: Paired modern fonts with dynamic `clamp()` font sizing for fluid scaling across mobile, tablet, and desktop screens.
- **Color & Depth**: Rich CSS custom properties (variables), subtle gradients, elevation via layered box-shadows or backdrop filters (`backdrop-filter: blur(...)`).
- **Interactive Feedback**: Hover, focus-visible, and active states for interactive elements (buttons, cards, links, inputs).
- **Micro-Animations**: Smooth transitions (`transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);`), staggered entrance animations, and transform scale triggers (`transform: translateY(-4px)`).

### C. Accessibility (a11y) & Standards
- Interactive elements must have focus indicators (`:focus-visible`).
- Images must include meaningful `alt` descriptions or `aria-hidden="true"` if decorative.
- Color contrast ratios must meet WCAG 2.1 AA standard (4.5:1 for standard text, 3:1 for large text).
- Form inputs must be linked with `<label>` elements or `aria-label`.

### D. Responsive Adaptability
- Mobile-first or desktop-optimised fluid breakpoints (e.g. 480px, 768px, 1024px, 1280px).
- Prevent layout breaking, horizontal scrollbars, or text overlapping.

---

## 3. Integration with Workspace Skills

When constructing or enhancing front-end components, integrate seamlessly with existing skills:
- **`ui-ux-pro-max`**: Extract exact color palettes, typography pairs, and UX interaction guidelines.
- **`ui-styling`**: Utilize standardized CSS token definitions and responsive layout patterns.
- **`design-system`**: Reuse token layers (primitives $\rightarrow$ semantics $\rightarrow$ components).
- **`banner-design` & `design`**: Incorporate visual assets, hero banners, and vector icons.

---

## 4. Execution Standard for UI Iterations

When the user asks to create or improve a UI section:
1. Review the requirement against design goals.
2. Produce clean, modular, and maintainable HTML/CSS/JavaScript code.
3. Automatically apply structural, visual, and accessibility improvements without creating bare minimum placeholders.
4. Verify layout responsiveness and clean execution.
