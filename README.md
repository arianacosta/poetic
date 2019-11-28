<p align="center">
  <img alt="Poetic" src="https://user-images.githubusercontent.com/13475001/64478843-6dcfde00-d17c-11e9-98a5-a2eabdc40c1c.png" width="200">
</p>

<p align="center">
  Automatic code styling for JavaScript, TypeScript and React.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/poetic"><img alt="NPM Status" src="https://img.shields.io/npm/v/poetic"></a>
  <a href="https://github.com/arianacosta/poetic"><img alt="Code Size" src="https://img.shields.io/github/languages/code-size/arianacosta/poetic"></a>
</p>

Poetic installs and maintains ESLint, Prettier, EditorConfig and Airbnb rules for JavaScript, TypeScript and React.

<p align="center">
  <img alt="Poetic installation example" src="https://user-images.githubusercontent.com/13475001/66051447-f4b67300-e4fc-11e9-82d0-4e23fab9d7d0.gif" 
  width="600"
  >
</p>

## Install

On the root of your project run:

```
npx poetic
```

> Trying out Poetic is safe! You can review all the changes in Git before committing. If you don't like it, just discard it.

## Features

- Installs and configures **ESLint**, **Prettier** and **EditorConfig**
- Provides a curated set of rules based on **Airbnb** and **ESLint Recommended**
- **Customizable project configurations** that are shareable
- Easy to maintain with a **single dependency**
- Configures **Visual Studio Code**

## Requirements

- Yarn (There are some [limitations with NPM](https://github.com/arianacosta/poetic/issues/28) that make it incompatible with ESLint as a subdependency)

### Motivation

Keeping the code clean and organized is important to prevent bugs and to collaborate with others. Linters help identify possible errors and bad practices and formatters allow us to concentrate on the features without having to worry about the code format. Unfortunately, configuring and maintaining these tools is cumbersome and more often than not, the project ends up with incorrect configurations (if any at all).

> The goal of Poetic is to simplify the setup and maintenance of code styling tools and rules while allowing full customization. 

## Supported File Types

- Javascript (`.js`)
- TypeScript (`.ts`)
- React (`.jsx`,`.tsx`)

```
your-app/
├── package.json
└── src/
    └── [your source files]
```

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

## Customizing for your project

Poetic provides a base configuration that can be easily extended or overridden. It uses the native configurations you are familiar with, so that you can build your own rules on top of it. Feel free to edit the following files as you see fit:

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

> Plese note that existing configuration files might be modified. Make sure to review all changes before committing.

## Contributing

We are looking for contributors that are passionate about code style and making it accessible to teams around the world. 

To make Poetic useful for everyone, we need to understand your needs, so please let us know about things that could help you improve your workflow.

If you would like to submit a PR, these are some of the short-term goals, but feel free to improve other areas as well:

- Improve rules
- Test on different types of projects
- Add configs for Webstorm
- Improve the documentation

Visit the [CONTRIBUTING](https://github.com/arianacosta/poetic/blob/master/CONTRIBUTING.md) section for instructions on how to develop, test and release Poetic.

#### Contacting Collaborators

- Arian Acosta [Twitter](https://twitter.com/arian3k)

Spread the ❤️ about Poetic


