# Basic Project Setup

## 1. Initialize Project

Initialize the project by creating a \`package.json\` file:
\`\`\`bash
npm init
\`\`\`

## 2. Set Entry Point

Set the entry point of your application to:
\`\`\`
./dist/server.ts
\`\`\`

## 3. Install Express

Install Express by referring to the [Express documentation](https://expressjs.com/):
\`\`\`bash
npm i express
\`\`\`

## 4. Install TypeScript

Install TypeScript as a dev dependency:
\`\`\`bash
npm i typescript --save-dev
\`\`\`

## 5. Install Required Packages

Install the following packages for your project:
\`\`\`bash
npm i cors dotenv mongoose
\`\`\`

## 6. Create a \`.gitignore\` File

- Create a \`.gitignore\` file.
- Use the [Gitignore Generator](https://mrkandreev.name/snippets/gitignore-generator/#Node) to copy the appropriate \`.gitignore\` rules for a Node.js project.

## 7. Create File and Folder Structure

Create the following file and folder structure:
\`\`\`
└─ .
├─ package-lock.json
├─ package.json
├─ public
└─ src
├─ app
├─ app.ts
└─ server.ts
\`\`\`

## 8. Initialize TypeScript Configuration

Run the following command to create \`tsconfig.json\`:
\`\`\`bash
tsc --init
\`\`\`
Then update the \`tsconfig.json\`:

- Set \`rootDir: "./src"\`
- Set \`outDir: "./dist"\`

## 9. Express "Hello World" Setup

Follow the [Express Hello World example](https://expressjs.com/en/starter/hello-world.html) to set up a basic server.

## 10. CommonJS Import Syntax

Install TypeScript types for Express:
\`\`\`bash
npm i --save-dev @types/express
\`\`\`

## 11. Running the Project

### Using Nodemon

Install \`nodemon\` if it's not installed already:
\`\`\`bash
npm i -D nodemon
\`\`\`

#### Running the Project:

1. Open two terminal windows.
2. In the first terminal, run TypeScript in watch mode:
   \`\`\`bash
   tsc -w
   \`\`\`
3. In the second terminal, use \`nodemon\` to run the compiled JavaScript:
   \`\`\`bash
   nodemon ./dist/server.js
   \`\`\`

## 12. Alternative: Use \`ts-node-dev\`

Follow these steps to use \`ts-node-dev\` for development:

1. Install \`ts-node-dev\`:
   \`\`\`bash
   npm i ts-node-dev
   \`\`\`
2. Run the application:
   \`\`\`bash
   ts-node-dev --respawn --transpile-only ./src/server.ts
   \`\`\`

## 13. Add Dev Script in \`package.json\`

Create a script to run the project using \`ts-node-dev\`:
\`\`\`json
"scripts": {
"start:dev": "ts-node-dev --respawn --transpile-only ./src/server.ts",
"start:prod": "nodemon ./dist/server.js"
}
\`\`\`

## 14. Setup \`ConnectDB\`

Create the following folder structure to set up the database connection:
\`\`\`
├─ src
│ ├─ app
│ ├─ app.ts
│ ├─ config
│ │ └─ env.config.ts
│ ├─ db
│ │ └─ ConnectDB.ts
│ └─ server.ts
└─ tsconfig.json
\`\`\`

## 15. Set Up ESLint for TypeScript

Follow the [ESLint + TypeScript setup guide](https://typescript-eslint.io/getting-started):

1. Install ESLint and related packages:
   \`\`\`bash
   npm install --save-dev eslint @eslint/js @types/eslint\_\_js typescript typescript-eslint
   \`\`\`
2. Create an ESLint config file (\`eslint.config.mjs\`):
   \`\`\`bash
   node --eval "fs.writeFileSync('eslint.config.mjs')"
   \`\`\`
3. Paste the following into the \`eslint.config.mjs\` file:
   \`\`\`javascript
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
   \`\`\`

4. Add ESLint scripts in \`package.json\`:
   \`\`\`json
   "scripts": {
   "lint": "npx eslint src",
   "lint:fix": "npx eslint src --fix"
   }
   \`\`\`

## 16. Prettier Setup

Refer to the [Prettier documentation](https://prettier.io/docs/en/install) for setting up Prettier:

1. Install Prettier:
   \`\`\`bash
   npm install --save-dev --save-exact prettier
   \`\`\`

2. Create a \`.prettierrc\` file:
   \`\`\`bash
   node --eval "fs.writeFileSync('.prettierrc','{}\\n')"
   \`\`\`

3. Paste the following into the \`.prettierrc\` file:
   \`\`\`json
   {
   "singleQuote": false,
   "bracketSpacing": true,
   "tabWidth": 2,
   "trailingComma": "es5",
   "semi": true
   }
   \`\`\`

4. Create a \`.prettierignore\` file:
   \`\`\`bash
   node --eval "fs.writeFileSync('.prettierignore','# Ignore artifacts:\\nbuild\\ncoverage\\n')"
   \`\`\`

5. Add Prettier scripts in \`package.json\`:
   \`\`\`json
   "scripts": {
   "prettier": "prettier --ignore-path .gitignore --write src",
   "prettier:fix": "prettier --write src"
   }
   \`\`\`
