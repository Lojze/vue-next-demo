# vue-next-demo

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

```
第一点： 创建模板的方式 使用 Vue.createComponent

第二点: 创建 vue 实例 使用 Vue.createApp

第三点： 初始化变量 Vue.setup()

第四点：响应式变量赋值 ref, reactive

第五点：props 属性

第五点：组件生命周期函数
```


```
beforeCreate -> 请使用 setup()
created -> 请使用 setup()
beforeMount -> onBeforeMount
mounted -> onMounted
beforeUpdate -> onBeforeUpdate
updated -> onUpdated
beforeDestroy -> onBeforeUnmount
destroyed -> onUnmounted
errorCaptured -> onErrorCaptured
```

vue3.0中
ref 跟 reactive 有啥区别？
答：
```
没啥区别，一个是声明变量，一个声明对象，兼容个人习惯不同
import { ref } form 'vue'
const x = ref(0);
const y = ref(1);

x.value++
y.value++

import { reactive } form 'vue'
const count = reactive({x: 0,y: 0})

count.x++
count.y++
```

- [ ] 记录 swiper 效果
- [x] 记录 boxShadow 效果
- [ ] 记录 gif 转换 svg
- [ ] 记录 各种css3 特效