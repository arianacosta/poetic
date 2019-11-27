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

## Releasing

A new NPM version of the package is published  automatically with [GitHub actions](https://github.com/features/actions) and [semantic-release](https://github.com/semantic-release/semantic-release). Release version will take a decision what version to release (patch, minor or major) based on commit keywords which need to conform to [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/)

Please follow the convention for commits:

**Subject line**
Subject line contains succinct description of the change.

**Allowed type**

- feat (feature)
- fix (bug fix)
- docs (documentation)
- style (formatting, missing semi colons, …)
- refactor
- test (when adding missing tests)
- chore (maintain)

**Allowed scope**
Scope could be anything specifying place of the commit change. For example $location, $browser, $compile, $rootScope, ngHref, ngClick, ngView, etc...

**subject text**
use imperative, present tense: “change” not “changed” nor “changes”
don't capitalize first letter
no dot (.) at the end
Message body
just as in use imperative, present tense: “change” not “changed” nor “changes”
includes motivation for the change and contrasts with previous behavior

examples of good commits:

```shell
git commit -m "feat(provider): add new XYZ provider for API"
git commit -m "chore: cleanup unused files"
```

closes #11

### Streamline Installation/Uninstallation

In your test project you may add the following scripts to simplify the iterative process of installing/uninstalling:

```json
  "scripts": {
    "poetic:add": "npx ../poetic",
    "poetic:reset": "git reset --hard && git clean -fd",
  },
```
