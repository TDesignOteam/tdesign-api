function generateVitestUnitCase(baseData, framework) {
  console.log(baseData);
  baseData.forEach((oneApiData) => {
    if (!oneApiData.test_description) return;
    const testDescription = parseJSON(oneApiData.test_description);
    if (!testDescription.PC || framework.indexOf('PC') === -1) return;
    // 存在 Web 框架的单测用例，再输出
    console.log(testDescription.PC);
  });
}

function parseJSON(json) {
  try {
    return JSON.parse(json);
  } catch (e) {
    return {};
  }
}

module.exports = {
  generateVitestUnitCase,
};
