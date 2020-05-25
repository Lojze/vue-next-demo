<template>
  <div class="main" @scroll="onscroll">
    <search :opacity="opacity" />
    <slider />
    <tabs />
    <ad />
    <!-- 当地热门/周边景点 -->
    <div class="sights-main p30">
      <div class="sights-tabs">
        <div class="item">
          <h3>当地热门</h3>
          <em></em>
        </div>
      </div>
      <div class="sights-list">
        <a href="" v-for="(item, index) in list" :key="index">
          <item />
        </a>
      </div>
    </div>
    <!-- 查看更多 -->
    <div class="move">查看更多</div>

    <!-- 登录 -->
    <login :isOpen.sync="isOpenInfo" />
  </div>
</template>

<script>
import { search, slider, tabs, ad, item, login } from "@/components/home";
export default {
  name: "home",
  data() {
    return {
      list: new Array(10),
      opacity: 0,
      isOpenInfo: true,
    };
  },
  components: {
    search,
    slider,
    tabs,
    ad,
    item,
    login,
  },
  methods: {
    onscroll(e) {
      let H = e.srcElement.children[1].clientHeight;
      this.opacity =
        1 - (H - e.target.scrollTop) / H > 1
          ? 1
          : 1 - (H - e.target.scrollTop) / H;
      this.isOpenInfo = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.main {
  width: px(750);
  margin: auto;
  height: 100%;
  overflow-y: scroll;
  .sights-main {
    .sights-tabs {
      margin-bottom: px(30);
      .item {
        h3 {
          font-size: px(36);
        }
      }
    }
  }
  .sights-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    a {
      display: block;
      width: px(336);
      height: px(354);
      margin-bottom: px(20);
    }
  }
  .move {
    text-align: center;
    font-size: px(24);
    font-weight: 400;
    line-height: px(55);
    color: #999;
    margin-bottom: px(20);
  }
}
</style>
