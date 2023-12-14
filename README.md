# @mgsisk/eslint-config

Opinionated ESLint configurations for JavaScript development.

[![Latest release][badge-release]][url-release]
[![Build status][badge-build]][url-build]
[![Code quality][badge-quality]][url-codacy]
[![Test coverage][badge-coverage]][url-codacy]
[![Maintainer funding][badge-funding]][url-funding]

The @mgsisk/eslint-config package includes opinionated [ESLint][] configurations
for JavaScript development.

- `@mgsisk/eslint-config` – Standard configuration for general development.
- `@mgsisk/eslint-config/babel` – Configuration for development with Babel using
  [@babel/eslint-parser][] and extra rules form [@babel/eslint-plugin][].
- `@mgsisk/eslint-config/typescript` – Configuration for TypeScript development
  using [@typescript-eslint/parser][] and extra rules from
  [@typescript-eslint/eslint-plugin][].

## Installation

```sh
npm install --save-dev @mgsisk/eslint-config
```

## Usage

```js
// .eslintrc.yml
extends: '@mgsisk/eslint-config'
```

[Support resources][] are available if you need help with this project. Refer to
individual plugin documentation for more information on how each works.

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

[@babel/eslint-parser]: https://www.npmjs.com/package/@babel/eslint-parser
[@babel/eslint-plugin]: https://www.npmjs.com/package/@babel/eslint-plugin
[@typescript-eslint/eslint-plugin]: https://www.npmjs.com/package/@typescript-eslint/eslint-plugin
[@typescript-eslint/parser]: https://npmjs.com/package/@typescript-eslint/parser
[badge-build]: https://img.shields.io/github/workflow/status/mgsisk/eslint-config/build
[badge-coverage]: https://img.shields.io/codacy/coverage/214d41f28f1e4970974e1ea25fe6492e
[badge-funding]: https://img.shields.io/liberapay/receives/mgsisk
[badge-quality]: https://img.shields.io/codacy/grade/214d41f28f1e4970974e1ea25fe6492e
[badge-release]: https://img.shields.io/github/v/tag/mgsisk/eslint-config?sort=semver
[changelog]: CHANGELOG.md
[code of conduct]: CODE_OF_CONDUCT.md
[contributions]: CONTRIBUTING.md
[contributors]: AUTHORS.md
[eslint]: https://eslint.org
[isc]: LICENSE.md
[other works]: THANKS.md
[security]: SECURITY.md
[support resources]: SUPPORT.md
[url-build]: https://github.com/mgsisk/eslint-config/actions?query=workflow%3Abuild
[url-codacy]: https://app.codacy.com/gh/mgsisk/eslint-config
[url-funding]: CONTRIBUTING.md#funding
[url-release]: https://github.com/mgsisk/eslint-config/releases
