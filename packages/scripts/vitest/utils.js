function getItDescription(oneApiData) {
  return `'props.${oneApiData.field_name} works fine'`;
}

function getMountCode(framework, componentCode) {
  if (framework === 'Vue(PC)') {
    return [
      `mount({
        render() {
          return (
            ${componentCode}
          );
        }
      })`
    ];
  }
  if (framework === 'VueNext(PC)') {
    return `mount(${componentCode})`;
  }
}

function getArrayCode(arr) {
  return `[${arr.map(val => typeof val === 'string' ? `'${val}'` : JSON.stringify(val)).join(', ')}]`;
}

function parseJSON(json) {
  try {
    return JSON.parse(json);
  } catch (e) {
    return {};
  }
}

module.exports = {
  getItDescription,
  getMountCode,
  getArrayCode,
  parseJSON,
};
