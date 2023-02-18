# Template of NodeJS with TypeScript in MVC (BackEnd)

## Run script's

- Development: npm run dev
- Production: npm run start

## Requeriments

1. NodeJS.
2. VSCode.

## Commands

1. npm i -g @types/ejs @types/express @types/node ejs express nodemon ts-node tslint typescript (global install)
2. npm i -D @types/ejs @types/express @types/node ejs express nodemon ts-node tslint typescript (Local development install)

## Pakage.json

Insert scripts:

```javascript
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon ./src/app.ts && tsc -w",
    "start": "tsc && node ./dist/app.js"
  }
```

## ESLint(Terminal)

crear el eslint

```javascript
./node_modules/.bin/tslint --init
```

## Start typpescript

```javascript
npx tsc --init
```

## When create tsconfig.json

```javascript
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig to read more about this file */

    /* Projects */
   
    /* Language and Environment */
    "target": "ES5",
    "lib": ["ESNext"],
   
    /* Modules */
    "module": "CommonJS",                          
    "rootDir": "./src",                                 
    "moduleResolution": "node",                       
    "resolveJsonModule": true,           
   
    /* JavaScript Support */
    "allowJs": true,
   
    /* Emit */
    "sourceMap": true,                                
    "outDir": "./dist",
   
    /* Interop Constraints */
    "isolatedModules": true,   
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,        
    /* Type Checking */
    "strict": true, 
    "noImplicitAny": true, 
    "useUnknownInCatchVariables": false, 
    "noFallthroughCasesInSwitch": true, 
    "skipLibCheck": true 
  },
  "include": ["./src/**/*"],
  "exclude": ["node_modules", 
              "cypress",
              "dist"],
  "ts-node": {"esm": true}
}
```

## Comments

---

- The MVC structure of folders and modules it was created correctly.
- The gitIgnore conteins the general folders.
- When you run in Dev, will start the transpile typescript and run nodemon.
- When you run in Start, create 'dist' folder and transpile javascript in ES5.

---
