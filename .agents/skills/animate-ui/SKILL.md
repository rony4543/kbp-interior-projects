---
name: animate-ui
description: UI Component animation guide based on Animate UI. Use when creating screen-based animated components, scroll-triggered reveals, interactive component states, collapsible transitions, hero animations, and smooth viewport scroll keyframes.
---

# Animate UI - Component Animation & Scroll Reveal Guide

**Animate UI** provides animated UI components, viewport reveal mechanics, and screen-based component animations built on Motion and CSS keyframes.

---

## Core Animation Patterns

### 1. Viewport Scroll Reveal (IntersectionObserver / Motion)
Triggers smooth component reveal animations when elements scroll into view.

```html
<!-- HTML & Tailwind Reveal Structure -->
<div class="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out">
  <h2 class="text-3xl font-bold text-white">Our Signature Projects</h2>
</div>
```

```js
// IntersectionObserver for Scroll Animations
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('opacity-0', 'translate-y-8');
      entry.target.classList.add('opacity-100', 'translate-y-0');
      observer.unobserve(entry.target); // Trigger once
    }
  });
}, observerOptions);

document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
```

---

### 2. Screen Section Scroll Animation
Creates sticky screen containers that animate internal elements as the user scrolls down the page.

```html
<div class="relative h-[200vh]" id="pinned-section">
  <div class="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
    <div id="screen-card" class="w-[80vw] max-w-4xl h-[60vh] bg-neutral-900 rounded-2xl border border-neutral-800 p-8 shadow-2xl transition-transform duration-100 ease-out">
      <h2 class="text-4xl font-bold text-white">Interactive Screen View</h2>
      <p class="text-neutral-400 mt-4">Scales and rotates dynamically based on scroll position.</p>
    </div>
  </div>
</div>
```

```js
// Scroll position mapping to screen card transform
window.addEventListener('scroll', () => {
  const section = document.getElementById('pinned-section');
  if (!section) return;
  
  const rect = section.getBoundingClientRect();
  const progress = Math.min(Math.max(-rect.top / (rect.height - window.innerHeight), 0), 1);
  
  const card = document.getElementById('screen-card');
  if (card) {
    const scale = 0.8 + (progress * 0.2); // 0.8 -> 1.0
    const rotateX = 15 - (progress * 15); // 15deg -> 0deg
    card.style.transform = `scale(${scale}) rotateX(${rotateX}deg)`;
  }
});
```

---

### 3. Smooth Collapsible Accordion Transition
Animated height collapse/expand for FAQs, menus, and detail cards.

```html
<div class="accordion-item border-b border-neutral-800 py-4">
  <button class="accordion-header flex justify-between items-center w-full text-left font-semibold text-lg text-white">
    <span>What services do you offer?</span>
    <span class="chevron transition-transform duration-300">↓</span>
  </button>
  <div class="accordion-content max-h-0 overflow-hidden transition-all duration-500 ease-in-out text-neutral-400">
    <p class="pt-4">We specialize in commercial and residential interior design, architectural planning, and turnkey project execution.</p>
  </div>
</div>
```

```js
document.querySelectorAll('.accordion-header').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    const chevron = button.querySelector('.chevron');
    
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      chevron.style.transform = 'rotate(0deg)';
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
      chevron.style.transform = 'rotate(180deg)';
    }
  });
});
```

---

## Best Practices for UI Animations
1. **Performance**: Animate `transform` (`translate`, `scale`, `rotate`) and `opacity` only. Avoid animating layout properties like `height`, `top`, or `margin` directly during heavy scrolls.
2. **Spring Easing**: Use natural cubic bezier curves for UI components: `cubic-bezier(0.16, 1, 0.3, 1)` or `cubic-bezier(0.34, 1.56, 0.64, 1)`.
3. **Accessibility**: Respect `prefers-reduced-motion` settings.
