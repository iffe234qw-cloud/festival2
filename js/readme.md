# 🌊 NEON WAVE FESTIVAL 2026

A high-performance, cinematic promotional experience designed for the fictional world-class music festival, **Neon Wave**. This project focuses on editorial layout, immersive micro-interactions, and rigorous frontend performance optimization.

## 🚀 Core Objectives
The goal was to build a commercial-grade landing page that converts visitors into ticket buyers through visual storytelling, removing the "generic template" feel.

### Key Pillars:
- **Visuality:** High-contrast dark mode with a multi-tone neon gradient system (`#8B5CF6`, `#EC4899`, `#F97316`).
- **Performance:** 100% Vanilla JavaScript and CSS. No libraries (GSAP, jQuery, etc.) were used to ensure maximum load speed and zero dependency bloat.
- **Accessibility:** WCAG AA compliant, featuring semantic HTML5, ARIA labels, and logical keyboard navigation.

## 🛠️ Technical Architecture

### Frontend Stack
- **HTML5:** Semantic structure for high SEO and screen-reader compatibility.
- **CSS3:** 
    - **Fluid Typography:** Implemented using `clamp()` for flawless scaling.
    - **Modern Layouts:** Deep utilization of CSS Grid for asymmetrical layouts and Flexbox for UI components.
    - **Advanced Effects:** Glassmorphism via `backdrop-filter`, custom `clip-path` for brutalist button geometry, and CSS-only floating animations.
- **Vanilla JavaScript:**
    - **Intersection Observer API:** Used for staggered reveal animations and the statistics counter, replacing expensive `scroll` event listeners.
    - **State-Driven UI:** Dynamic rendering for the festival schedule and attendee testimonials.
    - **Custom Validation:** A robust regex-based client-side validation system for the contact form.

## 📂 Folder Structure
```text
music-festival/
│
├── index.html          # Main Entry Point
├── README.md           # Documentation
│
├── css/
│   └── style.css       # Design System, Layout, & Animations
│
├── js/
│   └── script.js       # Interaction Engine & Logic
│
└── assets/             # Static Media (Images, Icons, Videos)
```

## ⚙️ Setup & Local Development
1. **Clone the repository:**
   ```bash
   git clone https://github.com/username/neon-wave-festival.git
   ```
2. **Run:**
   Since it is a static site, simply open `index.html` in any modern browser (Chrome, Firefox, Safari, Edge).

## 📱 Responsive breakpoints
- **Ultra-Wide (1920px+):** Max-width container to maintain visual focus.
- **Desktop/Laptop:** Full 2-column editorial Grid.
- **Tablet:** Adaptive grid (1-column) with adjusted typography.
- **Mobile (768px & below):** Sliding mobile menu, touch-optimized buttons, and simplified layout.

## 📈 Performance & Accessibility Highlights
- **Lazy Loading:** Critical images use `loading="lazy"`.
- **Srgba Overlays:** Gradient overlays ensure text contrast remains high regardless of background image brightness.
- **Modular JS:** Functions are divided by responsibility (Navigation, Timer, Schedule) for maintainability.

---
**Credits:** Designed and developed as a Senior Frontend Engineering demonstration.
**License:** MIT