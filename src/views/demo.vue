<template>
  <div class="demo">
    <navMenu />
    <div class="l">
      <h1>效果设置区域</h1>
      <div class="item">
        <h3>阴影1</h3>
        <ul class="box">
          <li>
            <table>水平位移：</table>
            <input type="text" v-model="value" :maxNum='maxNum' :minNum='minNum'>
            <em>px</em>
            <input type="range" min='-10' v-model='value' max='10' />
          </li>
        </ul>
      </div>
    </div>
    <div class="r"></div>
  </div>
</template>

<script>
import { reactive, toRefs, watchEffect } from 'vue'
import navMenu from '@/components/navMenu'
export default {
  name: 'demo',
  setup () {
    const state = reactive({
      value: 0,
      maxNum: 10,
      minNum: -10
    })
    console.log(state.value, 'state.value')
    // watch(() => state.value, (count, prevCount) => {
    //   console.log(count)
    // })
    watchEffect(() => console.log(state.value))
    // // 观察对象
    // const { value } = toRefs(state)

    // effect(() => {
    //   console.log(value)
    // })
    return { ...toRefs(state) }
  },
  components: {
    navMenu
  }
}
</script>
<style lang="scss">

</style>
