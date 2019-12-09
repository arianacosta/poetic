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
2. Go to the test project `cd your_test_project`
3. Install the local Poetic `npx ../poetic --local`

### Adding/Removing Poetic

In your test project you may add the following scripts to simplify the iterative test process:

```json
  "scripts": {
    "poetic:add": "npx ../poetic --local",
    "poetic:reset": "git reset --hard && git clean -fd",
    "poetic:print:eslint:config": "eslint --print-config path::String",
  },
```

## Releasing

A new NPM version of the package is published automatically with [GitHub Actions](https://github.com/features/actions) and [semantic-release](https://github.com/semantic-release/semantic-release). Release version will take a decision what version to release (patch, minor or major) based on commit keywords which need to conform to [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/)

Please follow the convention for commits:

### Subject Line

Subject line contains succinct description of the change using the following format:

```
<type>(<scope>): <subject text>
```

**Allowed Type**

- feat (feature)
- fix (bug fix)
- docs (documentation)
- style (formatting, missing semi colons, etc)
- refactor
- test (when adding tests cases)
- chore (general maintainance)

**Allowed Scope**

Scope could be anything specifying place of the commit change. For example `installation`, `rules`, `config`, `eslint`, `prettier`, etc.

**Subject text**

- Use imperative, present tense: “change” not “changed” nor “changes”
- Don't capitalize first letter
- Do not add a dot `.` at the end

### Message body (optional)

- Use imperative, present tense: “change” not “changed” nor “changes”
- Includes motivation for the change and contrasts with previous behavior

Examples of good commits:

```shell
git commit -m "feat(rules): add rule to allow semi-colons"
git commit -m "chore: clean up unused files"
```
