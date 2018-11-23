const { fail } = require('danger');
const { version } = require ('./package.json');
const semver = require('semver');

if (!semver.valid(version)){
  fail(`${version} is not a valid semver version! Please review your package.json file.`);
}
