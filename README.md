<!-- language-all: javascript -->

<h1 align="left">
  Koii X
</h1>
---

[![Prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier) ![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg) [![](https://img.shields.io/badge/made%20by-koii-blue)](https://koii.network)

## Table of Contents

- [Structure](#structure)
- [Scripts](#scripts)
  - [yarn lint-test](#yarn-lint-test)
  - [yarn lint](#yarn-lint)
  - [yarn lint-errors](#yarn-lint-errors)
  - [yarn start](#yarn-start)
  - [yarn test-watch](#yarn-test-watch)
  - [yarn test](#yarn-test)
  - [yarn test-dev](#yarn-test-dev)
- [Integrations](#integrations)
  - [React](#react)
  - [Styled Components](#styled-components)
  - [Storybook](#storybook)
- [Components](#components)
- [Environment](#environment)
  - [Git](#git)
  - [Node](#node)
  - [Yarn](#yarn)
  - [Visual Studio Code](#visual-studio-code)

# Structure

Describes the app structure and usage of each part. Add additional ReadMe-files in each folder as needed and link them here.

- [mocks](./__mocks__) - place any Jest manual mocks here to auto mock any node module
- [assets](./assets) - place any images and fonts here
- [components](./components) - see **[Components](#Components)** section
- [config](./config) - global config files
- [features](./features) - main app code divided by feature. A feature folder contains all the screens, components, hooks etc for that feature.
- [lib](./lib) - shared business logic such as hooks, api
- [routes](./) [react-router](https://reactrouter.com/web/guides/quick-start) implementation.
- [storybook](./storybook/index.js) - see **[storybook](#storybook)** section

# Scripts

Scripts to make life easier. Pre-commit is the [lint test command](#yarn-linttest)

<!-- ## yarn pod

Update and install iOS pods. Run after cloning or adding a native module.

## yarn pod-install

As above but with repo update if any pod is out of date, such when you update an NPM package with native modules. -->

## yarn lint-test

Quickest way to run everyday commands as developer, as it executes [yarn lint-errors](#yarn-lint-errors) and [yarn test-dev](#yarn-test-dev) (below).

## yarn lint

Lints the project using Prettier.

## yarn lint-errors

Lint and only output breaking errors. Warning: this will miss bad code like inline styles and bad `useEffect` dependencies.

## yarn start

Start the React packager. You can optionally

- **`yarn clear`** to start and reset cache of the bundler.

## yarn test-watch

Run tests in watch mode, for development, updating snapshots as needed.

Runs the [jest](https://github.com/facebook/jest) test runner on your tests in watch mode with interactive console. Remember to run `u` option when prompted to update snapshots. This is alias to `npm run test`

## yarn test

Run tests as CI, with optimal CPU usage for a linux server. Run this before commit to ensure tests will work on build server.

You can run CI style tests in respective folder using

```bash
    yarn test
```

In development it's more efficient to run:

## yarn test-dev

Run efficient tests using developer machine performance.

# Integrations

## Styled Components

Project uses Styled components to make the styles read more:

- https://styled-components.com/docs

## Storybook

implementation of [react-storybook](https://github.com/storybookjs/react).

Toggle usage in [App.tsx](./App.tsx).

# Environment

## Git

We're using latest stable. Install the version for your OS from:

**[https://git-scm.com/downloads](https://git-scm.com/downloads 'Download Git')**

## Node

These versions provides stable compatibility with React Native and other frameworks:

- **Node v12.XX** (`node --version`)
- **npm 6.XX** (`npm --version`)

**[Download Node with NPM](https://nodejs.org/download/release/v12.16.3/)**

## Yarn

We install and run our scripts with yarn, as an alternative to npm:

**[Download Yarn](https://yarnpkg.com/lang/en/docs/install/)**

## Visual Studio Code

We use Visual Studio Code with relevant plugins.

- **[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)**
- **[TypeScript Hero](https://marketplace.visualstudio.com/items?itemName=rbbit.typescript-hero)**
- **[TypeScript importer](https://marketplace.visualstudio.com/items?itemName=pmneo.tsimporter)**
- **[TypeScript toolbox](https://marketplace.visualstudio.com/items?itemName=DSKWRK.vscode-generate-getter-setter)**
- **[Add jsdoc comments](https://marketplace.visualstudio.com/items?itemName=stevencl.addDocComments)**
- **[GitHub](https://marketplace.visualstudio.com/items?itemName=KnisterPeter.vscode-github)**
- **[Styled Components](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components)**
- **[ES7 React/Redux/GraphQL/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)**

Optional perfomance heavy

- **[Tabnine Autocomplete AI: autocompletion smart code](https://marketplace.visualstudio.com/items?itemName=TabNine.tabnine-vscode)**

**Refactoring optional tools**

- https://dev.to/alexomeyer/5-vs-code-extensions-that-make-refactoring-easy-1ccb
