const kebabCase = require('lodash/kebabCase');


 function kebabCaseComponent(cmp) {
    return cmp === 'QRCode'? 'qrcode': kebabCase(cmp);
}


module.exports = {
  kebabCaseComponent,
};