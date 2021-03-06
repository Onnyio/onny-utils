/**
 * Copyright (C) 2015-2016 Onny LLC - All Rights Reserved
 */

var pullAt = require('lodash/pullAt');

module.exports = function (src) {
  var _len3;
  var _key3;
  var indexes;
  for (_len3 = arguments.length, indexes = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1;
    _key3 < _len3; _key3 += 1) {
    indexes[_key3 - 1] = arguments[_key3];
  }
  return pullAt.apply(pullAt, [src].concat(indexes));
};
