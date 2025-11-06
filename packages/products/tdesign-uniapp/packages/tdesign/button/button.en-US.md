:: BASE_DOC ::

## API

### Button Props

name | type | default | description | required
-- | -- | -- | -- | --
appParameter | String | - | \- | N
block | Boolean | false | make button to be a block-level element | N
children | String / TNode | - | button's children elements。Typescript：`string \| TNode`。[see more ts definition](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
content | String / TNode | - | button's children elements。Typescript：`string \| TNode`。[see more ts definition](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
customDataset | any | - | \- | N
default | String / TNode | - | default slot。Typescript：`string \| TNode`。[see more ts definition](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
disabled | Boolean | undefined | disable the button, make it can not be clicked | N
form | String | undefined |  native `form` attribute，which supports triggering events for a form with a specified id through the use of the form attribute | N
ghost | Boolean | false | make background-color to be transparent | N
hoverClass | String | - | \- | N
hoverStartTime | Number | 20 | \- | N
hoverStayTime | Number | 70 | \- | N
hoverStopPropagation | Boolean | false | \- | N
href | String | - | \- | N
icon | TNode | - | use it to set left icon in button。Typescript：`TNode`。[see more ts definition](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
icon | String / Object | - | icon name | N
iconProps | Object | {} | icon properties | N
lang | String | - | message language。options: en/zh_CN/zh_TW | N
loading | Boolean | false | set button to be loading state | N
loadingProps | Object | - | Typescript：`LoadingProps`，[Loading API Documents](./loading?tab=api)。[see more ts definition](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/button/type.ts) | N
openType | String | - | open type of button, [Miniprogram Button](https://developers.weixin.qq.com/miniprogram/dev/component/button.html)。options: contact/share/getPhoneNumber/getUserInfo/launchApp/openSetting/feedback/chooseAvatar/agreePrivacyAuthorization | N
phoneNumberNoQuotaToast | Boolean | true | \- | N
sendMessageImg | String | 截图 | \- | N
sendMessagePath | String | 当前分享路径 | \- | N
sendMessageTitle | String | 当前标题 | \- | N
sessionFrom | String | - | \- | N
shape | String | rectangle | button shape。options: rectangle/square/round/circle | N
showMessageCard | Boolean | false | \- | N
size | String | medium | a button has four size。options: small/medium/large。Typescript：`SizeEnum`。[see more ts definition](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
size | String | medium | a button has four size。options: extra-small/small/medium/large | N
suffix | TNode | - | Typescript：`TNode`。[see more ts definition](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
tId | String | - | id | N
tag | String | - | HTML Tag Element。options: button/a/div | N
theme | String | - | button theme。options: default/primary/danger/warning/success | N
theme | String | default | button theme。options: default/primary/danger/light | N
type | String | button | type of button element in html。options: submit/reset/button | N
type | String | - | type of button element, same as formType of Miniprogram。options: submit/reset | N
variant | String | base | variant of button。options: base/outline/dashed/text | N
onAgreeprivacyauthorization | Function |  | Typescript：`() => void`<br/> | N
onChooseavatar | Function |  | Typescript：`() => void`<br/> | N
onClick | Function |  | Typescript：`(e: MouseEvent) => void`<br/>trigger on click | N
onContact | Function |  | Typescript：`() => void`<br/> | N
onCreateliveactivity | Function |  | Typescript：`() => void`<br/> | N
onError | Function |  | Typescript：`() => void`<br/> | N
onGetphonenumber | Function |  | Typescript：`() => void`<br/> | N
onGetrealtimephonenumber | Function |  | Typescript：`() => void`<br/> | N
onGetuserinfo | Function |  | Typescript：`() => void`<br/> | N
onLaunchapp | Function |  | Typescript：`() => void`<br/> | N
onOpensetting | Function |  | Typescript：`() => void`<br/> | N
onTap | Function |  | Typescript：`event => void`<br/> | N

### Button Events

name | params | description
-- | -- | --
agreeprivacyauthorization | \- | \-
chooseavatar | \- | \-
click | `(e: MouseEvent)` | trigger on click
contact | \- | \-
createliveactivity | \- | \-
error | \- | \-
getphonenumber | \- | \-
getrealtimephonenumber | \- | \-
getuserinfo | \- | \-
launchapp | \- | \-
opensetting | \- | \-
tap | `event` | \-

### Button Slots

name | Description
-- | --
- | \-

### Button External Classes

className | Description
-- | --
t-class | \-
t-class-icon | class name of icon
t-class-loading | class name of loading
