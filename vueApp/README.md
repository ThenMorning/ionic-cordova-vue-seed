# hmap-hr-vue

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm start

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build(build-prod) --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## 配置说明

1. 通用全局api配置写在config里的env文件里。根据不同环境调用不同接口
2. 调用接口ajax 封装再fetch.js 里，在getData.js 里配置不同的接口调用方法
3. src文件夹设置别名为@ ，引用路径直接 @/** 即可
4. 路由设置了懒加载 const Hello = () => import(/* webpackChunkName: "hello_model" */'@/components/Hello.vue'); (webpack > 2.4)
5. 推荐使用 yarn 代替npm 来管理依赖。 可以锁定版本。多人协作环境不会有差异
6. npm run build --report 可用来分析界面构成，寻找项目优化点
6. 已集成vux 开箱即用



For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
