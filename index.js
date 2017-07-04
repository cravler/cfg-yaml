'use strict';

var fs = require('fs');
var path = require('path');
var yaml = require('js-yaml');
var Config = require('cfg-js');

module.exports = loadConfig;

function loadConfig (filePath, callback) {
    var absoluteFilePath = path.resolve(filePath);

    fs.readFile(absoluteFilePath, 'utf8', function(err, content) {
        if (err) {
            return callback(err);
        }

        var config = {};
        try {
            config = yaml.safeLoad(content);
        } catch (e) {
            return callback(e);
        }

        var cfg = new Config(config);
        cfg.file = absoluteFilePath;

        callback(null, cfg);
    });
}

loadConfig.Config = Config;