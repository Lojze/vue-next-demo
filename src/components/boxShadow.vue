<template>
  <div class="demo">
    <div class="l">
      <h1>效果设置区域</h1>
      <div class="item">
        <h3>阴影1</h3>
        <ul class="box">
          <li v-for="(item, index) in list" :key="index">
            <table>{{item.name}}</table>
            <input type="text" v-model="item.value" :maxNum='item.maxNum' :minNum='item.minNum'>
            <em>px</em>
            <input type="range" :min='item.minNum' v-model='item.value' :max='item.maxNum' @focus="setRange(index)" :oninput="OnInput"/>
          </li>
        </ul>
        <div class="color">
            <label>阴影颜色</label>
            <input type="color" @change="setcolor">
        </div>
        <div class="inset">
            <label>内阴影</label>
            <input type="checkbox" name="" id="" @change="setInset">
        </div>
      </div>
    </div>
    <div class="r">
        <div>
            <p>效果预览区</p>
            <div :style="styleObject">
                CSS3 Box Shadow阴影在线编辑器。
                box-shadow:阴影水平偏移值（可取正负值）；
                阴影垂直偏移值（可取正负值）；
                阴影模糊值；阴影颜色。
                box-shadow:{{styleObject.boxShadow}}
            </div>
        </div>
        <details>
            <summary>显示代码</summary>
            boxShadow:<div v-html="styleObject.boxShadow"></div>
        </details>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  name: 'boxShadow',
  setup () {
    const state = reactive({
      list: [{
        value: 0,
        maxNum: 10,
        minNum: -10,
        name: '水平位移：'
      }, {
        value: 0,
        maxNum: 10,
        minNum: -10,
        name: '垂直位移：'
      }, {
        value: 0,
        maxNum: 20,
        minNum: 0,
        name: '模糊半径：'
      }, {
        value: 0,
        maxNum: 10,
        minNum: -10,
        name: '阴影尺寸：'
      }],
      key: '',
      styleObject: {
        boxShadow: '0px 0px 0px 0px #333333'
      }
    })
    function setcolor (event) {
      setDate(event, 'setcolor')
    }

    function setRange (index) {
      state.key = index
    }

    function OnInput (event) {
      setDate(event, 'OnInput')
    }

    function setInset (event) {
      if (event.target.checked) {
        state.styleObject.boxShadow += ' inset'
      } else {
        state.styleObject.boxShadow = state.styleObject.boxShadow.replace(' inset', '')
      }
    }
    /**
     * @param {Object} event element
     * @param {Style} style eventInfo
     * @param {Boolean} inset
     */
    function setDate (event, style, inset) {
      const cArray = state.styleObject.boxShadow.split(' ')
      if (style === 'OnInput') {
        cArray[state.key] = `${event.target.value}px`
      } else if (style === 'setcolor') {
        cArray[cArray.length - 1] = event.target.value
      }
      state.styleObject.boxShadow = cArray.join(' ')
    }

    return { ...toRefs(state), setcolor, setRange, OnInput, setInset }
  },
  components: {

  }
}
</script>
<style lang="scss">

</style>
