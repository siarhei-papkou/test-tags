const { invokeCommand, logSuccessInfo, logProcessInfo } = require('./utils');

function getReleaseBranchName() {
  const currentVersion = require('../src/app/library/package.json').version.split('.');

  currentVersion[2] = 'x';

  return `release/${currentVersion.join('.')}`;
}

function createReleaseBranch() {
  const releaseBranchName = getReleaseBranchName();

  logProcessInfo(`Create release branch with name "${releaseBranchName}"`);
  invokeCommand(
    `git checkout -b ${releaseBranchName} && git push  --set-upstream origin ${releaseBranchName}`,
    `Release: Create release branch with name ${releaseBranchName} has been failed`,
    () => logSuccessInfo(`Release branch ${releaseBranchName} has been successfully created and pushed`),
  );
}

createReleaseBranch();
