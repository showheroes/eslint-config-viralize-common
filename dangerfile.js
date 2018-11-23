const { fail, warn, message } = require('danger');
const semver = require('semver');
const { version } = require('./package.json');
const { getLastTag } = require('./scripts/utils');

if (!semver.valid(version)) {
    fail(`${version} is not a valid semver version!\
          Please review your package.json file.`);
    return;
}

getLastTag().then((tag) => {
    if (semver.lt(version, tag)) {
        fail(`${version} could not be less thant current version (${tag})`);
        return;
    }

    if (!semver.gt(version, tag)) {
        warn(`Package version is the same as before, (${tag}),\
              so it will not be deployable on NPM`);
        return;
    }

    message(`New package version (${version}) is greater than before\
             so this PR is deployable on NPM`);
});
