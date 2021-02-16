# Boilerplate configurated project: Node with TypeScript, Nodemon, Pug, ESLint + Prettier, Git Hooks with Husky + lint-staged

## Features

- Node
- TypeScript
- Nodemon reloads on change with the TS engine
- .env for secrets
- Express server boilerplate
- Pug templates returned from endpoints
- ESLint with Prettier
- Husky with lint-staged

Will be dockerized

## Misc

If problems with ports "already in use", Linux:
> lsof -i :3000 -t | xargs kill
