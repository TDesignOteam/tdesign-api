/**
 * 以 Vue 的事件名称为基准，映射 React 事件名称
 * 
 * Key 是 @vue/test-utils 的 trigger 枚举值，表示触发事件的名称（wrapper.trigger('xxx')）
 * 
 * Vue 事件枚举值见 https://github.com/vuejs/test-utils/blob/main/src/constants/dom-events.ts#L109
 * 注意：事件支持修饰符 DomEventNameWithModifier
 * 
 * React 使用 fireEvent https://testing-library.com/docs/dom-testing-library/api-events/#fireevent
 * 示例：fireEvent.keyDown(domNode, {key: 'Enter', code: 'Enter', charCode: 13})  // 获取 keyCode 信息：https://keycode.info/
 * 
 * React UserEvent.keyboard: https://github.com/testing-library/user-event/blob/main/src/keyboard/keyMap.ts
 * userEvent.keyboard('{Escape}')
 * 
 */
const UNIT_TEST_EVENTS_MAP = {
  'focus': 'focus',
  'blur': 'blur',
  'click': 'click',
  'mousedown': 'mouseDown',
  'mouseenter': 'mouseEnter',
  'mouseleave': 'mouseLeave',
  'mousemove': 'mouseMove',
  'mouseout': 'mouseOut',
  'mouseover': 'mouseOver',
  'mouseup': 'mouseUp',
  'keydown': 'keyDown',
  'keypress': 'keyPress',
  'keyup': 'keyUp',
  'dragend': 'dragEnd',
  'dragenter': 'dragEnter',
  'dragexit': 'dragExit',
  'dragleave': 'dragLeave',
  'dragover': 'dragOver',
  'dragstart': 'dragStart',
  'compositionend': 'compositionEnd',
  'compositionstart': 'compositionStart',
  'compositionupdate': 'compositionUpdate',
  'keydown.enter': {
    event: 'keyDown',
    modifier: { key: 'Enter', code: 'Enter', charCode: 13 },
    userEvent: 'Enter',
  },
  'keydown.backspace': {
    event: 'keyDown',
    modifier: { key: 'Backspace', code: 'Backspace', charCode: 8 },
    userEvent: 'Backspace',
  },  
  'keydown.esc': {
    event: 'keyDown',
    modifier: { key: 'Escape', code: 'Escape', charCode: 27 },
    userEvent: 'Escape',
  },
  'keydown.delete': {
    event: 'keyDown',
    modifier: { key: 'Delete', code: 'Delete', charCode: 46 },
    userEvent: 'Delete',
  },
  'keydown.tab': {
    event: 'keyDown',
    modifier: { key: 'Tab', code: 'Tab', charCode: 9 },
    userEvent: 'Tab',
  },
  'keydown.space': {
    event: 'keyDown',
    modifier: { key: 'Space', code: 'Space', charCode: 32 },
  },
  'keydown.left': {
    event: 'keyDown',
    modifier: { key: 'ArrowLeft', code: 'ArrowLeft', charCode: 37 },
    userEvent: 'ArrowLeft',
  },
  'keydown.up': {
    event: 'keyDown',
    modifier: { key: 'ArrowUp', code: 'ArrowUp', charCode: 38 },
    userEvent: 'ArrowUp',
  },
  'keydown.right': {
    event: 'keyDown',
    modifier: { key: 'ArrowRight', code: 'ArrowRight', charCode: 39 },
    userEvent: 'ArrowRight',
  },
  'keydown.down': {
    event: 'keyDown',
    modifier: { key: 'ArrowDown', code: 'ArrowDown', charCode: 40 },
    userEvent: 'ArrowDown',
  },
  // control pad
  // 'keydown.pageup': {
  //   event: 'keyDown',
  //   modifier: { key: 'PageUp', code: 'PageUp', charCode: 1 },
  // },
  // 'keydown.pagedown': {
  //   event: 'keyDown',
  //   modifier: { key: 'PageDown', code: 'PageDown', charCode: 1 },
  // },
  // 'keydown.end': {
  //   event: 'keyDown',
  //   modifier: { key: '', code: '', charCode: 1 },
  // },
  // 'keydown.home': {
  //   event: 'keyDown',
  //   modifier: { key: '', code: '', charCode: 1 },
  // },
};

module.exports = {
  UNIT_TEST_EVENTS_MAP
};