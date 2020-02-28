# @weahead/tooling

[We aheads](https://www.weahead.se/) package,
installing all configs for **non** React projects.

## Install

`npm install -DE @weahead/tooling`

This will install the following We ahead config packages:

- [@weahead/husky-config](https://github.com/weahead/husky-config)
- [@weahead/lint-staged-config](https://github.com/weahead/lint-staged-config)
- [@weahead/eslint-config-tool](https://github.com/weahead/eslint-config-tool)
- [@weahead/prettier-config](https://github.com/weahead/prettier-config)
- [@weahead/commitlint-config](https://github.com/weahead/commitlint-config)
- [@weahead/markdownlint-config](https://github.com/weahead/markdownlint-config)

These packages will automaticaly create the config files they need,
for more info about them go to their respective repositories.

### Turn off Commitizen

Use this config if you don't want help from [Commitizen](http://commitizen.github.io/cz-cli/)
to create commit messages:

`git config --global wa.noautocz true`

**_Note!_** This does not turn off the linting of your commit messages,
it only turns off the help from `Commitizen` when creating the commit message.

## License

[X11](LICENSE)
