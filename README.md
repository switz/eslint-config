# switz's eslint-config

## Motivation

I've had this lying around in my home dir `~/.eslintrc.js` for a while and decided to package it up so I can override it in project settings (e.g. targets) and include it in my personal projects.

You probably have your own preferences, feel free to hack and slash it.

## Installation

```
# yarn add eslint
$ yarn add -D @switz/eslint-config
# or
$ npm install -D @switz/eslint-config
```

Update your eslint config (`.eslintrc` or `.eslintrc.js`):

```
{
  "extends": [
    "@switz/eslint-config"
  ]
}
```

If you need React support, use

```
{
  "extends": [
    "@switz/eslint-config/react.cjs"
  ]
}
```

Or node:

```
{
  "extends": [
    "@switz/eslint-config/node.cjs"
  ]
}
```

Or typescript:

```
{
  "extends": [
    "@switz/eslint-config/typescript.cjs"
  ]
}
```

## Reference

https://eslint.org/docs/developer-guide/shareable-configs

## License

MIT, have fun
