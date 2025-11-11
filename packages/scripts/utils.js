const kebabCase = require('lodash/kebabCase');


function kebabCaseComponent(cmp) {
    return cmp === 'QRCode'? 'qrcode': kebabCase(cmp);
}

function getComponentBasePath(cmp, apiBasePath){
  if(cmp.startsWith('Chat') || cmp === 'Attachments'){
    return apiBasePath.replace('packages/components','packages/pro-components/chat')
  }
  return apiBasePath
}


module.exports = {
  kebabCaseComponent,
  getComponentBasePath
};