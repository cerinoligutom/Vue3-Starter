# Vue3 Starter

A boilerplate for Vue3 + TS + Vite SPAs.

## Features

- Vue3 + Vite + TypeScript
- Vue Router
- VueUse
- TailwindCSS v3 w/ Tailwind Config Viewer
- Form Validation w/ Vuelidate
- Icons w/ Iconify
- Hooks w/ Husky
- ESLint + Prettier
- Group by Feature folder structure

## Examples Included

- Login Form
- Simple Base Components
- Composables
- Layouts
- Theme Switcher
- Router Nav Guard
- Environment Variables

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### View Tailwind Config

```sh
npm run tailwind-config-viewer
```

## Contributing

If something is unclear, confusing, or needs to be refactored, please let me know. Pull requests are always welcome but do consider the opinionated nature of this project. Please open an issue before submitting a pull request.
