# Node Js Project Setup

## 1. Initialization

```
 npm init
```

### Set entry point

```
./dist/server.js
```

## 2. After initialization go to express docs and install

```
    npm i express
```

## 3. Go to typescript docs and install

```
npm i typescript --save-dev
```

## 4. Install those packages

```
 npm i cors dotenv mongoose

```

## 5. Create a .gitignore file

```
.gitignore
```

## 6. Go to this website and copy the ignore code

🔗 Links: https://mrkandreev.name/snippets/gitignore-generator/#Node

## 7. Create this files and folders

```
└─ .
   ├─ package-lock.json
   ├─ package.json
   ├─ public
   └─ src
      ├─ app
      ├─ app.ts
      └─ server.ts
      └─ config
          ├─ index.ts

   └─ .env


```

## 8. Initialize typecript and set root and out directory

```
tsc --init
```

```ts
  rootDir: "./src",
  outDir: "./dist"
```

## 9. Hello World Setup

🔗 Links: https://expressjs.com/en/starter/hello-world.html

> src/app.js

```ts
import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export { app };
```

> src/server.ts

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

> src/db/ConnectDB.ts

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

## 10. Run this command

```
    npm i --save-dev @types/express
```

<=============== || RUN THE PROJECT || ===============>

## 11. RUN THE PROJECT

1. Install nodemon if you already installed it don't need to install again.
   ```
   npm i -D nodemon
   ```
2. open two terminal

3. run this command for watching ts file

   ```
   tsc -w
   ```

   2. now run js code with nodemon

   ```
   nodemon ./dist/server.js
   ```

<===============|| FINAL SOLUTION FOR RUN THE PROJECT || ===============>

## 12. Run the project directly with ts-node-dev npm package

🔗 Links https://www.npmjs.com/package/ts-node-dev

2. install the package

   ```
   npm i ts-node-dev
   ```

3. now run your app by this command

   ```
   ts-node-dev --respawn --transpile-only ./src/server.ts
   ```

## 13. Make a COMMAND: Write a script for this big command inside your package.json file

```ts
"start:dev": "ts-node-dev --respawn --transpile-only ./src/server.ts"

```

### Make those commands in your package.json file

```ts
"build":"tsc-- watch"
```

```ts
"start:prod": "nodemon ./dist/server.js"
```

## 14. NOW RUN THE PROJECT

> Run this tow commands

```ts
npm run build
```

```ts
npm run start:prod
```

## 15. Eslint Typescript Setup

🔗 Links: https://typescript-eslint.io/getting-started

- run this command

<!-- install -->

```
npm install --save-dev eslint @eslint/js @types/eslint__js typescript typescript-eslint
```

- Inside your eslint.config.mjs file

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

- Create script for Eslint inside package.json file

```ts
    "lint": "npx eslint src",
    "lint:fix": "npx eslint src --fix",
```

## 16. Prettier setup. > go to

🔗 Links:
https://prettier.io/docs/en/install

- Prettier installation command

```
npm install --save-dev --save-exact prettier
```

- run tis command for creating .prettierrc file

```ts
node --eval "fs.writeFileSync('.prettierrc','{}\n')"
```

- And paste it

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

=====================>|| Basic Setup done ||<====================

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

## AsyncHandler

> src/app/utils/AsyncHandler.ts

```ts
/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import { NextFunction, Request, Response } from "express";

const AsyncHandler = (fn: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

export default AsyncHandler;
```

## Api Response

> src/app/utils/ApiResponse.ts

```ts
class ApiResponse<T> {
  private success: boolean;
  constructor(
    public statusCode: number,
    public data: T,
    public message: string = "Success"
  ) {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = statusCode < 400;
  }
}
export default ApiResponse;
```

## Custom ApiError

> src/app/utils/ApiError.ts

