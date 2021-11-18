<!-- language-all: javascript -->

<h1 align="center">
  <img src="https://raw.githubusercontent.com/koii-network/koii.X/main/.github/images/koii_logo.svg" width="224px"/><br/>
  Create Koii App :fish:
</h1>
<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white" alt="typescript" />&nbsp;
  <img src="https://img.shields.io/badge/storybook-FF4785?style=?style=flat&logo=appveyor&logo=storybook&logoColor=white" alt="storybook" />&nbsp;
   <a href="https://discord.gg/koii" target="_blank"><img src="https://img.shields.io/badge/Discord-7289DA?style=flat&logo=discord&logoColor=white" alt="cli version" /></a>&nbsp;
   <a href="http://koii.network/" target="_blank"> <img src="https://img.shields.io/badge/made%20by-koii-blue" alt="made-by-koii" /></a>&nbsp;
</p>

## ⚡️ Quick start

First of all, run `npx create-koii-app` to create a Koii Dapp.

After the installation is done head to the installed project and inside it run `yarn start`. 

## Table of Contents

- [Structure](#structure)
- [Hooks](#hooks)
- [Scripts](#scripts)
- [Integrations](#storybook)
  - [Storybook](#storybook)
- [Environment](#environment)
  - [Node](#node)
  - [Yarn](#yarn)

# Structure

Describes the app structure and usage of each part. Add additional ReadMe-files in each folder as needed and link them here.

- [services](./src/services) - shared services such as axios.
- [assets](./src/assets) - place images, svgs and any assets here
- [components](./src/components) - place any shared components here.
- [lib](./src/lib) - shared business logic such as hooks, api
- [routes](./src/routes) [react-router](https://reactrouter.com/web/guides/quick-start) implementation.
- [storybook](./storybook/main.js) - see **[storybook](#storybook)** section

# Hooks
## useFinnie

# Scripts

Scripts to make life easier. Pre-commit is the [lint test command](#yarn-linttest)

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

`yarn test`

In development it's more efficient to run:

## yarn test-dev

Run efficient tests using developer machine performance.


## Styled Components

Project uses Styled components to make the styles read more:

- https://styled-components.com/docs

## Integrations

### Storybook

implementation of [react-storybook](https://github.com/storybookjs/react).

 Run `yarn storybook`


## Environment

### Node

These versions provides stable compatibility with React Native and other frameworks:

- **Node v12.XX** (`node --version`)
- **npm 6.XX** (`npm --version`)

**[Download Node with NPM](https://nodejs.org/download/release/v12.16.3/)**

### Yarn

We install and run our scripts with yarn, as an alternative to npm:

**[Download Yarn](https://yarnpkg.com/lang/en/docs/install/)**

