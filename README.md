# TDesign API 维护工具

## 本地启动

`npm i` 安装依赖后，执行 `npm run dev`，执行成功后本地访问 http://127.0.0.1:16001/api_design 查看 API 设计页面

## 功能说明

### 主功能界面

<img width="500" alt="image" src="https://user-images.githubusercontent.com/7600149/179940926-04c29ef5-85dd-4513-b73d-46356b37312e.png">

你可以主界面里做组件 API 的增删改查操作。

### 生成 API 

<img width="500" alt="image" src="https://user-images.githubusercontent.com/7600149/179941570-ad3ff186-c4a5-40b2-b24c-4c4d65d70b26.png">

点击 “生成文件” 按钮，指定生成组件和技术栈框架平台，确认后会在本地 `packages/products/` 对应仓库目录下生成对应 md 文档、API 定义等文件。

### 提交

本地生成了相关文件，修改 db 中的数据后，需要将所有修改都以 PR 方式提交到仓库中，找其他同学 review，PR 合并后 GitHub Action 会自动根据本次提交的内容，使用 @github-actions
github-actions[bot] 的账号自动向对应 TDesign 组件仓库创建分支，并提交本次修改的代码。

例：https://github.com/TDesignOteam/tdesign-api/pull/12

<img width="500" alt="image" src="https://user-images.githubusercontent.com/7600149/179970060-fc0ba2c1-ffdf-4653-915f-c65de75667b8.png">
<img width="500" alt="image" src="https://user-images.githubusercontent.com/7600149/179970192-ba69c8f0-0e85-4dc2-86ce-fc46c846c246.png">

你可以自行发起 PR，也可以让开发者在对应分支上继续实现。

例：https://github.com/TDesignOteam/tdesign-react-test/pull/6
