// 同样的测试用例复用到其他实例
function copyUnitTestsToOtherWrapper(code, test, framework) {
  const { wrapper, copyTestToWrapper } = test;
  const oneTestCode = code.join('\n');
  const tmpWrappers = [];
  const regExp = new RegExp(wrapper, 'g');
  if (Array.isArray(copyTestToWrapper)) {
    tmpWrappers.push(...copyTestToWrapper);
    return copyTestToWrapper.map((oneWrapper) => {
      return oneTestCode.replace(regExp, oneWrapper);
    }).join('\n');
  }
  if (typeof copyTestToWrapper === 'object' && !Array.isArray(copyTestToWrapper)) {
    const arr = [];
    Object.keys(copyTestToWrapper).forEach((supportFramework) => {
      if (framework.indexOf(supportFramework) !== -1) {
        const wrappers = copyTestToWrapper[supportFramework];
        tmpWrappers.push(...wrappers);
        const copyAnotherCode = wrappers.map((oneWrapper) => {
          return oneTestCode.replace(regExp, oneWrapper);
        }).join('\n');
        arr.push(copyAnotherCode);
      }
    });
    return {
      copyCode: arr.join('\n'),
      wrappers: tmpWrappers,
    };
  }
}

module.exports = {
  copyUnitTestsToOtherWrapper,
};
