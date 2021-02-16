# Boilerplate configurated project: Node with TypeScript, Nodemon, dotenv, Pug, ESLint + Prettier, Git Hooks with Husky + lint-staged

## Features

- Dockerized environment
- Node
- TypeScript
- Nodemon reloads on change with the TS engine
- .env for secrets
- Express server boilerplate
- Pug templates returned from endpoints
- ESLint with Prettier
- Husky with lint-staged

## Start

```nodejs
> docker-compose up
```

or

```nodejs
> npm install
> npm run dev
```

## Misc

- If problems with ports "already in use", Linux:

    ```bash
    > lsof -i :3000 -t | xargs kill
    ```

- If changing the port number in .env, remember to change the port mapping in docker-compose.yml
