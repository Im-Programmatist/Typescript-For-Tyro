/**
 * There are 3 main components
 *      1. Language - It comprises of the syntax, keywords, and type annotations.
 *      2. Compiler - TypeScript compiler (tsc) converts the instructions written in TypeScript to its JavaScript equivalent
 *      3. TypeScript Language Service - It is extra layer around core compiler pipeline like editor application, 
 *          it provides function completion, code formatting, autocomplete 
 * 
 * Declaration Files- it comes under compiler component
 *      1. When TypeScript get compiled then there is a option to generate declaration files with extension as (.d.ts)
 *      2. It is the same concept of header file in c/c++, where all definitions of variable, keyword, n object , functions and other feature already defined
 *      3. This file works as an interface to the components in the compiled JavaScript.(only provide aid to the development process and not become part of the compilation itself)   
 *      4. Only contains the type declarations and not the actual source code (business logic)
 *      5. 
 * 
 * tsconfig.json
 *      1. file of JSON format which allows us to point the root level files and different compiler options to setup that require to compile a TypeScript based projects
 *      2.  tsconfig.json file mainly consists of the information for the following:
            CompilerOptions - specifying additional options to the TypeScript compiler. 
            CompileOnSave -  used to instruct the IDE to automatically compile the given TypeScript files and generate the output for the same.
            Files - It is a property that gives a list of TypeScript files that will be included by the compiler. 
            Include - allows you to include a list of TypeScript files using the glob wildcards pattern.
            Exclude - allows you to exclude a list of TypeScript files using the glob wildcards pattern
 *      3. {
            "compileOnSave": true,
            "compilerOptions": {
                    "module": "system",
                    "noImplicitAny": true,
                    "removeComments": true,
                    "allowUnreachableCode": false,
                    "strictNullChecks": true,
                    "outFile": "../JS/TypeScript/HelloWorld.js",
                    "sourceMap": true
            },
                "files": [
                    "program.ts",
                    "sys.ts"
                ],
                "include": [
                    "src/**'/*"
                ],
                "exclude": [
                    "node_modules",
                    "src/**'/*.spec.ts"
                ]
            }
 *
 *
*/
