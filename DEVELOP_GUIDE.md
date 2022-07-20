## 仓库结构

``` Shell
.
├── db
├── packages
│   ├── frontend // 前端页面实现
│   ├── products // 各仓库生成文件产物目录
│   ├── scripts  // 生成脚本
│   ├── server   // nodejs 服务
│   └── ...
└── ...
```

## 修改前端页面

 ``` Shell
 ## 启动 nodejs 服务
 npm run dev
 ## 新开 shell Tab
 cd packages/frontend
 npm i
 ## 启动前端资源 watch 进程
 npm run watch-front
 ```

 访问 http://127.0.0.1:16001/api_design 查看修改效果

 开发完成后需要执行 `npm run build-front` 构建前端资源，并将 `packages/frontend/_site` 目录下的改动提交上来。