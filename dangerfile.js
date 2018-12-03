const { fail, message } = require('danger');
const { checkNpmVersion } = require('./scripts/utils');

checkNpmVersion().then((res) => {
    if (!res) {
        fail('package.json version differs from last deployed version.' +
             'Please review what appened first.');
        return;
    }

    message('Check passed, safe to merge');
});
