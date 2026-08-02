:: BASE_DOC ::

## API

### Scrollbar Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，TS 类型：`React.CSSProperties` | N
ariaLabel | String | - | 视图层的 aria-label 文本 | N
autoExpand | Boolean | true | 滚动条 hover 时是否向外扩展（增加交互热区） | N
container | Object | - | 设置滚动容器的最大高度/宽度。TS 类型：`ScrollbarContainerProps` | N
disabled | Boolean | false | 禁止滚动 | N
id | String | - | 视图层的 ID | N
noResize | Boolean | false | 容器尺寸是否响应变化（若容器尺寸恒定，开启可优化性能） | N
role | String | scrollbar | 视图层的 WAI-ARIA 角色 | N
step | Object | - | 滚动步长。TS 类型：`{x?:number;y?:number}` | N
tabindex | String / Number | - | 包裹容器的 tabindex | N
thumbMinSize | Number | 20 | 滚动条滑块的最小尺寸（px） | N
viewClass | String | - | 视图（内容区）的自定义类名 | N
visibility | String | hover | 滚动条的显示形式。可选项：always/hover/hide | N
wrapClass | String | - | 包裹容器的自定义类名 | N
onScroll | Function |  | TS 类型：`(context:{e:Event}) => void`<br/>滚动时触发 | N

### ScrollbarInstanceFunctions 组件实例方法

名称 | 参数 | 返回值 | 描述
-- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，TS 类型：`React.CSSProperties` | N
getValues | \- | `PositionValues ` | 必需。获取包含完整滚动信息的视图对象。[详细类型定义](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/scrollbar/type.ts)。<br/>` interface PositionValues {  left:number,top: number,scrollLeft:number,scrollTop:number,scrollWidth:number,scrollHeight:number, clientWidth:number,clientHeight:number }`<br/>
scrollTo | `(options: { top?: number; left?: number; behavior?: ScrollBehavior })` | \- | 必需。滚动到一组特定坐标。TS 类型：`ScrollToFn` `type ScrollToFn = {   (x: number, y: number): void;   (options: { top?: number; left?: number; behavior?: ScrollBehavior }): void; }`。[详细类型定义](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/scrollbar/type.ts)
scrollToEdge | `(position:PositionEdge) ` | \- | 必需。滚动到某一边。[详细类型定义](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/scrollbar/type.ts)。<br/>`type PositionEdge = "left"\|"right"\|"top"\|"bottom"`<br/>
