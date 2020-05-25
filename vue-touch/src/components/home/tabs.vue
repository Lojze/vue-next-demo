<template>
  <div class="tabs">
    <a href="">
      <img src="@/assets/icon01.png" alt="" />
      <p>全部景点</p>
    </a>
    <a href="">
      <img src="@/assets/icon02.png" alt="" />
      <p>特价门票</p>
    </a>
    <a href="">
      <img src="@/assets/icon03.png" alt="" />
      <p>今日票</p>
    </a>
    <a href="">
      <img src="@/assets/icon04.png" alt="" />
      <p>土著最爱</p>
    </a>
  </div>
</template>

<script>


</script>

<style lang="scss" scoped>
.tabs {
  background: $fff;
  position: relative;
  z-index: 5;
  border-top-left-radius: px(20);
  border-top-right-radius: px(20);
  display: flex;
  justify-content: space-around;
  padding: px(30);
  a {
    display: block;

    img {
      display: block;
      width: px(120);
      height: px(120);
    }
    p {
      text-align: center;
    }
  }
}
</style>
