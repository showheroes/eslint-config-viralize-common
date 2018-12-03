const { exec } = require('child_process');
const releaseIt = require('release-it');
const semver = require('semver');
const { version } = require('../package.json');

const baseReleaseOptions = {
    'non-interactive': true
};

const getLastTag = () => {
    return new Promise((resolve) => {
        exec('git describe --tags `git rev-list --tags --max-count=1`', (error, stdout) => {
            if (error) {
                // no tag found, first release.
                resolve('0.0.0');
                return;
            }
            resolve(stdout);
        });
    });
};

const checkNpmVersion = () => {
    return getLastTag().then((tag) => {
        return semver.eq(version, tag);
    });
};

const release = (increment) => {
    return checkNpmVersion().then((res) => {
        if (!res) {
            process.stderr.write('package.json version differs from last' +
                'deployed version. Please review what appened first.');

            process.exit(1);
            return;
        }
        const options = Object.assign(baseReleaseOptions, { increment });
        releaseIt(options).then((output) => {
            process.stdout.write(output);
        });
    });
};

module.exports = {
    release
};
