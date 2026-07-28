---
name: inspira-ui
description: UI inspiration and design patterns library based on Inspira UI (Aceternity UI + Magic UI). Use when designing hero sections, spotlight effects, bento grids, aurora backgrounds, particle effects, 3D card tilt, glassmorphism, glow cards, text reveal animations, and high-impact modern UI web layouts.
---

# Inspira UI - Design Inspiration & Premium Components Guide

**Inspira UI** is a curated design and component framework inspired by Aceternity UI and Magic UI. Use this skill whenever you need high-impact, state-of-the-art UI inspiration, hero designs, interactive cards, dynamic backgrounds, or visual effects.

---

## Key Design Patterns & Components

### 1. Spotlight & Radial Lighting
Adds a dynamic radial glow cursor-tracking or fixed highlight behind hero sections.
- **Use Case**: Hero sections, featured product cards, call-to-actions.
- **HTML/CSS/Tailwind Implementation**:
```html
<div class="relative flex min-h-[500px] w-full items-center justify-center overflow-hidden bg-black/[0.96] antialiased bg-grid-white/[0.02]">
  <div class="pointer-events-none absolute inset-0 bg-radial-gradient from-indigo-500/20 via-transparent to-transparent opacity-75 blur-3xl"></div>
  <div class="relative z-10 mx-auto max-w-5xl p-4 text-center">
    <h1 class="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
      Elevate Your Interior Space
    </h1>
    <p class="mt-4 max-w-lg text-neutral-300 mx-auto text-base">
      Luxury interior architecture crafted with precision and modern aesthetics.
    </p>
  </div>
</div>
```

---

### 2. Bento Grid Layout
A modern, asymmetrical grid structure ideal for showcasing services, portfolios, features, or metrics.
- **Design Guidelines**:
  - Mix card span width (`col-span-1`, `col-span-2`, `col-span-3`).
  - Add subtle hover scale (`hover:-translate-y-1 transition duration-300`).
  - Use subtle glass backdrop (`backdrop-blur-md bg-white/5 border border-white/10`).

```html
<div class="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto p-6">
  <!-- Large Featured Card -->
  <div class="md:col-span-2 group relative overflow-hidden rounded-3xl bg-neutral-900 border border-neutral-800 p-8 hover:border-neutral-700 transition-all duration-300">
    <div class="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
    <h3 class="text-2xl font-semibold text-white">Architectural Design & Build</h3>
    <p class="text-neutral-400 mt-2">End-to-end luxury interior transformation tailored to your vision.</p>
  </div>

  <!-- Standard Card -->
  <div class="col-span-1 group relative overflow-hidden rounded-3xl bg-neutral-900 border border-neutral-800 p-8 hover:border-neutral-700 transition-all">
    <h3 class="text-2xl font-semibold text-white">3D Visualization</h3>
    <p class="text-neutral-400 mt-2">Photorealistic renders before execution.</p>
  </div>
</div>
```

---

### 3. 3D Tilt & Glow Cards
Interactive cards that respond to mouse move events with 3D perspective distortion and glowing borders.

```js
// Vanilla JS 3D Tilt Effect
document.querySelectorAll('.card-3d').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `perspective(1000px) rotateX(${-y / 15}deg) rotateY(${x / 15}deg) scale3d(1.02, 1.02, 1.02)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  });
});
```

---

### 4. Text Reveal & Gradient Shimmer
Animated text elements that reveal with gradient shimmer on load or scroll.

```css
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

.text-shimmer {
  background: linear-gradient(90deg, #94a3b8 0%, #ffffff 50%, #94a3b8 100%);
  background-size: 200% auto;
  color: transparent;
  -webkit-background-clip: text;
  animation: shimmer 4s linear infinite;
}
```

---

### 5. Aurora & Meteors Background Effects
Dynamic background animations that make landing pages look ultra-premium.

- **Aurora Glow**: Multi-layered blurred radial gradients animating softly in the background.
- **Particles / Meteors**: Falling accent lines or floating ambient dust particles.

---

## Integration Workflow & Best Practices
1. **Combine Visual Anchor + Clean Content**: Pair a strong visual component (e.g. Spotlight Hero or Aurora Background) with clean, high-contrast content typography.
2. **Harmonious Color Palettes**: Use deep dark backgrounds (`#0a0a0a`, `#0f172a`) with warm accent glows (amber `#f59e0b`, emerald `#10b981`, indigo `#6366f1`).
3. **Smooth Transitions**: Ensure all interactive state updates use CSS transitions (`transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)`).
