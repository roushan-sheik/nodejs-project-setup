# Node Js Project Setup

### 1. initialization

```
 npm init
```

### set entry point

```
./dist/server.ts
```

### 2. go to express docs and install

```
    npm i express
```

### 3. go to type script docs and install

```
npm i typescript --save-dev
```

### 4. install those packeges

```
 npm i cors dot env mongoose

```

### 5. create a

```
.gitignore file
```

### 6. go to this website and copy the ignore code

🔗 Links: https://mrkandreev.name/snippets/gitignore-generator/#Node

### 7. create this files and folders

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

### 8. initialize typecript > tsc --init > set >>> rootDir: "./src" & outDir:"./dist"

### 9. go to express for hello world setup

🔗 Links: https://expressjs.com/en/starter/hello-world.html

### 10. use common js import syntax

```
    npm i --save-dev @types/express
```

<===============|| run the project || ===============>

### 11. run the project

// basic way

    install nodemon if you already installed it dont need to install again.
    ```
    npm i -D nodemon
    ```
      1. open two terminal

      2. for watching ts file
    ```
     tsc -w
    ```
     2. now run js code with nodemon

    ```
    nodemon ./dist/server.js
    ```

<===============|| Another final solution for run the project || ===============>

### 12. run the project wit ts-node-dev

    1. https://www.npmjs.com/package/ts-node-dev

    2. install

    ```
     npm i ts-node-dev
    ```

    > > run your app by this command

    ```
     ts-node-dev --respawn --transpile-only ./src/server.ts
    ```

### 13. write a script for this big command inside your packege.json file

```
"start:dev": "ts-node-dev --respawn --transpile-only ./src/server.ts"

```

i. production code run command

```
"start:prod": "nodemon ./dist/server.js"
```

### 14. make ConnectDB()

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

### 15. Setup Typescript Eslint

🔗 Links: https://typescript-eslint.io/getting-started \* run this command

<!-- install -->

```
    npm install --save-dev eslint @eslint/js @types/eslint__js typescript typescript-eslint
```

<!-- run -->

- run tis command for creating eslint. config.mjs file

  > eslint.config.mjs

- paste this code

```
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
   ignores: [".env", "./dist", "node_modules"],
 }
);
```

4. create script for eslint inside packege.json file

```
    "lint": "npx eslint src",
    "lint:fix": "npx eslint src --fix",
```

### 16. prettier setup. > go to

```
https://prettier.io/docs/en/install
```

1. and install

```
npm install --save-dev --save-exact prettier
```

2. run tis command for creating .prettierrc file

```
node --eval "fs.writeFileSync('.prettierrc','{}\n')"
```

.. and paste it

```
{
"singleQuote": false,
"bracketSpacing": true,
"tabWidth": 2,
"trailingComma": "es5",
"semi": true
}

```

3.  run tis command for creating .prettierignore file

```
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

```
    "prettier": "prettier --ignore-path .gitignore --write src",
    "prettier:fix": "prettier --write src",
```

## Final File and Folder Structur

```
└─ .
   ├─ .env
   ├─ .env.sample
   ├─ .prettierignore
   ├─ .prettierrc
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