```ts
/* eslint-disable @typescript-eslint/no-explicit-any */

class ApiError extends Error {
  public success: boolean;
  public timeStamp: string;

  constructor(
    public statusCode: number,
    public message: string = "Internal Server Error!!",
    public errors: string[] | any[] = [],
    public data: any = undefined,
    public errorType: string = "General",
    public stack: string = ""
  ) {
    super(message);

    this.statusCode = statusCode;
    this.success = false; // by default false
    this.errors = errors;
    this.data = data;
    this.timeStamp = new Date().toISOString();
    this.errorType = errorType;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }

  //  format the error
  public toResponseFormat() {
    return {
      statusCode: this.statusCode,
      success: this.success,
      message: this.message,
      errors: this.errors,
      data: this.data,
      timestamp: this.timeStamp,
      errorType: this.errorType,
      stack: process.env.NODE_ENV === "production" ? undefined : this.stack, // প্রডাকশনে স্ট্যাক না দেখানো
    };
  }
}

export default ApiError;

// Input Data  ==================>
// 1. statusCode
// 2. message
// 3. errors
// 4. data
// 5. timestamp
// 6. stack

// // Output obj ================>
// 1. statusCode
// 2. message
// 3. errors
// 4. data
// 5. timestamp
// 6. success
// 7. errorType
// 8. stack
```

## Api Response

> src/app/utils/GlobalErrorObj.ts

```ts
import { StatusCodes } from "http-status-codes";
import { TErrorSources } from "../interfaces/error.interface";

class GlobalErrorObj {
  constructor(
    public statusCode: number = StatusCodes.INTERNAL_SERVER_ERROR,
    public message: string = "An unknown error occurred!",
    public errorSources: TErrorSources = [],
    public success: boolean = false
  ) {
    this.success = success;
    this.statusCode = statusCode;
    this.message = message;
    this.errorSources = errorSources;
  }
}
export default GlobalErrorObj;
```

## Global Error Handler

> src/app/middlewares/globalErrorHandler.ts

```ts
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

import { ErrorRequestHandler } from "express";
import { ICustomGlobalError } from "../interfaces/error.interface";
import { StatusCodes } from "http-status-codes";
import config from "../../config";
import handleValidationError from "../errors/handleValidationError";
import handleCastError from "../errors/handleCastError";
import { handleDuplicateError } from "../errors";
import { handleZodError } from "../errors/handleZodError";
import GlobalErrorObj from "../utils/GlobalErrorObj";

const globalErrorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  //? <====================|| Handle ApiError ||===================>
  let customGlobalError: ICustomGlobalError = {
    success: err.success || false,
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    message: err.message || "Internal Server Error!!",
    errorSources: [
      {
        path: "",
        message: err.message || "Something went wrong!",
      },
    ],
  };

  //? <====================|| Handle All The Errors ||===================>
  if (err.name === "ValidationError") {
    customGlobalError = handleValidationError(err);
  } else if (err?.name === "CastError") {
    customGlobalError = handleCastError(err);
  } else if (err?.code === 11000) {
    customGlobalError = handleDuplicateError(err)!;
  } else if (err?.name === "ZodError") {
    customGlobalError = handleZodError(err);
  } else if (err instanceof Error) {
    customGlobalError = new GlobalErrorObj(
      500,
      err?.message || customGlobalError.message,
      customGlobalError.errorSources
    );
  }
  //? <====================|| finally send the response ||===================>
  res.status(customGlobalError.statusCode).json({
    success: customGlobalError.success,
    message: customGlobalError.message,
    errorSources: customGlobalError.errorSources,
    stack: config.NODE_ENV === "development" ? err?.stack : null,
  });
};
export default globalErrorHandler;
```

## Mongoose Error Example

> src/app/errors/error.example.ts

