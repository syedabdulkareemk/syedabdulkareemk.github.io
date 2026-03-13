# Xilver Games Website

A professional gaming studio website built with Next.js 15, TypeScript, and TailwindCSS. The site is optimized for static export and deployment to GitHub Pages.

## Features

- **Modern Design**: Dark theme with cyan and mint accents, glassmorphic cards, and gradient text
- **Fully Responsive**: Mobile-first design that works seamlessly on all devices
- **Static Export**: Optimized for GitHub Pages deployment without server-side rendering
- **Performance Optimized**: Fast loading times with optimized images and code splitting
- **SEO Ready**: Comprehensive metadata and structured data for search engines
- **Accessible**: Built with accessibility best practices (WCAG 2.1 AA)

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS 3.4
- **Deployment**: GitHub Pages
- **Deployment Automation**: GitHub Actions

## Pages Included

- **Home** (`/`) - Hero section with featured games and studio info
- **About** (`/about`) - Studio story, mission, values, team, and timeline
- **Games** (`/games`) - Game library with filtering and details
- **Game Detail** (`/games/luminous-depths`) - Individual game showcase
- **Contact** (`/contact`) - Contact form and inquiry channels
- **Privacy Policy** (`/privacy`) - Privacy policy page
- **Terms of Service** (`/terms`) - Terms and conditions

## Components

- `Header` - Navigation header with sticky positioning
- `Footer` - Footer with links and copyright
- `Hero` - Hero section with title, subtitle, and CTA
- `GameCard` - Reusable game card component
- `Section` - Container section component

## Getting Started

### Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open in browser**:
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This generates a static export in the `out/` directory.

### Deploy to GitHub Pages

The project uses GitHub Actions for automated deployment to the root domain:

1. Push changes to the `main` branch
2. GitHub Actions automatically builds and deploys to GitHub Pages
3. The site is available at `https://syedabdulkareemk.github.io/`

**Note**: The static files from `npm run build` (output to `out/` directory) are deployed directly to the root of the syedabdulkareemk.github.io repository.

## Environment Variables

No environment variables are required for this static site. All configuration is in `next.config.ts`.

## Design System

### Colors

- **Primary**: `#06b6d4` (Cyan)
- **Primary Dark**: `#0891b2` (Dark Cyan)
- **Accent**: `#10b981` (Mint Green)
- **Accent Light**: `#6ee7b7` (Light Mint)
- **Background**: `#0a0e27` (Dark Navy)
- **Foreground**: `#f0f1f5` (Light Gray)
- **Secondary**: `#1a1f3a` (Medium Navy)
- **Border**: `#1f2937` (Gray)

### Typography

- **Sans Serif**: Inter (weights: 300, 400, 500, 600, 700, 800)
- **Monospace**: Courier New

### Effects

- **Glassmorphism**: `.glass` class for frosted glass effect
- **Gradient Text**: `.gradient-text` class for cyan-to-mint gradient
- **Backdrop Blur**: Utility classes for blur effects

## File Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   ├── about/
│   │   └── page.tsx         # About page
│   ├── games/
│   │   ├── page.tsx         # Games list page
│   │   └── luminous-depths/
│   │       └── page.tsx     # Individual game page
│   ├── contact/
│   │   └── page.tsx         # Contact page
│   ├── privacy/
│   │   └── page.tsx         # Privacy policy
│   ├── terms/
│   │   └── page.tsx         # Terms of service
│   └── not-found.tsx        # 404 page
├── components/
│   ├── Header.tsx           # Header component
│   ├── Footer.tsx           # Footer component
│   ├── Hero.tsx             # Hero section
│   ├── GameCard.tsx         # Game card component
│   └── Section.tsx          # Section wrapper
```

## Customization

### Adding New Games

1. Create a new folder in `src/app/games/[game-name]/`
2. Create `page.tsx` based on the existing game detail template
3. Update the games array in relevant pages

### Changing Colors

Edit the CSS variables in `src/app/globals.css`:

```css
:root {
  --color-primary: #06b6d4;
  /* ... other colors ... */
}
```

Then update the corresponding Tailwind config in `tailwind.config.ts`.

### Modifying Typography

Update font imports in `src/app/globals.css` and configure in `tailwind.config.ts`.

## Performance Optimization

- **Static Export**: All pages are pre-rendered as static HTML
- **Image Optimization**: Images are unoptimized for static export compatibility
- **CSS Classes**: TailwindCSS utility classes for minimal bundle size
- **Minimal Dependencies**: Only essential packages included

## Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is part of the Xilver Games portfolio. All rights reserved.

## Support

For issues or questions about the website, please contact hello@xilvergames.com.

---

Built with ❤️ by Xilver Games
