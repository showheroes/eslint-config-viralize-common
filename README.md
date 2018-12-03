# eslint-config-viralize-base

Commons eslint rules used by all Viralize config files.

This repository is not intented to be use as a standalone eslint config for producion projects, but a way to centralize some common rules used by ES5 config file, ES6 config file and React config file.

## Install

1. Install the correct versions of each package, which are listed by the command:

  ```sh
  npm info "eslint-config-viralize-base@latest" peerDependencies
  ```

  If using **npm 5+**, use this shortcut

  ```sh
  npx install-peerdeps --dev eslint-config-viralize-base
  ```

  If using **npm < 5**, Linux/OSX users can run

  ```sh
  (
    export PKG=eslint-config-viralize-base;
    npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
  )
  ```

  If using **npm < 5**, Windows users can either install all the peer dependencies manually, or use the [install-peerdeps](https://github.com/nathanhleung/install-peerdeps) cli tool.

  ```sh
  npm install -g install-peerdeps
  install-peerdeps --dev eslint-config-viralize-base
  ```

2. Add `"extends": "viralize-base"` to your .eslintrc.
