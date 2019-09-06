#!/usr/bin/env node

const fse = require("fs-extra");
const path = require("path");
const cp = require("child_process");

const currentDir = process.cwd();
const sourceRootDir = path.join(__dirname, "..");

const resetChanges = () => {
  console.log('♻️ Reverting changes...');
  cp.execSync('git reset --hard && git clean -fd');
  process.exit(1);
};

const setCheckpoint = () => {
  const gitStatus = cp.execSync('git status --porcelain').toString();

  if (gitStatus.trim() !== '') {
    console.error('🙈 There are uncommited changes. Please, commit before running this script.');
    process.exit(1);
  }

  process.on("SIGINT", resetChanges);
};

const installConfigurationFiles = () => {
  try {
    console.log('🍊 Installing configuration files ...');
    const source = path.join(sourceRootDir, 'boilerplate');
    fse.copySync(source, currentDir);
  } catch (e) {
    throw Error('Coud not install configuration files: ', e);
  }
}

const updatePackageJson = () => {
  try {
    console.log('🥝 Updating package.json ...');

    const packageJson = path.join(currentDir, "package.json");

    if (!fse.existsSync(packageJson)) {
      throw Error ('package.json not found in the current directory.')
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
  } catch (e) {
    throw Error('Could not update package.json: ', e);
  }
}

const installPackages = () => {
    try {
      console.log('🍉 Installing packages ...');
      cp.execSync('yarn install');
    } catch (e) {
      throw Error('Could not install packages: ', e);
    }
}

(() => {
  try {
    setCheckpoint();
    installConfigurationFiles();
    updatePackageJson();
    installPackages();
  } catch (e) {
    console.error(e.message);
    resetChanges();
  }
})();
