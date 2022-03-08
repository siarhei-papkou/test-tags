const copyDir = require('copy-dir');
const fs = require('fs');

fs.mkdirSync('./dist/resources');

copyDir.sync('./src/theme', './dist/resources/scss');
copyDir.sync('./src/assets/fonts', './dist/resources/fonts');
