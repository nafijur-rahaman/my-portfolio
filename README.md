# Md. Nafijur Rahaman — Portfolio

A fast, accessible, fully config-driven developer portfolio built with **React 19**, **Vite**, **Tailwind CSS v4** and **Motion**.

## Features

- **Editorial design**: Instrument Serif display type with Geist and Geist Mono, numbered sections, projects shown as case studies in browser frames, and a warm paper palette with a subtle grain.
- **One-file customization**: all content lives in [`src/portfolio.config.js`](src/portfolio.config.js).
- **Theming**: light/dark mode plus accent color presets, saved per visitor. You can add your own presets.
- **Reorderable sections**: reorder or remove sections in the config. Their titles, the navbar and the numbering update to match.
- **Projects**: category filters, "featured" labels, and an accessible case-study modal (Esc to close, focus handling, scroll lock).
- **Contact**: large email link with a copy button, plus a form that sends through EmailJS when configured. Otherwise the form opens the visitor's email app.
- **Performance and accessibility**: optimized WebP images, `prefers-reduced-motion` support, skip link, focus rings and scroll-spy navigation.

## Getting started

```bash
npm install
npm run dev
```

## Customizing

Everything is in `src/portfolio.config.js`:

| Export       | What it controls |
| ------------ | ---------------- |
| `theme`      | Default mode (`light` / `dark` / `system`), default accent, accent presets, grain texture on/off, visitor theme switcher on/off |
| `profile`    | Name, title, photo, location, time zone (for the local clock), email, resume path, availability badge |
| `socials`    | Social links (any [react-icons](https://react-icons.github.io/react-icons) icon) |
| `sections`   | Which sections appear and in what order, plus each one's label, title and intro |
| `hero`       | Headline, description, CTAs |
| `about`      | Bio paragraphs, stats, "What I do" services, journey timeline |
| `skills`     | Skill groups with icons and brand colors |
| `experience` | Jobs, with achievements and tech tags |
| `projects`   | Projects, with images, stack, features, links, category and `featured` |
| `footer`     | Footer tagline |

Tips:

- Wrap words in `*asterisks*` in the hero headline or section titles to set them in italic accent type. In about paragraphs, asterisks make the words bold.
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
