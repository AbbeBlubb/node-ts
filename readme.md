# Server boilerplate: Docker, Node, TypeScript, Nodemon, Husky, lint-staged, Eslint, Prettier, Pug, dotenv, Jest, TestCafé

## Features

- Dockerized environment
- Node
- TypeScript
- Jest test runner with ts-jest as preset
- Nodemon reloads on change with the TS engine
- .env for secrets
- Express server boilerplate
- Pug templates returned from endpoints
- ESLint with Prettier
- Husky with lint-staged

## Start dev-mode

Using Docker with volumes for Nodemon reloads:

```nodejs
> docker-compose up
```

Local machine:

```nodejs
> npm install
> npm run dev
```

## Tests

Unit tests:

```nodejs
> npm test // Run and get coverage
> npm test:watch // Test watcher
```

E2E-tests:

```nodejs
> npx testcafe chrome // With full browser
> npx testcafe --live --disable-screenshots // No screenshots when live mode
> npx testcafe chrome --disable-screenshots // with .debug()
```

## Misc

- If problems with ports "already in use", Linux:

    ```bash
    > lsof -i :6000 -t | xargs kill
    ```

- If changing the port number in .env, remember to change the port mapping in docker-compose.yml
