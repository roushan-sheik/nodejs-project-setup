# Node Js Project Setup

## 1. initialization

```
 npm init
```

### Set entry point

```
./dist/server.js
```

## 2. after initialization go to express docs and install

```
    npm i express
```

## 3. go to typescript docs and install

```
npm i typescript --save-dev
```

## 4. install those packages

```
 npm i cors dotenv mongoose

```

## 5. create a .gitignore file

```
.gitignore
```

## 6. go to this website and copy the ignore code

🔗 Links: https://mrkandreev.name/snippets/gitignore-generator/#Node

## 7. create this files and folders

```
└─ .
   ├─ package-lock.json
   ├─ package.json
   ├─ public
   └─ src
      ├─ app
      ├─ app.ts
      └─ server.ts

```

## 8. initialize typecript and set root and out directory

```
tsc --init
```

```ts
  rootDir: "./src",
  outDir: "./dist"
```

## 9. go to express for hello world setup

🔗 Links: https://expressjs.com/en/starter/hello-world.html

> app.js

```ts
import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export { app };
```

> server.ts

```ts
/* eslint-disable no-console */
import { app } from "./app";
import ConnectDB from "./db/ConnectDB";
import config from "./config";

ConnectDB()
  .then(() => {
    app.listen(config.PORT, () => {
      console.log("Global log:::::>", config.GLOBAL);
      console.log(
        `\n Application is running on port: http:localhost://${config.PORT}`
      );
    });
  })
  .catch((error) => {
    console.log("MongoDB Connectin Failed!!", error.message);
  });
```

> ConnectDB.ts

```ts
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from "mongoose";
import config from "../config";

