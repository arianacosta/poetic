#!/usr/bin/env node

const fse = require("fs-extra");
const path = require("path");
const cp = require("child_process");

const currentDir = process.cwd();

const matchBoilerplateVersion = () => {
    const packageJson = path.join(currentDir, "package.json");
    const packageBoilerplateJson = path.join(currentDir, 'bin/package.boilerplate.json');
    
    const package = fse.readJsonSync(packageJson);
    const packageBoilerplate = fse.readJsonSync(packageBoilerplateJson);

    packageBoilerplate.devDependencies.poetic = `^${package.version}`;
  
    fse.writeJsonSync(packageBoilerplateJson, packageBoilerplate, {spaces: 2});
  }

  matchBoilerplateVersion();