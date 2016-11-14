### 用 vue1.x 重写的 [cnodejs](https://cnodejs.org)
##使用
```
起步
npm init

开发
npm run dev

发布
npm run build
```
## 项目结构（感谢[vue-vueRouter-webpack](https://cnodejs.org)提供的脚手架）
```
│  .gitignore          # 忽略文件,比如 node_modules
│  package.json        # 项目配置
│  README.md           # 项目说明
│  index.html          # 首页
├─ webpack.base.config.js         # webpack 基础配置
├─ webpack.dev.config.js          # webpack 开发配置
├─ webpack.prod.config.js         # webpack 生产配置
├─node_modules
├─dist                 # 打包完的文件会自动放在这里
└─src
    ├─ main.js         # 启动配置
    ├─ router.js       # 路由配置
    ├─components       # 组件
    │       └─ app.vue # 入口组件,内含路由和公共部分
    ├─views            # 视图(即路由)
    ├─directives       # 自定义指令
    ├─filters          # 自定义过滤器
    ├─config           # 放置一些配置文件
    ├─libs             # 放置一些工具函数
    ├─images           # 放置图片
    ├─styles           # 放置css
    │    ├─ common.css # 通用css
    │    └─ reset.css  # 页面初始化css
    ├─fonts            # 放置iconfont字体
    └─template         # 放置html模板,webpack依赖此文件生成所需的html
         └─ index.ejs # 默认的html模板
```
