# abgn.me

A personal website and blog built with [TanStack Start](https://tanstack.com/start), [React 19](https://react.dev/), and [Tailwind CSS v4](https://tailwindcss.com/).

## Tech Stack

- **Framework**: TanStack Start (React meta-framework)
- **Routing**: TanStack Router with file-based routing
- **Content**: MDX blog posts via [content-collections](https://www.content-collections.dev/)
- **Styling**: Tailwind CSS v4 with Geist font
- **Runtime**: [Bun](https://bun.sh/)
- **Testing**: Vitest

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed on your machine

### Installation

```bash
bun install
```

### Development

```bash
bun --bun run dev
```

### Build

```bash
bun --bun run build
```

### Preview Production Build

```bash
bun --bun run serve
```

### Run Tests

```bash
bun --bun run test
```

## Project Structure

```
src/
├── routes/                      # File-based routing
│   ├── __root.tsx               # Root layout
│   ├── index.tsx                # Home page w/ posts, projects, inspiration links
│   ├── inspiration.$category.tsx# Dynamic inspiration galleries powered by Cloudinary
│   ├── posts.$slug.tsx          # Blog post pages rendered from MDX
│   └── uses.tsx                 # Uses/setup page
├── posts/                       # MDX blog posts
├── data/                        # Data fetching functions
└── components/                  # React components
```

## Pages

- `/` – Landing page with hero intro, social links, latest posts, featured projects, and quick access to Cloudinary-powered inspiration categories.
- `/uses` – Long-form article detailing the software and hardware setup, rendered with the shared `ArticleLayout` component.
- `/inspiration/:category` – Dynamic galleries (e.g., `/inspiration/ui`) that fetch Cloudinary folders on the server, offer zoom controls, and render masonry grids of inspiration images.
- `/posts/:slug` – MDX blog posts loaded via content-collections, complete with SEO metadata, publication dates, and zoomable inline media.

## Writing Blog Posts

Blog posts are MDX files in `src/posts/` with the following frontmatter:

```yaml
---
title: Post Title
date: 2024-01-01
author: Author Name
excerpt: Optional excerpt
image: /optional-image.jpg
tags:
  - optional
  - tags
---

Your content here...
```

## License

MIT
