# Somil Raj Portfolio

A personal portfolio site for Somil Raj, built with TanStack Start, React, TypeScript, Vite, and Tailwind CSS. The site presents Somil's selected projects, skills, honors, education, and contact links in an editorial portfolio layout.

## Overview

This portfolio is a single-page experience with sections for:

- Hero introduction and availability status
- About summary
- Skills grouped by discipline
- Selected work, including project links and tech stacks
- Honors and credentials
- Contact links

The main page content lives in `src/routes/index.tsx`, and the visual system lives in `src/styles.css`.

## Tech Stack

- React 19
- TypeScript
- TanStack Start
- TanStack Router
- TanStack Query
- Vite
- Tailwind CSS 4
- Radix UI primitives
- shadcn/ui-style components
- lucide-react icons

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server. |
| `npm run build` | Creates a production build. |
| `npm run build:dev` | Creates a development-mode build. |
| `npm run preview` | Serves the production build locally. |
| `npm run lint` | Runs ESLint across the project. |
| `npm run format` | Formats files with Prettier. |

## Project Structure

```text
.
├── public/
│   └── s-logo.png
├── src/
│   ├── components/ui/      # Reusable UI primitives
│   ├── hooks/              # Shared React hooks
│   ├── lib/                # Utilities and error handling helpers
│   ├── routes/             # TanStack file-based routes
│   ├── router.tsx          # Router setup
│   ├── server.ts           # Server entry wrapper
│   ├── start.ts            # TanStack Start setup
│   └── styles.css          # Tailwind theme and custom utilities
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Updating Content

Most portfolio content is defined in `src/routes/index.tsx`:

- `SKILLS` controls the skill groups.
- `PROJECTS` controls selected work.
- `HONORS` controls awards, education, and credentials.
- `Hero`, `About`, and `Contact` contain the main profile copy and links.

The design tokens, colors, fonts, and custom CSS utilities are in `src/styles.css`.

## Routing Notes

Routes are handled by TanStack Router using file-based routing. The root route is `src/routes/__root.tsx`, and the homepage is `src/routes/index.tsx`. The generated route tree in `src/routeTree.gen.ts` should not be edited manually.

## Deployment

Any host that supports Vite/TanStack Start builds can run this project. A typical deployment flow is:

```bash
npm install
npm run build
```

Then deploy the generated build output using the target platform's Node/Vite hosting instructions.

## Contact

- GitHub: [SomilDaswani](https://github.com/SomilDaswani)
- LinkedIn: [somil-raj](https://linkedin.com/in/somil-raj)
- Email: [somilraj34@gmail.com](mailto:somilraj34@gmail.com)
