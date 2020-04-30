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
            <input type="text">
            <em>px</em>
            <input type="range" min="0" max="100" value="70"/>
          </li>
        </ul>
      </div>
    </div>
    <div class="r"></div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import navMenu from '@/components/navMenu'
export default {
  name: 'demo',
  setup () {
    reactive({
      value: 0
    })
  },
  components: {
    navMenu
  }
}
</script>
<style lang="scss">
// .demo {
//   display: flex;
//   h1 {
//     line-height: 1.5;
//     background: #ccc;
//     font-size: 20px;
//   }
// }
</style>
