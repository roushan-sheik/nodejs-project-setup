# Basic Project Setup

1. npm init
2. set entry point ./dist/server.ts
3. go to express docs and install
   > npm i express
4. go to type script docs > npm i typescript --save-dev
5. > > npm i cors dot env mongoose
6. create a .gitignore file
   // go to this website and copy the ignore code
   </> https://mrkandreev.name/snippets/gitignore-generator/#Node
7. create this files and folders

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

8. initialize typecript > tsc --init > set >>> rootDir: "./src" & outDir:"./dist"
9. go to express for hello world setup
   </> https://expressjs.com/en/starter/hello-world.html
10. use common js import syntax
    > npm i --save-dev @types/express
11. run the project
    // basic way
    npm i -D nodemon & open 2 terminal
    1. tsc -w <br/>
    2. nodemon ./dist/server.js
       <===============|| There you Go || ===============>
