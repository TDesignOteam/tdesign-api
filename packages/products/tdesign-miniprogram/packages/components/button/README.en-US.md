:: BASE_DOC ::

## API

### Button Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
app-parameter | String | - | \- | N
block | Boolean | false | make button to be a block-level element | N
content | String | - | button's children elements | N
custom-dataset | any | - | \- | N
disabled | Boolean | undefined | disable the button, make it can not be clicked | N
ghost | Boolean | false | make background-color to be transparent | N
hover-class | String | - | \- | N
hover-start-time | Number | 20 | \- | N
hover-stay-time | Number | 70 | \- | N
hover-stop-propagation | Boolean | false | \- | N
icon | String / Object | - | icon name | N
lang | String | - | message language。options: en/zh_CN/zh_TW | N
loading | Boolean | false | set button to be loading state | N
loading-props | Object | - | Typescript：`LoadingProps`，[Loading API Documents](./loading?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/button/type.ts) | N
open-type | String | - | open type of button, [Miniprogram Button](https://developers.weixin.qq.com/miniprogram/dev/component/button.html)。options: contact/share/getPhoneNumber/getUserInfo/launchApp/openSetting/feedback/chooseAvatar/agreePrivacyAuthorization | N
phone-number-no-quota-toast | Boolean | true | \- | N
send-message-img | String | 截图 | \- | N
send-message-path | String | 当前分享路径 | \- | N
send-message-title | String | 当前标题 | \- | N
session-from | String | - | \- | N
shape | String | rectangle | button shape。options: rectangle/square/round/circle | N
show-message-card | Boolean | false | \- | N
size | String | medium | a button has four size。options: extra-small/small/medium/large | N

t-id | String | - | id | N
theme | String | default | button theme。options: default/primary/danger/light | N
type | String | - | type of button element, same as formType of Miniprogram。options: submit/reset | N
variant | String | base | variant of button。options: base/outline/dashed/text | N

### Button Slots

name | Description
-- | --
\- | \-
content | button's children elements
suffix | \-

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

### Button External Classes

className | Description
-- | --
t-class | \-
t-class-icon | class name of icon
t-class-loading | class name of loading
