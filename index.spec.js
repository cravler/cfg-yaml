'use strict';

var loadConfig = require('./index');
var assert = require('chai').assert;

describe('cfg-yaml', function () {

    it('config.yml', function (done) {
        loadConfig('config.yml', function(err, cfg) {
            if (err) {
                return done(err);
            }

            assert.equal(cfg.has('hello.cfg.yaml'), true);
            assert.equal(cfg.has('yaml.cfg.hello'), false);

            assert.equal(cfg.get('hello.cfg.yaml'), 'hello cfg-yaml');
            assert.equal(cfg.get('yaml.cfg.hello'), undefined);

            done();
        });
    });

});