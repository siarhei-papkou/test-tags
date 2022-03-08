const { invokeCommand, logSuccessInfo, logProcessInfo } = require('./utils');
const releaseVersion = require('../src/app/library/package.json').version;

function commitLibraryReleaseVersion() {
  logProcessInfo(`Commit updated library package.json with ${releaseVersion} version`);
  invokeCommand(
    `git add src/app/library/package.json && git commit -m "Updated package.json version to ${releaseVersion}" --no-verify`,
    `Release: Commit library package.json version to ${releaseVersion} has been failed`,
    upgradeApplicationPackageVersion
  );
}

function upgradeApplicationPackageVersion() {
  logProcessInfo(`Update application package.json to ${releaseVersion} version`);
  invokeCommand(
    `npm version ${releaseVersion} -m "release: %s" --no-verify --force`,
    `Release: Upgrade application package.json version to ${releaseVersion} has been failed`,
    pushReleaseBranch
  );
}

function pushReleaseBranch() {
  logProcessInfo(`Push current branch to github`);
  invokeCommand(
    `git push --follow-tags`,
    `Release: Git push current branch has been failed`,
    logSuccessRelease
  );
}

function logSuccessRelease() {
  logSuccessInfo(`The release ${releaseVersion} has been successfully completed`);
}

commitLibraryReleaseVersion();
