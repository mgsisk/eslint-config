# @mgsisk/eslint-config

Opinionated ESLint configurations for JavaScript development.

[![Latest release][badge-release]][url-release]
[![Build status][badge-build]][url-build]
[![Code quality][badge-quality]][url-quality]
[![Test coverage][badge-coverage]][url-coverage]
[![Maintainer funding][badge-funding]][url-funding]

The @mgsisk/eslint-config package includes opinionated [ESLint][] configurations
for JavaScript development.

- `@mgsisk/eslint-config` – Standard configuration for general development.
- `@mgsisk/eslint-config/wordpress` – Customized version of
  [@wordpress/eslint-plugin][] for WordPress plugin and theme development.

## Installation

```sh
npm install --save-dev @mgsisk/eslint-config
```

## Usage

```js
// .eslintrc.js

module.exports = {
  …
  extends: ['@mgsisk/eslint-config'],
  …
}
```

[Support resources][] are available if you need help with this project.

## Contributing

[Contributions][] are always welcome; please read the [code of conduct][]
before you begin. See the [changelog][] for notable project changes, and report
any [security][] concerns you find.

## Thanks

To the [contributors][] that help to build, fund, and maintain this project;
the [other works][] that have contributed to and inspired this project; and
anyone that has found this project useful.

## License

[ISC][]

[@wordpress/eslint-plugin]: https://www.npmjs.com/package/@wordpress/eslint-plugin
[badge-build]: https://img.shields.io/github/workflow/status/mgsisk/eslint-config/build
[badge-coverage]: https://img.shields.io/codacy/coverage/214d41f28f1e4970974e1ea25fe6492e
[badge-funding]: https://img.shields.io/liberapay/receives/mgsisk
[badge-quality]: https://img.shields.io/codacy/grade/214d41f28f1e4970974e1ea25fe6492e
[badge-release]: https://img.shields.io/github/v/tag/mgsisk/eslint-config?sort=semver
[changelog]: docs/CHANGELOG.md
[code of conduct]: https://github.com/mgsisk/eslint-config/blob/master/docs/CODE_OF_CONDUCT.md
[contributions]: https://github.com/mgsisk/eslint-config/blob/master/docs/CONTRIBUTING.md
[contributors]: https://github.com/mgsisk/eslint-config/blob/master/docs/AUTHORS.md
[eslint]: https://eslint.org
[isc]: https://github.com/mgsisk/eslint-config/blob/master/LICENSE.md
[other works]: https://github.com/mgsisk/eslint-config/blob/master/docs/THANKS.md
[security]: https://github.com/mgsisk/eslint-config/blob/master/docs/SECURITY.md
[support resources]: https://github.com/mgsisk/eslint-config/blob/master/docs/SUPPORT.md
[url-build]: https://github.com/mgsisk/eslint-config/actions?query=workflow%3Abuild
[url-coverage]: https://app.codacy.com/gh/mgsisk/eslint-config
[url-funding]: https://github.com/mgsisk/eslint-config/blob/master/docs/CONTRIBUTING.md#funding
[url-quality]: https://app.codacy.com/gh/mgsisk/eslint-config
[url-release]: https://github.com/mgsisk/eslint-config/releases
