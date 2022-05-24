# 生成单元测试案例

## 原则
1、单元测试基于API构造案例以及相关的数据构造原则上应当保持与框架无关，只可在单元测试案例代码片段组合上做差异化处理（主要原因在于不同框架所使用单测框架、写法可能存在不同）；  
2、同框架不同版本（比如 “Vue(Mobile)和Vue(PC)”，“React(Mobile)和React(PC)”）应当优先保持一样的生成方式；  

## 指引  
### 如何新增框架支持生成单元测试案例  
1、设置单测文件生成路径：  

    gen-unit-test.js -> getUnitTestFilePath

2、设置框架所能够支持的生成单元测试能力：

    gen-unit-test.js -> getGenSegmentFuncMap
    (getTestImportSegment 与 getDefaultSegment 为必选，即必须有依赖引入与默认的案例生成能力)  

