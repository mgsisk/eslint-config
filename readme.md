# @mgsisk/eslint-config

Opinionated ESLint configurations for JavaScript development.

![Latest release][badge-release]
![Build status][badge-build]
![Code maintainability][badge-maintainability]
![Test coverage][badge-coverage]
![Maintainer funding][badge-funding]

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

More [support resources][] are available if you need help with this project.

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
[badge-build]: https://img.shields.io/travis/com/mgsisk/eslint-config?link=https://travis-ci.com/mgsisk/eslint-config
[badge-coverage]: https://img.shields.io/codeclimate/coverage/mgsisk/eslint-config?link=https://codeclimate.com/github/mgsisk/eslint-config
[badge-funding]: https://img.shields.io/liberapay/receives/mgsisk?link=https://github.com/mgsisk/eslint-config/blob/master/docs/CONTRIBUTING.md%23funding
[badge-maintainability]: https://img.shields.io/codeclimate/maintainability/mgsisk/eslint-config?link=https://codeclimate.com/github/mgsisk/eslint-config
[badge-release]: https://img.shields.io/github/v/tag/mgsisk/eslint-config?sort=semver&link=https://github.com/mgsisk/eslint-config/releases
[changelog]: docs/CHANGELOG.md
[code of conduct]: https://github.com/mgsisk/eslint-config/blob/master/docs/CODE_OF_CONDUCT.md
[contributions]: https://github.com/mgsisk/eslint-config/blob/master/docs/CONTRIBUTING.md
[contributors]: https://github.com/mgsisk/eslint-config/blob/master/docs/AUTHORS.md
[eslint]: https://eslint.org
[isc]: https://github.com/mgsisk/eslint-config/blob/master/LICENSE.md
[other works]: https://github.com/mgsisk/eslint-config/blob/master/docs/THANKS.md
[security]: https://github.com/mgsisk/eslint-config/blob/master/docs/SECURITY.md
[support resources]: https://github.com/mgsisk/eslint-config/blob/master/docs/SUPPORT.md
