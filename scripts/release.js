#!/usr/bin/env node

const fse = require("fs-extra");
const path = require("path");

const rootDir = process.cwd();

const matchBoilerplateVersion = () => {
    const packageJson = path.join(rootDir, "package.json");
    const packageBoilerplateJson = path.join(rootDir, 'bin/package.boilerplate.json');
    
    const package = fse.readJsonSync(packageJson);
    const packageBoilerplate = fse.readJsonSync(packageBoilerplateJson);

    const newVersion = `^${package.version}`;
    packageBoilerplate.devDependencies.poetic = newVersion;
  
    fse.writeJsonSync(packageBoilerplateJson, packageBoilerplate, {spaces: 2});

    console.log(`Matched boilerplate version to: ${newVersion}`);
  }

  matchBoilerplateVersion();