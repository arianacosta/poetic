#!/usr/bin/env node

const fse = require("fs-extra");
const path = require("path");
const cp = require("child_process");
const argv = require('yargs').argv

const currentDir = process.cwd();
const sourceRootDir = path.join(__dirname, "..");

const isInLocalMode = argv.local;

const resetChanges = () => {
  console.log('♻️  Reverting changes...');
  cp.execSync('git reset --hard && git clean -fd');
  process.exit(1);
};

const setCheckpoint = () => {
  const gitStatus = cp.execSync('git status --porcelain').toString();

  if (gitStatus.trim() !== '') {
    console.error('🙈 There are uncommited changes. Please, commit before installing Poetic.');
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
    throw Error(`Coud not install configuration files: ${e}`);
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
    const packageScripts = fse.readJsonSync(path.join(sourceRootDir, 'bin/package.boilerplate.json'));

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
    throw Error(`Could not update package.json: ${e}`);
  }
}

const installPackages = () => {
    try {
      console.log('🍉 Installing packages ...');
      const source = isInLocalMode ? '../poetic' : 'poetic'
      cp.execSync(`yarn add ${source} --dev`);
    } catch (e) {
      throw Error(`Could not install packages.`);
    }
}

const displaySuccessMessage = () => {
  console.log('');
  console.log('💫 Poetic was installed successfully!');
  console.log('   It is recommended to add these plugins to your IDE:');
  console.log('   🔹 ESLint');
  console.log('   🔹 Prettier');
  console.log('   🔹 EditorConfig');
}

const displayErrorMessage = (error) => {
  console.log('');
  console.error(`🆘 ${error.message}`);
  console.log('');
  console.log('To get help with this problem, please submit an issue to: ');
  console.log('https://github.com/arianacosta/poetic/issues');
  console.log('');
}

(() => {
  try {
    setCheckpoint();
    installConfigurationFiles();
    updatePackageJson();
    installPackages();
    displaySuccessMessage();
  } catch (e) {
    displayErrorMessage(e);
    resetChanges();
  }
})();
