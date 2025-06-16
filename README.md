## Linting

Running `pnpm lint` triggers a `no-console` lint error to show that linting works.

## Knip

```
$ pnpm dlx knip
Unused files (1)
eslint.config.mjs
Unused devDependencies (3)
tailwindcss         package.json:22:6
eslint-config-next  package.json:23:6
@eslint/eslintrc    package.json:24:6
```

Marks `eslint.config.mjs` as unused even though Next.js uses this file
