---
name: lenis-scroll
description: Smooth scrolling implementation guide using Lenis by Darkroom Engineering. Use when configuring smooth page scrolling, inertia momentum scroll, scroll-to navigation, GSAP ScrollTrigger sync, scroll snap, and custom animation loops.
---

# Lenis - Smooth Scroll Integration & Animation Guide

**Lenis** is a lightweight, dependency-free smooth scroll library by Darkroom Engineering. It wraps native browser scrolling to provide buttery smooth inertia physics without breaking accessibility, `position: sticky`, or anchor links.

---

## Installation & Basic Setup

### 1. Script Tag / CDN Setup (Vanilla HTML/JS)
Include the Lenis library via bundle or CDN:

```html
<!-- Lenis CDN -->
<script src="https://unpkg.com/lenis@1.1.18/dist/lenis.min.js"></script>
<!-- Lenis Styles (Essential for preventing layout jank) -->
<link rel="stylesheet" href="https://unpkg.com/lenis@1.1.18/dist/lenis.css">
```

### 2. NPM Package (Vite / React / Vue / Next.js)
```bash
npm install lenis
```

---

## Initialization Recipes

### Recipe A: Automatic RAF Loop (Recommended for standard sites)

```js
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

const lenis = new Lenis({
  autoRaf: true,
  duration: 1.2,        // Scroll speed/duration in seconds
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential ease out
  orientation: 'vertical',
  smoothWheel: true,
  wheelMultiplier: 1,
  touchMultiplier: 2,
});

// Optional: Scroll progress listener
lenis.on('scroll', (e) => {
  // e.scroll = current scroll distance (px)
  // e.velocity = scroll speed
  // e.direction = 1 (down) or -1 (up)
  // e.progress = 0 to 1
});
```

---

### Recipe B: GSAP ScrollTrigger Integration

When combining Lenis with GSAP ScrollTrigger, synchronize the RAF loop:

```js
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis();

// Update ScrollTrigger on Lenis scroll
lenis.on('scroll', ScrollTrigger.update);

// Add Lenis to GSAP ticker
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

// Disable GSAP lag smoothing for perfect sync
gsap.ticker.lagSmoothing(0);
```

---

### Recipe C: Smooth Anchor Link Scroll To

```js
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = this.getAttribute('href');
    if (target && target !== '#') {
      lenis.scrollTo(target, {
        offset: -50,       // Header offset
        duration: 1.5,     // Scroll duration
        easing: (t) => 1 - Math.pow(1 - t, 4) // Quartic ease out
      });
    }
  });
});
```

---

## Essential Methods & API Quick Reference

| Method | Description | Example |
| :--- | :--- | :--- |
| `lenis.scrollTo(target, options)` | Smooth scroll to an element or px offset | `lenis.scrollTo('#services', { offset: -80 })` |
| `lenis.stop()` | Pause Lenis scroll loop (e.g. while modal is open) | `lenis.stop()` |
| `lenis.start()` | Resume Lenis scroll loop | `lenis.start()` |
| `lenis.destroy()` | Cleanup Lenis instance on page unmount | `lenis.destroy()` |

---

## Recommended CSS Rules for Lenis Smooth Scroll

Add these CSS rules to `index.css` or global stylesheet:

```css
html.lenis, html.lenis body {
  height: auto;
}

.lenis.lenis-smooth {
  scroll-behavior: auto !important;
}

.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}

.lenis.lenis-stopped {
  overflow: hidden;
}

.lenis.lenis-scrolling iframe {
  pointer-events: none;
}
```
