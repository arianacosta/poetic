#!/usr/bin/env node

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * Copyright (c) 2019-present, Arian Acosta.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const fse = require("fs-extra");
const path = require("path");
const cp = require("child_process");

const currentDir = process.cwd();
const sourceRootDir = path.join(__dirname, "..");

const cleanup = () => {
  console.log("Cleaning up.");
  // Reset changes made to package.json files.
  cp.execSync(`git checkout -- packages/*/package.json`);
  // Uncomment when snapshot testing is enabled by default:
  // rm ./template/src/__snapshots__/App.test.js.snap
};

const handleExit = () => {
  cleanup();
  console.log("Exiting without error.");
  process.exit();
};

const handleError = e => {
  console.error("ERROR! An error was encountered while executing");
  console.error(e);
  cleanup();
  console.log("Exiting with error.");
  process.exit(1);
};

const installFiles = () => {
  const source = path.join(sourceRootDir, 'boilerplate');
  fse.copySync(source, currentDir);
}

process.on("SIGINT", handleExit);
process.on("uncaughtException", handleError);

// const gitStatus = cp.execSync(`git status --porcelain`).toString();

// if (gitStatus.trim() !== "") {
//   console.log("Please commit your changes before running this script!");
//   console.log("Exiting because `git status` is not empty:");
//   console.log();
//   console.log(gitStatus);
//   console.log();
//   process.exit(1);
// }

const packageJson = path.join(currentDir, "package.json");

if (!fse.existsSync(packageJson)) {
  console.log('Error: package.json not found.');
  process.exit(1);
}

const package = fse.readJsonSync(packageJson);
const packageScripts = fse.readJsonSync(path.join(sourceRootDir, 'boilerplate/package.sample.json'));

package.scripts = {
  ...package.scripts,
  ...packageScripts.scripts,
};

package.devDependencies = {
  ...package.devDependencies,
  ...packageScripts.devDependencies,
};

fse.writeJsonSync(packageJson, package, {spaces: 2});

installFiles();

cp.execSync('yarn install');

console.log('---');
process.exit(0);

const args = process.argv.slice(2);

// Now run the CRA command
const craScriptPath = path.join(packagesDir, "create-react-app", "index.js");
cp.execSync(
  `node ${craScriptPath} ${args.join(" ")} --scripts-version="${scriptsPath}"`,
  {
    cwd: sourceRootDir,
    stdio: "inherit"
  }
);

// Cleanup
handleExit();