```ts
// =======================>|| ValidationError Object || <========================>
//! ১. Validation Error
//? উদাহরণ: যদি কোনো ডকুমেন্টে ডিফাইন্ড স্কিমার ফিল্ডের জন্য ভুল ধরনের ডেটা প্রদান করা হয়,
//? অথবা প্রয়োজনীয় ফিল্ড না থাকে, তবে এই error দেখা দেয়।

export const ValidationError = {
  errors: {
    description: {
      // নির্দিষ্ট একটা ফিল্ড এর এরর হচ্ছে ValidatorError
      name: "ValidatorError",
      message: "Path `description` is required.",
      properties: {
        message: "Path `description` is required.",
        type: "required",
        path: "description",
      },
      kind: "required",
      path: "description",
    },
    title: {
      name: "ValidatorError",
      message: "Min length should be 6 characters",
      properties: {
        message: "Min length should be 6 characters",
        type: "minlength",
        minlength: 6,
        path: "title",
        value: "Ince",
      },
      kind: "minlength",
      path: "title",
      value: "Ince",
    },
  },
  _message: "Movie validation failed",
  name: "ValidationError",
  message:
    "Movie validation failed: description: Path `description` is required., title: Min length should be 6 characters",
};

//* আবার নাম্বার  এর জায়গা যখন আমরা স্টিং দিয়ে দেই তখন আমদের ValidationError এর
//* মাঝেে আমাদের ValidatorError এর সাথে CastError ও দেয় যেমন,
//! উদাহরণ:
//? ধরি আপনি একটি মডেলের viewCount নামক ফিল্ডে Number টাইপের ভ্যালু আশা করছেন,
//? কিন্তু আপনি সেখানে ভুলবশত একটি স্ট্রিং (যেমন "Hello") পাঠালেন।
//? একই সাথে আপনার স্কিমায় title ফিল্ডের মিনিমাম লেন্থ ৬ দেওয়া আছে,
//? কিন্তু আপনি সেখানে "Ince" পাঠালেন, যা ভ্যালিডেশন ফেল করবে।

export const ValidatorAndCastError = {
  errors: {
    viewCount: {
      stringValue: '"Hello"',
      valueType: "string",
      kind: "Number",
      value: "Hello",
      path: "viewCount",
      reason: {
        generatedMessage: true,
        code: "ERR_ASSERTION",
        actual: false,
        expected: true,
        operator: "==",
      },
      name: "CastError",
      message:
        'Cast to Number failed for value "Hello" (type string) at path "viewCount"',
    },
    title: {
      name: "ValidatorError",
      message: "Min length should be 6 characters",
      properties: {
        message: "Min length should be 6 characters",
        type: "minlength",
        minlength: 6,
        path: "title",
        value: "Incep",
      },
      kind: "minlength",
      path: "title",
      value: "Incep",
    },
  },
  _message: "Movie validation failed",
  name: "ValidationError",
  message:
    'Movie validation failed: viewCount: Cast to Number failed for value "Hello" (type string) at path "viewCount", title: Min length should be 6 characters',
};
//? NOTE: একের অধিক মিলে হচ্ছে ValidationError এরর

//* ======================>|| CastError Object || <======================>

//? ২. Cast Error
//? উদাহরণ: যখন MongoDB এর জন্য অনুপযুক্ত ধরনের ডেটা পাঠানো হয়,
//? যেমন একটি ObjectId ক্ষেত্রের জন্য ভুল ধরনের মান প্রদান করলে।

export const CastError = {
  stringValue: '"66c8106d0834e0496ca0c3"',
  valueType: "string",
  kind: "ObjectId",
  value: "66c8106d0834e0496ca0c3",
  path: "_id",
  reason: {},
  name: "CastError",
  message:
    'Cast to ObjectId failed for value "66c8106d0834e0496ca0c3" (type string) at path "_id" for model "Movie"',
};
//* =======================>|| Duplicate Key Error Object || <========================>

//? ৩. Duplicate Key Error (E11000)
//? উদাহরণ: যখন একটি ডকুমেন্টে এমন একটি ক্ষেত্র থাকে যেটি unique প্রপার্টি সহ
//? ডিফাইন করা আছে এবং সেই ক্ষেত্রে একই মান দিয়ে দ্বিতীয়বার ইনসার্ট করার চেষ্টা করা হয়।

export const DuplicateError = {
  errorResponse: {
    index: 0,
    code: 11000,
    errmsg:
      'E11000 duplicate key error collection: mongoose-ts.movies index: title_1 dup key: { title: "InceptionMovie" }',
    keyPattern: {
      title: 1,
    },
    keyValue: {
      title: "InceptionMovie",
    },
  },
  index: 0,
  code: 11000,
  keyPattern: {
    title: 1,
  },
  keyValue: {
    title: "InceptionMovie",
  },
};

//* ========================>|| CastError Object || <=========================>

//?      if (err.name === "ZodError") {
//?        console.log(err);
//?        res.status(400).json({ message: err?.issues });
//?      }

export const ZodError = {
  issues: [
    {
      code: "invalid_type",
      expected: "string",
      received: "undefined",
      path: ["releaseDate"],
      message: "Required",
    },
    {
      code: "invalid_type",
      expected: "string",
      received: "undefined",
      path: ["genre"],
      message: "Required",
    },
  ],
  addIssue: [Function()],
  addIssues: [Function()],
  errors: [
    {
      code: "invalid_type",
      expected: "string",
      received: "undefined",
      path: [Array],
      message: "Required",
    },
    {
      code: "invalid_type",
      expected: "string",
      received: "undefined",
      path: [Array],
      message: "Required",
    },
  ],
};

//! ====================> The End <======================
```

