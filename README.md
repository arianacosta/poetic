# Poetic

Automatically configure and maintain linters and formatters with a curated set of extensible rules for JavaScript, TypeScript and React.

## Install

On the root of your project run:

```
npx poetic
```

> Trying out Poetic is safe! You can review all the changes in Git before committing. And if you don't like it, just discard them.

## Features

- Installs and configures ESLint, Prettier and EditorConfig
- Provides a curated set of rules based on Airbnb and ESLint Recommended
- Customizable project configurations that are shareable
- Easy to maintain with a single dependency
- Configures Visual Studio Code

## Supported File Types

- Javascript (`.js`)
- TypeScript (`.ts`)
- React (`.js`,`.jsx`)

> Poetic checks the code inside the `src/` directory by default. This can be changed in the `package.json`

## Recommended Visual Studio Code Extensions

Poetic comes preconfigured to work with VSC, so that you can see the error indicators in real-time as well as automatic formatting on save. In order for these features to work, you need to install the following extensions:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

## Running on the CLI

Poetic provides a few handy NPM scripts that are useful for applying the code style from the command line:

- `yarn code:clean` (Lints and formats)
- `yarn code:lint` (Lint only)
- `yarn code:format` (Format only)

> You may use these in conjunction with [Husky](https://github.com/typicode/husky) to clean the code automatically before committing or pushing.

## Customizing for your needs

Poetic provides a well maintained and curated base configuration that can be easily extended or overriden. It uses the native configurations you are familiar with, so that you can build your own rules on top of it. Feel free to edit the following files as you see fit:

- ESLint: 
  - `.eslintrc.js` (Linting rules)
  - `.eslintignore` (Ignored files)
- Prettier:
  - `.prettierrc` (Formatting rules)
- TypeScript:
  - `tsconfig.json` (TS compilation)
- EditorConfig:
  - `.editorconfig` (Basic editor config)
- Visual Studio Code:
  - `.vscode/settings.json` (IDE behavior)


## Installing on a preconfigured project 

It is strongly recommended to remove other versions of ESLint and Prettier prior to installing Poetic.

If your project has custom rules or configurations, those can be easily copied over to the files added by Poetic. The filename convention is the same, so it should be straight forward.

## Contributing

We are looking for contributors that are passionate about code style and making it accessible to teams around the world. 

In order to make Poetic useful for everyone, we need to understand your needs, so please let us know about things that could help you improve your workflow.

If you would like to submit a PR, these are some of the short-term goals, but feel free to improve other areas as well:

- Improve rules
- Test on different types of projects
- Add configs for Webstorm
- Improve the documentation

#### Contacting Collaborators

- Arian Acosta [Twitter](https://twitter.com/arianc3)

Spread the ❤️ about Poetic


