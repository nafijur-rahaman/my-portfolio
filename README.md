# Md. Nafijur Rahaman — Portfolio

A fast, accessible, fully config-driven developer portfolio built with **React 19**, **Vite**, **Tailwind CSS v4** and **Motion**.

## Features

- **One-file customization**: all content lives in [`src/portfolio.config.js`](src/portfolio.config.js).
- **Theming**: light/dark mode plus accent color presets, saved per visitor. You can add your own presets.
- **Reorderable sections**: reorder or remove sections in the config, and the navbar updates to match.
- **Projects**: category filter tabs, "featured" badges, and an accessible detail modal (Esc to close, focus handling, scroll lock).
- **Contact form**: sends through EmailJS when it's configured. Otherwise it opens the visitor's email app.
- **Performance**: optimized WebP images, a single shared particle canvas that pauses when the tab is hidden, and support for `prefers-reduced-motion`.
- **Accessibility**: skip link, focus rings, aria labels, and scroll-spy navigation.

## Getting started

```bash
npm install
npm run dev
```

## Customizing

Everything is in `src/portfolio.config.js`:

| Export       | What it controls |
| ------------ | ---------------- |
| `theme`      | Default mode (`dark` / `light` / `system`), default accent, accent presets, particles on/off, visitor theme switcher on/off |
| `profile`    | Name, title, photo, location, email, resume path, availability badge |
| `socials`    | Social links (any [react-icons](https://react-icons.github.io/react-icons) icon) |
| `sections`   | Which sections appear, in what order, and their navbar labels |
| `hero`       | Rotating roles, headline, description, CTAs, stats |
| `about`      | Bio paragraphs, highlight cards, journey timeline |
| `skills`     | Skill groups with icons and brand colors |
| `experience` | Jobs, with achievements and tech tags |
| `projects`   | Projects, with images, stack, features, links, category and `featured` |
| `contact`, `footer` | Section copy |

Tips:

- Wrap words in `*asterisks*` in the hero headline or about paragraphs to highlight them with the accent gradient.
- Put images in `src/assets/` and import them at the top of the config. WebP at about 1280px wide works best.
- Replace the resume PDF in `public/` and update `profile.resume`.
- Update the `<title>` and meta tags in `index.html` for SEO and link previews.
- Design tokens (background, surface, border and text colors) are CSS variables at the top of `src/index.css`.

### Contact form (EmailJS)

Copy `.env.example` to `.env.local` and fill in `VITE_SERVICE_ID`, `VITE_TEMPLATE_ID` and `VITE_PUBLIC_KEY`. On Vercel, add the same variables in the project settings. The template receives `name`, `email` and `message`.

## Scripts

| Command           | Description |
| ----------------- | ----------- |
| `npm run dev`     | Start the dev server |
| `npm run build`   | Build for production |
| `npm run preview` | Preview the production build |
| `npm run lint`    | Run ESLint |
