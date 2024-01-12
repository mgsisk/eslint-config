# Changelog

Notable project changes. Versions are [semantic][].

## [Unreleased][]

No unreleased changes.

## [4.0.0][] - 2023-12-16

### Added

- `ecmaVersion: latest` to standard config

### Changed

- File formatting now handled by Prettier
- typescript config now uses `@typescript-eslint/stylistic-type-checked` and
  `@typescript-eslint/strict-type-checked`

### Removed

- `env` option from standard config
- A significant number of deprecated rules
- WordPress configuration

## [3.0.0][] - 2021-05-07

### Added

- `eslint-plugin-promise`
- `no-nonoctal-decimal-escape`
- `no-unsafe-optional-chaining`
- babel config with `@babel/eslint-parser` and `@babel/eslint-plugin`
- typescript config with `@typescript-eslint/parser` and
  `@typescript-eslint/eslint-plugin`

### Changed

- `env` to `es2021`
- `strict` to `safe`
- Project structure
- Replaced CodeClimate with Codacy
- Replaced Travis with Github Actions workflow

### Removed

- `ecmaVersion`
- `sourceType`

## [2.0.0][] - 2020-09-21

### Added

- `default-case-last`
- `default-case-last`
- `import/no-unused-modules`
- `jsdoc/rquire-throws`
- `no-loss-of-precision`
- `no-promise-executor`
- `no-useless-backreference`
- `no-useless-backreference`
- `prefer-regex-literals`
- GitHub Packages deployment

### Changed

- `ecmaVersion` to `12`
- `id-length` is more lenient
- `eslint` peer dependency to `>= 7`

### Removed

- Deprecated Node.js and CommonJSs
- Rules from `eslint-plugin-import` and `eslint-plugin-jsdoc` that are already
  included in the plugin's `recommended` configuration

## [1.0.0][] - 2020-04-11

### Changed

- Project structure

### Removed

- `jsdoc/require-returns-description`
- `import/no-internal-modules`

## [0.9.0][] - 2020-03-09

### Added

- `default-param-last`
- `function-call-argument-newline`
- `grouped-accessor-pairs`
- `no-constructor-return`
- `prefer-exponentiation-operator`
- `require-atomic-updates`
- `import/no-unused-modules`
- `jsdoc/check-property-names`
- `jsdoc/check-values`
- `jsdoc/empty-tags`
- `jsdoc/require-property-description`
- `jsdoc/require-property-name`
- `jsdoc/require-property-type`
- `jsdoc/require-property`

### Changed

- Using `plugin:eslint-comments/recommended`
- Using `plugin:eslint-import/recommended`
- Using `plugin:jsdoc/recommended`
- Using `plugin:sonarjs/recommended`
- `max-nested-callbacks` limit reduced to `8`

## [0.8.1][] - 2019-07-30

### Removed

- jsdoc/require-description

## [0.8.0][] - 2019-07-30

### Added

- no-console
- jsdoc/check-alignment
- jsdoc/check-indentation
- jsdoc/check-syntax
- jsdoc/implements-no-classes
- jsdoc/require-description
- jsdoc/require-jsdoc
- sonarjs/no-one-iteration-loop
- sonarjs/no-collapsible-if

### Changed

- Replaced `eslint-config-wordpress` with `@wordpress/eslint-plugin`
- Updated package dependencies
- Updated tests for new WordPress standards

## [0.7.0][] - 2019-02-26

### Added

- jsdoc/check-examples
- jsdoc/require-returns-check
- jsdoc/require-returns

### Changed

- Replaced `jsonlint-cli` with `jsonlint`
- Updated eslint plugin dependencies

## [0.6.2][] - 2018-12-09

### Changed

- Replaced `js-yaml` with `yaml-lint`
- Replaced `jsonlint` with `jsonlint-cli`

### Fixed

- Missing Code Climate report ID

## [0.6.1][] - 2018-12-07

### Added

- Tests with code coverage

### Changed

- Moved npm deployment to Travis configuration
- Replaced `markdownlint-cli` with `remark-lint`

## [0.6.0][] - 2018-12-07

### Added

- Quote exception to avoid escaping

### Changed

- Added quote exceptions to allow template literals and avoid escaping

## [0.5.0][] - 2018-12-06

### Added

- Same-line exception for `object-property-newline`

## [0.4.2][] - 2018-12-06

### Fixed

- Installation instructions in readme

## [0.4.1][] - 2018-12-06

### Added

- preversion script to run tests before version bump

### Changed

- postversion script now publishes to npm on version bump

### Fixed

- eslint scripts
- broken URL's in repo documentation

## [0.4.0][] - 2018-12-06

### Added

- editorconfig and git-legal checks to Code Climate

### Changed

- Simplified npm scripts

### Removed

- WordPress-specific editorconfig settings
- Code coverage badge and checks

## [0.3.1][] - 2018-12-05

### Fixed

- Changelog links

## [0.3.0][] - 2018-12-05

### Changed

- Simplified WordPress configuration

### Removed

- `iojs` from Travis configuration

## [0.2.0][] - 2018-12-05

### Added

- Code Climate configuration
- Travis configuration
- .npmignore file

## [0.1.0][] - 2018-12-05

### Added

- Standard ESLint configuration
- WordPress ESlint configuration

[unreleased]: https://github.com/mgsisk/eslint-config/compare/v4.0.0...HEAD
[3.0.0]: https://github.com/mgsisk/eslint-config/compare/v3.0.0...v4.0.0
[2.0.0]: https://github.com/mgsisk/eslint-config/compare/v2.0.0...v3.0.0
[2.0.0]: https://github.com/mgsisk/eslint-config/compare/v1.0.0...v2.0.0
[1.0.0]: https://github.com/mgsisk/eslint-config/compare/v0.9.0...v1.0.0
[0.9.0]: https://github.com/mgsisk/eslint-config/compare/v0.8.1...v0.9.0
[0.8.1]: https://github.com/mgsisk/eslint-config/compare/v0.8.0...v0.8.1
[0.8.0]: https://github.com/mgsisk/eslint-config/compare/v0.7.0...v0.8.0
[0.7.0]: https://github.com/mgsisk/eslint-config/compare/v0.6.2...v0.7.0
[0.6.2]: https://github.com/mgsisk/eslint-config/compare/v0.6.1...v0.6.2
[0.6.1]: https://github.com/mgsisk/eslint-config/compare/v0.6.0...v0.6.1
[0.6.0]: https://github.com/mgsisk/eslint-config/compare/v0.5.0...v0.6.0
[0.5.0]: https://github.com/mgsisk/eslint-config/compare/v0.4.2...v0.5.0
[0.4.2]: https://github.com/mgsisk/eslint-config/compare/v0.4.1...v0.4.2
[0.4.1]: https://github.com/mgsisk/eslint-config/compare/v0.4.0...v0.4.1
[0.4.0]: https://github.com/mgsisk/eslint-config/compare/v0.3.1...v0.4.0
[0.3.1]: https://github.com/mgsisk/eslint-config/compare/v0.3.0...v0.3.1
[0.3.0]: https://github.com/mgsisk/eslint-config/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/mgsisk/eslint-config/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/mgsisk/eslint-config/tree/v0.1.0
[semantic]: https://semver.org