## Handle Cast Error

> src/app/errors/handleCastError.ts

```ts
import { Error as MongooseError } from "mongoose";
import { TErrorSources } from "../interfaces/error.interface";
import GlobalErrorObj from "../utils/GlobalErrorObj";

const handleCastError = (err: MongooseError.CastError) => {
  const errorSources: TErrorSources = [
    {
      path: err?.path,
      message: err?.message,
    },
  ];
  return new GlobalErrorObj(400, "Invalid ID", errorSources);
};

export default handleCastError;
```

## Handle Duplicate Error

> src/app/errors/handleDuplicateError.ts

```ts
import GlobalErrorObj from "../utils/GlobalErrorObj";

type TMongoDuplicateError = {
  code?: number;
  keyValue?: Record<string, string>;
};

const handleDuplicateError = (err: TMongoDuplicateError) => {
  const keyValue = err?.keyValue;
  if (keyValue) {
    const fields = Object.keys(keyValue);
    const errorSources = fields.map((field: string) => {
      return {
        path: field,
        message: `${keyValue[field]} is already exists!`,
      };
    });
    return new GlobalErrorObj(400, "Duplicate Error", errorSources);
  }
};
export default handleDuplicateError;
```

## Handle Validation Error

> src/app/errors/handleValidationError.ts

```ts
import { Error as MongooseError } from "mongoose";
import { TErrorSources } from "../interfaces/error.interface";
import GlobalErrorObj from "../utils/GlobalErrorObj";

const handleValidationError = (err: MongooseError.ValidationError) => {
  const errorSources: TErrorSources = Object.values(err.errors).map(
    (singleError: MongooseError.ValidatorError | MongooseError.CastError) => {
      return {
        path: singleError?.path,
        message: singleError?.message,
      };
    }
  );
  return new GlobalErrorObj(400, "Validation Error", errorSources);
};

export default handleValidationError;
```

## Handle Zod Error

> src/app/errors/handleZodError.ts

```ts
import { ZodError, ZodIssue } from "zod";
import GlobalErrorObj from "../utils/GlobalErrorObj";

export const handleZodError = (err: ZodError) => {
  const errorSources = err.errors.map((error: ZodIssue) => {
    return {
      path: error?.path[error.path.length - 1] as string,
      message: error?.message,
    };
  });
  return new GlobalErrorObj(400, "Zod Validation Error", errorSources);
};
```

## Zod Validate Request

> src/app/middlewares/zodValidateRequest.ts

```ts
import { ZodError, ZodIssue } from "zod";
import GlobalErrorObj from "../utils/GlobalErrorObj";

export const handleZodError = (err: ZodError) => {
  const errorSources = err.errors.map((error: ZodIssue) => {
    return {
      path: error?.path[error.path.length - 1] as string,
      message: error?.message,
    };
  });
  return new GlobalErrorObj(400, "Zod Validation Error", errorSources);
};
```

## Not Found Middleware

> src/app/middlewares/notFound.ts

```ts
import { StatusCodes } from "http-status-codes";
import ApiResponse from "../utils/ApiResponse";
import { RequestHandler } from "express";

const notFound: RequestHandler = (req, res) => {
  res
    .status(StatusCodes.NOT_FOUND)
    .json(new ApiResponse(StatusCodes.NOT_FOUND, "Not Found"));
};

export default notFound;
```

## Efficient Query

> Basic way