const ConnectDB = async () => {
  try {
    const connectionState = mongoose.connection.readyState;
    if (connectionState === 1) {
      console.log("Database Already CONNECTED");
      return;
    }
    if (connectionState === 2) {
      console.log("Connecting to the DATABASE...");
      return;
    }
    const connectionInstance = await mongoose.connect(
      config.MONGO_URI as string,
      {
        dbName: config.DB_NAME,
      }
    );
    console.log(
      `\n MongoDB Connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error: any) {
    console.log("MongoDB Connection FAILED!", error.message);
    process.exit(1);
  }
};
export default ConnectDB;
```

> src/config/index.ts

```ts
import dotenvFlow from "dotenv-flow";
dotenvFlow.config();

export default {
  PORT: process.env.PORT,
  DB_NAME: process.env.DB_NAME,
  // mongodb connection string
  MONGO_URI: process.env.MONGO_URI,
};
```

> .env

```ts
PORT = "5000";
DB_NAME = "test-db";
MONGO_URI: "Put Your MongoDB Database Connection String Here";
```

## 10. use common js import syntax

```
    npm i --save-dev @types/express
```

<===============|| run the project || ===============>

## 11. run the project

#> basic way

1. install nodemon if you already installed it dont need to install again.
   ```
   npm i -D nodemon
   ```
2. open two terminal

3. for watching ts file

   ```
   tsc -w
   ```

   2. now run js code with nodemon

   ```
   nodemon ./dist/server.js
   ```

<===============|| Another final solution for run the project || ===============>

## 12. run the project wit ts-node-dev

🔗 Links https://www.npmjs.com/package/ts-node-dev

2. install

   ```
   npm i ts-node-dev
   ```

3. run your app by this command

   ```
   ts-node-dev --respawn --transpile-only ./src/server.ts
   ```

## 13. write a script for this big command inside your packege.json file

```ts
"start:dev": "ts-node-dev --respawn --transpile-only ./src/server.ts"

```

### Production code run command

```ts
"start:prod": "nodemon ./dist/server.js"
```

## 14. create some files and folders like this

```
   ├─ src
   │  ├─ app
   │  ├─ app.ts
   │  ├─ config
   │  │  └─ env.config.ts
   │  ├─ db
   │  │  └─ ConnectDB.ts
   │  └─ server.ts
   └─ tsconfig.json
```

## 15. Setup Typescript Eslint

🔗 Links: https://typescript-eslint.io/getting-started \* run this command

<!-- install -->

```
npm install --save-dev eslint @eslint/js @types/eslint__js typescript typescript-eslint
```

<!-- run -->

- run tis command for creating eslint. config.mjs file

  > eslint.config.mjs

- paste this code

```ts
import eslint from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
      "prefer-const": "error",
      "no-console": "warn",
      "no-var": "error",
      "no-mixed-spaces-and-tabs": "error",
    },
  },
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  {
    ignores: ["**/node_modules/", "**/dist/"],
  }
);
```

4. create script for eslint inside packege.json file

```ts
    "lint": "npx eslint src",
    "lint:fix": "npx eslint src --fix",
```

## 16. prettier setup. > go to

🔗 Links:
https://prettier.io/docs/en/install

1. and install

```
npm install --save-dev --save-exact prettier
```

2. run tis command for creating .prettierrc file

```ts
node --eval "fs.writeFileSync('.prettierrc','{}\n')"
```

### And paste it

```ts
{
"singleQuote": false,
"bracketSpacing": true,
"tabWidth": 2,
"trailingComma": "es5",
"semi": true
}

```

3.  run tis command for creating .prettierignore file

```ts
node --eval "fs.writeFileSync('.prettierignore','# Ignore artifacts:\nbuild\ncoverage\n')"
```

    4. paste this code

```
node_modules
dist
.env*
vendor/
/vendor
public/
.git
**/.git
package-lock.json
composer.lock
```

    5. make script for prettier inside packege.json

```ts
 "prettier": "npx prettier --ignore-path .gitignore --write src",
    "prettier:fix": "npx prettier --write src",
```

## Make sure you have all those scripts

```ts
  "scripts": {
    "lint": "npx eslint src ",
    "lint:fix": "npx eslint src --fix",
    "prettier": "npx prettier --ignore-path .gitignore --write src",
    "prettier:fix": "npx prettier --write src",
    "start:dev": "ts-node-dev --respawn --transpile-only ./src/server.ts",
    "start:prod": "nodemon ./dist/server.js",
    "build": "tsc",
    "test": "node testing.ts",

  }

```

## Final File and Folder Structur

```
└─ .
   ├─ .env
   ├─ .env.sample
   ├─ .prettierignore
   ├─ .prettierrc
   ├─ dist               # Production Code base
   │  ├─ app.js
   │  └─ server.js
   ├─ eslint.config.mjs
   ├─ package-lock.json
   ├─ package.json
   ├─ public
   ├─ README.MD
   ├─ src
   │  ├─ app
   │  ├─ app.ts
   │  ├─ config
   │  │  └─ env.config.ts
   │  ├─ db
   │  │  └─ ConnectDB.ts
   │  └─ server.ts
   └─ tsconfig.json

```

================>|| Basic Setup done ||<==================

# Advenced Setup

## Huskey and Lint-Staged Setup

> install

```
npm install lint-staged husky --save-dev

```

> initialization

```
npx husky init
```

## Follow this Moduler pattern

```
└─ .
   ├─ .env.development
   ├─ .env.example
   ├─ .env.production
   ├─ .husky
   │  ├─ pre-commit
   ├─ .prettierignore
   ├─ .prettierrc
   ├─ docker
   │  └─ Dockerfile
   ├─ ecosystem.config.js
   ├─ eslint.config.mjs
   ├─ logs
   ├─ nginx
   │  ├─ http.conf
   │  └─ https.conf
   ├─ nodemon.json
   ├─ package-lock.json
   ├─ package.json
   ├─ public
   ├─ README.MD
   ├─ script
   ├─ src
   │  ├─ app
   │  │  ├─ constants
   │  │  ├─ errors
   │  │  ├─ interfaces
   │  │  ├─ middlewares
   │  │  ├─ modules
   │  │  │  ├─ Auth
   │  │  │  │  ├─ auth.controller.ts
   │  │  │  │  ├─ auth.interface.ts
   │  │  │  │  ├─ auth.route.ts
   │  │  │  │  ├─ auth.service.ts
   │  │  │  │  └─ auth.validation.ts
   │  │  │  └─ User
   │  │  │     ├─ user.controller.ts
   │  │  │     ├─ user.interface.ts
   │  │  │     ├─ user.route.ts
   │  │  │     ├─ user.service.ts
   │  │  │     └─ user.validation.ts
   │  │  ├─ routes
   │  │  ├─ utils
   │  │  └─ zod
   │  ├─ app.ts
   │  ├─ config
   │  │  └─ index.ts
   │  ├─ db
   │  │  └─ ConnectDB.ts
   │  ├─ server.ts
   │  └─ views
   ├─ test
   ├─ testing.ts
   └─ tsconfig.json

```

## Configration

### Go to dotenv-flow:

🔗 Links: https://www.npmjs.com/package/dotenv-flow

```
npm i dotenv-flow

```

- Modify config file like this

```
   ├─ src
   │  ├─ app
   │  ├─ app.ts
   │  ├─ config
   │  │  └─ index.ts

```

```ts
import dotenvFlow from "dotenv-flow";
dotenvFlow.config();

export default {
  NODE_ENV: process.env.NODE_ENV,
  // Cors origin
  CORS_ORIGIN: process.env.CORS_ORIGIN,
  PORT: process.env.PORT,
  DB_NAME: process.env.DB_NAME,
  // mongodb connection string
  MONGO_URI: process.env.MONGO_URI,
  // bcrypt salt
  BCRYPT_SALT: process.env.BCRYPT_JS_SALT_ROUNDS,
  // json webtoken secret
  JWT_ACCESS_SECRET: process.env.JWT_ACCESS_TOKEN_SECRET,
  JWT_ACCESS_EXPIRY: process.env.JWT_ACCESS_TOKEN_EXPIRY,
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_TOKEN_SECRET,
  JWT_REFRESH_EXPIRY: process.env.JWT_REFRESH_TOKEN_EXPIRY,
  GLOBAL: process.env.GlOBAL,
};
```

### And corss env

🔗 Links: https://www.npmjs.com/package/cross-env

```
npm i cross-env

```

- Modify scripts

```ts
  "start:dev": "cross-env  NODE_ENV=development  ts-node-dev --respawn --transpile-only ./src/server.ts",
    "start:prod": "cross-env NODE_ENV=production nodemon ./dist/server.js",
```
