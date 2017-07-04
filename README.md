# cfg-yaml

YAML configuration for NodeJS

## Install

This package depends on [Node.js](http://nodejs.org/).

```sh
$ npm install cfg-yaml
```

## Usage

`config.yml`:

```yaml
hello:
    cfg:
        yaml: 'hello cfg-yaml'
```

```js
var cfgYaml = require('cfg-yaml');

cfgYaml('config.yml', function (err, cfg) {
    cfg.has('hello.cfg.yaml'); // true
    cfg.get('hello.cfg.yaml'); // 'hello cfg-yaml'

    cfg.has('yaml.cfg.hello'); // false
    cfg.get('yaml.cfg.hello'); // undefined
});
```

## License

This software is under the MIT license. See the complete license in:

```
LICENSE
```