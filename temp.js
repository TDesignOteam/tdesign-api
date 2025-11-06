const apiJson = require('./packages/scripts/api.json')
const fs = require('fs')

apiJson.data.forEach(item => {
  if (item.platform_framework.includes('64') && !item.platform_framework.includes('128')) {
    item.platform_framework.push('128')
  }
  if (item.platform_framework_text.includes('Miniprogram') && !item.platform_framework_text.includes('UniApp')) {
    item.platform_framework_text.push('UniApp')
  }
})
fs.writeFileSync('./packages/scripts/api.json', JSON.stringify(apiJson, null, 2))