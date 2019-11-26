const plugins = [
  [
    "@semantic-release/commit-analyzer",
    {
      releaseRules: [
        { type: "build", release: "patch" },
        { type: "ci", release: "patch" },
        { type: "chore", release: "patch" },
        { type: "docs", release: "patch" },
        { type: "refactor", release: "patch" },
        { type: "style", release: "patch" },
        { type: "test", release: "patch" },
      ]
    }
  ],
  "@semantic-release/release-notes-generator",
  "@semantic-release/npm",
  [
    "@semantic-release/git",
    {
      assets: ["package.json", "package-lock.json", "CHANGELOG.md"],
      message: "release(version): Release ${nextRelease.version} [skip ci]"
    }
  ],
  "@semantic-release/github"
];

const transformCommitType = type => {
  const commitTypeMapping = {
    feat: "Features",
    fix: "Bug Fixes",
    perf: "Performance Improvements",
    revert: "Reverts",
    docs: "Documentation",
    style: "Styles",
    refactor: "Code Refactoring",
    test: "Tests",
    build: "Build System",
    ci: "Continuous Integration",
    chore: "Chores",
    default: ""
  };
  return commitTypeMapping[type] || commitTypeMapping["default"];
};

const customTransform = (commit, context) => {
  const issues = [];

  commit.notes.forEach(note => {
    note.title = `BREAKING CHANGES`;
  });

  console.log("TCL: customTransform -> commit.type", commit.type)
  commit.type = transformCommitType(commit.type);

  if (commit.scope === "*") {
    commit.scope = "";
  }

  if (typeof commit.hash === `string`) {
    commit.shortHash = commit.hash.substring(0, 7);
  }

  if (typeof commit.subject === `string`) {
    let url = context.repository
      ? `${context.host}/${context.owner}/${context.repository}`
      : context.repoUrl;
    if (url) {
      url = `${url}/issues/`;
      // Issue URLs.
      commit.subject = commit.subject.replace(/#([0-9]+)/g, (_, issue) => {
        issues.push(issue);
        return `[#${issue}](${url}${issue})`;
      });
    }
    if (context.host) {
      // User URLs.
      commit.subject = commit.subject.replace(
        /\B@([a-z0-9](?:-?[a-z0-9/]){0,38})/g,
        (_, username) => {
          if (username.includes("/")) {
            return `@${username}`;
          }

          return `[@${username}](${context.host}/${username})`;
        }
      );
    }
  }

  // remove references that already appear in the subject
  commit.references = commit.references.filter(reference => {
    if (issues.indexOf(reference.issue) === -1) {
      return true;
    }

    return false;
  });

  return commit;
};

module.exports = {
  releaseRules: plugins[0][1].releaseRules,
  parserOpts: {
    mergePattern: /^Merge pull request #(\d+) from (.*)$/,
    mergeCorrespondence: ["id", "source"]
  },
  writerOpts: { transform: customTransform },
  plugins,
  branch: "oleg-koval/ci/add-semantic-release-workflow",
  ci: false,
  dryRun: true
};
