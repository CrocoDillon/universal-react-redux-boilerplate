# Universal React + Redux Boilerplate

[![NPM Version](https://img.shields.io/npm/v/universal-react-redux-boilerplate.svg?style=flat)](https://npmjs.org/package/universal-react-redux-boilerplate)
[![Build Status](https://img.shields.io/travis/CrocoDillon/universal-react-redux-boilerplate.svg?style=flat)](https://travis-ci.org/CrocoDillon/universal-react-redux-boilerplate)
[![Dependency Status](https://david-dm.org/CrocoDillon/universal-react-redux-boilerplate.svg)](https://david-dm.org/CrocoDillon/universal-react-redux-boilerplate)
[![devDependency Status](https://david-dm.org/CrocoDillon/universal-react-redux-boilerplate/dev-status.svg)](https://david-dm.org/CrocoDillon/universal-react-redux-boilerplate#info=devDependencies)
[![Package Quality](http://npm.packagequality.com/shield/universal-react-redux-boilerplate.svg)](http://packagequality.com/#?package=universal-react-redux-boilerplate)

Boilerplate with all the good stuff but without the JavaScript fatigue. Made by [Dillon de Voor](https://twitter.com/CrocoDillon), follow me for updates and more!

Includes Koa 2, React 15, Webpack 2 and React Hot Loader 3. See section [**“Feature rich”**](#feature-rich) for what other awesome features you can expect.

## Why another boilerplate?

Because this boilerplate is different than most boilerplates out there. Most boilerplates will just give you a rather complex starting point but not how they got to that starting point. Ever heard ot _JavaScript fatigue_? These boilerplates are not helping.

This boilerplate attempts to solve this by providing a series of logical steps to build your own boilerplate. Of course you’re free to just use this one too but I encourage you to at least take a look at each step to get a basic understanding of each part of the app.

The steps are in the form of commits and I really hope this makes React and all the tooling around React more comprehensible, even for beginners. If you like it, please spread the word!

## Feature rich

Despite my aim to make this the easiest understandable boilerplate you will find lots of features useful for development and for production. The finished boilerplate will include the following:

- **Universal** or isomorphic. However you’re calling it... “Server-side rendering is not a fallback; client-side rendering is an enhancement” ([source](https://adactio.com/journal/9963)).
- [**React**](https://facebook.github.io/react/) for obvious reasons, [**React Router**](https://github.com/reactjs/react-router) to deal with routing and [**React Helmet**](https://github.com/nfl/react-helmet) to manage changes in the document head.
- Hot Module Replacement using [**React Hot Loader 3**](http://gaearon.github.io/react-hot-loader/).
- [**Redux**](http://redux.js.org/) to keep application state predictable and [**Redux DevTools**](https://github.com/gaearon/redux-devtools) to help with debugging.
- Server using [**Koa**](http://koajs.com/), the next generation web framework developed by the team behind Express.
- [**Babel**](http://babeljs.io/) so we can use the latest ECMAScript additions and even the ones that have not made it to the standard yet, use with caution.
- Client bundle created by [**Webpack 2**](http://webpack.github.io/), which includes _tree-shaking_.
- [**Mocha**](https://mochajs.org/) and [**Enzyme**](http://airbnb.io/enzyme/) to run your tests so your app (and you) stay healthy.
- It’s _your_ code style, but [**ESLint**](http://eslint.org/) helps keep it consistent.
- Static type checking using [**Flow**](http://flowtype.org/) can help you find errors quickly.
- Development and production build processes

## Let’s get started!

```bash
git clone https://github.com/CrocoDillon/universal-react-redux-boilerplate.git
cd universal-react-redux-boilerplate
npm install
```

### Running the development server

```bash
npm run dev
```

### Checking code quality

Run ESLint, Mocha and Flow:

```bash
npm run check
```

Or separately:

```bash
npm run lint
npm run test
npm run flow
```

## Step by step

Here is a summary of each step, where each step also represents one commit. Each step is like a milestone that brings us closer to the finished boilerplate. Feel free to modify to your needs!

### React with JSX, transpiled by Babel and bundled with Webpack

You might want to use ECMAScript 6 (and beyond) features like modules, at the very least you will want to use JSX (React just isn’t the same without it). To be able to do that we will transpile our code using Babel. In addition to Babel we will use Webpack to create a bundle for the client.

Because the options passed to Babel need to be different for the server and the client, we won’t include a `.babelrc` options file. Instead, we pass the options to `babel-register` for the server and in the Webpack config for the client. This might lead to some duplication but makes the separation more verbose.

To make use of a Webpack 2 feature called [_tree-shaking_](https://gist.github.com/sokra/27b24881210b56bbaff7), we have to use the Babel preset `es2015-webpack` so Babel doesn’t transform ES6 modules to CommonJS.

Oh and do yourself a favor, make it a habit to always specify `displayName` and `propTypes` (if applicable) to React components.

### Setting up ESLint

Before starting your project it’s probably a good idea to set up some rules about code style. ESLint is awesome to enforce these rules because it’s pluggable and fully configurable. Linting is not about “best practices” and other people’s opinions, it’s about code style consistency, maintainability and preventing errors. The rules are up to you or your team, ESLint will do the rest.

The `.eslintrc.js` file in this boilerplate is absolutely huge but don’t be intimidated by it. We could go the easy way and _extend_ `eslint:recommended` or for example `eslint-config-airbnb` but remember, it’s about your rules. I included every single standard ESLint rule and every single `eslint-plugin-react` rule whether they are enabled or not. That way all the rules are in one place which makes it easier to make them fit your needs.

### Setting up Mocha and Enzyme

It’s also a good idea to start testing early. We use Mocha and Enzyme (which provides some nice testing utilities for React), along with Chai as assertion library. Even though we are not using it yet I also added Sinon to create spies, stubs and mocks and some Chai plugins to make assertions more expressive.

Files containing tests are named `*.spec.js` and kept as close to the module they are testing as possible. If there are more than a few test files in one directory it can still be a good idea to put them in a subdirectory to keep things clean.

### Setting up Flow

The last step in ensuring code quality is static type checking with Flow. This might require some annotations in your code which will be stripped out by a Babel plugin included in the React preset. Not everyone will be comfortable with that so let’s call this step optional.

Now is a good time to add continuous integration which will run all our checks whenever we push to GitHub. And the badges... they are awesome!

### Development strategy using Webpack middleware and React Hot Loader

Restarting the server and rebuilding the bundle every time you make a code change is kinda boring, we need something better. Using Webpack’s dev middleware we can automatically update the bundle on code changes. The bundle is served from memory and rebuilds are much faster. And it gets even better, using Webpack’s hot middleware together with React Hot Loader we can apply the updates to a running React app, no need for a page refresh. It is _awesome_! Hot reloading on the server is done by plugging into the Webpack compiler and trashing the require cache when Webpack detects changes in the app source.
