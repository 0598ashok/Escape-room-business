# Customization Guide

VaultEscape gives you extensive control to customize the aesthetics, typography, animations, and functionality without overly complex abstractions.

## Styling (TailwindCSS)
The project strictly utilizes **TailwindCSS**. Instead of writing custom raw CSS, we rely on Tailwind's utility classes in the HTML files. 
- You can directly modify layout, spacing, typography, and colors by adding or altering class names.
- Base variables (like specific brand colors) might be customized in `assets/css/style.css`.

## Assets & Imagery
All visual media are stored in `assets/img/` (or `assets/images/`).
- Make sure to replace placeholder images with your actual venue photos.
- **Tip**: Optimize images (e.g., using WebP format) to maintain top-tier PageSpeed scores.
- Make sure the Favicon (`assets/img/ui/` or configured in the header) is replaced with your own brand logo.

## Animations
The template includes sophisticated animations built primarily using **GSAP** (GreenSock Animation Platform) and Framer Motion logic.
- Locate the main script files in `assets/js/`.
- Look for timelines and scroll triggers. You can adjust durations, easing types (e.g., `power3.out`), or delays to make the experience faster or more deliberate.

## Layout Changes
If you need to change standard layouts:
- VaultEscape uses isolated section codes (e.g., `<!-- SECTION: HERO -->`).
- You can safely copy a section wrapper block across pages without dragging along heavy component systems.
