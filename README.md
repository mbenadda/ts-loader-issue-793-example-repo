# A minimal repository example for issue #793 in ts-loader

Compiler throws using TS 2.9.1, ts-loader in webpack & resolveJsonModules

[Link to issue](https://github.com/TypeStrong/ts-loader/issues/793)

## Reproduction steps

- Clone the repo
- Run `yarn install` to setup the dependencies (TS, webpack, ts-loader)
- Run `yarn webpack`
- Throws `TypeError: Cannot read property 'getOptionsDiagnostics' of undefined`
