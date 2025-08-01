# Svelte Monorepo Template

## Overview

A modern monorepo template with Turborepo, SvelteKit, SkeletonUI (with TailwindCSS), TypeScript and pnpm.

> This template is based on Vercel's [Turborepo and SvelteKit starter](https://vercel.com/templates/svelte/turborepo-sveltekit-starter).

## Quick Start

1. Clone the repository

   ```bash
   git clone https://github.com/adidoesnt/monorepo-template.git
   cd monorepo-template
   ```

2. Install `pnpm` (if not already installed)

   ```bash
   curl -fsSL https://get.pnpm.io/install.sh | sh
   ```

3. Install dependencies

   ```bash
   pnpm install
   ```

4. Start the development server

   ```bash
   # run all services
   pnpm dev

   # or run the services individually
   pnpm dev --filter=docs
   pnpm dev --filter=web
   ```

## Structure

- `apps`
  - `web` - Mock dashboard app
  - `docs` - Documentation site
- `packages`
  - `ui` - Shared components
  - `tailwind-config` - Theme configuration
  - `eslint-config` - ESLint configuration
  - `typescript-config` - TypeScript configuration

## Technologies

### [Turborepo](https://turbo.build/repo/docs)

- Fast, incremental builds for monorepos
- Intelligent caching and parallel execution
- Built-in task orchestration and dependency management
- Optimised for TypeScript and modern tooling

### [SvelteKit](https://kit.svelte.dev/)

- Full-stack web framework with file-based routing
- Server-side rendering and static site generation
- Built-in API routes and form handling
- Excellent developer experience with hot reloading

### [SkeletonUI](https://www.skeleton.dev/)

- Comprehensive UI component library for SvelteKit
- Built on TailwindCSS with consistent design system
- Dark mode support and accessibility features
- Extensive component library with interactive elements

### [TailwindCSS](https://tailwindcss.com/)

- Utility-first CSS framework for rapid development
- Highly customisable with design system support
- Optimised for production with purged unused styles
- Responsive design utilities and component patterns

### [TypeScript](https://www.typescriptlang.org/)

- Static type checking for JavaScript
- Enhanced IDE support with IntelliSense
- Better refactoring and error detection
- Gradual adoption with optional typing

### [pnpm](https://pnpm.io/)

- Fast, disk space efficient package manager
- Strict dependency resolution and security
- Workspace support for monorepos
- Compatible with npm ecosystem

## Contributing

Feel free to contribute to this by forking the repository and submitting a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Vercel](https://vercel.com/)
- [Turborepo](https://turbo.build/repo/docs)
- [SvelteKit](https://kit.svelte.dev/)
- [SkeletonUI](https://www.skeleton.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [pnpm](https://pnpm.io/)
