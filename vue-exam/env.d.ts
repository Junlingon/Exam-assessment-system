// 导入vite内置的一些通用类型定义
/// <reference types="vite/client" />


// 简单版本
// declare module '*.vue'

// 推荐使用
declare module '*.vue' {
    // 引入vue模块中ts的方法
    import type { DefineComponent } from 'vue'
    // 定义vue组件以及类型注解
    const component: DefineComponent<{}, {}, any>
    export default component
}

declare module 'vue-router' 