```ts
//? get all movies ========================>
const getAllMovie = async (payload: Record<string, string | unknown>) => {
  let searchTerm = "";
  if (payload.searchTerm) {
    searchTerm = payload.searchTerm as string;
  }
  const searchFields = ["title", "genre"];

  const searchedMovies = Movie.find({
    $or: searchFields.map((field: string) => {
      return {
        [field]: { $regex: searchTerm, $options: "is" },
      };
    }),
  });
  // Pagination
  const limit: number = Number(payload?.limit || 10);
  let skip: number = 0;

  if (payload?.page) {
    const page: number = Number(payload?.page || 1);
    skip = Number((page - 1) * limit);
  }

  const skipedQuery = searchedMovies.skip(skip);
  const limitQuery = skipedQuery.limit(limit);
  // Sorting ====================>
  let sortBy = "-releaseDate";
  if (payload?.sortBy) {
    sortBy = payload.sortBy as string;
  }
  const sortedItems = limitQuery.sort(sortBy);

  // field filtering  =========================>
  let fields = "";
  if (payload?.fields) {
    fields = (payload?.fields as string).split(",").join(" ");
    //OutputExample: 'title releaseDate'
  }
  const fieldQuery = sortedItems.select(fields);

  //* copied from original payload object ================>
  // and exclude query before resolve the promise
  const queryObj = { ...payload };
  const excludeFields = ["searchTerm", "limit", "page", "sortBy", "fields"];
  excludeFields.forEach((field: string) => delete queryObj[field]);

  // now resolve the promise ======================>
  const result = await fieldQuery.find(queryObj);

  return result;
};
```

### Final Efficient QueryBuilder Class

```ts
import { FilterQuery, Query } from "mongoose";

export class QueryBuilder<T> {
  public modelQuery: Query<T[], T>;
  public query: Record<string, unknown>;

  constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
    this.query = query;
    this.modelQuery = modelQuery;
  }
  //*   Search method =================================>
  public search(searchAbleFields: string[] = ["title"]) {
    let searchTerm = "";
    if (this.query.searchTerm) {
      searchTerm = this.query.searchTerm as string;
    }

    this.modelQuery = this.modelQuery.find({
      $or: searchAbleFields.map((field: string) => {
        return {
          [field]: { $regex: searchTerm, $options: "is" },
        } as FilterQuery<T>;
      }),
    });
    return this;
  }
  //*   Pagination Method =================================>
  public paginate() {
    const limit: number = Number(this.query?.limit || 10);
    let skip: number = 0;

    if (this.query?.page) {
      const page: number = Number(this.query?.page || 1);
      skip = Number((page - 1) * limit);
    }

    this.modelQuery = this.modelQuery.skip(skip);
    this.modelQuery = this.modelQuery.limit(limit);
    return this;
  }
  //*   Sorting Method =================================>
  public sort() {
    let sortBy = "";
    if (this.query?.sortBy) {
      sortBy = this.query.sortBy as string;
    }
    this.modelQuery = this.modelQuery.sort(sortBy);
    return this;
  }
  //*   Fields Filtering Method =================================>
  public fields() {
    let fields = "";
    if (this.query?.fields) {
      fields = (this.query?.fields as string).split(",").join(" ");
      //OutputExample: 'title releaseDate'
    }
    this.modelQuery = this.modelQuery.select(fields);
    return this;
  }
  //*   Filter Method =================================>
  public filter(excludeField?: string[]) {
    // copied from original payload object
    // and exclude query before resolve the promise
    const queryObj = { ...this.query };
    const excludeFields = excludeField || [
      "searchTerm",
      "limit",
      "page",
      "sortBy",
      "fields",
    ];
    excludeFields.forEach((field: string) => delete queryObj[field]);

    // now resolve the promise ======================>
    this.modelQuery = this.modelQuery.find(queryObj as FilterQuery<T>);
    return this;
  }
}

//  Example: new QueryBuilder(Movie.find({}), query)
```

### Uses Example

```ts
import { QueryBuilder } from "./../../builder/QueryBuilder";

const getAllPosts = async (payload: Record<string, string | unknown>) => {
  const searchedPosts = new QueryBuilder(Posts.find({}), payload)
    .search(["title", "description"])
    .paginate()
    .sort()
    .fields()
    .filter();

  const result = await searchedPosts.modelQuery;

  return result;
};
```
