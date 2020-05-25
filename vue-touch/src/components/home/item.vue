<template>
  <div class="item">
    <div class="box-top">
      <div class="t-title">北京<i></i>河流湖泊</div>
      <img
        src="//pic5.40017.cn/01/000/4a/c1/rBLkBlqhBQWAM7FOAALXN1I-moQ795_336x230_00.jpg"
        alt=""
      />
      <div class="t-text t-title">北京<i></i>河流湖泊</div>
    </div>
    <div class="middle">
      <div class="title">
        <span class="t">金海湖风景区</span>
        <span class="icon">5A</span>
      </div>
      <p class="money">
        <em class="red">￥</em>
        <b class="red price">32</b>
        <span>起</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "item",
};
</script>
<style lang="scss" scoped>
.item {
  border-radius: px(15);
  background: #fff;
  border: px(1) solid #f0f0f0;
  width: 100%;
  .box-top {
    position: relative;
    width: 100%;
    .t-title {
      position: absolute;
      left: 0;
      top: 0;
      background: $alpha;
      color: #fff;
      border-top-left-radius: px(15);
      border-bottom-right-radius: px(15);
      padding: 0 px(10);
      line-height: 1.5;
      font-size: px(20);
      i {
        display: inline-block;
        width: px(1);
        height: px(16);
        margin: 0 px(10);
        background: #fff;
      }
    }
    img {
      display: block;
      width: 100%;
      border-top-left-radius: px(15);
      border-top-right-radius: px(15);
    }
    .t-text {
      position: absolute;
      top: auto;
      background: none;
      left: 0;
      bottom: 0;
      color: #fff;
      margin-left: px(20);
      line-height: px(50);
    }
  }
  .middle {
    padding: px(20) px(20) px(10);
    .title {
      display: flex;
      align-items: center;
      margin-bottom: px(10);
      .t {
        font-size: 0.28rem;
        color: #333;
        font-weight: bold;
        text-overflow: ellipsis;
        white-space: nowrap;
        display: block;
        // width: 100%;
        overflow: hidden;
        margin-right: px(2);
      }
      .icon {
        display: inline-block;
        color: #fff;
        font-weight: bold;
        text-align: center;
        border-radius: px(4);
        width: px(50);
        height: px(28);
        line-height: px(28);
        background: linear-gradient(270deg, #ad8b51, #e8bf70 98%);
        flex: none;
      }
    }
    .money {
      display: flex;
      font-size: px(20);
      color: #999;
      align-items: baseline;
      .red {
        color: #ed6c52;
      }
      .price {
        font-size: px(36);
        margin: 0 px(5);
      }
      span {
        color: #999;
      }
    }
  }
}
</style>
