function parseJSON(json, error = '') {
  try {
    return JSON.parse(json);
  } catch (e) {
    console.error(error || `${json} is not a JSON.`);
    return {};
  }
}

module.exports = {
  parseJSON,
};
