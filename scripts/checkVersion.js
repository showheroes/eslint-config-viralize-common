// const semver = require('semver');
const { exec } = require('child_process');
// const { version } = require('../package.json');

const getLastTag = () => {
    return new Promise((resolve, reject) => {
        exec('git describe --abbrev=0 --tags', (error, stdout, stderr) => {
            if (error) {
                // no tag found, first release.
                resolve('0.0.0');
                return;
            }
            resolve(stdout);
        });
    });
};

// getLastTag().then((lastTag) => {

// });
