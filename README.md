# Universal React + Redux Boilerplate

This is a work-in-progress creation of a boilerplate which I’ll be using in my projects.

- [x] React (ES5), served with a simple Koa server
- [ ] React (ES6) with JSX, transpiled and bundled with webpack and babel
- [ ] Development strategy using webpack’s development middleware
- [ ] Hot Module Replacement (HMR) in development
- [ ] Production strategy using hashes for cache invalidation
- [ ] Going universal with server-side rendering (SSR)
- [ ] Handle application state with Redux
- [ ] Linting and testing critical application code
- [ ] Routing with React Router
- [ ] Asynchronous Redux with Promises
- [ ] Authentication with JSON Web Tokens (JWT) and Redux

Because I want the commits in the same order as this checklist, I will rebase and force push to master as long as this is a work-in-progress. You’re warned!

## Creating a Universal React + Redux Boilerplate step by step

Using a step by step approach I hope this project can help others to create their own boilerplate instead of blindly copy pasting other boilerplates without really knowing that each part does. Here is a summary of each step (each step also represents one commit).

### React (ES5), served with a simple Koa server

Very basic “Hello world” app in React. No transpiling needed, it just works.

With this step I want you to understand there is no magic in React. You can use ES6 or JSX syntax, but in the end it’s just JavaScript.

Start the server with `npm start`!
