# Demo App

A product catalogue demo built with Next.js, React and Material UI. It includes a searchable product list, product detail pages, reusable components documented in Storybook, and a Jest + Testing Library test suite.

## Features

- Searchable product list (case-insensitive, matches name and description)
- Product detail pages at `/products/[id]` with per-page metadata and a custom not-found page
- Reusable, generic building blocks: `SearchableList`, `useSearch`, `ProductCard`, `ProgressStepper`, `LinkButton`
- Accessible by default: role-based queries in tests, `progressbar` semantics on the stepper, and the Storybook a11y addon
- Linting, formatting and type-checking enforced locally

## Tech stack

- **Framework:** [Next.js](https://nextjs.org/) 16 (App Router) with React 19
- **UI:** [MUI (Material UI)](https://mui.com/) 7 with Emotion
- **Language:** TypeScript 6
- **Testing:** Jest 30, React Testing Library, `user-event`, `jest-dom`
- **Linting and formatting:** ESLint 9 (typescript-eslint, React, React Hooks, Next.js configs) with Prettier
- **Component development:** Storybook 10 (`@storybook/nextjs-vite`, a11y addon)
- **Git hooks:** Husky

## Getting started

### Prerequisites

- Node.js 20.9 or later
- npm

### Installation

```bash
npm install
```

This also runs the `prepare` script, which sets up the Husky git hooks (it needs the project to be a git repository).

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Script                    | Description                                                       |
| ------------------------- | ----------------------------------------------------------------- |
| `npm run dev`             | Start the Next.js development server                              |
| `npm run build`           | Create a production build                                         |
| `npm start`               | Serve the production build                                        |
| `npm run typecheck`       | Type-check the project with `tsc --noEmit`                        |
| `npm run lint`            | Lint the project with ESLint                                      |
| `npm run lint:fix`        | Lint and automatically fix problems                               |
| `npm test`                | Run the Jest test suite                                           |
| `npm run test:watch`      | Run Jest in watch mode                                            |
| `npm run test:coverage`   | Run Jest and generate a coverage report                           |
| `npm run storybook`       | Start Storybook at [http://localhost:6006](http://localhost:6006) |
| `npm run build-storybook` | Build a static Storybook                                          |
| `npm run precommit`       | Type-check and run tests serially (used by the git hook)          |

## Routes

| Route            | Description                                                          |
| ---------------- | -------------------------------------------------------------------- |
| `/`              | Searchable product list                                              |
| `/products/[id]` | Product detail page, statically generated, with its own metadata     |

Unknown product IDs render a custom not-found page.

## Testing

Tests use Jest with the `jsdom` environment and React Testing Library.

```bash
npm test                 # run all tests once
npm run test:watch       # re-run on file changes
npm run test:coverage    # include coverage output
```

Guidelines:

- Query by accessible role and name (`getByRole`) before falling back to text.
- Use small inline fixtures instead of the real product data, so tests don't break when the data changes.
- Use `userEvent` rather than `fireEvent` for user interactions.

## Linting and formatting

ESLint is configured with typescript-eslint, React, React Hooks and Next.js rules, plus Prettier (`eslint-plugin-prettier` and `eslint-config-prettier`) so formatting issues show up as lint errors.

```bash
npm run lint        # report problems
npm run lint:fix    # fix what can be fixed automatically
```

## Storybook

```bash
npm run storybook
```

Stories let you develop and review components in isolation. The a11y addon flags accessibility issues in the Storybook panel.

## Git hooks

Husky is installed through the `prepare` script. Before each commit, the project should pass:

```bash
npm run typecheck && npm test -- --runInBand
```

This is available as `npm run precommit`. To have it run automatically, make sure `.husky/pre-commit` calls it:

```bash
npm run precommit
```

To also enforce linting, add `npm run lint &&` to the start of the `precommit` script.

## Project structure

```
src/
├── app/          # Next.js App Router (layout, providers, pages, product routes)
├── components/   # UI components (ProductList, ProductCard, SearchableList,
│                 #   ProgressStepper, LinkButton, Button, ...)
├── hooks/        # Custom hooks (useSearch, useProductSearch)
├── data/         # Static demo data
├── types/        # Shared TypeScript types
└── utils/        # Helpers (e.g. sx-merge)
```

Imports use the `@/` alias, for example `@/src/components/ProductCard`.

## License

Private project. Not licensed for redistribution.
