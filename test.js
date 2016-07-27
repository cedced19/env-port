'use strict';
var envPort = require('./');
var assert = require('assert');

describe('env-port', function () {

  it('should give the port provided', function () {
    assert.equal(envPort('3000'), '3000');
  });


  it('should give the port from the variable environment', function () {
    process.env.PORT = '8080';
    assert.equal(envPort('3000'), '8080');
  });

});
