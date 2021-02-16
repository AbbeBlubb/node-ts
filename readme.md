# Boilerplate configurated project: Node with TypeScript, Nodemon, Pug, ESLint + Prettier, Git Hooks with Husky + lint-staged

- Node
- TypeScript
- Nodemon reloads on change with the TS engine
- Express server
- Endpoints returns Pug/HTML files
- ESLint with Prettier
- Husky with lint-staged

Will be dockerized

If problems with ports "already in use", Linux:
lsof -i :3000 -t | xargs kill
