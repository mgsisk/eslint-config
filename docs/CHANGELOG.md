# Changelog

Documents notable project changes. Versions are [semantic][].

## [Unreleased][]

### Added

- `no-useless-backreference` rule
- `default-case-last` rule

### Changed

- Project structure

### Removed

- `jsdoc/require-returns-description` rule
- `import/no-internal-modules` rule

## [0.9.0][] - 2020-03-09

### Added
- `default-param-last` rule
- `function-call-argument-newline` rule
- `grouped-accessor-pairs` rule
- `no-constructor-return` rule
- `prefer-exponentiation-operator` rule
- `require-atomic-updates` rule
- `import/no-unused-modules` rule
- `jsdoc/check-property-names` rule
- `jsdoc/check-values` rule
- `jsdoc/empty-tags` rule
- `jsdoc/require-property-description` rule
- `jsdoc/require-property-name` rule
- `jsdoc/require-property-type` rule
- `jsdoc/require-property` rule

### Changed
- Using `plugin:eslint-comments/recommended`
- Using `plugin:eslint-import/recommended`
- Using `plugin:jsdoc/recommended`
- Using `plugin:sonarjs/recommended`
- `max-nested-callbacks` limit reduced to `8`

## [0.8.1][] - 2019-07-30

### Removed
- jsdoc/require-description rule

## [0.8.0][] - 2019-07-30

### Added
- no-console rule
- jsdoc/check-alignment rule
- jsdoc/check-indentation rule
- jsdoc/check-syntax rule
- jsdoc/implements-no-classes rule
- jsdoc/require-description rule
- jsdoc/require-jsdoc rule
- sonarjs/no-one-iteration-loop rule
- sonarjs/no-collapsible-if rule

### Changed
- Replaced `eslint-config-wordpress` with `@wordpress/eslint-plugin`
- Updated package dependencies
- Updated tests for new WordPress standards

## [0.7.0][] - 2019-02-26

### Added
- jsdoc/check-examples rule
- jsdoc/require-returns-check rule
- jsdoc/require-returns rule

### Changed
- Replaced `jsonlint-cli` with `jsonlint`
- Updated eslint plugin dependencies.

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

[Unreleased]: https://github.com/mgsisk/eslint-config/compare/v0.9.0...HEAD
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
