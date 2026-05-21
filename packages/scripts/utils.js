
function kebabCaseComponent(cmp) {
    return cmp === 'QRCode'? 'qrcode': kebabCase(cmp);
}
import { kebabCase  } from 'lodash-es'

function getComponentBasePath(cmp, apiBasePath){
  if(cmp.startsWith('Chat') || cmp === 'Attachments'){
    return apiBasePath.replace('packages/components','packages/pro-components/chat')
    .replace('packages/uniapp-components','packages/uniapp-pro-components/chat')
  }
  return apiBasePath
}

export {
  kebabCaseComponent,
  getComponentBasePath,
};
