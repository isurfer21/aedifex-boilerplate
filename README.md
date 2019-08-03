# Aedifex boilerplate
This app is used to display the usage of **aedifex** for development.

## Development
[Aedifex](https://www.npmjs.com/package/aedifex) is a *task runner* with defined [actions](aedifex.action.js) used in [configurations](aedifex.config.json); that is being triggered by custom *scripts* in `package.json` file.

### Setup
Install all the dependencies.
```
$ npm install
```

### Develop
Build application for development inside bin/ folder.
```
$ npm run build:dev
```
Watches files & rebuild on modification.

### Publish
Build for production/distribution inside bin/ folder.
```
$ npm run build
```

### Serve
Serve files inside bin/ folder via local HTTP web server.
```
$ npm run serve
```

### Test
Run unit-test cases.
```
$ npm run test
```
