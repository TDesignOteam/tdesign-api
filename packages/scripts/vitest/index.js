function getUnitTestCode() {
  console.log(123);
}

module.exports = { getUnitTestCode };

exports.getUnitTestCode = getUnitTestCode;
exports.default = getUnitTestCode;

Object.defineProperty(exports, '__esModule', { value: true })
