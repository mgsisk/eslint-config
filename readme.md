# @mgsisk/eslint-config

[![Version 0.1.0][img-version]][url-version]
[![Build status][img-build]][url-build]
[![Maintainability grade][img-maintainability]][url-maintainability]
[![Support development][img-support]][url-support]

> Opinionated ESLint configurations for JavaScript development.

The @mgsisk/eslint-config package includes opinionated [ESLint] configurations
for JavaScript development.

- `@mgsisk/eslint-config` – Standard configuration for general development.
- `@mgsisk/eslint-config-wordpress` – Customized version of
  [eslint-config-wordpress] for WordPress plugin and theme development.

[ESLint]: https://eslint.org
[eslint-config-wordpress]: https://github.com/WordPress-Coding-Standards/eslint-config-wordpress

## Installation

```sh
npm install --dev @mgsisk/eslint-config
```

## Usage

```js
// .eslintrc.js

module.exports = {
  …
  extends: [ '@mgsisk' ], // Same as @mgsisk/eslint-config
  …
}
```

## Support

[Support] resources are available.

[support]: https://github.com/mgsisk/eslint-config/blob/master/support.md

## Contribute

[Contributions] are always welcome.

[Contributions]: https://github.com/mgsisk/eslint-config/blob/master/contributing.md

[img-version]: https://img.shields.io/npm/v/@mgsisk/eslint-config.svg?logo=npm
[img-build]: https://img.shields.io/travis/mgsisk/eslint-config.svg?logo=travis
[img-maintainability]: https://api.codeclimate.com/v1/badges/fc87f09ce8d5e0c3cf8d/maintainability
[img-support]: https://img.shields.io/badge/donate-coffee-darkorange.svg?logo=gratipay&logoColor=fff

[url-version]: https://npmjs.com/package/@mgsisk/eslint-config
[url-build]: https://travis-ci.org/mgsisk/eslint-config
[url-maintainability]: https://codeclimate.com/github/mgsisk/eslint-config/maintainability
[url-support]: https://buymeacoffee.com/mgsisk
