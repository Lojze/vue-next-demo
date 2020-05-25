<template>
  <!-- 搜索 -->
  <div class="search" :style="scrollingStyle">
    <div :class="['l', opacity > 0.5 && 'bg']">
      <img src="@/assets/search-icon.png" alt="" />
      <span>景点/城市/关键词</span>
    </div>
    <div :class="['r', opacity > 0.5 && 'active-text']">
      <span>北京</span>
      <img :src="opacity > 0.5 ? src_back : src" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["opacity"],
  data() {
    return {
      scrollingStyle: {},
      src: require("@/assets/san.png"),
      src_back: require("@/assets/icon_arrow_down.png"),
    };
  },
  watch: {
    opacity() {
      this.scrollingStyle = {
        background: `rgba(255,255,255,${this.opacity})`,
        "box-shadow": `0px 10px 10px 0px rgba(0, 0, 0, ${this.opacity / 10})`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.search {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  padding: px(20) 0;
  display: flex;
  justify-content: center;
  width: 100%;
  height: px(104);
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.5), transparent);
  color: #b2b2b2;
  font-size: px(28);
  .l {
    flex: 1;
    margin: 0 px(25) 0 px(60);
    border-radius: px(32);
    background: $fff;
    display: flex;
    align-items: center;
    img {
      display: block;
      width: px(44);
      height: px(44);
      margin: 0 px(15) 0 px(10);
    }
    span {
      flex: 1;
      height: 100%;
      line-height: px(64);
    }
  }
  .bg {
    transition:0.3s;
    background: rgb(237, 240, 245);
  }
  .active-text {
    span {
      color: #333;
      transition:0.3s;
    }
    img {
      transition:0.3s;
    }
  }
  .r {
    margin-right: px(10);
    font-weight: bold;
    color: #fff;
    display: flex;
    align-items: center;
    span {
      font-size: px(32);
    }
    img {
      display: block;
      width: px(24);
      height: px(24);
    }
  }
}
</style>
