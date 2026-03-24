const map = require('./map.json');
const { formatArrayToMap, groupByComponent, getApiComponentMapByFrameWork } = require('./common');
const { COMPONENT_API_MD_MAP, MOBILE_COMPONENT_API_MD_MAP, MOBILE_FRAMES } = require('./config');

const framework = 'UniApp';
const component = 'Radio';

const frameworkMap = formatArrayToMap(map.data, 'platform_framework');
console.log('UniApp value:', frameworkMap[framework]);

const apiData = require('./api.json');
const ALL_API = apiData.data;
const frameworkData = groupByComponent(ALL_API, frameworkMap[framework]);

console.log('Radio APIs count:', frameworkData['Radio'] ? frameworkData['Radio'].length : 0);
console.log('RadioGroup APIs count:', frameworkData['RadioGroup'] ? frameworkData['RadioGroup'].length : 0);

if (frameworkData['Radio']) {
    const disabled = frameworkData['Radio'].filter(a => a.field_name === 'disabled');
    console.log('Radio disabled count:', disabled.length);
    disabled.forEach(a => {
        console.log('  fdv:', JSON.stringify(a.field_default_value), 'typeof:', typeof a.field_default_value, 'fct:', a.field_category_text);
        console.log('  fdv === "undefined":', a.field_default_value === 'undefined');
        console.log('  fdv === undefined:', a.field_default_value === undefined);
        console.log('  deprecated:', a.deprecated);
        console.log('  html_attribute:', a.html_attribute);
    });
}

const pick = require('lodash/pick');
const cmpMap = getApiComponentMapByFrameWork(
    Object.assign({}, COMPONENT_API_MD_MAP, MOBILE_COMPONENT_API_MD_MAP),
    framework
);
console.log('cmpMap[Radio]:', cmpMap[component]);

const baseData = pick(frameworkData, cmpMap[component] || [component]);
console.log('baseData keys:', Object.keys(baseData));
if (baseData['Radio']) {
    const disabled = baseData['Radio'].filter(a => a.field_name === 'disabled');
    console.log('baseData Radio disabled count:', disabled.length);
}
