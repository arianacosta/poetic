#!/usr/bin/env node

const fse = require("fs-extra");
const path = require("path");

const rootDir = process.cwd();

const setBoilerplateForLocalDev = () => {
  const packageBoilerplateJson = path.join(rootDir, 'bin/package.boilerplate.json');
  const packageBoilerplate = fse.readJsonSync(packageBoilerplateJson);

  packageBoilerplate.devDependencies.poetic = '../poetic';

  fse.writeJsonSync(packageBoilerplateJson, packageBoilerplate, {spaces: 2});

  console.log(`Set Poetic for local development. On a test project run: npx ../poetic`);
}

setBoilerplateForLocalDev();