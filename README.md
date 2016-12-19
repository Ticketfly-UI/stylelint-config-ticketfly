# stylelint-config-ticketfly

_Ticketfly's stylelint configuration_.

[![Latest NPM release][npm-badge]][npm-badge-url]
[![CircleCI Build Status][circle-badge]][circle-badge-url]
[![License][license-badge]][license-badge-url]
[![Dependencies][dependencies-badge]][dependencies-badge-url]
[![Dev Dependencies][devDependencies-badge]][devDependencies-badge-url]

## Installation

```console
npm install stylelint-config-ticketfly
```

## Usage

In your `.stylelintrc` file, extend this config:

```json
{
  "extends": "stylelint-config-ticketfly"
}
```

### Extending the Config

Simply add a `"rules"` key to your config and add your overrides there.

For example, to change `string-quotes` to `single` and turn off the `max-empty-lines` rule:

```json
{
  "extends": "stylelint-config-suitcss",
  "rules": {
    "string-quotes": "single",
    "max-empty-lines": null
  }
}
```

## Contributing

### Versioning

This project uses the `npmpub` package to _help_ automate the steps involved
with publishing package versions to `npm`. Because `npmpub` encourages manual
updating of the `CHANGELOG` and the `package.json` version, you'll need to [handle
those first](https://github.com/MoOx/npmpub#usage), commit with the message
"released x.x.x" and then run `npm run release`.

## [Changelog](CHANGELOG.md)

## [License](LICENSE)


[npm-badge]: https://img.shields.io/npm/v/stylelint-config-ticketfly.svg
[npm-badge-url]: https://www.npmjs.com/package/stylelint-config-ticketfly
[circle-badge]: https://circleci.com/gh/Ticketfly-UI/stylelint-config-ticketfly/tree/master.svg?style=svg&circle-token={{CIRCLE_TOKEN}}
[circle-badge-url]: https://circleci.com/gh/Ticketfly-UI/stylelint-config-ticketfly/tree/master
[license-badge]: https://img.shields.io/npm/l/stylelint-config-ticketfly.svg
[license-badge-url]: LICENSE.md
[dependencies-badge]: https://img.shields.io/david/Ticketfly-UI/stylelint-config-ticketfly.svg
[dependencies-badge-url]: https://david-dm.org/Ticketfly-UI/stylelint-config-ticketfly
[devDependencies-badge]: https://img.shields.io/david/dev/Ticketfly-UI/stylelint-config-ticketfly.svg
[devDependencies-badge-url]: https://david-dm.org/Ticketfly-UI/stylelint-config-ticketfly#info=devDependencies
