#!/usr/bin/env node

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * Copyright (c) 2019-present, Arian Acosta.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict";

const fs = require("fs");
const path = require("path");
const cp = require("child_process");

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

const rootDir = path.join(__dirname, "..");
const packageJson = path.join(rootDir, "package.json");

if (!fs.existsSync(packageJson)) {
  console.log('Error: package.json not found.');
  process.exit(1);
}

const json = JSON.parse(fs.readFileSync(packageJson, "utf8"));

if (!json.devDependencies) {
  json.devDependencies = {};
}

json.devDependencies['cowsay'] = "^1.0.1";

fs.writeFileSync(packageJson, JSON.stringify(json, null, 2), "utf8");
console.log(
  "Added js-code-style to package.json"
);

// Now that we have packed them, call the global CLI.
cp.execSync("yarn install");

console.log('---');
process.exit(0);

const args = process.argv.slice(2);

// Now run the CRA command
const craScriptPath = path.join(packagesDir, "create-react-app", "index.js");
cp.execSync(
  `node ${craScriptPath} ${args.join(" ")} --scripts-version="${scriptsPath}"`,
  {
    cwd: rootDir,
    stdio: "inherit"
  }
);

// Cleanup
handleExit();
