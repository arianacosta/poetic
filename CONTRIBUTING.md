# Contributing to Poetic

Thank you for your interest in this project!

## Core Concepts of Poetic

- As automatic as possible: Poetic is not meant to solve all the needs out there, it's is meant to solve the most popular ones in a very simple way. When possible, prefer automatic and opinionated installations over complex options.
- Customizable: For those with special needs, every configuration should be customizable. Ideally, with the same type of configuration files. Poetic should not have yet another configuration file. That's what we are trying to avoid.
- Self-Contained Single Dependency: Poetic should provide all the functionality as a single dependency. Users should not have to install or maintain extra dependencies or configurations.

## Developing Locally

To test out Poetic you will need a test project of your choosing (or use the simple [Poetic Sandbox](https://github.com/arianacosta/poetic-sandbox)).

```shell
directory/
├── poetic/
    └── package.json
└── your_test_project/
    └── package.json
    └── src/
        └── [your test files]
```

1. Clone the Poetic repository next to your test project
2. Go to poetic `cd poetic`
3. Run `yarn develop` to configure the boilerplate to local development
4. Go to the test project `cd ../your_test_project`
5. Install the local Poetic `npx ../poetic`

### Streamline Installation/Uninstallation

In your test project you may add the following scripts to simplify the iterative process of installing/uninstalling:

```json
  "scripts": {
    "poetic:add": "npx ../poetic",
    "poetic:reset": "git reset --hard && git clean -fd",
  },
```
