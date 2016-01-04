# Universal React + Redux Boilerplate

This is a work-in-progress creation of a boilerplate which I’ll be using in my projects.

- [x] React (ES5), served with a simple Koa server
- [x] React (ES6) with JSX, transpiled and bundled with webpack and babel
- [x] Development strategy using webpack’s development middleware
- [x] Hot Module Replacement (HMR) in development
- [x] Sass and Autoprefixer with CSS hot loading
- [x] Production strategy using hashes for cache invalidation
- [x] Going universal with server-side rendering (SSR)
- [x] Routing with React Router
- [x] Handle application state with Redux
- [x] Asynchronous Redux with Promises
- [ ] Authentication with JSON Web Tokens (JWT) and Redux

Because I want the commits in the same order as this checklist, I will rebase and force push to master as long as this is a work-in-progress. You’re warned!

## Creating a Universal React + Redux Boilerplate step by step

Using a step by step approach I hope this project can help others to create their own boilerplate instead of blindly copy pasting other boilerplates without really knowing that each part does. Here is a summary of each step (each step also represents one commit).

### React (ES5), served with a simple Koa server

Very basic “Hello world” app in React. No transpiling needed, it just works.

With this step I want you to understand there is no magic in React. You can use ES6 or JSX syntax, but in the end it’s just JavaScript.

Start the server with `npm start`!

### React (ES6) with JSX, transpiled and bundled with webpack and babel

If you want to use ES6 and JSX you need a transpiler to make it work in the browser. I’m using webpack and babel. This build step transpiles (to ES5) and bundles your application files.

Create the bundle with `npm run build`, start the server with `npm start`.

### Development strategy using webpack’s development middleware

The build step takes way too long. We can reduce this drastically using `webpack-dev-middleware`, which watches for file changes to recompile the bundle. The bundle is served from memory and rebuilds are fast.

Start the server with `npm run dev`, we no longer need the other scripts anymore... for now.

### Hot Module Replacement (HMR) in development

Using `webpack-hot-middleware` and `react-transform-hmr` we can further improve development workflow by pushing bundle updates to the browser without needing to refresh the page.

### Sass and Autoprefixer with CSS hot loading

With webpack you can also bundle your CSS. The bare minimum to make this work are the css and style loaders but I also added Sass and Autoprefixer loaders.

### Production strategy using hashes for cache invalidation

To be able to enable long term caching we need a way to bust cache when content changes, which is why appending a content hash to the file name is so handy. That also means we need an updated `index.html` that points to the hashed file names.

I decided to keep the development and production config in `webpack.config.js` completely separate yet still in the same file. This way it’s easiest to see what exactly is going on.

### Going universal with server-side rendering (SSR)

Call it isomorphic or call it universal, server-side rendering is the reason I love React. Allow me to quote [Jeremy Keith (@adactio)](https://adactio.com/journal/9963) on this.

> Server-side rendering is not a fallback; client-side rendering is an enhancement.

Server-side rendering in React is possible but definitely not easy as you can see by the amount of changes needed to make this work for a simple “Hello world” app.

### Routing with React Router

Routing is done by React Router, whether the app is rendered on the server or on the client. To make this possible I had to use a wildcard route for Koa Router and place this after Koa’s static middleware.

Fetching from an imaginary API is mocked (for now) to be synchronous.

### Handle application state with Redux

Redux handles our application state. In this case that’s the articles and article related stuff. Note articles are stored flat and referenced by slug for the overview and article page. You can read about the advantages of this approach in [normalizr](https://github.com/gaearon/normalizr) (not implemented though). You might find yourself needing access to router state so I dropped in `redux-simple-router` as well to sync state between React Router and Redux.

The constants, actions, reducers folder structure might seem overkill to you, see [ducks](https://github.com/erikras/ducks-modular-redux) for an alternative approach.


### Asynchronous Redux with Promises

Asynchronous actions in Redux are not that hard using Redux middleware like `redux-thunk`. When rendering on the server you need to know when those actions are finished. For that purpose I developed [`redux-promises`](https://github.com/CrocoDillon/redux-promises), which builds upon `redux-thunk` to allow thunks returning promises. `redux-promises` keeps track of these promises and sets an `idle` flag in the store to either true or false.

I tried to keep this commit as simple as possible, however a lot is going on. Currently missing are caching fetch results as optimization and dealing with fetch errors (for example 404) properly.
