# Demo App

A product catalogue demo built with Next.js, React and Material UI. It includes a searchable product list, component stories in Storybook, and a Jest + Testing Library test suite.

## Tech stack

- **Framework:** [Next.js](https://nextjs.org/) 16 with React 19
- **UI:** [MUI (Material UI)](https://mui.com/) 7 with Emotion
- **Language:** TypeScript 6
- **Testing:** Jest 30, React Testing Library, `user-event`, `jest-dom`
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

This also runs the `prepare` script, which sets up the Husky git hooks.

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
| `npm test`                | Run the Jest test suite                                           |
| `npm run test:watch`      | Run Jest in watch mode                                            |
| `npm run test:coverage`   | Run Jest and generate a coverage report                           |
| `npm run storybook`       | Start Storybook at [http://localhost:6006](http://localhost:6006) |
| `npm run build-storybook` | Build a static Storybook                                          |
| `npm run precommit`       | Type-check and run tests serially (used by the git hook)          |

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

## Project structure

```
src/
├── components/   # UI components (ProductList, ProductCard, Button, ...)
├── hooks/        # Custom hooks (e.g. useProductSearch)
├── data/         # Static demo data
└── types/        # Shared TypeScript types
```

## License

Private project. Not licensed for redistribution.
