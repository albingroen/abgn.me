# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun install          # Install dependencies
bun --bun run dev    # Start development server
bun --bun run build  # Build for production
bun --bun run test   # Run tests with Vitest
```

## Architecture

This is a personal website/blog built with TanStack Start (React meta-framework) using:

- **Routing**: TanStack Router with file-based routing in `src/routes/`
- **Content**: MDX blog posts managed via content-collections
- **Styling**: Tailwind CSS v4 with Geist font and stone color palette mapped to gray

### Key Files

- `content-collections.ts` - Defines the posts collection schema (title, date, author, excerpt, image, tags)
- `src/routes/__root.tsx` - Root layout with HTML shell and footer
- `src/data/posts.ts` - Post fetching functions using `allPosts` from content-collections
- `src/data/projects.ts` - Static project data

### Content Structure

Blog posts are MDX files in `src/posts/` with frontmatter:
```yaml
title: string (required)
date: string (required)
author: string (required)
excerpt: string (optional)
image: string (optional)
tags: string[] (optional)
```

### Path Aliases

- `@/*` maps to `./src/*`
- `content-collections` maps to `./.content-collections/generated`
