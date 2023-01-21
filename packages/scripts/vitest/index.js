/**
 * used for API system, web page, esm
 */
const { getComponentUnitTests, getOneUnitTest } = require('./main');

module.exports = { getComponentUnitTests, getOneUnitTest };

exports.getComponentUnitTests = getComponentUnitTests;
exports.getOneUnitTest = getOneUnitTest;
exports.default = getComponentUnitTests;

Object.defineProperty(exports, '__esModule', { value: true })
