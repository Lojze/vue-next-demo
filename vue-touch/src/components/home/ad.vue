<template>
  <div>
    <div class="ad-mian p30">
      <a href="">
        <img src="@/assets/download.jpg" alt="" />
      </a>
    </div>
    <!-- ad-2 -->
    <div class="ad-tabs p30">
      <a href="">
        <img src="@/assets/ad01.png" alt="" />
      </a>
      <a href="">
        <img src="@/assets/ad02.jpg" alt="" />
      </a>
      <a href="">
        <img src="@/assets/ad03.jpg" alt="" />
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ad-mian {
  margin-bottom: px(30);
  a {
    display: block;
    img {
      display: block;
      width: 100%;
      border-radius: px(15);
    }
  }
}
.ad-tabs {
  display: flex;
  justify-content: space-between;
  margin-bottom: px(50);

  a {
    display: block;
    width: px(216);
    height: px(136);
    border-radius: px(15);
    img {
      display: block;
      width: 100%;
      border-radius: px(15);
    }
  }
}
</style>
