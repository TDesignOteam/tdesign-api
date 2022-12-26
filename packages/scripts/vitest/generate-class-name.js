/**
 * 输出类名检测单测用例
 */
function generateClassNameUnitCase(test, oneApiData, framework, component) {
  if (['VueNext(PC)', 'Vue(PC)'].includes(framework)) {
    return generateVueClassName(test, oneApiData, framework, component);
  }
  if (['React(PC)'].includes(framework)) {
    return generateReactClassName(test, oneApiData, component);
  }
}

function generateVueClassName(test, oneApiData, framework, component) {
  const { className, snapshot } = test;
  const componentCode = `<${component} ${oneApiData.field_name}={item}>Text</${component}>`;
  const enums = oneApiData.field_enum.split('/');
  // 不同的值控制不同的类名（一个值必定对应着一个类名）
  if (typeof className === 'string' && className.indexOf('${item}') != -1 && oneApiData.field_type_text[0] === 'String') {
    const arr = [
      `[${enums.map(val => `'${val}'`).join(', ')}].forEach((item) => {`,
      `it(\`props.${oneApiData.field_name} is equal to \${ item }\`, () => {`,
      `const wrapper = ${getMountCode(framework, componentCode)};`,
      `expect(wrapper.classes(\`${className}\`)).toBeTruthy();`,
      snapshot ? `expect(wrapper.element).toMatchSnapshot();` : '',
      `});`,
      `});`,
    ];
    return arr.filter(v => v).join('\n');
  }

  // 不同的值控制不同的类名（一个值可能对应着空类名，也可能对应着别的名字，如：size=small 对应着 t-size-s）
  if (Array.isArray(className) && oneApiData.field_type_text[0] === 'String') {
    const classNameVariable = `${oneApiData.field_name}ClassNameList`;
    const arr = [
      `const ${classNameVariable} = ${getArrayCode(className)};`,
      `${getArrayCode(enums)}.forEach((item, index) => {`,
      `it(\`props.${oneApiData.field_name} is equal to \${ item }\`, () => {`,
      `const wrapper = ${getMountCode(framework, componentCode)};`,
      `expect(wrapper.classes(${classNameVariable}[index])).toBeTruthy();`,
      snapshot ? `expect(wrapper.element).toMatchSnapshot();` : '',
      `});`,
      `});`,
    ];
    return arr.filter(v => v).join('\n');
  }

  // 控制单个类名是否显示，如：disabled 对应着类名 `t-is-disabled` 是否存在
  if (typeof className === 'string' && oneApiData.field_type_text[0] === 'Boolean') {
    const arr = [
      `it('props.${oneApiData.field_name} works fine', () => {`,
      `const wrapper1 = mount(<${component}>Text</${component}>);`,
      `expect(wrapper1.classes('${className}')).toBeFalsy();`,
      `const wrapper2 = mount(<${component} ${oneApiData.field_name}>Text</${component}>);`,
      `expect(wrapper2.classes('${className}')).toBeTruthy();`,
      snapshot ? `expect(wrapper2.element).toMatchSnapshot();` : '',
      '});',
    ];
    return arr.filter(v => v).join('\n');
  }
}

function getMountCode(framework, componentCode) {
  if (framework === 'Vue(PC)') {
    return [
      `mount({
        render() {
          return (
            ${componentCode}
          );
        }
      })`
    ];
  }
  if (framework === 'VueNext(PC)') {
    return `mount(${componentCode})`;
  }
}

function getArrayCode(arr) {
  return `[${arr.map(val => `'${val}'`).join(', ')}]`;
}

function generateReactClassName(test, oneApiData, component) {
  const { className, snapshot } = test;
  const componentCode = `<${component} ${oneApiData.field_name}={item}>Text</${component}>`;
  const enums = oneApiData.field_enum.split('/');
  // 不同的值控制不同的类名（一个值必定对应着一个类名）
  if (typeof className === 'string' && className.indexOf('${item}') != -1 && oneApiData.field_type_text[0] === 'String') {
    const arr = [
      `[${enums.map(val => `'${val}'`).join(', ')}].forEach((item) => {
      it(\`props.${oneApiData.field_name} is equal to \${ item }\`, () => {
      const { container } = render(${componentCode});
      expect(container.firstChild).toHaveClass(\`${className}\`);`,
      snapshot ? `expect(container).toMatchSnapshot();` : '',
      `});`,
      `});`,
    ];
    return arr.filter(v => v).join('\n');
  }

  // 不同的值控制不同的类名（一个值可能对应着空类名，也可能对应着别的名字，如：size=small 对应着 t-size-s）
  if (Array.isArray(className) && oneApiData.field_type_text[0] === 'String') {
    const classNameVariable = `${oneApiData.field_name}ClassNameList`;
    const arr = [
      `const ${classNameVariable} = ${getArrayCode(className)};`,
      `${getArrayCode(enums)}.forEach((item, index) => {`,
      `it(\`props.${oneApiData.field_name} is equal to \${ item }\`, () => {`,
      `const { container } = render(${componentCode});`,
      `expect(container.firstChild).toHaveClass(${classNameVariable}[index]);`,
      snapshot ? `expect(container).toMatchSnapshot();` : '',
      `});`,
      `});`,
    ];
    return arr.filter(v => v).join('\n');
  }

  // 控制单个类名是否显示，如：disabled 对应着类名 `t-is-disabled` 是否存在
  if (typeof className === 'string' && oneApiData.field_type_text[0] === 'Boolean') {
    const arr = [
      `it(${getItDescription(oneApiData)}, () => {
        const { container: container1 } = render(<${component}>Text</${component}>);
        expect(container1.querySelector('.${className}')).toBeFalsy();
        const { container: container2 } = render(<${component}>Text</${component}>);
        expect(container2.firstChild).toHaveClass('${className}');`,
      snapshot ? `expect(container2).toMatchSnapshot();` : '',
      `});`,
    ];
    return arr.filter(v => v).join('\n');
  }
}

function getItDescription(oneApiData) {
  return `'props.${oneApiData.field_name} works fine'`;
}

module.exports = {
  generateClassNameUnitCase
};
