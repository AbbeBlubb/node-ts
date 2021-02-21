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

## Preload dotenv file

### Problem

.env vars are undefined in the app, despite being imported and loaded first thing in the app:

```nodejs
import * as dotenv from "dotenv";
dotenv.config();
```

### Solution

If using import in the app instead of require, preload the dotenv file when starting the app:

```nodejs
> node -r dotenv/config app.js
```

When using Nodemon, do this in the Nodemon config. In nodemon.json -> execMap -> ts, add:

```JavaScript
-r dotenv/config
 ```

Then, you don't need to require and load dotenv in your application code. So delete:

```nodejs
import * as dotenv from "dotenv";
dotenv.config();
```


## If port "already in use"

- If problems with port "already in use", Linux:

```bash
> lsof -i :6000 -t | xargs kill
```

- If changing the port number in .env, remember to change the port mapping in docker-compose.yml
