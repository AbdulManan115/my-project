# Scroll Animations Documentation

## Overview
This project now includes beautiful scroll-triggered animations that activate when elements come into view as the user scrolls down the page.

## How It Works

### 1. **Custom Hook: `useScrollAnimation`**
Located in `src/hooks/useScrollAnimation.js`, this hook uses the Intersection Observer API to detect when elements enter the viewport.

```javascript
import { useScrollAnimation } from "../hooks/useScrollAnimation";

// In your component
const elementRef = useScrollAnimation();

// Apply to element
<div ref={elementRef} className="scroll-animate scroll-fadeInUp">
  Content
</div>
```

### 2. **Available Animation Types**

All animations are defined in `src/index.css`:

- **`scroll-fadeInUp`** - Fades in while sliding up from below
- **`scroll-fadeInLeft`** - Fades in while sliding from the left
- **`scroll-fadeInRight`** - Fades in while sliding from the right
- **`scroll-scaleIn`** - Fades in while scaling from 90% to 100%
- **`scroll-slideUp`** - Slides up from below with fade

### 3. **Animation Delays**

Add staggered delays for sequential animations:

```javascript
className="scroll-animate scroll-fadeInUp scroll-delay-100"
className="scroll-animate scroll-fadeInUp scroll-delay-200"
className="scroll-animate scroll-fadeInUp scroll-delay-300"
```

Available delays: 100ms, 200ms, 300ms, 400ms, 500ms

### 4. **Components Updated**

All major components now have scroll animations:

- ✅ **Hero.jsx** - Initial page animations remain on load
- ✅ **Navbar.jsx** - Static (no scroll animation needed)
- ✅ **Explore.jsx** - Heading, images, and content sections
- ✅ **Cards.jsx** - All service cards animate on scroll
- ✅ **Booking.jsx** - Heading and form card
- ✅ **Footer.jsx** - Static (visible at page bottom)
- ✅ **Ourservice.jsx** - Service card animates in
- ✅ **Facilites.jsx** - Each facility card animates individually
- ✅ **Testimonial.jsx** - Heading, divider, card, and navigation

### 5. **Performance**

- Uses native Intersection Observer API (no external dependencies)
- GPU-accelerated CSS animations
- Respects `prefers-reduced-motion` for accessibility
- Animations only trigger once per page load

### 6. **Customization**

To adjust animation threshold (how much of element must be visible):

```javascript
const elementRef = useScrollAnimation(0.2); // 20% visible triggers animation
```

To customize animation duration, edit `src/index.css`:

```css
.animate-in-view.scroll-fadeInUp {
    animation: fadeInUp 800ms ease-out forwards; /* Change 600ms to 800ms */
}
```

## Color Palette

The website uses only **3 colors** consistently:

1. **`#007BFF`** - Primary Blue
2. **`#1E3A8A`** - Dark Blue  
3. **`#FDDC1F`** - Yellow/Gold

## Best Practices

1. Use `scroll-animate` class to hide element initially
2. Add one animation type class (e.g., `scroll-fadeInUp`)
3. Optionally add delay class for staggered effects
4. Each element needs its own ref from `useScrollAnimation()`

## Example Usage

```jsx
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function MyComponent() {
  const heading1Ref = useScrollAnimation();
  const heading2Ref = useScrollAnimation();
  
  return (
    <div>
      <h1 ref={heading1Ref} className="scroll-animate scroll-fadeInUp">
        First Heading
      </h1>
      <h2 ref={heading2Ref} className="scroll-animate scroll-fadeInLeft scroll-delay-200">
        Second Heading
      </h2>
    </div>
  );
}
```

